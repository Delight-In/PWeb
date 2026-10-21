const fs = require('fs');

const content = fs.readFileSync('src/data/litmusPlatformData.ts', 'utf8');

// Find all matches for "litmus"
const lines = content.split('\n');
const litmusMatches = [];
lines.forEach((line, i) => {
  if (/litmus/i.test(line)) {
    litmusMatches.push({ lineNum: i + 1, text: line.trim() });
  }
});

console.log('Total lines containing litmus:', litmusMatches.length);
litmusMatches.forEach(m => {
  console.log(`L${m.lineNum}: ${m.text.substring(0, 140)}`);
});
