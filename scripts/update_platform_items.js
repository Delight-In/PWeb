import fs from 'fs';

let content = fs.readFileSync('src/data/platformData.ts', 'utf8');

const items = [
  'industrial-data-foundation',
  'data-connectivity',
  'industrial-dataops',
  'edge-intelligence',
  'data-security',
  'data-governance',
  'central-management'
];

for (const id of items) {
  content = content.replace(
    new RegExp(`id: '${id}',\\s*name: '([^']+)',\\s*tagline: '([^']+)',\\s*path: '([^']+)',\\s*externalUrl: '[^']+'`, 'g'),
    `id: '${id}',\n    name: '$1',\n    tagline: '$2',\n    path: '$3',\n    externalUrl: 'https://litmus.io/${id}',\n    iconUrl: '/icons/platform/${id}.svg'`
  );
}

fs.writeFileSync('src/data/platformData.ts', content, 'utf8');
console.log('Updated platformData.ts with iconUrl and externalUrl');
