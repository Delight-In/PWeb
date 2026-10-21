import fs from 'fs';

const pages = [
  'industrial-dataops',
  'edge-intelligence',
  'data-security',
  'data-governance',
  'central-management'
];

const results = {};

for (const p of pages) {
  const content = fs.readFileSync(`scripts/litmus_${p}.html`, 'utf8');
  const jsonLdMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  let jsonLd = null;
  if (jsonLdMatch) {
    try {
      jsonLd = JSON.parse(jsonLdMatch[1]);
    } catch(e) {}
  }
  
  // Extract all ctfassets image urls
  const imgRegex = /https:\/\/images\.ctfassets\.net\/[^\s"'()><\\]+/g;
  const images = [...new Set(content.match(imgRegex) || [])];

  results[p] = {
    jsonLd,
    images: images.filter(img => !img.includes('logo_salad') && !img.includes('Asset_') && !img.includes('Testimonial_Block'))
  };
}

fs.writeFileSync('scripts/parsed_litmus.json', JSON.stringify(results, null, 2), 'utf8');
console.log('Saved parsed_litmus.json');
