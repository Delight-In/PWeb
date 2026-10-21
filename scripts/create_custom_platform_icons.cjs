const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '..', 'public', 'icons', 'platform');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// 1. Industrial Data Foundation: Stacked 3D foundation layers with emerald glow
const foundationSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="10" fill="#F0FDF4" />
  <path d="M24 8L38 15L24 22L10 15L24 8Z" fill="#10B981" fill-opacity="0.2" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 21L24 28L38 21" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 27L24 34L38 27" stroke="#047857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 33L24 40L38 33" stroke="#065F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="24" cy="15" r="3" fill="#10B981"/>
</svg>`;

// 2. Data Connectivity: Interconnected nodes / multi-protocol bridge
const connectivitySvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="10" fill="#F0FDF4" />
  <circle cx="14" cy="16" r="4" fill="#10B981" stroke="#047857" stroke-width="2"/>
  <circle cx="34" cy="16" r="4" fill="#10B981" stroke="#047857" stroke-width="2"/>
  <circle cx="24" cy="34" r="5" fill="#047857" stroke="#065F46" stroke-width="2"/>
  <circle cx="14" cy="34" r="3" fill="#6EE7B7"/>
  <circle cx="34" cy="34" r="3" fill="#6EE7B7"/>
  <path d="M18 16H30" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
  <path d="M16 19.5L21.5 30" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
  <path d="M32 19.5L26.5 30" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
  <path d="M17 34H19M29 34H31" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
</svg>`;

// 3. Industrial DataOps: Data pipeline & transformation workflow
const dataopsSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="10" fill="#F0FDF4" />
  <rect x="10" y="11" width="10" height="10" rx="3" fill="#10B981" stroke="#047857" stroke-width="2"/>
  <rect x="28" y="11" width="10" height="10" rx="3" fill="#10B981" stroke="#047857" stroke-width="2"/>
  <rect x="19" y="27" width="10" height="10" rx="3" fill="#047857" stroke="#065F46" stroke-width="2"/>
  <path d="M20 16H28" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
  <path d="M15 21V24C15 25.1 15.9 26 17 26H19" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
  <path d="M33 21V24C33 25.1 32.1 26 31 26H29" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
  <path d="M24 37V40" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
</svg>`;

// 4. Edge Intelligence: Neural AI chip & compute unit
const edgeIntelligenceSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="10" fill="#F0FDF4" />
  <rect x="14" y="14" width="20" height="20" rx="4" fill="#047857" stroke="#065F46" stroke-width="2"/>
  <circle cx="24" cy="24" r="4" fill="#34D399"/>
  <path d="M24 9V14M24 34V39" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
  <path d="M9 24H14M34 24H39" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
  <path d="M18 9V14M18 34V39" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
  <path d="M30 9V14M30 34V39" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
  <path d="M9 18H14M34 18H39" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
  <path d="M9 30H14M34 30H39" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
</svg>`;

// 5. Data Security: Shield with lock & verified status
const dataSecuritySvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="10" fill="#F0FDF4" />
  <path d="M24 10L36 15V24C36 31.5 30.9 38.3 24 40C17.1 38.3 12 31.5 12 24V15L24 10Z" fill="#10B981" fill-opacity="0.15" stroke="#047857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="20" y="23" width="8" height="7" rx="1.5" fill="#047857"/>
  <path d="M22 23V20.5C22 19.4 22.9 18.5 24 18.5C25.1 18.5 26 19.4 26 20.5V23" stroke="#047857" stroke-width="2" stroke-linecap="round"/>
  <circle cx="24" cy="26.5" r="1" fill="#FFFFFF"/>
</svg>`;

// 6. Data Governance: Balanced compliance scale & policy check
const dataGovernanceSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="10" fill="#F0FDF4" />
  <path d="M24 10V38" stroke="#047857" stroke-width="2" stroke-linecap="round"/>
  <path d="M14 16H34" stroke="#047857" stroke-width="2" stroke-linecap="round"/>
  <path d="M18 38H30" stroke="#047857" stroke-width="2" stroke-linecap="round"/>
  <path d="M14 16L10 26H18L14 16Z" fill="#10B981" fill-opacity="0.3" stroke="#059669" stroke-width="2" stroke-linejoin="round"/>
  <path d="M34 16L30 26H38L34 16Z" fill="#10B981" fill-opacity="0.3" stroke="#059669" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="24" cy="10" r="2.5" fill="#047857"/>
</svg>`;

// 7. Central Management: Orchestration console & distributed node fleet
const centralManagementSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="10" fill="#F0FDF4" />
  <rect x="11" y="11" width="26" height="18" rx="3" fill="#10B981" fill-opacity="0.15" stroke="#047857" stroke-width="2"/>
  <line x1="11" y1="23" x2="37" y2="23" stroke="#047857" stroke-width="1.5"/>
  <circle cx="16" cy="17" r="2" fill="#059669"/>
  <circle cx="22" cy="17" r="2" fill="#059669"/>
  <circle cx="28" cy="17" r="2" fill="#10B981"/>
  <path d="M24 29V35" stroke="#047857" stroke-width="2" stroke-linecap="round"/>
  <path d="M17 37H31" stroke="#047857" stroke-width="2" stroke-linecap="round"/>
</svg>`;

const files = {
  'industrial-data-foundation.svg': foundationSvg,
  'data-connectivity.svg': connectivitySvg,
  'industrial-dataops.svg': dataopsSvg,
  'edge-intelligence.svg': edgeIntelligenceSvg,
  'data-security.svg': dataSecuritySvg,
  'data-governance.svg': dataGovernanceSvg,
  'central-management.svg': centralManagementSvg,
};

for (const [filename, svg] of Object.entries(files)) {
  fs.writeFileSync(path.join(iconsDir, filename), svg, 'utf8');
  console.log('Saved custom icon:', filename);
}
