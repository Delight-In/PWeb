import fs from 'fs';

function cleanText(str) {
  if (!str) return '';
  return str.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').trim();
}

function extractCtfUrl(raw) {
  if (!raw) return '';
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch (e) {}
  const match = decoded.match(/https:\/\/images\.ctfassets\.net\/[^\s&"'()><\\]+/);
  return match ? match[0] : '';
}

const pages = [
  { id: 'industrial-data-foundation', file: 'scripts/litmus_industrial-data-foundation.html', badge: 'INDUSTRIAL DATA FOUNDATION' },
  { id: 'data-connectivity', file: 'scripts/litmus_data-connectivity.html', badge: 'DATA CONNECTIVITY' },
  { id: 'industrial-dataops', file: 'scripts/litmus_industrial-dataops.html', badge: 'INDUSTRIAL DATAOPS' },
  { id: 'edge-intelligence', file: 'scripts/litmus_edge-intelligence.html', badge: 'EDGE INTELLIGENCE' },
  { id: 'data-security', file: 'scripts/litmus_data-security.html', badge: 'DATA SECURITY' },
  { id: 'data-governance', file: 'scripts/litmus_data-governance.html', badge: 'DATA GOVERNANCE' },
  { id: 'central-management', file: 'scripts/litmus_central-management.html', badge: 'CENTRAL MANAGEMENT' }
];

// Fallback high-res screenshots for each page's capability if ctfassets image is missing
const layerImagesForFoundation = [
  'https://images.ctfassets.net/7xdd0wzmxlfo/6g1EIkt4L9DhHxXqofzwhM/6c13e468f81896e1240d9e891c715274/litmus_data_connectivity_-_native_connectors.png',
  'https://images.ctfassets.net/7xdd0wzmxlfo/1V3lYLUyjJ9WhxTShh0ZPZ/f29b347e856093ab9cd88b355b0d6cf5/litmus_data_ops_-_data_contextualization.png',
  'https://images.ctfassets.net/7xdd0wzmxlfo/3295U3fO0H1y8O8u7g9VqR/333556241a2a06fa76bdf24537fd69fa/litmus_edge_intelligence_-_edge_apps.png',
  'https://images.ctfassets.net/7xdd0wzmxlfo/61tU03sZ3r7oY9qJ3n3q8g/a470eaacf5467af96fd1906d90d37067/litmus_data_security_-_airgapped_network.png',
  'https://images.ctfassets.net/7xdd0wzmxlfo/1K6B66G62p0wY0b2k5q4s1/6fb616f3308f22e1c3e1d3bb9b0f1f04/litmus_data_governance_-_policy_control.png',
  'https://images.ctfassets.net/7xdd0wzmxlfo/2mK19F1Y7q6W4k4u9w5g1k/bc70127984b1350f9cc3b8d286fbee57/litmus_central_management_-_device_management.png'
];

const allData = {};

for (const p of pages) {
  if (!fs.existsSync(p.file)) {
    console.error(`Not found: ${p.file}`);
    continue;
  }
  const html = fs.readFileSync(p.file, 'utf8');

  // FAQs and Metadata from JSON-LD
  let faqs = [];
  let metaDescription = '';
  let metaTitle = '';

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch) metaTitle = cleanText(titleMatch[1]);

  const descMatch = html.match(/<meta name="description" content="([^"]+)"/i);
  if (descMatch) metaDescription = cleanText(descMatch[1]);

  const jsonLdMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  for (const match of jsonLdMatches) {
    try {
      const data = JSON.parse(match[1]);
      const graph = data['@graph'] || [data];
      for (const item of graph) {
        if (item['@type'] === 'FAQPage' && item.mainEntity) {
          faqs = item.mainEntity.map(q => ({
            question: cleanText(q.name),
            answer: cleanText(q.acceptedAnswer?.text || '')
          }));
        }
      }
    } catch (e) {}
  }

  // 1. Hero
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? cleanText(h1Match[1]) : '';

  const heroDescMatch = html.match(/class="[^"]*text-pLargeOverride[^"]*"[^>]*>([\s\S]*?)<\/p>/i)
    || html.match(/class="[^"]*text-header-subtext-dark[^"]*"[^>]*><p[^>]*>([\s\S]*?)<\/p>/i);
  const heroDescription = heroDescMatch ? cleanText(heroDescMatch[1]) : '';

  // Hero image
  let heroImage = '';
  const heroImgMatch = html.match(/https:\/\/images\.ctfassets\.net\/[^\s"'()><\\]+hero[^\s"'()><\\]+/i);
  if (heroImgMatch) {
    heroImage = heroImgMatch[0];
  }

  // 2. Overview / Diagram
  const headingLargeMatches = [...html.matchAll(/<h3[^>]*class="[^"]*heading-large[^"]*"[^>]*>([\s\S]*?)<\/h3>/gi)];
  let overviewTitle = '';
  let overviewDesc = '';
  let diagramImage = '';

  if (headingLargeMatches.length > 0) {
    overviewTitle = cleanText(headingLargeMatches[0][1]);
    const overviewSection = html.slice(html.indexOf(headingLargeMatches[0][0]), html.indexOf(headingLargeMatches[0][0]) + 1500);
    const pMatch = overviewSection.match(/<p[^>]*class="[^"]*text-pMediumOverride[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
    if (pMatch) overviewDesc = cleanText(pMatch[1]);
  }

  const diagMatch = html.match(/https:\/\/images\.ctfassets\.net\/[^\s"'()><\\]+(?:main_diagram|architecture|diagram)[^\s"'()><\\]+/i);
  if (diagMatch) {
    diagramImage = diagMatch[0];
  }

  // 3. Capabilities
  const capabilities = [];
  const chunks = html.split(/<h3 class="[^"]*heading-medium[^"]*">/i);

  for (let i = 1; i < chunks.length; i++) {
    const chunk = chunks[i];
    const titleEnd = chunk.indexOf('</h3>');
    const title = cleanText(chunk.slice(0, titleEnd));

    // Look backwards for eyebrow in chunks[i-1]
    const prev = chunks[i - 1];
    const eyebrowMatch = prev.match(/<p class="eyebrow-default[^"]*"[^>]*>([^<]+)<\/p>[^<]*$/i)
      || prev.match(/<p class="eyebrow-default[^"]*"[^>]*>([\s\S]*?)<\/p>/gi);
    let eyebrow = '';
    if (Array.isArray(eyebrowMatch)) {
      const last = eyebrowMatch[eyebrowMatch.length - 1];
      eyebrow = cleanText(last);
    } else if (eyebrowMatch) {
      eyebrow = cleanText(eyebrowMatch[1]);
    }

    const blockChunk = chunk.slice(titleEnd + 5, titleEnd + 5000);
    const descMatch = blockChunk.match(/<p[^>]*class="[^"]*text-pSmallOverride[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
    let desc = descMatch ? cleanText(descMatch[1]).replace(/Key features:/gi, '').trim() : '';
    if (!desc) {
      const pMatch = blockChunk.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
      if (pMatch) desc = cleanText(pMatch[1]).replace(/Key features:/gi, '').trim();
    }

    // Bullets
    const bulletMatches = [...blockChunk.matchAll(/<span[^>]*>([^<]+)<\/span>\s*<\/li>/gi)];
    const bullets = bulletMatches.map(m => cleanText(m[1])).filter(b => b.length > 5);

    // Link
    const linkMatch = blockChunk.match(/<a[^>]+href="([^"]+)"[^>]*>[\s\S]*?<button[^>]*>([\s\S]*?)<\/button>/i);
    const linkUrl = linkMatch ? linkMatch[1] : '';
    const linkText = linkMatch ? cleanText(linkMatch[2]) : 'Learn more';

    // Image
    let imgUrl = extractCtfUrl(blockChunk);
    if (!imgUrl && p.id === 'industrial-data-foundation' && layerImagesForFoundation[i - 1]) {
      imgUrl = layerImagesForFoundation[i - 1];
    }

    capabilities.push({
      id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      eyebrow: eyebrow || `CAPABILITY ${i}`,
      title,
      description: desc,
      bullets,
      image: imgUrl,
      linkText: linkText || 'Learn more',
      linkUrl
    });
  }

  // 4. Why Matters Section
  let whyMatters = null;
  const whyMatch = html.match(/<h3 class="[^"]*heading-large[^"]*"[^>]*>(Why [^<]+matters[\s\S]*?)<\/h3>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<ul/i);
  if (whyMatch) {
    const whyTitle = cleanText(whyMatch[1]);
    const whyDescMatch = whyMatch[2].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    const whyDesc = whyDescMatch ? cleanText(whyDescMatch[1]) : '';

    const whySectionIdx = html.indexOf(whyMatch[0]);
    const whySection = html.slice(whySectionIdx, whySectionIdx + 4500);
    const itemMatches = [...whySection.matchAll(/<div id="([^"]+)"[\s\S]*?<p class="text-pSmallOverride[^"]*">([\s\S]*?)<\/p>[\s\S]*?<img[^>]+src="([^">]+)"/gi)];
    const items = itemMatches.map(m => ({
      title: cleanText(m[2]),
      icon: extractCtfUrl(m[3])
    }));

    whyMatters = {
      title: whyTitle,
      description: whyDesc,
      items
    };
  }

  // 5. Systems Integration
  let systems = null;
  const sysMatch = html.match(/<h3 class="[^"]*heading-large[^"]*"[^>]*>(Built for [^<]+)[\s\S]*?<\/h3>([\s\S]*?)<div class="relative overflow-hidden[^"]*">([\s\S]*?)<\/div>/i);
  if (sysMatch) {
    const title = cleanText(sysMatch[1]);
    const pMatch = sysMatch[2].match(/<p[^>]*class="[^"]*text-pMediumOverride[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
    const desc = pMatch ? cleanText(pMatch[1]) : '';
    const img = extractCtfUrl(sysMatch[3]);
    systems = { title, description: desc, image: img };
  }

  // 6. Bottom CTA
  const ctaMatch = html.match(/<h3 class="[^"]*text-litmus-white heading-large[^"]*"[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)<\/div>/i)
    || html.match(/<ul role="list" id=" ([^"]+)" class="grid grid-cols-1 mx-auto max-w-7xl"><li><div class="relative isolate[\s\S]*?<h3 class="[^"]*heading-large[^"]*"[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)<\/div>/i);
  
  let bottomCta = {
    title: 'The Data Foundation That Scales Industrial AI',
    description: 'Talk to our team to see how Litmus simplifies connectivity, DataOps, and edge AI.',
    primaryCtaText: 'Book a demo ->',
    secondaryCtaText: 'Try Litmus Edge for free'
  };
  if (ctaMatch) {
    const title = cleanText(ctaMatch[1]);
    const descMatch = ctaMatch[2].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    const desc = descMatch ? cleanText(descMatch[1]) : '';
    if (title) bottomCta.title = title;
    if (desc) bottomCta.description = desc;
  }

  allData[p.id] = {
    id: p.id,
    slug: p.id,
    badge: p.badge,
    metaTitle: metaTitle || `${h1} | Litmus`,
    metaDescription: metaDescription || heroDescription,
    hero: {
      badge: p.badge,
      title: h1,
      subtitle: heroDescription,
      primaryCtaText: 'Book a demo ->',
      secondaryCtaText: 'Try Litmus Edge for free',
      image: heroImage
    },
    overview: {
      title: overviewTitle,
      description: overviewDesc,
      diagramImage
    },
    capabilities,
    whyMatters,
    systems,
    faqs,
    bottomCta
  };
}

// Generate TypeScript code
const tsCode = `// Generated Litmus Platform Data
export interface LitmusHero {
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  image: string;
}

export interface LitmusOverview {
  title: string;
  description: string;
  diagramImage: string;
}

export interface LitmusCapability {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  linkText?: string;
  linkUrl?: string;
}

export interface LitmusWhyMattersItem {
  title: string;
  icon: string;
}

export interface LitmusWhyMatters {
  title: string;
  description: string;
  items: LitmusWhyMattersItem[];
}

export interface LitmusSystems {
  title: string;
  description: string;
  image: string;
}

export interface LitmusFaq {
  question: string;
  answer: string;
}

export interface LitmusBottomCta {
  title: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

export interface LitmusPageData {
  id: string;
  slug: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  hero: LitmusHero;
  overview: LitmusOverview;
  capabilities: LitmusCapability[];
  whyMatters?: LitmusWhyMatters | null;
  systems?: LitmusSystems | null;
  faqs: LitmusFaq[];
  bottomCta: LitmusBottomCta;
}

export const LITMUS_PLATFORM_PAGES: Record<string, LitmusPageData> = ${JSON.stringify(allData, null, 2)};

export const LITMUS_LOGOS = [
  { name: 'Philips', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/7jg1D2nmKCOOKsW9xVHR0E/ef0bc3c24aefc9049ebdf993114eaf19/logo_salad_-_philips.svg' },
  { name: 'JLR', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/OEgV6FjvCrJVU5d8SUBhq/9aa604c91d9856ccd174bd1a52ff9dfc/logo_salad_-_jlr.svg' },
  { name: 'SLB', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/36AyEgULyOpDBSK42wfz7x/e7ef8135b5af98c357f29727636dabcb/logo_salad_-_slb.svg' },
  { name: 'Pfeifer & Langen', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/4yEpkik6qmv9fNR32u0ecG/7935af6547000870632b970b204d65b8/logo_salad_-_pfeifer_langen.svg' },
  { name: 'Parker', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/3Qt28EVGadRPAoCIikJJRC/22767db45869f464093de611297c2050/logo_salad_-_parker.svg' },
  { name: 'NatureFresh', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/3TGkZxPOwejLKxIZW2CBLQ/7f38db534bc6db270c8c51dd04dc216c/logo_salad_-_naturefresh.svg' },
  { name: 'Microsoft', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/8gGxhR4vFYegF1Uxzukbw/1c4b5e7a2ba0c648d1ea6baf2799d7ab/logo_salad_-_microsoft.svg' },
  { name: 'Google Cloud', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/3A1ZtyYU3jMUcZgV81qyN0/e9382aa8b87ddf633f1cd812d23f0834/logo_salad_-_google_cloud.svg' },
  { name: 'AWS', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/6H5yhHQjFdQTab9AH8tJTu/45a27d1f93cfbd38d933a13fbe76968e/logo_salad_-_aws.svg' },
  { name: 'Databricks', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/5Az8Hj8BeJh9QMHRqIveyG/f64a5fcbb5a054e4e3a67998cbd24e09/logo_salad_-_databricks.svg' },
  { name: 'Oracle', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/2XAfjyCzcn5NFgXTUAhbiX/3af51a5bb257652935dc1c2d9365ef9d/logo_salad_-_oracle.svg' },
  { name: 'Dell', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/4j04gbmudNJ4PFiPxmggF0/c0d6a90d831bca91457f190243f353eb/logo_salad_-_dell.svg' }
];

export const LITMUS_CASE_STUDIES = [
  {
    stat: '95 sites deployed in 18 weeks',
    description: 'standardized industrial data architecture',
    image: 'https://images.ctfassets.net/7xdd0wzmxlfo/4fS0BZr1vMG8nXQMfIWcjT/c0f6ed95f5c96538e4dd7b41b8029249/Testimonial_Block_-_beer.png',
    alt: 'Food & Beverage Bottling'
  },
  {
    stat: '$3M/month savings',
    description: 'optimized packing and volume tracking',
    image: 'https://images.ctfassets.net/7xdd0wzmxlfo/7FdfBJlG2MY7vxm5TjdtAU/f127115445228737cb5ac351cb74cb48/Testimonial_Block_-_naturefresh.png',
    alt: 'Nature Fresh Farms'
  },
  {
    stat: 'Predictive maintenance at scale',
    description: 'Real-time equipment monitoring across sites',
    image: 'https://images.ctfassets.net/7xdd0wzmxlfo/2bTuoBdOSY1S0L3SFx6q2F/2197d2765a43b95c56ef9b3f743ad955/Testimonial_Block_-_jlr.png',
    alt: 'Jaguar Land Rover'
  },
  {
    stat: 'Reduced plant downtime',
    description: 'Real-time monitoring and corrective action',
    image: 'https://images.ctfassets.net/7xdd0wzmxlfo/1beFqsX6KouLB5gf0D6MZa/e6f50e69c3e9b470646980e2e6577494/Testimonial_Block_-_eid_parry.png',
    alt: 'Manufacturing Plant Operations'
  }
];
`;

fs.writeFileSync('src/data/litmusPlatformData.ts', tsCode, 'utf8');
console.log('Successfully written src/data/litmusPlatformData.ts');
