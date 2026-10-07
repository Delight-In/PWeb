import { jsPDF } from 'jspdf';
import { LOGO_BASE64 } from '../assets/logoBase64';

/**
 * Generates and downloads the official PrishiTech Solutions 2026 Enterprise Capability Statement.
 * Formatted with executive letterhead branding, official company logo, consultative prose,
 * and verified industrial benchmarks.
 */
export function generateAndDownloadCapabilityPdf(userName?: string, userCompany?: string): void {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Color Palette
    const cSlate900 = [15, 23, 42];     // Primary brand slate
    const cSlate800 = [30, 41, 59];     // Secondary dark slate
    const cSlate700 = [51, 65, 85];     // Dark body & headers
    const cSlate600 = [71, 85, 105];    // Regular body text
    const cSlate500 = [100, 116, 139];  // Subheaders & secondary labels
    const cSlate400 = [148, 163, 184];  // Muted caption labels
    const cEmerald900 = [6, 78, 59];    // Deep forest emerald
    const cEmerald800 = [6, 95, 70];    // Deep emerald
    const cEmerald700 = [4, 120, 87];   // Dark emerald
    const cEmerald600 = [5, 150, 105];  // Primary emerald accent
    const cEmerald50 = [240, 253, 244]; // Tinted emerald background
    const cEmeraldBorder = [167, 243, 208]; // Light emerald border
    const cGray50 = [248, 250, 252];    // Card background
    const cGray100 = [241, 245, 249];   // Pill background
    const cGray200 = [226, 232, 240];   // Border line
    const cWhite = [255, 255, 255];

    // Helper: Professional Letterhead Header with Logo
    const drawLetterheadHeader = (_pageNum: number, _totalPages: number, subheaderText: string) => {
      // Top accent stripe
      doc.setFillColor(cSlate900[0], cSlate900[1], cSlate900[2]);
      doc.rect(0, 0, 210, 3, 'F');
      doc.setFillColor(cEmerald600[0], cEmerald600[1], cEmerald600[2]);
      doc.rect(0, 3, 210, 1, 'F');

      // Official Company Logo on left
      if (LOGO_BASE64) {
        doc.addImage(LOGO_BASE64, 'PNG', 16, 7, 33, 12);
      } else {
        doc.setTextColor(cSlate900[0], cSlate900[1], cSlate900[2]);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13);
        doc.text('PRISHITECH SOLUTIONS', 16, 15);
      }

      // Right-aligned corporate division & consortium credentials
      doc.setTextColor(cSlate900[0], cSlate900[1], cSlate900[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      const r1 = 'PRISHITECH SOLUTIONS';
      doc.text(r1, 194 - doc.getTextWidth(r1), 11);

      doc.setTextColor(cSlate500[0], cSlate500[1], cSlate500[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      const r2 = subheaderText || 'Resource Intelligence & Industrial Digital Transformation';
      doc.text(r2, 194 - doc.getTextWidth(r2), 15);

      doc.setTextColor(cEmerald700[0], cEmerald700[1], cEmerald700[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7);
      const r3 = 'A TRIAXIS Consortium Strategic Partner · Certified Advisory';
      doc.text(r3, 194 - doc.getTextWidth(r3), 19);

      // Elegant separator rule
      doc.setDrawColor(cGray200[0], cGray200[1], cGray200[2]);
      doc.setLineWidth(0.4);
      doc.line(16, 23, 194, 23);

      doc.setDrawColor(cEmerald600[0], cEmerald600[1], cEmerald600[2]);
      doc.setLineWidth(0.8);
      doc.line(16, 23, 50, 23);
    };

    // Helper: Section Header with left accent indicator
    const drawSectionHeader = (numberAndTitle: string, yPos: number) => {
      doc.setFillColor(cEmerald600[0], cEmerald600[1], cEmerald600[2]);
      doc.roundedRect(16, yPos - 3.8, 2.5, 4.8, 0.5, 0.5, 'F');

      doc.setTextColor(cSlate900[0], cSlate900[1], cSlate900[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.8);
      doc.text(numberAndTitle, 21.5, yPos);
    };

    // Helper: Page Footer
    const drawFooter = (pageNum: number, totalPages: number, confidentialNote = '') => {
      doc.setDrawColor(cGray200[0], cGray200[1], cGray200[2]);
      doc.setLineWidth(0.3);
      doc.line(16, 280, 194, 280);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(cSlate400[0], cSlate400[1], cSlate400[2]);
      doc.text('Prishitech Solutions · Official Enterprise Capability Statement (2026)', 16, 285);
      const rightText = `Page ${pageNum} of ${totalPages}${confidentialNote ? ` · ${confidentialNote}` : ''}`;
      doc.text(rightText, 194 - doc.getTextWidth(rightText), 285);
    };

    // =========================================================================
    // PAGE 1: COVER, EXECUTIVE OVERVIEW & RESOURCE INTELLIGENCE PRACTICE
    // =========================================================================
    drawLetterheadHeader(1, 2, 'Resource Intelligence & Industrial Digital Transformation');

    // Document Title Block
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(cEmerald700[0], cEmerald700[1], cEmerald700[2]);
    doc.text('ENTERPRISE CAPABILITY STATEMENT · 2026 TECHNICAL PROSPECTUS', 16, 29);

    doc.setTextColor(cSlate900[0], cSlate900[1], cSlate900[2]);
    doc.setFontSize(15);
    doc.text('Industrial Resource Intelligence & Digital Infrastructure', 16, 35);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(cSlate600[0], cSlate600[1], cSlate600[2]);
    doc.text('Unified Utility Telemetry, Operational Cybersecurity & TRIAXIS Consortium Architecture', 16, 40);

    // Document Issuance & Control Metadata Card
    doc.setFillColor(cGray50[0], cGray50[1], cGray50[2]);
    doc.setDrawColor(cGray200[0], cGray200[1], cGray200[2]);
    doc.setLineWidth(0.4);
    doc.roundedRect(16, 43.5, 178, 19, 1.2, 1.2, 'FD');

    doc.setFillColor(cSlate900[0], cSlate900[1], cSlate900[2]);
    doc.rect(16, 43.5, 2.5, 19, 'F');

    // Row 1: Issued To & Doc Ref
    doc.setTextColor(cSlate400[0], cSlate400[1], cSlate400[2]);
    doc.setFontSize(6.8);
    doc.setFont('helvetica', 'bold');
    doc.text('ISSUED TO / CLIENT:', 22, 49.5);

    doc.setTextColor(cSlate900[0], cSlate900[1], cSlate900[2]);
    doc.setFontSize(8);
    const formattedClient = `${userName || 'Enterprise Partner'}${userCompany ? ` · ${userCompany}` : ''}`.trim();
    doc.text(formattedClient, 50, 49.5);

    doc.setTextColor(cSlate400[0], cSlate400[1], cSlate400[2]);
    doc.setFontSize(6.8);
    doc.setFont('helvetica', 'bold');
    doc.text('DOCUMENT REF:', 136, 49.5);
    doc.setTextColor(cSlate900[0], cSlate900[1], cSlate900[2]);
    doc.text('PTS-CAP-2026/V3', 161, 49.5);

    // Row 2: Registered Hub & Status
    doc.setTextColor(cSlate400[0], cSlate400[1], cSlate400[2]);
    doc.setFontSize(6.8);
    doc.setFont('helvetica', 'bold');
    doc.text('REGISTERED HUB:', 22, 56.5);

    doc.setTextColor(cSlate700[0], cSlate700[1], cSlate700[2]);
    doc.setFontSize(7.2);
    doc.setFont('helvetica', 'normal');
    doc.text('5A 45/46, Cloud-9, Sector-1, Vaishali, Ghaziabad, UP 201019', 50, 56.5);

    doc.setTextColor(cSlate400[0], cSlate400[1], cSlate400[2]);
    doc.setFontSize(6.8);
    doc.setFont('helvetica', 'bold');
    doc.text('CLASSIFICATION:', 136, 56.5);
    doc.setTextColor(cEmerald700[0], cEmerald700[1], cEmerald700[2]);
    doc.text('Commercial Briefing', 161, 56.5);

    // Section 1: Executive Overview & Strategic Mission
    drawSectionHeader('1. Executive Overview & Strategic Mission', 69);

    // Executive Overview Highlight Box
    doc.setFillColor(cWhite[0], cWhite[1], cWhite[2]);
    doc.setDrawColor(cGray200[0], cGray200[1], cGray200[2]);
    doc.setLineWidth(0.4);
    doc.roundedRect(16, 72, 178, 21, 1.2, 1.2, 'FD');

    doc.setFillColor(cSlate800[0], cSlate800[1], cSlate800[2]);
    doc.rect(16, 72, 2.5, 21, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.6);
    doc.setTextColor(cSlate700[0], cSlate700[1], cSlate700[2]);
    const execText = 
      "Prishitech Solutions delivers mission-critical resource intelligence and industrial digital transformation architectures for manufacturing plants, commercial infrastructure, and utility-intensive enterprises. Operating in unified alliance with the TRIAXIS Consortium—integrating certified energy auditors, chartered electrical consultants, and HVAC thermodynamic specialists—we bridge the structural divide between shop-floor physical telemetry (OT) and enterprise cloud analytics (IT). Our vendor-agnostic architecture guarantees statutory compliance with Bureau of Energy Efficiency (BEE) mandates, verifiable utility conservation, and rapid capital payback under a unified SLA.";
    const execLines = doc.splitTextToSize(execText, 170);
    doc.text(execLines, 21.5, 77);

    // Section 2: Unified Resource Intelligence Platform — Practice Pillars
    drawSectionHeader('2. Unified Resource Intelligence Platform — Core Practice Pillars', 99);

    const pillars = [
      {
        num: '01',
        title: 'Energy Management & High-Precision Sub-Metering',
        tag: 'BEE & POWER QUALITY',
        desc: 'High-frequency feeder monitoring capturing active/reactive power, harmonics (THD), and voltage unbalance. Real-time power factor optimization eliminates DISCOM penalties, while automated peak-demand curtailment and baseline regression ensure compliance with Energy Conservation Act regulations.'
      },
      {
        num: '02',
        title: 'Continuous Water Telemetry & Acoustic Leak Diagnostics',
        tag: 'MASS-BALANCE & WATER',
        desc: 'Source-to-tap flow instrumentation spanning borehole abstraction, municipal intake, and recycled lines. Automated mass-balance divergence algorithms and acoustic sensors isolate distribution losses and pipe ruptures within 15 minutes, preventing Non-Revenue Water (NRW) loss.'
      },
      {
        num: '03',
        title: 'Industrial Gas, Steam & Pressure Optimization',
        tag: 'DIFFERENTIAL PRESSURE',
        desc: 'Real-time telemetry across LPG, PNG, and specialty industrial gases. Differential pressure transmitters trigger predictive refill notifications, eliminate safety over-pressurization risks, and calculate thermal steam-loss gradients across header distribution mains.'
      },
      {
        num: '04',
        title: 'Chiller Plant & HVAC Thermodynamic Performance (COP Telemetry)',
        tag: 'THERMODYNAMIC COP',
        desc: 'Continuous Coefficient of Performance (COP) logging, chilled-water delta-T analytics, and condenser approach temperature diagnostics. Automated vibration and thermal health indexing protects centrifugal and screw chillers from catastrophic downtime.'
      },
      {
        num: '05',
        title: 'Accredited Energy Advisory & Statutory Compliance Audits',
        tag: 'ISO 50001 & AUDITS',
        desc: 'Certified Bureau of Energy Efficiency (BEE) audits, investment-grade techno-commercial feasibility studies, and ISO 50001 EnPI development. We deliver verified payback models that de-risk capital retrofits for variable-frequency drives (VFDs) and high-efficiency compressors.'
      }
    ];

    let curY1 = 104;
    pillars.forEach((p, idx) => {
      doc.setFillColor(idx % 2 === 0 ? cGray50[0] : cWhite[0], idx % 2 === 0 ? cGray50[1] : cWhite[1], idx % 2 === 0 ? cGray50[2] : cWhite[2]);
      doc.setDrawColor(cGray200[0], cGray200[1], cGray200[2]);
      doc.setLineWidth(0.3);
      doc.roundedRect(16, curY1, 178, 18, 1, 1, 'FD');

      // Number chip
      doc.setFillColor(cEmerald50[0], cEmerald50[1], cEmerald50[2]);
      doc.setDrawColor(cEmeraldBorder[0], cEmeraldBorder[1], cEmeraldBorder[2]);
      doc.setLineWidth(0.3);
      doc.roundedRect(19, curY1 + 2.5, 7.5, 4.5, 0.8, 0.8, 'FD');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.5);
      doc.setTextColor(cEmerald700[0], cEmerald700[1], cEmerald700[2]);
      doc.text(p.num, 20.5, curY1 + 5.8);

      // Pillar Title
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.2);
      doc.setTextColor(cSlate900[0], cSlate900[1], cSlate900[2]);
      doc.text(p.title, 29, curY1 + 5.8);

      // Category Tag on right
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6);
      doc.setTextColor(cEmerald700[0], cEmerald700[1], cEmerald700[2]);
      const tagW = doc.getTextWidth(p.tag) + 4;
      doc.setFillColor(cEmerald50[0], cEmerald50[1], cEmerald50[2]);
      doc.setDrawColor(cEmeraldBorder[0], cEmeraldBorder[1], cEmeraldBorder[2]);
      doc.roundedRect(191 - tagW, curY1 + 2.5, tagW, 4.5, 0.8, 0.8, 'FD');
      doc.text(p.tag, 193 - tagW, curY1 + 5.6);

      // Description text
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.2);
      doc.setTextColor(cSlate600[0], cSlate600[1], cSlate600[2]);
      const descLines = doc.splitTextToSize(p.desc, 170);
      doc.text(descLines, 19, curY1 + 10.8);

      curY1 += 19.5;
    });

    // Statutory Compliance & Regulatory Frameworks Matrix on Page 1 (Height 70mm, ZERO OVERFLOW)
    doc.setFillColor(cGray50[0], cGray50[1], cGray50[2]);
    doc.setDrawColor(cGray200[0], cGray200[1], cGray200[2]);
    doc.setLineWidth(0.4);
    doc.roundedRect(16, 204, 178, 70, 1.2, 1.2, 'FD');

    doc.setFillColor(cEmerald600[0], cEmerald600[1], cEmerald600[2]);
    doc.rect(16, 204, 2.5, 70, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.6);
    doc.setTextColor(cEmerald800[0], cEmerald800[1], cEmerald800[2]);
    doc.text('STATUTORY STANDARDS, CERTIFICATIONS & COMPLIANCE BENCHMARKS', 22, 210.5);

    const stdSpecs = [
      {
        title: 'BEE & ECA 2001 Statutory Compliance',
        desc: 'Accredited Energy Audits under Energy Conservation Act regulations. Automated generation of Form-1 and Form-2 compliance documentation, specific energy consumption (SEC) benchmarking, and Perform, Achieve and Trade (PAT) scheme verification.'
      },
      {
        title: 'ISO 50001:2018 Energy Management Systems',
        desc: 'Built-in multivariable linear regression for Energy Baselines (EnB) and Energy Performance Indicators (EnPIs). Continuous telemetry provides tamper-evident audit trails for external certification bodies.'
      },
      {
        title: 'Central Ground Water Authority (CGWA) Mandates',
        desc: 'Statutory borehole abstraction telemetry, digital flowmeter calibration records, and automated piezometric depth recording with secure cloud retention.'
      },
      {
        title: 'IEC 62443 Industrial Cybersecurity & 24/7 OT Operations SLA',
        desc: 'Purdue model network segregation with DMZ isolation. Consortium-backed rapid technical dispatch with 24/7 remote supervisory telemetry guaranteeing 99.95% system uptime.'
      }
    ];

    let specY = 216;
    stdSpecs.forEach((s) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.2);
      doc.setTextColor(cSlate900[0], cSlate900[1], cSlate900[2]);
      doc.text(`• ${s.title}:`, 22, specY);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.8);
      doc.setTextColor(cSlate600[0], cSlate600[1], cSlate600[2]);
      const sLines = doc.splitTextToSize(s.desc, 168);
      doc.text(sLines, 22, specY + 3.8);

      specY += 3.8 + (sLines.length * 3.2) + 2.2;
    });

    // Footer Page 1
    drawFooter(1, 2, 'Confidential Prospectus');

    // =========================================================================
    // PAGE 2: IT SERVICES, CONSORTIUM ADVANTAGE & BENCHMARKS
    // =========================================================================
    doc.addPage();
    drawLetterheadHeader(2, 2, 'IT Services & Consortium Architecture');

    // Section 3: IT Services & Industrial Digital Transformation Practice
    drawSectionHeader('3. IT Services & Industrial Digital Transformation Practice', 28.5);

    const itServices = [
      {
        num: '01',
        title: 'Edge Telemetry & Industrial IoT Gateway Engineering',
        tag: 'EDGE PROTOCOLS',
        desc: 'Turnkey deployment of ruggedized multi-protocol edge gateways supporting Modbus RTU/TCP, BACnet IP, MQTT, LoRaWAN, and OPC-UA. Hardware optical isolation and non-volatile ring-buffering guarantee zero telemetry loss during plant network disruptions.'
      },
      {
        num: '02',
        title: 'Hybrid Industrial Cloud & Resilient Infrastructure',
        tag: 'CLOUD & K8S',
        desc: 'High-availability architectures deployed across AWS, Azure, GCP, or sovereign on-premise industrial private clouds. Containerized with Docker and Kubernetes, featuring automated disaster recovery and sub-second failover protocols.'
      },
      {
        num: '03',
        title: 'Operational Technology (OT) & ICS Defense (IEC 62443 Aligned)',
        tag: 'PERA / OT DEFENSE',
        desc: 'Rigorous Purdue Enterprise Reference Architecture (PERA) network segmentation. Air-gapped demilitarized zone (DMZ) isolation, role-based access control (RBAC), and continuous vulnerability assessments protect SCADA and PLC control networks.'
      },
      {
        num: '04',
        title: 'Time-Series Big Data & Operational Intelligence',
        tag: 'STREAM ANALYTICS',
        desc: 'Distributed stream-processing pipelines ingesting millions of telemetry data points per day. Machine learning algorithms benchmark asset wear, detect anomalous consumption surges, and deliver real-time C-suite executive performance dashboards.'
      },
      {
        num: '05',
        title: 'Autonomous Closed-Loop Process Optimization',
        tag: 'CLOSED-LOOP AI',
        desc: 'Supervised and reinforcement learning models that forecast peak-tariff intervals, optimize central chiller staging, and trigger autonomous demand-response load-shedding relays without human latency.'
      }
    ];

    let curY2 = 33.5;
    itServices.forEach((s, idx) => {
      doc.setFillColor(idx % 2 === 0 ? cGray50[0] : cWhite[0], idx % 2 === 0 ? cGray50[1] : cWhite[1], idx % 2 === 0 ? cGray50[2] : cWhite[2]);
      doc.setDrawColor(cGray200[0], cGray200[1], cGray200[2]);
      doc.setLineWidth(0.3);
      doc.roundedRect(16, curY2, 178, 14, 1, 1, 'FD');

      // Number chip
      doc.setFillColor(cGray100[0], cGray100[1], cGray100[2]);
      doc.roundedRect(19, curY2 + 2.2, 7, 4.2, 0.8, 0.8, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.4);
      doc.setTextColor(cSlate700[0], cSlate700[1], cSlate700[2]);
      doc.text(s.num, 20.3, curY2 + 5.2);

      // Title
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(cSlate900[0], cSlate900[1], cSlate900[2]);
      doc.text(s.title, 28, curY2 + 5.3);

      // Tag
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6);
      doc.setTextColor(cEmerald700[0], cEmerald700[1], cEmerald700[2]);
      const tagW = doc.getTextWidth(s.tag) + 4;
      doc.setFillColor(cEmerald50[0], cEmerald50[1], cEmerald50[2]);
      doc.setDrawColor(cEmeraldBorder[0], cEmeraldBorder[1], cEmeraldBorder[2]);
      doc.roundedRect(191 - tagW, curY2 + 2.2, tagW, 4.2, 0.8, 0.8, 'FD');
      doc.text(s.tag, 193 - tagW, curY2 + 5.2);

      // Description text
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.1);
      doc.setTextColor(cSlate600[0], cSlate600[1], cSlate600[2]);
      const splitDesc = doc.splitTextToSize(s.desc, 170);
      doc.text(splitDesc, 19, curY2 + 9.8);

      curY2 += 15.2;
    });

    // Section 4: The TRIAXIS Consortium Delivery Advantage
    curY2 += 1.5;
    drawSectionHeader('4. The TRIAXIS Consortium Delivery Advantage', curY2);

    curY2 += 4;
    doc.setFillColor(cGray50[0], cGray50[1], cGray50[2]);
    doc.setDrawColor(cGray200[0], cGray200[1], cGray200[2]);
    doc.setLineWidth(0.4);
    doc.roundedRect(16, curY2, 178, 23.5, 1.2, 1.2, 'FD');

    doc.setFillColor(cSlate900[0], cSlate900[1], cSlate900[2]);
    doc.rect(16, curY2, 2.5, 23.5, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(cSlate700[0], cSlate700[1], cSlate700[2]);
    const triaxisText = 
      "Facility modernization programs commonly suffer from a fundamental industry divide: enterprise software vendors lack electrical power engineering and thermodynamic depth, while traditional HVAC and electrical contractors lack modern cloud infrastructure and OT cybersecurity capabilities.\n\nThe TRIAXIS Consortium eliminates this friction. Prishitech's software intelligence bench operates alongside certified energy auditing engineers, chartered electrical consultants, and HVAC thermodynamic specialists. Enterprise clients receive a single accountable contract, unified service-level agreements, and guaranteed reductions in utility expenditure.";
    const triaxisLines = doc.splitTextToSize(triaxisText, 170);
    doc.text(triaxisLines, 21.5, curY2 + 5.2);

    curY2 += 27.5;

    // Section 5: Key Enterprise Performance Benchmarks Table
    drawSectionHeader('5. Key Enterprise Performance Benchmarks', curY2);

    curY2 += 4;
    const tableStartY = curY2;
    const benchmarks = [
      { metric: 'Average Electrical Energy Reduction', value: '12% to 22% Net Cost Reduction', method: 'Feeder baseline regression in first 90 days', highlight: true },
      { metric: 'Distribution Water Leak Response', value: 'Identified & Flagged in < 15 Minutes', method: 'Automated mass-balance acoustic sensors', highlight: false },
      { metric: 'Central Chiller COP Improvement', value: '+8% to +15% Thermodynamic COP Gain', method: 'Continuous delta-T & kW/TR telemetry', highlight: true },
      { metric: 'Statutory BEE & Energy Compliance', value: '100% Adherence to BEE & CEA Mandates', method: 'Form-1/2 audited filings & ISO 50001 logs', highlight: false },
      { metric: 'Capital Deployment Payback Period', value: '4 to 9 Months Verified ROI', method: 'Net utility savings & penalty elimination', highlight: true }
    ];

    // Table Outer Box
    doc.setFillColor(cWhite[0], cWhite[1], cWhite[2]);
    doc.setDrawColor(cGray200[0], cGray200[1], cGray200[2]);
    doc.setLineWidth(0.4);
    doc.roundedRect(16, tableStartY, 178, 41, 1.2, 1.2, 'FD');

    // Table Header Row
    doc.setFillColor(cSlate900[0], cSlate900[1], cSlate900[2]);
    doc.rect(16, tableStartY, 178, 6.8, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(cWhite[0], cWhite[1], cWhite[2]);
    doc.text('PERFORMANCE METRIC / AUDIT TARGET', 21, tableStartY + 4.6);
    doc.text('VERIFIED INDUSTRIAL BENCHMARK', 93, tableStartY + 4.6);
    doc.text('AUDIT METHODOLOGY', 146, tableStartY + 4.6);

    let rowY = tableStartY + 6.8;
    benchmarks.forEach((b, idx) => {
      if (idx % 2 === 1) {
        doc.setFillColor(cGray50[0], cGray50[1], cGray50[2]);
        doc.rect(16, rowY, 178, 6.8, 'F');
      }

      if (idx > 0) {
        doc.setDrawColor(cGray200[0], cGray200[1], cGray200[2]);
        doc.setLineWidth(0.2);
        doc.line(16, rowY, 194, rowY);
      }

      // Metric
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.4);
      doc.setTextColor(cSlate700[0], cSlate700[1], cSlate700[2]);
      doc.text(b.metric, 21, rowY + 4.6);

      // Value
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.4);
      if (b.highlight) {
        doc.setTextColor(cEmerald700[0], cEmerald700[1], cEmerald700[2]);
      } else {
        doc.setTextColor(cSlate900[0], cSlate900[1], cSlate900[2]);
      }
      doc.text(b.value, 93, rowY + 4.6);

      // Method
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.7);
      doc.setTextColor(cSlate500[0], cSlate500[1], cSlate500[2]);
      doc.text(b.method, 146, rowY + 4.6);

      rowY += 6.8;
    });

    curY2 = rowY + 5;

    // Section 6: Initiate an Architecture Consultation Card
    doc.setFillColor(cEmerald50[0], cEmerald50[1], cEmerald50[2]);
    doc.setDrawColor(cEmeraldBorder[0], cEmeraldBorder[1], cEmeraldBorder[2]);
    doc.setLineWidth(0.5);
    doc.roundedRect(16, curY2, 178, 41, 1.2, 1.2, 'FD');

    // Left solid emerald stripe
    doc.setFillColor(cEmerald600[0], cEmerald600[1], cEmerald600[2]);
    doc.rect(16, curY2, 3, 41, 'F');

    // Card Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(cEmerald900[0], cEmerald900[1], cEmerald900[2]);
    doc.text('Initiate an Architecture Consultation & Facility Walkthrough', 22.5, curY2 + 6.2);

    // Subtitle
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(cSlate600[0], cSlate600[1], cSlate600[2]);
    doc.text('Our senior solutions architects and consortium partners are available for on-site facility audits and live telemetry demonstrations.', 22.5, curY2 + 11);

    // Contact specifications in clean aligned grid
    const contactItems = [
      { label: 'Engineering Headquarters:', val: '5A 45/46, Cloud-9, Sector-1, Vaishali, Ghaziabad, UP 201019, India' },
      { label: 'Direct Switchboard:', val: '+91 120 456 7890 | Direct WhatsApp / Cell: +91 98100 12345' },
      { label: 'Enterprise Advisory:', val: 'contact@prishitech.com | Official Web Portal: https://www.prishitech.com' },
      { label: 'Response Guarantee:', val: 'Technical briefing & preliminary facility audit scheduled within 4 business hours' }
    ];

    let contactY = curY2 + 17.2;
    contactItems.forEach((c) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.2);
      doc.setTextColor(cSlate900[0], cSlate900[1], cSlate900[2]);
      doc.text(c.label, 22.5, contactY);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.2);
      doc.setTextColor(cSlate700[0], cSlate700[1], cSlate700[2]);
      doc.text(c.val, 60, contactY);

      contactY += 5;
    });

    // Footer Page 2
    drawFooter(2, 2, 'Confidential Document');

    // Save and trigger download in browser
    doc.save('Prishitech-Solutions-Capability-Statement-2026.pdf');
  } catch (err) {
    console.error('Dynamic PDF generation error, downloading static PDF fallback:', err);
    const link = document.createElement('a');
    link.href = '/Prishitech-Solutions-Capability-Statement-2026.pdf?v=2026.3';
    link.setAttribute('download', 'Prishitech-Solutions-Capability-Statement-2026.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
