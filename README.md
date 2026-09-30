# Prishitech Solutions — Official Production Website

> **One Platform. Every Resource. Total Intelligence.**  
> Unifying Energy, Water, Gas and Chiller management into a single resource intelligence platform — backed by end-to-end IT services and digital transformation expertise, as a TRIAXIS Consortium partner.

**Prepared for:** Sanjeev  
**Date:** September 2026  
**Registered Address:** 5A 45/46, Cloud-9, Sector-1, Vaishali, Ghaziabad, Uttar Pradesh 201019, India  
**Contact:** contact@prishitech.com | +91 120 456 7890  

---

## 🚀 Features & Architecture

This production-ready web application is built strictly following the **Website Revamp — Checklist & Content Blueprint**:

1. **Information Architecture (8 Core Blueprint Routes)**:
   - `/` — **Home**: Hero, "Two ways we help you", "Why Prishitech", Live Telemetry Console, ROI Calculator, and TRIAXIS Consortium highlight.
   - `/about` — **About Us**: Company story, "What we believe", TRIAXIS partnership context, and Vaishali (Ghaziabad) registered office details.
   - `/solutions/resource-intelligence` — **Resource Intelligence Platform**: Deep-dive sections for Energy, Water, Gas, Chiller Management, and Energy Advisory with live telemetry gauges and anchor jumps.
   - `/solutions/digital-transformation` — **IT Services & Digital Transformation**: IoT & Remote Monitoring, Cloud & Infrastructure, Cybersecurity & OT Security (Purdue model), Data & Analytics, AI & Process Automation.
   - `/triaxis` — **TRIAXIS Consortium**: Partnership overview, the 3 Axes of Excellence, and comparison against fragmented multi-vendor models.
   - `/industries` — **Industries Served**: Manufacturing & Industrial Plants, Commercial Real Estate, Utilities & Energy Providers, Hospitality & Large Campuses, Government / PSU Facilities.
   - `/insights` — **Insights / Knowledge Hub**: Technical thought leadership articles, category filters, and search bar.
   - `/contact` — **Contact Us**: Lead-routed contact form, direct phone numbers, email, hours, and location briefing.
   - `*` — **404 Not Found**: Accessible navigation fallback.

2. **Interactive Components & Features**:
   - **Live Telemetry Simulator (`TelemetrySimulator.tsx`)**: Real-time simulated OT telemetry streams across electrical load (kW), water flow (kL/hr), gas pressure (kg/cm²), and chiller COP efficiency (with 100ms updates).
   - **ROI & Savings Estimator (`RoiCalculator.tsx`)**: Interactive slider calculator estimating annual savings, ESG carbon offset (Tons CO₂e), and payback period.
   - **Request a Demo Modal (`RequestDemoModal.tsx`)**: Global modal with multi-pillar selection and instant confirmation.
   - **Gated Capability Statement (`CapabilityModal.tsx`)**: Downloadable technical capability statement and architecture prospectus.
   - **SEO & Structured Data**: Dynamic `SeoHead.tsx` managing page titles and meta descriptions per route, `sitemap.xml`, `robots.txt`, and Schema.org `Organization` / `LocalBusiness` JSON-LD markup.
   - **WCAG 2.1 AA Compliance**: High-contrast dark theme palette, keyboard accessible menus, semantic HTML, and ARIA attributes.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript (Strict typing)
- **Bundler & Build Tool**: Vite 8
- **Styling**: Tailwind CSS + Custom Glassmorphism & High-Tech Utilities
- **Icons**: Lucide React
- **Routing**: React Router v7 (`react-router-dom`)

---

## 💻 Development & Production Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized, minified production build in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Options

The build output in `dist/` is completely static and can be deployed anywhere:
- **Vercel**: Run `npx vercel` or connect the Git repository.
- **Netlify**: Drag and drop the `dist/` folder or link the repository with build command `npm run build` and publish directory `dist`.
- **Cloudflare Pages**: Connect Git, set framework preset to `Vite`, build command `npm run build`, and output `dist`.
- **Firebase Hosting**: Run `firebase init hosting` and set public folder to `dist`.
- **Apache / Nginx**: Copy the contents of `dist/` to your web root (e.g. `/var/www/html`) and configure SPA fallback to `index.html`.

---

© 2026 Prishitech Solutions. All rights reserved. A TRIAXIS Consortium Partner.
