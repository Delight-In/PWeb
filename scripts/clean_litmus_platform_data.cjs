const fs = require('fs');

let content = fs.readFileSync('src/data/litmusPlatformData.ts', 'utf8');

// Replace in text content (not in http URLs)
// We will replace specific phrases first, then general patterns
const textReplacements = [
  // Titles and meta
  [/ \| Litmus Industrial Data Foundation for AI \| Litmus/g, ' | PrishiTech Industrial Data Platform'],
  [/ \| Litmus Industrial Data Foundation for AI/g, ' | PrishiTech Industrial Data Platform'],
  [/ \| Litmus/g, ' | PrishiTech'],
  [/Enable analytics, automation, and Industrial AI with Litmus\./g, 'Enable analytics, automation, and Industrial AI with PrishiTech.'],
  [/Industrial AI with Litmus\./g, 'Industrial AI with PrishiTech.'],
  [/and Industrial AI with Litmus/g, 'and Industrial AI with PrishiTech'],
  [/Litmus enables/g, 'PrishiTech enables'],
  [/Litmus is the/g, 'PrishiTech is the'],
  [/Litmus is/g, 'PrishiTech is'],
  [/Litmus brings/g, 'PrishiTech brings'],
  [/Litmus provides/g, 'PrishiTech provides'],
  [/Litmus connects/g, 'PrishiTech connects'],
  [/Litmus integrates/g, 'Our platform integrates'],
  [/Litmus helps/g, 'PrishiTech helps'],
  [/Litmus simplifies/g, 'PrishiTech simplifies'],
  [/deploying Litmus/g, 'deploying our platform'],
  [/Try Litmus Edge for free/g, 'Explore Edge Platform'],
  [/Litmus Edge Manager/g, 'Central Edge Manager'],
  [/Litmus Edge/g, 'Edge Engine'],
  [/Litmus Automation/g, 'Edge Automation'],
  [/with Litmus\./g, 'with PrishiTech.'],
  [/with Litmus/g, 'with PrishiTech'],
  [/How does Litmus differ/g, 'How does our platform differ'],
  [/What is Litmus Edge\?/g, 'What is the Edge Engine?'],
  [/How does Litmus ensure/g, 'How does the platform ensure'],
  [/Does Litmus require/g, 'Does the platform require'],
  [/from Litmus\b/g, 'from our platform'],
  [/Why Litmus Matters/g, 'Why This Matters'],
  [/Litmus Industrial Data Foundation/g, 'Industrial Data Platform'],
  [/Litmus/g, 'PrishiTech'] // fallback for any remaining in text
];

// Split by lines to only replace in non-image-url fields or preserve ctfassets.net URLs
const lines = content.split('\n');
const newLines = lines.map(line => {
  // If line contains a ctfassets image URL, preserve the URL
  if (line.includes('https://images.ctfassets.net')) {
    // only replace if there is text outside the URL
    return line;
  }
  
  let updated = line;
  for (const [pattern, replacement] of textReplacements) {
    updated = updated.replace(pattern, replacement);
  }
  return updated;
});

const updatedContent = newLines.join('\n');
fs.writeFileSync('src/data/litmusPlatformData.ts', updatedContent, 'utf8');

// Check remaining occurrences of litmus
const remaining = [];
updatedContent.split('\n').forEach((line, i) => {
  if (/litmus/i.test(line)) {
    // Check if it's only in an image URL
    const hasImageOnly = line.includes('https://images.ctfassets.net') && !line.replace(/https:\/\/[^\"]+/g, '').toLowerCase().includes('litmus');
    if (!hasImageOnly) {
      remaining.push({ line: i + 1, text: line.trim() });
    }
  }
});

console.log('Remaining user-facing occurrences of litmus:', remaining.length);
remaining.forEach(r => console.log(`L${r.line}: ${r.text.substring(0, 100)}`));
