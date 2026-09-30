import { jsPDF } from 'jspdf';

export function generateAndDownloadCapabilityPdf(userName?: string, userCompany?: string) {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // PAGE 1: COVER & EXECUTIVE SUMMARY
    // Top Banner Bar
    doc.setFillColor(15, 23, 42); // Slate 900
    doc.rect(0, 0, 210, 24, 'F');

    doc.setFillColor(5, 150, 105); // Emerald 600
    doc.rect(0, 24, 210, 2, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('PRISHITECH SOLUTIONS', 15, 13);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(203, 213, 225);
    doc.text('RESOURCE INTELLIGENCE & DIGITAL TRANSFORMATION · TRIAXIS CONSORTIUM', 15, 19);

    // Document Title
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('Enterprise Capability Statement', 15, 42);

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(5, 150, 105);
    doc.text('Technical Prospectus & Platform Specifications · 2026 Edition', 15, 49);

    // Metadata Card
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(15, 54, 180, 26, 2, 2, 'FD');

    doc.setTextColor(71, 85, 105);
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.text('Prepared For:', 20, 61);
    doc.setFont('helvetica', 'bold');
    const recipient = `${userName || 'Enterprise Partner'} ${userCompany ? `(${userCompany})` : ''}`.trim();
    doc.text(recipient, 48, 61);

    doc.setFont('helvetica', 'normal');
    doc.text('Registered Office:', 20, 67);
    doc.setFont('helvetica', 'bold');
    doc.text('5A 45/46, Cloud-9, Sector-1, Vaishali, Ghaziabad, UP 201019, India', 48, 67);

    doc.setFont('helvetica', 'normal');
    doc.text('Consortium Partner:', 20, 73);
    doc.setFont('helvetica', 'bold');
    doc.text('TRIAXIS Power, HVAC & Certified Energy Advisory Bench', 48, 73);

    // Section 1: Executive Overview
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('1. Executive Overview', 15, 89);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(51, 65, 85);
    const execText = 
      "Prishitech Solutions unifies industrial energy, water, gas, and chiller management into a single resource intelligence platform. Supported by comprehensive end-to-end IT services, cloud infrastructure, and cybersecurity expertise as a TRIAXIS Consortium partner, we eliminate multi-vendor friction by offering a single accountable architecture from physical sensor telemetry to enterprise cloud intelligence.";
    doc.text(doc.splitTextToSize(execText, 180), 15, 96);

    // Section 2: Resource Intelligence Platform Pillars
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('2. Unified Resource Intelligence Platform', 15, 119);

    const pillars = [
      {
        title: '• Energy Management & Sub-Metering:',
        desc: 'High-frequency feeder monitoring, automated peak-load alerts, baseline benchmarking against historical targets, power-factor penalties prevention, and BEE (Bureau of Energy Efficiency) compliance reporting.'
      },
      {
        title: '• Continuous Water Tracking & Acoustic Leak Detection:',
        desc: 'Source-to-tap flow telemetry across borehole, municipal, and recycled lines. Automated mass-balance leak detection algorithms that flag distribution losses within minutes.'
      },
      {
        title: '• Industrial Gas & Pressure Monitoring:',
        desc: 'Live telemetry across LPG, PNG, and industrial gases. Real-time differential pressure tracking with safety threshold alarms and predictive refill scheduling.'
      },
      {
        title: '• Chiller Plant & HVAC Optimization (COP Telemetry):',
        desc: 'Thermodynamic efficiency tracking (Coefficient of Performance), chilled-water flow monitoring, automated condenser fouling warnings, and vibration/thermal health indexing.'
      },
      {
        title: '• Certified Energy Advisory & Statutory Audits:',
        desc: 'Accredited energy audits complying with Energy Conservation Act regulations, ISO 50001 management systems, and payback ROI modeling for high-efficiency retrofits.'
      }
    ];

    let curY = 127;
    pillars.forEach((p) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(5, 150, 105);
      doc.text(p.title, 15, curY);
      curY += 5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      const split = doc.splitTextToSize(p.desc, 175);
      doc.text(split, 20, curY);
      curY += split.length * 4.5 + 3;
    });

    // Footer Page 1
    doc.setDrawColor(226, 232, 240);
    doc.line(15, 280, 195, 280);
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text('Prishitech Solutions · Official Enterprise Capability Statement (2026)', 15, 285);
    doc.text('Page 1 of 2', 180, 285);

    // PAGE 2: IT SERVICES & CONSORTIUM ADVANTAGE
    doc.addPage();

    // Header bar
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 18, 'F');
    doc.setFillColor(5, 150, 105);
    doc.rect(0, 18, 210, 1.5, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('PRISHITECH SOLUTIONS · IT SERVICES & CONSORTIUM ARCHITECTURE', 15, 12);

    // Section 3: IT Services & Digital Transformation
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('3. IT Services & Digital Transformation Portfolio', 15, 30);

    const itServices = [
      {
        title: '• IoT & Operational Remote Monitoring:',
        desc: 'Multi-protocol gateway deployment (Modbus RTU/TCP, BACnet, MQTT, LoRaWAN, OPC-UA). Edge buffering guarantees zero data loss during network disruptions.'
      },
      {
        title: '• Hybrid Cloud & Industrial Infrastructure:',
        desc: 'Enterprise architectures deployed on AWS, Azure, GCP, or on-premise private clouds. Built with Docker, Kubernetes, and automated disaster recovery.'
      },
      {
        title: '• Cybersecurity & OT / ICS Defense (IEC 62443):',
        desc: 'Purdue Enterprise Reference Architecture (PERA) network segmentation. DMZ isolation, role-based access control (RBAC), and continuous SCADA vulnerability assessments.'
      },
      {
        title: '• Big Data, Stream Processing & Operational Analytics:',
        desc: 'High-throughput time-series data pipelines, anomaly detection models, and custom C-suite dashboards aggregating multi-site facility performance.'
      },
      {
        title: '• AI & Autonomous Process Optimization:',
        desc: 'Closed-loop machine learning models that predict peak-load tariffs and autonomously trigger load-shedding relays or chiller setpoint adjustments.'
      }
    ];

    let curY2 = 38;
    itServices.forEach((s) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(s.title, 15, curY2);
      curY2 += 5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      const split = doc.splitTextToSize(s.desc, 175);
      doc.text(split, 20, curY2);
      curY2 += split.length * 4.5 + 3;
    });

    // Section 4: TRIAXIS Consortium Model
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('4. The TRIAXIS Consortium Delivery Advantage', 15, 102);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);
    const triaxisText = 
      "Traditional facility modernization fails because IT software vendors lack electrical power engineering depth, while hardware contractors lack modern cloud and cybersecurity capabilities. The TRIAXIS Consortium bridges this divide. Prishitech's software intelligence bench works alongside certified electrical, HVAC, and energy auditing engineers to guarantee measurable reductions in kilowatt-hours, cubic meters, and operating costs under a single unified SLA.";
    doc.text(doc.splitTextToSize(triaxisText, 180), 15, 109);

    // Summary Metrics Table Box
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(15, 134, 180, 52, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('Key Enterprise Performance Benchmarks', 20, 142);

    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text('• Average Energy Cost Reduction:', 20, 150);
    doc.setFont('helvetica', 'bold');
    doc.text('12% to 22% within first 90 days', 75, 150);

    doc.setFont('helvetica', 'normal');
    doc.text('• Water Leak Detection Response:', 20, 157);
    doc.setFont('helvetica', 'bold');
    doc.text('Identified within 15 minutes of occurrence', 75, 157);

    doc.setFont('helvetica', 'normal');
    doc.text('• Chiller COP Improvement:', 20, 164);
    doc.setFont('helvetica', 'bold');
    doc.text('8% to 15% improvement via predictive optimization', 75, 164);

    doc.setFont('helvetica', 'normal');
    doc.text('• Compliance Certification:', 20, 171);
    doc.setFont('helvetica', 'bold');
    doc.text('100% statutory adherence to BEE & CEA mandates', 75, 171);

    doc.setFont('helvetica', 'normal');
    doc.text('• Typical Payback Period:', 20, 178);
    doc.setFont('helvetica', 'bold');
    doc.text('4 to 9 months on capital hardware deployment', 75, 178);

    // Contact & Architecture Briefing Box
    doc.setFillColor(240, 253, 244); // Light emerald
    doc.setDrawColor(167, 243, 208);
    doc.roundedRect(15, 196, 180, 48, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(6, 95, 70);
    doc.text('Initiate an Architecture Consultation', 20, 205);

    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text('Our enterprise solutions architects are available for on-site facility walkthroughs and live telemetry demonstrations.', 20, 212);

    doc.text('• Engineering Hub: 5A 45/46, Cloud-9, Sector-1, Vaishali, Ghaziabad, UP 201019, India', 20, 220);
    doc.text('• Phone / Switchboard: +91 120 456 7890 | Direct WhatsApp: +91 98100 12345', 20, 226);
    doc.text('• Enterprise Inquiries: contact@prishitech.com | https://www.prishitech.com', 20, 232);
    doc.text('• Response Guarantee: Technical briefing scheduled within 4 business hours', 20, 238);

    // Footer Page 2
    doc.setDrawColor(226, 232, 240);
    doc.line(15, 280, 195, 280);
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text('Prishitech Solutions · Official Enterprise Capability Statement (2026)', 15, 285);
    doc.text('Page 2 of 2 · Confidential Document', 148, 285);

    // Save as real PDF
    doc.save('Prishitech-Solutions-Capability-Statement-2026.pdf');
  } catch (err) {
    console.error('Dynamic PDF generation error, downloading static PDF fallback:', err);
    const link = document.createElement('a');
    link.href = '/Prishitech-Solutions-Capability-Statement-2026.pdf';
    link.setAttribute('download', 'Prishitech-Solutions-Capability-Statement-2026.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
