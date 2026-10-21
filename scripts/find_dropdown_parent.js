import fs from 'fs';

const html = fs.readFileSync('scripts/litmus_industrial-data-foundation.html', 'utf8');

let pos = 0;
while ((pos = html.indexOf('"$20"', pos)) !== -1) {
  console.log('Found "$20" at', pos);
  console.log(html.slice(Math.max(0, pos - 400), pos + 400));
  pos += 5;
}
