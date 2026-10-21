import fs from 'fs';

const html = fs.readFileSync('scripts/litmus_industrial-data-foundation.html', 'utf8');

const idx = html.indexOf('Enable AI with industrial data');
if (idx !== -1) {
  const start = Math.max(0, idx - 1500);
  const end = Math.min(html.length, idx + 4000);
  const snippet = html.slice(start, end);
  fs.writeFileSync('scripts/dropdown_snippet.txt', snippet, 'utf8');
  console.log('Saved snippet to scripts/dropdown_snippet.txt');
}
