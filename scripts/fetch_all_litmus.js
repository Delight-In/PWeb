import fs from 'fs';

const pages = [
  'industrial-dataops',
  'edge-intelligence',
  'data-security',
  'data-governance',
  'central-management'
];

async function run() {
  for (const p of pages) {
    try {
      console.log(`Fetching https://litmus.io/${p}...`);
      const res = await fetch(`https://litmus.io/${p}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (res.ok) {
        const text = await res.text();
        fs.writeFileSync(`scripts/litmus_${p}.html`, text, 'utf8');
        console.log(`Saved litmus_${p}.html (${text.length} bytes)`);
      } else {
        console.log(`Failed to fetch ${p}: HTTP ${res.status}`);
      }
    } catch (e) {
      console.log(`Error fetching ${p}:`, e.message);
    }
  }
}

run();
