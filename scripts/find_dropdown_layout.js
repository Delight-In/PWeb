import fs from 'fs';

const html = fs.readFileSync('scripts/litmus_industrial-data-foundation.html', 'utf8');

const regex = /\["\$20"[^\]]*\]/;
const m = html.match(regex);
if (m) {
  console.log('Array of children containing $20:', m[0]);
  const idx = html.indexOf(m[0]);
  console.log('Surrounding:\n', html.slice(Math.max(0, idx - 600), idx + 200));
} else {
  console.log('No direct match for regex');
}
