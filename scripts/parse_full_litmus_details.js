import fs from 'fs';

const pages = [
  'industrial-data-foundation',
  'data-connectivity',
  'industrial-dataops',
  'edge-intelligence',
  'data-security',
  'data-governance',
  'central-management'
];

const results = {};

function cleanText(str) {
  if (!str) return '';
  return str.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').trim();
}

function extractCtfUrl(raw) {
  if (!raw) return '';
  const decoded = decodeURIComponent(raw);
  const match = decoded.match(/https:\/\/images\.ctfassets\.net\/[^\s&"'()><\\]+/);
  return match ? match[0] : '';
}

for (const p of pages) {
  const filePath = `scripts/litmus_${p}.html`;
  if (!fs.existsSync(filePath)) {
    console.error(`Missing ${filePath}`);
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf8');

  // JSON-LD FAQs
  const jsonLdMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  let faqs = [];
  let metaDescription = '';
  let metaKeywords = [];

  for (const match of jsonLdMatches) {
    try {
      const data = JSON.parse(match[1]);
      const graph = data['@graph'] || [data];
      for (const item of graph) {
        if (item['@type'] === 'FAQPage' && item.mainEntity) {
          faqs = item.mainEntity.map(q => ({
            question: q.name,
            answer: q.acceptedAnswer?.text || ''
          }));
        }
        if (item['@type'] === 'WebPage') {
          metaDescription = item.description || '';
          metaKeywords = item.keywords || [];
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

  // Hero image: look in the first section around h1
  const heroSectionMatch = html.match(/<h1[\s\S]*?<div class="relative overflow-hidden[^"]*">([\s\S]*?)<\/div>\s*<\/div>\s*<\/li>/i);
  let heroImage = '';
  if (heroSectionMatch) {
    heroImage = extractCtfUrl(heroSectionMatch[1]);
  }
  if (!heroImage) {
    const fallbackHero = html.match(/https:\/\/images\.ctfassets\.net\/[^\s"'()><\\]+hero[^\s"'()><\\]+/i);
    if (fallbackHero) heroImage = fallbackHero[0];
  }

  // 2. Overview / Diagram
  // Overview heading is usually the first heading-large
  const headingLargeMatches = [...html.matchAll(/<h3[^>]*class="[^"]*heading-large[^"]*"[^>]*>([\s\S]*?)<\/h3>/gi)];
  let overviewTitle = '';
  let overviewDesc = '';
  let diagramImage = '';

  if (headingLargeMatches.length > 0) {
    overviewTitle = cleanText(headingLargeMatches[0][1]);
    // Find the paragraph next to it
    const overviewSection = html.slice(html.indexOf(headingLargeMatches[0][0]), html.indexOf(headingLargeMatches[0][0]) + 1500);
    const pMatch = overviewSection.match(/<p[^>]*class="[^"]*text-pMediumOverride[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
    if (pMatch) overviewDesc = cleanText(pMatch[1]);
  }

  // Diagram image
  const diagMatch = html.match(/https:\/\/images\.ctfassets\.net\/[^\s"'()><\\]+(?:main_diagram|architecture|diagram)[^\s"'()><\\]+/i);
  if (diagMatch) {
    diagramImage = diagMatch[0];
  }

  // 3. Capabilities / Feature blocks
  // Find all li blocks that contain heading-medium
  const capabilityBlocks = [];
  const liMatches = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];

  for (const li of liMatches) {
    const liContent = li[1];
    if (!liContent.includes('heading-medium')) continue;

    const eyebrowMatch = liContent.match(/<p class="eyebrow-default[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
    const headingMatch = liContent.match(/<h3 class="[^"]*heading-medium[^"]*"[^>]*>([\s\S]*?)<\/h3>/i);
    if (!headingMatch) continue;

    const eyebrow = eyebrowMatch ? cleanText(eyebrowMatch[1]) : '';
    const title = cleanText(headingMatch[1]);

    // Skip if it's not a real capability (e.g. case study at end)
    const pMatch = liContent.match(/<p[^>]*class="[^"]*text-pSmallOverride[^"]*"[^>]*>([\s\S]*?)(?:<strong|<ul|$)/i)
      || liContent.match(/<p[^>]*>([\s\S]*?)(?:<strong|<ul|$)/i);
    const description = pMatch ? cleanText(pMatch[1]).replace(/Key features:/gi, '').trim() : '';

    const bulletMatches = [...liContent.matchAll(/<li[^>]*>[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>\s*<\/li>/gi)];
    const bullets = bulletMatches.map(m => cleanText(m[1]));

    const linkMatch = liContent.match(/<a[^>]+href="([^"]+)"[^>]*>[\s\S]*?<button[^>]*>([\s\S]*?)<\/button>/i);
    const linkUrl = linkMatch ? linkMatch[1] : '';
    const linkText = linkMatch ? cleanText(linkMatch[2]) : '';

    // Image inside this li
    const imgUrl = extractCtfUrl(liContent);

    capabilityBlocks.push({
      eyebrow,
      title,
      description,
      bullets,
      linkText: linkText || 'Learn more',
      linkUrl,
      image: imgUrl
    });
  }

  // 4. "Why ... matters" section (if any)
  let whyMatters = null;
  const whyMatch = html.match(/<h3 class="[^"]*heading-large[^"]*"[^>]*>(Why [^<]+matters[\s\S]*?)<\/h3>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<ul/i);
  if (whyMatch) {
    const whyTitle = cleanText(whyMatch[1]);
    const whyDescMatch = whyMatch[2].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    const whyDesc = whyDescMatch ? cleanText(whyDescMatch[1]) : '';
    
    // items
    const whySectionIdx = html.indexOf(whyMatch[0]);
    const whySection = html.slice(whySectionIdx, whySectionIdx + 4000);
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

  // 5. Systems Integration section ("Built for legacy and modern industrial systems")
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
  const ctaMatch = html.match(/<ul role="list" id=" ([^"]+)" class="grid grid-cols-1 mx-auto max-w-7xl"><li><div class="relative isolate[\s\S]*?<h3 class="[^"]*heading-large[^"]*"[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)<\/div>\s*<\/div>\s*<\/li>/i)
    || html.match(/<h3 class="[^"]*text-litmus-white heading-large[^"]*"[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)<\/div>/i);
  let bottomCta = {
    title: 'Build your industrial data foundation for scale',
    description: 'Talk to our team to see how Litmus simplifies connectivity, DataOps, and edge AI.'
  };
  if (ctaMatch) {
    const title = cleanText(ctaMatch[1]);
    const descMatch = ctaMatch[2].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    const desc = descMatch ? cleanText(descMatch[1]) : '';
    if (title) bottomCta.title = title;
    if (desc) bottomCta.description = desc;
  }

  results[p] = {
    slug: p,
    h1,
    heroDescription,
    heroImage,
    overviewTitle,
    overviewDesc,
    diagramImage,
    capabilities: capabilityBlocks,
    whyMatters,
    systems,
    bottomCta,
    faqs,
    metaDescription,
    metaKeywords
  };
}

fs.writeFileSync('scripts/parsed_full_details.json', JSON.stringify(results, null, 2), 'utf8');
console.log('Finished parsing all details!');
