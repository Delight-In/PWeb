import fs from 'fs';

function extract(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /https:\/\/images\.ctfassets\.net\/[^\s"'()><\\]+/g;
  return [...new Set(content.match(regex) || [])];
}

console.log('--- Images from Industrial Data Foundation ---');
console.log(JSON.stringify(extract('C:/Users/priya/.gemini/antigravity/brain/aaea1c1c-79d2-4322-bebd-050a695a2cdc/.system_generated/steps/21/content.md'), null, 2));

console.log('--- Images from Data Connectivity ---');
console.log(JSON.stringify(extract('C:/Users/priya/.gemini/antigravity/brain/aaea1c1c-79d2-4322-bebd-050a695a2cdc/.system_generated/steps/47/content.md'), null, 2));
