const fs = require('fs');
const path = require('path');

// 1. Process platform data
let dataContent = fs.readFileSync('src/data/litmusPlatformData.ts', 'utf8');
dataContent = dataContent.replace(/export type Litmus[a-zA-Z]+/g, '');
dataContent = dataContent.replace(/LITMUS_PLATFORM_PAGES/g, 'PLATFORM_PAGES_DATA');
dataContent = dataContent.replace(/LITMUS_LOGOS/g, 'PLATFORM_CLIENT_LOGOS');
dataContent = dataContent.replace(/LITMUS_CASE_STUDIES/g, 'PLATFORM_CASE_STUDIES');

fs.writeFileSync('src/data/platformPagesData.ts', dataContent, 'utf8');
console.log('Created src/data/platformPagesData.ts');

// 2. Process template
let templateContent = fs.readFileSync('src/components/LitmusPlatformPageTemplate.tsx', 'utf8');
templateContent = templateContent.replace(/from '\.\.\/data\/litmusPlatformData'/g, "from '../data/platformPagesData'");
templateContent = templateContent.replace(/LitmusPageData/g, 'PrishiTechPageData');
templateContent = templateContent.replace(/LITMUS_LOGOS/g, 'PLATFORM_CLIENT_LOGOS');
templateContent = templateContent.replace(/LITMUS_CASE_STUDIES/g, 'PLATFORM_CASE_STUDIES');
templateContent = templateContent.replace(/LitmusPlatformPageTemplateProps/g, 'PlatformPageTemplateProps');
templateContent = templateContent.replace(/LitmusPlatformPageTemplate/g, 'PlatformPageTemplate');
templateContent = templateContent.replace(/\{ \/\* Litmus Horizontal Platform Sub-navigation \*\/ \}/g, '{/* Horizontal Platform Sub-navigation */}');
templateContent = templateContent.replace(/Exact Litmus layout/g, 'Modern layout');
templateContent = templateContent.replace(/Litmus exact style/g, 'Action style');

fs.writeFileSync('src/components/PlatformPageTemplate.tsx', templateContent, 'utf8');
console.log('Created src/components/PlatformPageTemplate.tsx');

// 3. Update all 7 page files
const pageFiles = [
  'CentralManagementPage.tsx',
  'DataConnectivityPage.tsx',
  'DataGovernancePage.tsx',
  'DataSecurityPage.tsx',
  'EdgeIntelligencePage.tsx',
  'IndustrialDataFoundationPage.tsx',
  'IndustrialDataOpsPage.tsx'
];

pageFiles.forEach(file => {
  const filePath = path.join('src', 'pages', 'platform', file);
  let pageContent = fs.readFileSync(filePath, 'utf8');
  pageContent = pageContent.replace(/LitmusPlatformPageTemplate/g, 'PlatformPageTemplate');
  pageContent = pageContent.replace(/LITMUS_PLATFORM_PAGES/g, 'PLATFORM_PAGES_DATA');
  pageContent = pageContent.replace(/'\.\.\/\.\.\/components\/LitmusPlatformPageTemplate'/g, "'../../components/PlatformPageTemplate'");
  pageContent = pageContent.replace(/'\.\.\/\.\.\/data\/litmusPlatformData'/g, "'../../data/platformPagesData'");
  fs.writeFileSync(filePath, pageContent, 'utf8');
  console.log('Updated', file);
});

// 4. Remove old files
fs.unlinkSync('src/data/litmusPlatformData.ts');
fs.unlinkSync('src/components/LitmusPlatformPageTemplate.tsx');
console.log('Deleted old files with Litmus in name.');
