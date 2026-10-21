const fs = require('fs');

let content = fs.readFileSync('src/data/platformData.ts', 'utf8');

// Remove externalUrl lines pointing to litmus.io
content = content.replace(/\s*externalUrl:\s*'https:\/\/litmus\.io\/[^']+',/g, '');

// Also check if any 'litmus' remains in platformData.ts
const remaining = [];
content.split('\n').forEach((line, i) => {
  if (/litmus/i.test(line)) {
    remaining.push({ line: i + 1, text: line.trim() });
  }
});

console.log('Remaining litmus in platformData.ts:', remaining);

fs.writeFileSync('src/data/platformData.ts', content, 'utf8');
console.log('Updated platformData.ts cleanly.');
