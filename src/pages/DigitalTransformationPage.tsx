import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, ShieldCheck, Database, Bot, ArrowRight, 
  CheckCircle2, Network, ChevronDown, ChevronUp, 
  Download, Check
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

interface DigitalTransformationPageProps {
  onRequestDemo: () => void;
  onOpenCapability: () => void;
}

type ServiceKey = 'iot' | 'cloud' | 'cyber' | 'data' | 'ai';

export const DigitalTransformationPage: React.FC<DigitalTransformationPageProps> = ({
  onRequestDemo,
  onOpenCapability,
}) => {
  const [activeService, setActiveService] = useState<ServiceKey>('iot');
  const [showTechSpecs, setShowTechSpecs] = useState<boolean>(false);

  const servicesData: Record<ServiceKey, {
    title: string;
    tag: string;
    icon: React.ComponentType<{ className?: string }>;
    image: string;
    accentColor: string;
    bgAccent: string;
    headline: string;
    summary: string;
    points: { title: string; desc: string }[];
    specs: { label: string; value: string }[];
    techDetails: string[];
  }> = {
    iot: {
      title: 'IoT & Remote Monitoring',
      tag: 'Service 01 · Edge Connectivity & Telemetry',
      icon: Network,
      image: '/images/iot-hardware-sensors.jpg',
      accentColor: 'text-sky-600',
      bgAccent: 'bg-sky-50 border-sky-200',
      headline: 'Sensor deployment and edge connectivity for real-time telemetry across facilities.',
      summary: 'Bridge the physical and digital divide. We engineer industrial-grade IoT architectures capturing high-frequency operational telemetry from harsh factory floors and multi-site campuses.',
      points: [
        {
          title: 'Turnkey Edge Connectivity',
          desc: 'Seamless integration of RS-485, Modbus, BACnet, and 4G/5G industrial gateways with 30-day offline buffering.',
        },
        {
          title: 'Multi-Site Fleet Monitoring',
          desc: 'Centralized console aggregating geographically dispersed factories into one single pane of glass.',
        },
        {
          title: 'Modular Scalability',
          desc: 'Architecture patterns ensuring a 5-meter pilot seamlessly scales to 10,000+ connected sensors without re-platforming.',
        },
      ],
      specs: [
        { label: 'Protocols', value: 'Modbus TCP/RTU, BACnet, MQTT, OPC UA' },
        { label: 'Offline Caching', value: 'Up to 30 Days Local Storage' },
        { label: 'Enclosure Rating', value: 'IP65 / NEMA 4X Industrial' },
        { label: 'Latency', value: '< 850 ms Real-Time Cloud Sync' },
      ],
      techDetails: [
        'DIN-rail industrial edge computing gateways with dual SIM 4G/LTE failover.',
        'Zero-trust hardware root of trust with TPM 2.0 encrypted secure boot.',
        'Over-the-Air (OTA) cryptographically signed firmware update pipeline.',
        'Bidirectional MQTT-SN and CoAP messaging over TLS 1.3.',
      ],
    },
    cloud: {
      title: 'Cloud & Infrastructure',
      tag: 'Service 02 · Hybrid Architecture & Scalability',
      icon: Cloud,
      image: '/images/digital-cloud-iot.jpg',
      accentColor: 'text-indigo-600',
      bgAccent: 'bg-indigo-50 border-indigo-200',
      headline: 'Cloud architecture, migration and managed infrastructure for industrial workloads.',
      summary: 'Build high-availability, hybrid cloud environments designed to ingest millions of time-series sensor messages per minute with 99.99% uptime guarantees.',
      points: [
        {
          title: 'Hybrid & Multi-Cloud Architecture',
          desc: 'Resilient AWS, Azure, and Google Cloud setups ensuring uninterrupted operational data flow.',
        },
        {
          title: 'High-Throughput Time-Series Ingestion',
          desc: 'Scalable cloud pipelines streaming raw telemetry into TimescaleDB and BigQuery without dropped frames.',
        },
        {
          title: '24/7 Managed Infrastructure',
          desc: 'Continuous monitoring, automated patching, container orchestration, and disaster recovery replication.',
        },
      ],
      specs: [
        { label: 'Ingestion Rate', value: '100,000+ events/sec burst' },
        { label: 'Availability SLA', value: '99.99% Operational Uptime' },
        { label: 'Disaster Recovery', value: '< 5 min RPO · < 15 min RTO' },
        { label: 'Data Retention', value: 'Hot (30d) · Warm (1yr) · Cold (10yr)' },
      ],
      techDetails: [
        'Infrastructure-as-Code (Terraform & Ansible) for reproducible multi-region deployments.',
        'Microservices architecture running on managed Kubernetes (EKS / AKS) with auto-scaling.',
        'End-to-end data encryption at rest (AES-256) and in transit (TLS 1.3).',
      ],
    },
    cyber: {
      title: 'Cybersecurity & OT Defense',
      tag: 'Service 03 · Industrial Cyber Defense & Purdue Model',
      icon: ShieldCheck,
      image: '/images/digital-cloud-iot.jpg',
      accentColor: 'text-emerald-700',
      bgAccent: 'bg-emerald-50 border-emerald-200',
      headline: 'Securing industrial operational technology (OT) and enterprise IT networks.',
      summary: 'Operational environments require specialized defense. We enforce strict Purdue Reference Model network segmentation, industrial DMZs, and continuous anomaly detection.',
      points: [
        {
          title: 'Purdue Model Network Segmentation',
          desc: 'Strict isolation between Level 0–3 industrial automation networks and Level 4 enterprise IT systems.',
        },
        {
          title: 'Industrial DMZ (IDMZ) Implementation',
          desc: 'Encrypted conduits and data diodes ensuring no direct communication path exists between plant PLCs and public cloud.',
        },
        {
          title: 'OT Asset Discovery & Vulnerability Auditing',
          desc: 'Passive, non-intrusive network scanning identifying every connected meter, PLC, RTU, and gateway without causing network jitter.',
        },
      ],
      specs: [
        { label: 'Standards Compliance', value: 'IEC 62443, ISO 27001, NIST CSF' },
        { label: 'PLC Communication', value: 'Read-Only Telemetry (Zero Write-Back)' },
        { label: 'Encryption Standard', value: 'TLS 1.3 with Hardware-Backed Keys' },
        { label: 'Threat Detection', value: 'Sub-Second Anomaly Isolation' },
      ],
      techDetails: [
        'Unidirectional data diode gateways for critical Level 2 / Level 3 zone boundaries.',
        'Role-Based Access Control (RBAC) with mandatory Multi-Factor Authentication (MFA).',
        'Continuous deep packet inspection (DPI) of industrial protocols (Modbus, DNP3, IEC 60870).',
      ],
    },
    data: {
      title: 'Data & Analytics',
      tag: 'Service 04 · Business Intelligence & Data Pipelines',
      icon: Database,
      image: '/images/dashboard-mockup.jpg',
      accentColor: 'text-amber-600',
      bgAccent: 'bg-amber-50 border-amber-200',
      headline: 'Modern data pipelines, lakehouses, and custom executive reporting dashboards.',
      summary: 'Transform raw, noisy sensor streams into decision-ready business intelligence. We construct unified data warehouses that connect telemetry to financial balance sheets.',
      points: [
        {
          title: 'Unified Industrial Lakehouse',
          desc: 'Consolidate disparate SCADA historians, ERP records, and utility bills into one single source of truth.',
        },
        {
          title: 'Executive & Operational BI Dashboards',
          desc: 'Role-tailored Power BI, Grafana, and custom React visualization interfaces accessible on web and mobile.',
        },
        {
          title: 'Automated Compliance & ESG Reporting',
          desc: 'One-click generation of SEBI BRSR, BEE Energy Conservation, and ISO 50001 audit disclosures.',
        },
      ],
      specs: [
        { label: 'Query Response Time', value: '< 250 ms on 1B+ Rows' },
        { label: 'Supported BI Engines', value: 'Power BI, Tableau, Grafana, Superset' },
        { label: 'Data Lake Engine', value: 'Delta Lake / Snowflake / BigQuery' },
        { label: 'ETL Pipeline Latency', value: 'Real-Time (< 2 sec) & Scheduled' },
      ],
      techDetails: [
        'dbt-powered transformation pipelines enforcing automated data quality tests.',
        'Apache Kafka and Apache Flink for distributed stream processing and windowed aggregations.',
        'RESTful and GraphQL semantic layer APIs for downstream ERP and CMMS integrations.',
      ],
    },
    ai: {
      title: 'AI & Process Automation',
      tag: 'Service 05 · Predictive Intelligence & MLOps',
      icon: Bot,
      image: '/images/industry-manufacturing.jpg',
      accentColor: 'text-purple-600',
      bgAccent: 'bg-purple-50 border-purple-200',
      headline: 'Machine learning models for predictive maintenance, anomaly detection, and optimization.',
      summary: 'Move from reactive troubleshooting to automated operational foresight. We train domain-specific ML models on real-world facility telemetry to optimize chiller staging and prevent asset failures.',
      points: [
        {
          title: 'Predictive Equipment Maintenance',
          desc: 'Vibration and thermal anomaly models alerting maintenance teams 7–21 days before motor or bearing breakdown.',
        },
        {
          title: 'Dynamic Setpoint Optimization',
          desc: 'Bayesian algorithms continuously adjusting chiller condenser setpoints and pump speeds for lowest specific energy.',
        },
        {
          title: 'Automated Demand Peak Prediction',
          desc: 'Forecasting electricity load 20 minutes in advance to autonomously shed non-essential loads before discom penalties.',
        },
      ],
      specs: [
        { label: 'Prediction Lead Time', value: '7 to 21 Days Advance Notice' },
        { label: 'False Positive Reduction', value: '94.8% Suppression Rate' },
        { label: 'Workflow Triggers', value: 'SAP PM, Maximo, WhatsApp Dispatch' },
        { label: 'Model Retraining', value: 'Continuous MLOps Pipeline' },
      ],
      techDetails: [
        'Lightweight TensorFlow Lite models compiled directly onto edge gateways for offline inference.',
        'Unsupervised autoencoder neural networks for multivariate anomaly detection.',
        'Bayesian optimization for automated chiller staging and cooling tower setpoint reset.',
      ],
    },
  };

  const currentService = servicesData[activeService];
  const ServiceIcon = currentService.icon;

  return (
    <>
      <SeoHead
        title="IT Services & Digital Transformation | IoT, Cloud, Cybersecurity, Data & AI — PrishiTech"
        description="End-to-end IT services from PrishiTech Solutions — IoT & Remote Monitoring, Cloud & Infrastructure, Cybersecurity & OT Security, Data & Analytics, and AI & Process Automation."
      />

      <div className="pt-24 pb-20 space-y-24 overflow-hidden">
        {/* =========================================================
            1. HERO: WITH 3D CLOUD & CYBER VISUAL
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full inline-block">
                Enterprise Technology Backbone
              </span>

              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                IT Services &amp; Digital Transformation,{' '}
                <span className="bg-gradient-to-r from-sky-700 to-indigo-700 bg-clip-text text-transparent">
                  Built for Operations.
                </span>
              </h1>

              <p className="text-slate-600 text-base leading-relaxed">
                The enterprise technology backbone behind resource intelligence — available as standalone services for IoT edge gateways, hybrid cloud pipelines, and Purdue OT cybersecurity.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
                >
                  <span>Discuss Your IT Roadmap</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </Link>
                <button
                  onClick={onOpenCapability}
                  className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl text-xs sm:text-sm border border-slate-200 shadow-2xs transition-all flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Architecture Specs (PDF)</span>
                </button>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-5 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-600 stroke-[3]" />
                  Purdue IEC 62443 Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-600 stroke-[3]" />
                  Multi-Cloud AWS &amp; Azure
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-600 stroke-[3]" />
                  Zero-Downtime Scaling
                </span>
              </div>
            </div>

            {/* Right Visual Image (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-950 group">
                <img 
                  src="/images/digital-cloud-iot.jpg" 
                  alt="Enterprise Cloud Architecture and OT Cybersecurity" 
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-sky-400 border border-sky-500/30 px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Industrial DMZ Active</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold block mb-0.5">
                    Hardened Purdue Model
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    Zero PLC write-back · Outbound TLS 1.3
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. INTERACTIVE SERVICE STUDIO (WITH DEDICATED PHOTOGRAPHY)
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Top Segmented Tab Navigation */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-8">
            {(
              [
                { id: 'iot', label: 'IoT & Monitoring', icon: Network },
                { id: 'cloud', label: 'Cloud & Infrastructure', icon: Cloud },
                { id: 'cyber', label: 'OT Cybersecurity', icon: ShieldCheck },
                { id: 'data', label: 'Data & Analytics', icon: Database },
                { id: 'ai', label: 'AI & Automation', icon: Bot },
              ] as const
            ).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveService(item.id);
                    setShowTechSpecs(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeService === item.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Card (Split Image & Details) */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Image Side (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[460px] bg-slate-950">
                <img 
                  src={currentService.image} 
                  alt={currentService.title} 
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>

                <div className="absolute top-5 left-5 bg-slate-900/90 backdrop-blur-md text-white border border-slate-700 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2">
                  <ServiceIcon className={`w-4 h-4 ${currentService.accentColor}`} />
                  <span>{currentService.tag}</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-extrabold text-white">
                    {currentService.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {currentService.headline}
                  </p>
                </div>
              </div>

              {/* Details Side (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-9 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-5">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {currentService.summary}
                  </p>

                  {/* 3 Scannable Feature Cards */}
                  <div className="space-y-2.5">
                    {currentService.points.map((pt, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block font-semibold text-xs mb-0.5">{pt.title}</strong>
                          <span className="text-slate-600 leading-relaxed">{pt.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Operational Health Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {currentService.specs.map((s, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block">{s.label}</span>
                        <div className="text-xs font-bold font-mono text-slate-900 mt-0.5">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Consult an IT Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                  </Link>

                  <button
                    onClick={() => setShowTechSpecs(!showTechSpecs)}
                    className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-xs border border-slate-200 flex items-center gap-1.5 transition-colors"
                  >
                    <span>{showTechSpecs ? 'Hide Architecture Specs' : 'View Architecture Specs'}</span>
                    {showTechSpecs ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Collapsible Architecture Specs */}
                {showTechSpecs && (
                  <div className="mt-4 pt-4 border-t border-slate-200 animate-fade-in">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                      Technical Architecture Details:
                    </span>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      {currentService.techDetails.map((td, idx) => (
                        <div key={idx} className="p-2 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2">
                          <span className="text-sky-600 font-bold">•</span>
                          <span>{td}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. PURDUE REFERENCE ARCHITECTURE INFOGRAPHIC CARD
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Purdue Model IEC 62443
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                OT-to-Cloud Security Framework
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Zero external command injection into operational plant PLCs. Outbound-only TLS 1.3 telemetry conduits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-mono text-xs font-bold text-slate-500 block mb-1">Level 0 &ndash; 1</span>
                <h4 className="font-bold text-slate-900 text-sm">Physical Meters &amp; Sensors</h4>
                <p className="text-slate-500 text-xs mt-1">Split-core CTs, RTD temperature probes, and ultrasonic flow transmitters.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-mono text-xs font-bold text-slate-500 block mb-1">Level 2 &ndash; 3</span>
                <h4 className="font-bold text-slate-900 text-sm">Plant SCADA &amp; Edge</h4>
                <p className="text-slate-500 text-xs mt-1">Local RS-485 Modbus RTU/TCP loops and DIN-rail industrial edge hubs.</p>
              </div>

              <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200">
                <span className="font-mono text-xs font-bold text-emerald-700 block mb-1">IDMZ Boundary</span>
                <h4 className="font-bold text-slate-900 text-sm">Industrial DMZ Conduit</h4>
                <p className="text-slate-600 text-xs mt-1">Unidirectional data diodes and TLS 1.3 encryption with zero inbound ports.</p>
              </div>

              <div className="p-4 bg-sky-50/60 rounded-2xl border border-sky-200">
                <span className="font-mono text-xs font-bold text-sky-700 block mb-1">Level 4</span>
                <h4 className="font-bold text-slate-900 text-sm">Enterprise Cloud &amp; AI</h4>
                <p className="text-slate-600 text-xs mt-1">Time-series data lakehouses, predictive MLOps, and Power BI dashboards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. BOTTOM CTA
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-4 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-xl text-white space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-500/30 inline-block mb-1">
              Start Your Transformation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to modernize your industrial IT infrastructure?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
              Schedule a discovery session with our solutions architects to map out your IoT, cloud, or cybersecurity roadmap.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl text-xs transition-colors shadow-md"
              >
                Schedule an Architecture Session
              </Link>
              <button
                onClick={onRequestDemo}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs border border-white/20 shadow-xs transition-colors"
              >
                Request Platform Walkthrough
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalTransformationPage;
