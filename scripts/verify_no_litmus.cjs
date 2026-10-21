const fs = require('fs');
const path = require('path');

function scan(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist' && f !== 'scripts' && f !== 'temp_inspect') {
        scan(full);
      }
    } else if (/\.(ts|tsx|js|jsx|json|html|css|md|svg)$/.test(f)) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, i) => {
        // Strip out CDN asset URLs so we only check user-facing text and code
        const withoutCdn = line.replace(/https:\/\/[^\"]+/g, '');
        if (/litmus/i.test(withoutCdn)) {
          console.log(`${full}:${i + 1}: ${line.trim().substring(0, 110)}`);
        }
      });
    }
  }
}

console.log('--- Scanning src and public for any litmus text ---');
scan('src');
scan('public');
console.log('--- Scan complete ---');
