import fs from 'fs';

function cleanText(str) {
  if (!str) return '';
  return str.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').trim();
}

function extractCtfUrl(raw) {
  if (!raw) return '';
  const decoded = decodeURIComponent(raw);
  const match = decoded.match(/https:\/\/images\.ctfassets\.net\/[^\s&"'()><\\]+/);
  return match ? match[0] : '';
}

const html = fs.readFileSync('scripts/litmus_data-connectivity.html', 'utf8');

// Split by heading-medium
const chunks = html.split(/<h3 class="[^"]*heading-medium[^"]*">/i);
console.log(`Found ${chunks.length - 1} heading-medium blocks in data-connectivity`);

for (let i = 1; i < chunks.length; i++) {
  const chunk = chunks[i];
  const titleEnd = chunk.indexOf('</h3>');
  const title = cleanText(chunk.slice(0, titleEnd));
  
  // Look backwards for eyebrow in chunks[i-1]
  const prev = chunks[i - 1];
  const eyebrowMatch = prev.match(/<p class="eyebrow-default[^"]*"[^>]*>([^<]+)<\/p>[^<]*$/i)
    || prev.match(/<p class="eyebrow-default[^"]*"[^>]*>([\s\S]*?)<\/p>/gi);
  let eyebrow = '';
  if (Array.isArray(eyebrowMatch)) {
    const last = eyebrowMatch[eyebrowMatch.length - 1];
    eyebrow = cleanText(last);
  } else if (eyebrowMatch) {
    eyebrow = cleanText(eyebrowMatch[1]);
  }

  // Next section or image
  const blockChunk = chunk.slice(titleEnd + 5, titleEnd + 5000);
  const descMatch = blockChunk.match(/<p[^>]*class="[^"]*text-pSmallOverride[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
  const desc = descMatch ? cleanText(descMatch[1]).replace(/Key features:/gi, '').trim() : '';

  // Bullets
  const bulletMatches = [...blockChunk.matchAll(/<span[^>]*>([^<]+)<\/span>\s*<\/li>/gi)];
  const bullets = bulletMatches.map(m => cleanText(m[1]));

  // Image
  const imgUrl = extractCtfUrl(blockChunk);

  console.log(`\n--- Block ${i} ---`);
  console.log(`Eyebrow: ${eyebrow}`);
  console.log(`Title: ${title}`);
  console.log(`Desc: ${desc.slice(0, 80)}...`);
  console.log(`Bullets (${bullets.length}):`, bullets);
  console.log(`Image: ${imgUrl}`);
}
