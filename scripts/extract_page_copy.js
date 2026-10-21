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

const extracted = {};

for (const p of pages) {
  let file = `scripts/litmus_${p}.html`;
  if (p === 'industrial-data-foundation') {
    file = 'C:/Users/priya/.gemini/antigravity/brain/aaea1c1c-79d2-4322-bebd-050a695a2cdc/.system_generated/steps/21/content.md';
  } else if (p === 'data-connectivity') {
    file = 'C:/Users/priya/.gemini/antigravity/brain/aaea1c1c-79d2-4322-bebd-050a695a2cdc/.system_generated/steps/47/content.md';
  }
  
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf8');

  // Extract h1, h3, h4, and paragraphs
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';

  const h3s = [...content.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const ps = [...content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 25);
  const lis = [...content.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 10 && !t.includes('<img'));

  extracted[p] = { h1, h3s, ps: ps.slice(0, 15), lis: lis.slice(0, 25) };
}

fs.writeFileSync('scripts/extracted_copy.json', JSON.stringify(extracted, null, 2), 'utf8');
console.log('Saved extracted_copy.json');
