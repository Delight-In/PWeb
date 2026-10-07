import faqData from './faqKnowledge.json';

export interface CompanyInfo {
  name: string;
  tagline: string;
  positioning: string;
  business_type: string;
  headquarters: string;
  phone: string;
  email: string;
  focus: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  keywords: string[];
  answer: string;
  actionType?: 'demo' | 'contact' | 'download_pdf';
  suggestedPrompts?: string[];
}

export interface BotResponse {
  answer: string;
  actionType?: 'demo' | 'contact' | 'download_pdf';
  matchedQuestion?: string;
  suggestedPrompts?: string[];
}

export const companyInfo: CompanyInfo = {
  name: "PrishiTech Solutions",
  tagline: "Complex Made Easy",
  positioning: "Unifying Resource Intelligence & Industrial IT Engineering",
  business_type: "B2B Industrial IoT & Digital Transformation Solutions",
  headquarters: "5A 45/46, Cloud-9, Sector-1, Vaishali, Ghaziabad, UP 201019, India",
  phone: "+91 120 456 7890 / +91 98100 12345",
  email: "contact@prishitech.com",
  focus: [
    "Resource Intelligence (Energy, Water, Gas, Chillers)",
    "BEE Energy Advisory & Statutory Compliance",
    "Non-Invasive IoT Telemetry (< 72h Deployment)",
    "Enterprise Cloud Architecture (AWS/Azure)",
    "OT Cybersecurity (Purdue Model IEC 62443)",
    "Data Lakehouses & BI Dashboards",
    "Predictive AI & Automated Load Shedding",
    "TRIAXIS Consortium Unified SLA"
  ]
};

// ============================================================================
// COMPREHENSIVE KNOWLEDGE BASE: EVERYTHING DELIVERED & HOW IT WORKS
// ============================================================================
const coreWebsiteKnowledge: FAQItem[] = [
  {
    id: "services-overview",
    category: "Services",
    question: "What services does PrishiTech Solutions provide?",
    keywords: ["services", "what do you do", "solutions", "offerings", "provide", "capabilities", "what does prishitech do", "overview", "what are your services"],
    answer: `PrishiTech Solutions provides two core operational portfolios:\n\n1. **Resource Intelligence Platform**:\n• Energy Management (sub-second feeder telemetry & peak kVA shaving)\n• Water Management (clamp-on ultrasonic flow & acoustic leak detection)\n• Gas & Thermal (line pressure & boiler combustion efficiency)\n• Chiller Plants (real-time COP kW/TR & automated staging)\n• Energy Advisory (BEE statutory audits & ISO 50001 compliance)\n\n2. **IT & Digital Transformation**:\n• Industrial IoT & Remote Monitoring (RS-485 Modbus, BACnet, OPC-UA)\n• Enterprise Cloud Architecture (AWS, Azure, hybrid lakehouses)\n• OT Cybersecurity (Purdue Model, IDMZ, IEC 62443 standard)\n• Data & Business Intelligence (Power BI, Grafana dashboards)\n• AI & Automation (predictive motor maintenance & peak forecasting)\n\nAll solutions are deployed non-invasively in under 72 hours per facility with zero downtime.`,
    actionType: "contact",
    suggestedPrompts: [
      "How do you deliver and install?",
      "Tell me about Resource Intelligence",
      "Tell me about IT Services",
      "Schedule a live demo"
    ]
  },
  {
    id: "what-and-how-we-deliver",
    category: "Delivery",
    question: "What do you deliver and how do you deliver it?",
    keywords: ["what do you deliver", "how do you deliver", "delivery model", "how do you install", "implementation", "process", "deployment", "timeline", "how it works"],
    answer: `Here is what and how PrishiTech delivers:\n\n**What We Deliver:**\n• Turnkey non-invasive IoT sensors (split-core CTs, ultrasonic flow meters, pressure transmitters)\n• Industrial DIN-rail edge gateways with 30-day offline buffer memory\n• Real-time cloud software platform with executive & plant-level dashboards\n• Actionable AI alarms (SMS, WhatsApp, email) for leaks & demand surges\n• Certified BEE energy audits and statutory filing compliance\n\n**How We Deliver (3-Step Turnkey Process):**\n1. **Step 1: Clamp & Connect (< 72 Hours)**: Sensors attach externally to existing power cables and water/gas pipes. Zero shutdowns, zero cable cutting, zero pipe drilling.\n2. **Step 2: Stream & Secure**: Edge gateways read Modbus/BACnet and stream outbound-only telemetry over TLS 1.3 through an Industrial DMZ.\n3. **Step 3: Act & Save**: Instant live telemetry, predictive peak-load shedding, automated chiller COP reset, and verified 15–26% utility savings.\n\nAs a TRIAXIS Consortium partner, we provide a single contract and single SLA backed by software engineers and certified power auditors.`,
    actionType: "demo",
    suggestedPrompts: [
      "How long does sensor deployment take?",
      "Do you disrupt plant operations?",
      "Which hardware and protocols do you support?",
      "Schedule a live demo"
    ]
  },
  {
    id: "deployment-time-and-shutdown",
    category: "Delivery",
    question: "How long does deployment take and will it disrupt plant operations?",
    keywords: ["how long", "deployment time", "disrupt", "shutdown", "downtime", "installation time", "plant operations", "stop production", "turnaround"],
    answer: `Deployment typically takes **under 72 hours per facility** and causes **zero operational disruption**:\n\n• **Zero Electrical Shutdowns**: We use non-invasive split-core Current Transformers (CTs) that clip directly around existing insulated power cables without disconnecting busbars.\n• **Zero Pipe Cutting**: Ultrasonic transit-time flow sensors clamp onto the exterior of water and thermal pipes without drilling or cutting.\n• **Zero PLC Interference**: Telemetry is outbound-only over RS-485 Modbus or BACnet, strictly respecting Purdue Model isolation so existing plant automation is never disturbed.`,
    suggestedPrompts: [
      "How do non-invasive sensors work?",
      "How does peak-demand load shedding work?",
      "Schedule a site walkthrough"
    ]
  },
  {
    id: "resource-intelligence-platform",
    category: "Solutions",
    question: "What is the Resource Intelligence Platform?",
    keywords: ["resource intelligence", "platform", "resource platform", "monitoring platform", "unified platform", "what is resource intelligence"],
    answer: `The Resource Intelligence Platform unifies all utility streams into one single pane of glass:\n\n1. **Electricity**: Sub-second power telemetry, kVA peak cap modeling, power factor (PF > 0.99) & THD harmonics.\n2. **Water**: Inflow vs outflow balance, acoustic underground leak alerts, borewell tracking & CGWA ledger.\n3. **Gas**: PNG/LPG pressure lines, consumption tracking & automated burner combustion efficiency.\n4. **Chillers**: Instantaneous COP (kW/TR), cooling tower delta-T, and automated sequencing staging.\n5. **Advisory**: Continuous Bureau of Energy Efficiency (BEE) audit readiness and discom tariff optimization.\n\nIt eliminates software fragmentation so facility directors see every rupee of utility cost in real time.`,
    actionType: "demo",
    suggestedPrompts: [
      "How does Energy Management work?",
      "How do you optimize chillers?",
      "How does water leak detection work?",
      "Schedule a live demo"
    ]
  },
  {
    id: "energy-management",
    category: "Solutions",
    question: "How does Energy Management work and how does it prevent peak demand penalties?",
    keywords: ["energy management", "electricity", "power", "peak demand", "kva", "penalty", "discom", "surcharge", "power factor", "apfc", "thd", "harmonics", "load shedding"],
    answer: `PrishiTech's Energy Management operates at the sub-second feeder level:\n\n• **Rolling 15-Minute Cap Modeling**: Predicts contracted maximum demand 20 minutes in advance. When plant load approaches 92% of the contracted threshold, automated alerts notify floor managers or trigger staging off non-critical auxiliary loads (e.g. secondary grinders or chillers).\n• **Power Factor Optimization**: Continuously monitors APFC capacitor bank health to keep power factor above 0.99 Lag, claiming discom incentives and eliminating penalties.\n• **Harmonic Distortion (THD)**: Tracks voltage and current harmonics to meet IEEE 519 standards and prevent transformer overheating.\n• **Specific Energy Consumption (SEC)**: Benchmarks kWh per ton of manufactured output across shifts to pinpoint hidden operational waste.`,
    actionType: "demo",
    suggestedPrompts: [
      "What typical savings can we achieve?",
      "Which meters do you interface with?",
      "Schedule an Energy Management demo"
    ]
  },
  {
    id: "water-management",
    category: "Solutions",
    question: "How does Water Management and leak detection work?",
    keywords: ["water management", "water", "leak", "leaks", "acoustic", "ultrasonic", "flow meter", "borewell", "cgwa", "stp", "water balance", "pipe"],
    answer: `Our Water Management provides closed-loop hydrological intelligence:\n\n• **Clamp-On Ultrasonic Flow Meters**: External sensors measure flow velocity (accuracy ±0.5%) without cutting pipes or stopping supply.\n• **Acoustic & Mass-Balance Leak Detection**: Algorithmic balancing compares main inlet flow with branch zone meters. If distribution drops below inflow, an instant leak alert triggers with the exact pipe segment localized.\n• **Complete Water Balance**: Tracks borewell intake, municipal water, and bulk tanker receipts against cooling tower makeup, STP recycling, and domestic usage.\n• **Statutory CGWA Compliance**: Automatically compiles daily digital ledgers for Central Ground Water Authority and state pollution control boards.`,
    suggestedPrompts: [
      "How does Chiller Management work?",
      "How does non-invasive sensor deployment work?",
      "Request a platform demo"
    ]
  },
  {
    id: "gas-management",
    category: "Solutions",
    question: "How does Gas & Thermal Management work?",
    keywords: ["gas management", "gas", "png", "lpg", "pressure", "thermal", "boiler", "furnace", "combustion", "steam", "compressed air", "safety shutoff"],
    answer: `PrishiTech Gas & Thermal Management safeguards facility safety while optimizing fuel burn:\n\n• **Mass Flow & Line Pressure Tracking**: High-accuracy thermal mass flow meters track PNG, LPG, and compressed air with automatic temperature/pressure compensation.\n• **Safety-Threshold & Rupture Alarms**: Instant emergency alerts on sudden pressure drops or high-limit spikes, with integration into solenoid emergency shut-off valves.\n• **Boiler & Furnace Combustion Efficiency**: Correlates gas burn with steam output (Specific Fuel Consumption) to identify burner degradation, excess oxygen, and unlagged steam line heat loss.`,
    suggestedPrompts: [
      "Tell me about Chiller Management",
      "Tell me about Energy Management",
      "Schedule a live demo"
    ]
  },
  {
    id: "chiller-management",
    category: "Solutions",
    question: "How do you optimize Chiller Plants and HVAC efficiency?",
    keywords: ["chiller", "chillers", "hvac", "cop", "kw/tr", "cooling", "cooling tower", "condenser", "compressor", "staging", "refrigeration", "carrier", "trane", "york", "daikin"],
    answer: `Central chillers typically consume 50%+ of a commercial or industrial facility's electricity. PrishiTech optimizes chiller plants in real time:\n\n• **Instantaneous COP & kW/TR Tracking**: Measures thermal cooling tonnage delivered (BTU/TR) against electrical input power every 60 seconds using precision PT100/PT1000 RTD probes and flow sensors.\n• **Condenser Water Setpoint Reset**: Dynamically adjusts condenser setpoints based on ambient wet-bulb temperature, boosting plant COP up to 5.8+.\n• **Optimal Part-Load Staging**: Advises plant operators or BMS on the most energy-efficient sequencing of lead vs lag chillers.\n• **Fouling & Scale Detection**: Flags heat exchanger tube scaling and approach temperature drift weeks before compressor strain occurs.\n• **Direct BMS Compatibility**: Interfaces natively via BACnet/IP to Trane, York, Carrier, and Daikin chillers.`,
    actionType: "demo",
    suggestedPrompts: [
      "What typical savings can commercial buildings achieve?",
      "How does deployment work?",
      "Schedule a Chiller demo"
    ]
  },
  {
    id: "energy-advisory",
    category: "Solutions",
    question: "What are your Energy Advisory and statutory BEE audit services?",
    keywords: ["advisory", "audit", "audits", "bee", "bureau of energy efficiency", "iso 50001", "ecbc", "compliance", "consulting", "energy auditor", "statutory"],
    answer: `Delivered in partnership with accredited TRIAXIS Consortium energy auditors, our advisory services include:\n\n• **Investment-Grade BEE Audits**: Comprehensive walk-through and detailed thermal/electrical audits certified by accredited Bureau of Energy Efficiency auditors.\n• **Statutory & Tariff Optimization**: Reviewing discom contract demand, power factor incentives, time-of-day (ToD) tariffs, and open-access renewable power procurement.\n• **ISO 50001 EnMS Certification**: Complete documentation and baseline energy review support for international standard certification.\n• **Bankable Retrofit Roadmaps**: Financial payback and ROI modeling for VFD retrofits, high-efficiency IE4 motors, and solar rooftop integration (average payback ~8.4 months).`,
    suggestedPrompts: [
      "What is the TRIAXIS Consortium?",
      "How much does a facility save?",
      "Schedule an Energy Advisory consultation"
    ]
  },
  {
    id: "it-services-overview",
    category: "IT Services",
    question: "What IT Services & Digital Transformation capabilities do you provide?",
    keywords: ["it services", "digital transformation", "it capabilities", "cloud", "iot", "cybersecurity", "analytics", "software", "data", "ai"],
    answer: `PrishiTech offers a full-stack enterprise IT services bench:\n\n1. **IoT & Edge Connectivity**: Industrial DIN-rail gateways, multi-protocol translation (Modbus, BACnet, OPC-UA), and 30-day offline data buffering.\n2. **Cloud & Infrastructure**: Scalable hybrid cloud architectures (AWS, Azure, GCP) with time-series lakehouses and 99.99% uptime SLAs.\n3. **Cybersecurity & OT Defense**: Strict Purdue Reference Model compliance (IEC 62443), Industrial DMZ (IDMZ), one-way data diodes, and outbound-only TLS 1.3 conduits.\n4. **Data & Business Intelligence**: Unified industrial lakehouses (Snowflake, BigQuery), custom React telemetry dashboards, and Power BI reporting.\n5. **AI & Process Automation**: Unsupervised ML anomaly detection, 20-minute advance peak forecasting, and predictive equipment failure alerts.`,
    actionType: "contact",
    suggestedPrompts: [
      "How do you enforce OT cybersecurity?",
      "What protocols and hardware do you support?",
      "Tell me about AI & Predictive Maintenance",
      "Consult an IT Architect"
    ]
  },
  {
    id: "ot-cybersecurity",
    category: "IT Services",
    question: "How is industrial OT cybersecurity and the Purdue Model enforced?",
    keywords: ["cybersecurity", "security", "ot security", "purdue model", "iec 62443", "firewall", "idmz", "dmz", "plc security", "safety", "hack", "data diode", "tls 1.3"],
    answer: `Industrial cybersecurity is non-negotiable. We strictly implement the **Purdue Reference Architecture (IEC 62443)**:\n\n• **Strict Network Isolation**: Physical Level 0–3 operational networks (PLCs, RTUs, meters) are strictly partitioned from Level 4 enterprise IT and cloud networks.\n• **Industrial DMZ (IDMZ)**: All edge communications pass through an isolated Industrial DMZ using one-way data diodes and encrypted TLS 1.3 tunnels.\n• **Zero Command Injection (Read-Only)**: Edge gateways only perform outbound telemetry collection. Zero external inbound write ports exist, guaranteeing external actors cannot alter plant PLC logic.\n• **Hardware Root of Trust**: Industrial gateways feature TPM 2.0 encrypted secure boot and cryptographically signed OTA firmware updates.`,
    suggestedPrompts: [
      "What edge protocols do you support?",
      "What do you deliver and how?",
      "Schedule a technical consultation"
    ]
  },
  {
    id: "ai-and-predictive-maintenance",
    category: "IT Services",
    question: "What AI and predictive maintenance capabilities do you offer?",
    keywords: ["ai", "machine learning", "artificial intelligence", "predictive maintenance", "anomaly detection", "mlops", "prediction", "failure", "breakdown"],
    answer: `PrishiTech applies domain-tailored machine learning to operational telemetry:\n\n• **Predictive Equipment Failure**: Vibration and temperature anomaly models alert engineering teams **7 to 21 days in advance** of motor bearing or chiller compressor breakdown.\n• **Automated Demand Peak Prediction**: Models rolling 15-minute discom integration windows 20 minutes ahead to prevent demand surcharge penalties.\n• **Bayesian Chiller Optimization**: Real-time algorithm adjusts condenser setpoints and pump speeds for minimal specific energy.\n• **Edge AI Inference**: Lightweight TensorFlow Lite models run directly on edge gateways for offline inference during network outages.`,
    suggestedPrompts: [
      "How does Energy Management work?",
      "What industries do you serve?",
      "Schedule a live demo"
    ]
  },
  {
    id: "industries-served-overview",
    category: "Industries",
    question: "Which industries do you serve?",
    keywords: ["industries", "sectors", "who do you serve", "clients", "manufacturing", "real estate", "utilities", "hospitality", "government", "psu", "commercial"],
    answer: `We serve 5 major mission-critical sectors:\n\n1. **Manufacturing & Industrial Plants**: Heavy fabrication, automotive, chemicals, pharmaceuticals, textiles (-26% Specific Energy Consumption cut).\n2. **Commercial Real Estate**: Grade-A commercial towers, IT parks, retail malls (₹38–52 Lakhs annual savings via chiller optimization & sub-metering).\n3. **Utilities & Power Grid**: Discoms, substations, and captive solar/wind IPPs (99.98% telemetry uptime, THD harmonics & APFC power factor).\n4. **Hospitality & Large Campuses**: Luxury hotels, resorts, hospitals, universities (21% water waste cut & occupancy-synced HVAC).\n5. **Government & PSU Facilities**: Public sector undertakings, defense, railways (100% statutory BEE & ECBC compliance with sovereign OT security).`,
    actionType: "contact",
    suggestedPrompts: [
      "How do you help manufacturing plants?",
      "How do you help commercial real estate?",
      "How do you help utilities?",
      "Request an industry case study"
    ]
  },
  {
    id: "manufacturing-sector",
    category: "Industries",
    question: "How do you help manufacturing and industrial plants?",
    keywords: ["manufacturing", "factory", "plant", "industrial", "automotive", "textiles", "steel", "machinery", "shop floor"],
    answer: `For manufacturing facilities, PrishiTech eliminates the three biggest operational cost drains:\n\n1. **Discom Peak kVA Demand Penalties**: Predictive 20-minute warnings and automated load staging keep demand safely under contract limits.\n2. **Thermal & Boiler Losses**: Mass flow monitoring on PNG, LPG, and steam lines catches boiler combustion drift and unlagged line leaks.\n3. **Motor & Compressor Downtime**: AI vibration and current telemetry detect motor bearing failures 7–21 days before catastrophic failure.\n\nTypical impact: **26% reduction in Specific Energy Consumption (SEC)** per metric ton of output.`,
    suggestedPrompts: [
      "How does deployment work without shutting down?",
      "Tell me about Energy Management",
      "Request a manufacturing assessment"
    ]
  },
  {
    id: "commercial-real-estate",
    category: "Industries",
    question: "How do you help commercial real estate and Grade-A buildings?",
    keywords: ["commercial real estate", "real estate", "buildings", "it parks", "commercial towers", "malls", "tenants", "sub-metering", "leed"],
    answer: `For commercial real estate portfolios, PrishiTech targets HVAC costs and sub-metering disputes:\n\n1. **Chiller Plant COP Optimization**: Chillers consume 50%+ of building electricity. Real-time kW/TR tracking and condenser resets boost COP to 5.8+.\n2. **Automated Tenant Sub-Metering**: Revenue-grade digital sub-metering replaces manual meter reading, producing transparent tenant utility bills.\n3. **Statutory ESG & LEED Compliance**: One-click generation of SEBI BRSR Core, LEED, and BEE building performance reports.\n\nTypical impact: **₹38 – 52 Lakh annual utility savings** per 500,000 sq. ft. commercial complex.`,
    suggestedPrompts: [
      "How do you optimize chillers?",
      "What typical savings can we achieve?",
      "Request a commercial property demo"
    ]
  },
  {
    id: "roi-and-savings",
    category: "ROI",
    question: "What typical savings and ROI payback period can a facility expect?",
    keywords: ["roi", "savings", "how much save", "cost reduction", "payback", "payback period", "financial return", "investment return", "cost savings"],
    answer: `PrishiTech delivers verifiable financial outcomes:\n\n• **Energy Consumption**: 15% to 26% reduction in total facility electricity consumption.\n• **Peak Demand Penalties**: 100% elimination of discom maximum demand penalty surcharges.\n• **Commercial Portfolios**: ₹38 to ₹52 Lakh annual utility savings per 500,000 sq. ft. commercial building.\n• **Water Conservation**: 21% reduction in water waste via acoustic underground leak localization.\n• **Payback Period**: Average full CapEx payback realized within **6 to 12 months** (average ~8.4 months).`,
    actionType: "demo",
    suggestedPrompts: [
      "How do you calculate facility ROI?",
      "Schedule a live platform demo",
      "Download Capability Statement (PDF)"
    ]
  },
  {
    id: "triaxis-consortium",
    category: "Consortium",
    question: "What is the TRIAXIS Consortium and why is it beneficial?",
    keywords: ["triaxis", "consortium", "partner", "partnership", "alliance", "who is triaxis", "sla"],
    answer: `The **TRIAXIS Consortium** is a strategic alliance that solves the classic vendor fragmentation problem:\n\n• **The Problem**: Pure software startups lack electrical power engineering depth, while legacy electrical contractors lack modern cloud and OT cyber capability.\n• **The Solution**: PrishiTech provides software, IoT edge gateways, and cloud data pipelines, while TRIAXIS Consortium partners supply certified Bureau of Energy Efficiency (BEE) auditors, power grid engineers, and HVAC specialists.\n• **Client Benefit**: Single contract, single SLA accountability from physical sensor installation up to board-level reporting.`,
    suggestedPrompts: [
      "What services do you provide?",
      "Where is your office located?",
      "Schedule a consortium consultation"
    ]
  },
  {
    id: "supported-protocols",
    category: "Technical",
    question: "Which industrial hardware, meters, and protocols do you support?",
    keywords: ["protocols", "hardware", "modbus", "bacnet", "mqtt", "lorawan", "opc", "opc-ua", "sensors", "meters", "schneider", "siemens", "abb", "l&t", "yokogawa"],
    answer: `PrishiTech interfaces natively with industry-standard hardware and fieldbus protocols:\n\n• **Protocols**: Modbus RTU/TCP (RS-485), BACnet/IP, BACnet-MSTP, OPC-UA, MQTT, and 4-20mA analog loops.\n• **Meters**: Pre-integrated with Schneider, Siemens, ABB, L&T, Yokogawa, and Secure meters.\n• **Chillers**: Direct digital integration to Trane, York, Carrier, and Daikin BMS interfaces.\n• **Edge Hubs**: Industrial DIN-rail computing gateways with 30-day offline buffer memory and dual 4G/LTE failover.`,
    suggestedPrompts: [
      "How does deployment work?",
      "How do non-invasive sensors work?",
      "Request technical architecture PDF"
    ]
  },
  {
    id: "office-location",
    category: "Company",
    question: "Where is your office located and how do I contact you?",
    keywords: ["location", "address", "office", "headquarters", "where", "ghaziabad", "vaishali", "cloud 9", "phone", "email", "contact address", "reach you"],
    answer: `Our headquarters, testing labs, and engineering dispatch desk are located at:\n\n📍 **Registered Office**:\n5A 45/46, Cloud-9, Sector-1, Vaishali,\nGhaziabad, Uttar Pradesh 201019, India\n\n📞 **Phone / WhatsApp**:\n• Switchboard: +91 120 456 7890\n• Sales & Technical WhatsApp: +91 98100 12345\n\n✉️ **Email**:\n• contact@prishitech.com | sales@prishitech.com\n\n🕒 **Hours**: Mon–Fri: 9:00 AM – 6:00 PM IST (24/7 OT emergency support for contracted facilities).\n🚇 **Transit**: ~1.5 km from Vaishali Metro Station (Blue Line) & ~3 km from Anand Vihar ISBT.`,
    actionType: "contact",
    suggestedPrompts: [
      "Schedule a site walkthrough",
      "Request a live demo",
      "What services do you provide?"
    ]
  },
  {
    id: "capability-statement",
    category: "Documentation",
    question: "How can I download the Capability Statement PDF?",
    keywords: ["pdf", "capability", "prospectus", "document", "brochure", "download", "whitepaper", "statement"],
    answer: `You can download our complete **PrishiTech Solutions Capability Statement 2026 (PDF)** right here. It details our full technical architecture, non-invasive deployment methodology, and case benchmarks.`,
    actionType: "download_pdf",
    suggestedPrompts: [
      "Schedule a live demo",
      "What services do you provide?",
      "Where is your office located?"
    ]
  },
  {
    id: "book-demo-action",
    category: "Actions",
    question: "How do I schedule a live demo or site walkthrough?",
    keywords: ["demo", "walkthrough", "schedule", "book", "meeting", "presentation", "trial", "pilot", "request demo", "book demo", "show me demo", "site walk"],
    answer: `I can schedule a personalized demonstration for your engineering and management team right now! Fill in your details below, and our senior solutions architects from Vaishali, Ghaziabad will coordinate the walkthrough.`,
    actionType: "demo",
    suggestedPrompts: [
      "What services do you provide?",
      "Download Capability Statement (PDF)",
      "Where is your office located?"
    ]
  },
  {
    id: "complex-made-easy",
    category: "Company",
    question: "What is your philosophy and the meaning of 'Complex Made Easy'?",
    keywords: ["complex made easy", "philosophy", "tagline", "mission", "vision", "values", "about us"],
    answer: `Our philosophy is **'Complex Made Easy'**:\n\nIndustrial facilities face daunting complexity — dozens of proprietary meters, unmonitored pipes, volatile peak demand tariffs, and cyber threats. We make it easy by taking full responsibility for the entire pipeline:\n\n1. **Hardware**: Non-invasive clamp sensors deployed in < 72h.\n2. **Software**: Unified single-pane-of-glass cloud console.\n3. **SLA**: Single accountable team combining software developers and certified power engineers under the TRIAXIS Consortium.\n\nNo multi-vendor finger-pointing. Just measurable utility savings.`,
    suggestedPrompts: [
      "What services do you provide?",
      "What do you deliver and how?",
      "Schedule a live demo"
    ]
  }
];

// Combine legacy JSON FAQs with the deep website knowledge
const baseFaqList: FAQItem[] = Array.isArray(faqData) ? faqData : ((faqData as any).faq || []);
const combinedFaqMap = new Map<string, FAQItem>();

// Priority: core website knowledge overrides legacy items
for (const item of baseFaqList) {
  combinedFaqMap.set(item.id, item);
}
for (const item of coreWebsiteKnowledge) {
  combinedFaqMap.set(item.id, item);
}

export const faqList: FAQItem[] = Array.from(combinedFaqMap.values());

// ============================================================================
// INTELLIGENT INTENT CLASSIFICATION & NATURAL NLP MATCHING ENGINE
// ============================================================================

/**
 * Stop words to filter out when computing semantic relevance
 */
const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he',
  'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the', 'to', 'was', 'were',
  'will', 'with', 'i', 'you', 'we', 'they', 'do', 'does', 'did', 'have',
  'can', 'could', 'would', 'should', 'about', 'some', 'any', 'tell', 'me', 'please'
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length > 1 && !STOP_WORDS.has(token));
}

/**
 * Searches the Q&A knowledge base with multi-stage semantic classification
 */
export function getBotResponse(rawQuery: string): BotResponse {
  const query = rawQuery.toLowerCase().trim();
  const tokens = tokenize(query);

  // -------------------------------------------------------------------------
  // 1. GREETINGS & INTRODUCTIONS
  // -------------------------------------------------------------------------
  if (/^(hi|hello|hey|namaste|good morning|good evening|good afternoon|greetings|hola)\b/i.test(query)) {
    return {
      answer: `Hello! I am PrishiBot, your AI guide to ${companyInfo.name} — "${companyInfo.tagline}".\n\nI can explain everything about our Resource Intelligence Platform (Energy, Water, Gas, Chillers, BEE Advisory), our IT & Digital Transformation services, and our rapid < 72-hour non-invasive deployment model.\n\nHow can I assist your facility today?`,
      suggestedPrompts: [
        "What services do you provide?",
        "What do you deliver and how?",
        "Tell me about Energy Management",
        "How do you optimize chillers?",
        "Schedule a live demo"
      ]
    };
  }

  // -------------------------------------------------------------------------
  // 2. GRATITUDE & CLOSING
  // -------------------------------------------------------------------------
  if (/^(thanks|thank you|great|awesome|perfect|helpful|ok|okay|got it|cool|nice)\b/i.test(query) && tokens.length <= 4) {
    return {
      answer: `You're very welcome! If you'd like to explore how these solutions apply to your specific plant or commercial complex, I can coordinate a live demo or site walkthrough anytime.`,
      suggestedPrompts: [
        "Schedule a live demo",
        "Download Capability Statement (PDF)",
        "Where is your office located?"
      ]
    };
  }

  // -------------------------------------------------------------------------
  // 3. ACTION INTENTS (DEMO, PDF, CONTACT)
  // -------------------------------------------------------------------------
  const isQuestion = /^(what|tell me|explain|describe|which|list|how does|why|where is)\b/i.test(query);

  const isDemoIntent = 
    /(create|book|schedule|request|want|need|get|arrange|setup|set up|give|show|conduct)\s+(a\s+)?(live\s+)?(telemetry\s+)?demo/i.test(query) ||
    /^(demo|live demo|telemetry demo|book demo|schedule demo|create demo|request demo)$/i.test(query) ||
    /(how to|can i|i want to|where can i)\s+(book|schedule|request|get|have)\s+(a\s+)?demo/i.test(query) ||
    /(site walk|site visit|feasibility walk|walkthrough)/i.test(query);

  if (!isQuestion && isDemoIntent) {
    return {
      answer: `We would be delighted to arrange a live platform walkthrough for your team!\n\nPlease enter your details in the form below. I will dispatch your request directly to our solutions desk in Vaishali, Ghaziabad so an engineer can coordinate with you within 4 business hours.`,
      actionType: 'demo',
      matchedQuestion: "How do I schedule a live demo?",
      suggestedPrompts: [
        "What services do you provide?",
        "Download Capability Statement (PDF)",
        "Where is your office located?"
      ]
    };
  }

  const isPdfIntent = /(download|get|send|export|view)\s+(the\s+)?(pdf|brochure|prospectus|capability|whitepaper|statement)/i.test(query) || /^(pdf|download pdf|capability statement)$/i.test(query);
  if (isPdfIntent) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'capability-statement')!;
    return {
      answer: item.answer,
      actionType: 'download_pdf',
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // -------------------------------------------------------------------------
  // 4. HIGH-PRIORITY INTENT CLASSIFIERS (WHAT WE DO / HOW WE DELIVER)
  // -------------------------------------------------------------------------
  // Intent: What do you deliver and how?
  if (
    /(what (do you|we) deliver|how (do you|we) deliver|delivery model|how do you install|how is it installed|how does it work|how it works|how do you deploy|deployment process)/i.test(query) ||
    (/(deliver|delivery)/i.test(query) && /(what|how)/i.test(query))
  ) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'what-and-how-we-deliver')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: Services / What do you do?
  if (
    /(what (services|solutions) do you (provide|offer)|what do you do|what does prishitech do|tell me about your services|list your services|overview of services)/i.test(query) ||
    /^(services|solutions|what do you do)$/i.test(query)
  ) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'services-overview')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: Deployment time / Plant shutdown / Non-invasive
  if (
    /(how long|timeline|72 hour|72h|disrupt|shutdown|downtime|stop operations|plant shutdown|non-invasive|split-core|clamp)/i.test(query) &&
    /(deploy|install|setup|sensor|plant|operations|time)/i.test(query)
  ) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'deployment-time-and-shutdown')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: Chiller / HVAC
  if (/(chiller|chillers|cop|kw\/tr|hvac|condenser|cooling tower|trane|carrier|york|daikin)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'chiller-management')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: Energy / Electricity / Peak Demand / Power Factor
  if (/(energy|electricity|power factor|apfc|peak demand|kva penalty|discom|surcharge|thd|harmonics|feeder)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'energy-management')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: Water / Leak / Ultrasonic / CGWA
  if (/(water|leak|leaks|ultrasonic|flow meter|acoustic|borewell|cgwa|stp|water balance)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'water-management')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: Gas / Boiler / Pressure / PNG / LPG
  if (/(gas|png|lpg|boiler|furnace|combustion|steam|compressed air|pressure line|solenoid)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'gas-management')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: Advisory / BEE / Audit
  if (/(advisory|audit|audits|bee|bureau of energy|iso 50001|ecbc|energy audit)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'energy-advisory')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: OT Cybersecurity / Purdue / IDMZ
  if (/(cyber|security|purdue|iec 62443|idmz|plc security|firewall|data diode|tls 1.3)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'ot-cybersecurity')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: AI / Predictive Maintenance
  if (/(ai|predictive|predict|machine learning|anomaly|mlops|breakdown|motor failure)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'ai-and-predictive-maintenance')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: ROI / Savings / Payback / Cost
  if (/(roi|save|savings|payback|how much save|financial return|cost reduction|pricing|cost)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'roi-and-savings')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: TRIAXIS Consortium
  if (/(triaxis|consortium|alliance|partner|partnership)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'triaxis-consortium')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: Protocols / Hardware / Modbus / BACnet
  if (/(protocol|protocols|modbus|bacnet|mqtt|opc|opc-ua|hardware|meters|schneider|siemens|gateway)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'supported-protocols')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: Location / Address / Office
  if (/(location|address|office|headquarters|where are you|vaishali|ghaziabad|cloud 9|phone|email|contact info)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'office-location')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: Manufacturing
  if (/(manufacturing|factory|industrial plant|heavy industry|shop floor|automobile|textile)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'manufacturing-sector')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // Intent: Real Estate / Commercial
  if (/(real estate|commercial building|tower|it park|mall|tenant|sub-metering)/i.test(query)) {
    const item = coreWebsiteKnowledge.find(k => k.id === 'commercial-real-estate')!;
    return {
      answer: item.answer,
      actionType: item.actionType,
      matchedQuestion: item.question,
      suggestedPrompts: item.suggestedPrompts
    };
  }

  // -------------------------------------------------------------------------
  // 5. SCORING ENGINE OVER COMBINED Q&A DATABASE
  // -------------------------------------------------------------------------
  let bestItem: FAQItem | null = null;
  let highestScore = 0;

  for (const item of faqList) {
    let score = 0;
    const qLower = item.question.toLowerCase();

    // Exact question match
    if (query === qLower) {
      score += 30;
    } else if (query.includes(qLower) || qLower.includes(query)) {
      score += 15;
    }

    // Token match against question
    const qTokens = tokenize(item.question);
    for (const token of tokens) {
      if (qTokens.includes(token)) {
        score += 5;
      }
    }

    // Keyword match
    for (const kw of item.keywords) {
      const kwLower = kw.toLowerCase();
      if (query === kwLower) {
        score += 12;
      } else if (query.includes(kwLower)) {
        score += 6;
      } else {
        // Partial token overlap in keyword
        const kwTokens = tokenize(kwLower);
        for (const token of tokens) {
          if (kwTokens.includes(token)) {
            score += 2;
          }
        }
      }
    }

    // Token match in answer text
    const ansLower = item.answer.toLowerCase();
    for (const token of tokens) {
      if (ansLower.includes(token)) {
        score += 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestItem = item;
    }
  }

  if (bestItem && highestScore >= 4) {
    return {
      answer: bestItem.answer,
      actionType: bestItem.actionType,
      matchedQuestion: bestItem.question,
      suggestedPrompts: bestItem.suggestedPrompts || [
        "What services do you provide?",
        "What do you deliver and how?",
        "Schedule a live demo"
      ]
    };
  }

  // -------------------------------------------------------------------------
  // 6. INTELLIGENT COMPREHENSIVE FALLBACK
  // -------------------------------------------------------------------------
  return {
    answer: `I specialize in everything PrishiTech Solutions delivers:\n\n• **Resource Intelligence Platform**: Energy Management (sub-second feeder telemetry & peak kVA shaving), Water (ultrasonic flow & acoustic leaks), Gas (pressure & boiler efficiency), and Chiller Plants (COP kW/TR optimization).\n• **IT & Digital Transformation**: Industrial IoT edge gateways, enterprise cloud lakehouses, OT cybersecurity (Purdue Model IEC 62443), and predictive AI automation.\n• **Turnkey Deployment**: Non-invasive external clamp sensors deployed in under 72 hours per facility with zero shutdowns.\n\nWhich of these would you like to explore, or would you like to schedule a live demo with our engineering team?`,
    actionType: 'contact',
    suggestedPrompts: [
      "What services do you provide?",
      "What do you deliver and how?",
      "How do you optimize chillers?",
      "Schedule a live demo"
    ]
  };
}

export default getBotResponse;
