import fs from 'fs';

const html = fs.readFileSync('scripts/litmus_industrial-data-foundation.html', 'utf8');

const hrefs = [
  '/industrial-data-foundation',
  '/data-connectivity',
  '/industrial-dataops',
  '/edge-intelligence',
  '/data-security',
  '/data-governance',
  '/central-management'
];

for (const href of hrefs) {
  const idx = html.indexOf(href);
  if (idx !== -1) {
    const chunk = html.slice(Math.max(0, idx - 400), Math.min(html.length, idx + 400));
    console.log(`\n=== HREF: ${href} ===`);
    console.log(chunk);
  } else {
    console.log(`\n=== NOT FOUND: ${href} ===`);
  }
}
