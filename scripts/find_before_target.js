import fs from 'fs';

const html = fs.readFileSync('scripts/litmus_industrial-data-foundation.html', 'utf8');

const target = '20:["$","div","0"';
const idx = html.indexOf(target);
if (idx !== -1) {
  console.log('Found at:', idx);
  console.log('Before 500 chars:\n', html.slice(Math.max(0, idx - 500), idx));
} else {
  console.log('Not found');
}
