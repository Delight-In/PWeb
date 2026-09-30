import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, ShieldCheck, Database, Bot, ArrowRight, 
  CheckCircle2, Network, ChevronDown, ChevronUp, 
  Download, Layers, Lock, Cpu
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
      accentColor: 'text-sky-600',
      bgAccent: 'bg-sky-50 border-sky-200',
      headline: 'Sensor deployment and edge connectivity for real-time telemetry across facilities.',
      summary: 'Bridge the physical and digital gap. We engineer industrial-grade IoT architectures that capture high-frequency operational telemetry from harsh factory floors and dispersed multi-facility campuses.',
      points: [
        {
          title: 'Turnkey Edge Connectivity',
          desc: 'Seamless integration of RS-485, Modbus, BACnet, and 4G/5G industrial gateways with 30-day offline buffer resilience.',
        },
        {
          title: 'Multi-Site Fleet Monitoring',
          desc: 'Centralized console aggregating geographically dispersed factories and buildings into one pane of glass.',
        },
        {
          title: 'Frictionless Scaling',
          desc: 'Modular deployment patterns ensuring a 5-meter pilot seamlessly scales to 10,000+ connected sensors without re-architecting.',
        },
      ],
      specs: [
        { label: 'Supported Protocols', value: 'Modbus TCP/RTU, BACnet, MQTT, OPC UA' },
        { label: 'Offline Caching Buffer', value: 'Up to 30 Days Local Storage' },
        { label: 'Enclosure Rating', value: 'IP65 / NEMA 4X Industrial Grade' },
        { label: 'Edge-to-Cloud Latency', value: '< 850 ms Real-Time Sync' },
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
      accentColor: 'text-indigo-600',
      bgAccent: 'bg-indigo-50 border-indigo-200',
      headline: 'Cloud architecture, migration and managed infrastructure for industrial workloads.',
      summary: 'Build high-availability, hybrid cloud environments designed to ingest millions of time-series sensor messages per minute with 99.99% uptime guarantees.',
      points: [
        {
          title: 'Hybrid & Multi-Cloud Architecture',
          desc: 'Resilient AWS, Azure, and Google Cloud setups ensuring uninterrupted operational data flow even during network outages.',
        },
        {
          title: 'High-Throughput Time-Series Ingestion',
          desc: 'Scalable cloud pipelines streaming raw telemetry into TimescaleDB and BigQuery without dropped frames.',
        },
        {
          title: '24/7 Managed Infrastructure & SLAs',
          desc: 'Continuous monitoring, automated infrastructure patching, container orchestration, and disaster recovery replication.',
        },
      ],
      specs: [
        { label: 'Ingestion Throughput', value: '100,000+ events/sec burst' },
        { label: 'Guaranteed Availability', value: '99.99% Operational SLA' },
        { label: 'Disaster Recovery RPO/RTO', value: '< 5 min RPO · < 15 min RTO' },
        { label: 'Data Retention Tiering', value: 'Hot (30d) · Warm (1yr) · Cold (10yr)' },
      ],
      techDetails: [
        'Infrastructure-as-Code (Terraform & Ansible) for reproducible multi-region deployments.',
        'Kubernetes (EKS/GKE) microservices architecture with auto-scaling worker nodes.',
        'Kafka and AWS Kinesis distributed event streams for sub-second telemetry queues.',
        'SOC 2 and ISO 27001 compliant cloud VPC isolation with private link connectivity.',
      ],
    },
    cyber: {
      title: 'Cybersecurity & OT Security',
      tag: 'Service 03 · Purdue Model & Zero Trust',
      icon: ShieldCheck,
      accentColor: 'text-emerald-700',
      bgAccent: 'bg-emerald-50 border-emerald-200',
      headline: 'Industrial cybersecurity, OT/IT convergence security and compliance for critical assets.',
      summary: 'Connecting factory floors to the cloud exposes legacy PLCs and SCADA networks to severe risk. We implement Purdue Model network segmentation and zero-trust edge conduits.',
      points: [
        {
          title: 'Purdue Model OT Network Segmentation',
          desc: 'Strict isolation of physical process control (Level 0-3) from corporate IT networks (Level 4-5) via hardened IDMZs.',
        },
        {
          title: 'OT-Specific Threat Monitoring & IDS',
          desc: 'Passive deep packet inspection detecting anomalous Modbus function codes, unauthorized ladder logic edits, and lateral movement.',
        },
        {
          title: 'Statutory Compliance & Hardening',
          desc: 'Comprehensive gap assessments and audits aligned with IEC 62443, NIST SP 800-82, and ISO 27001 standards.',
        },
      ],
      specs: [
        { label: 'Architectural Framework', value: 'Purdue Model (Levels 0–5) Strict Isolation' },
        { label: 'Data Conduit Security', value: 'One-Way Unidirectional Data Diodes' },
        { label: 'Compliance Standards', value: 'IEC 62443-3-3, NIST SP 800-82, ISO 27001' },
        { label: 'Encryption Protocol', value: 'TLS 1.3 with Hardware-Backed Keys' },
      ],
      techDetails: [
        'Industrial demilitarized zone (IDMZ) design with dual-homed bastion hosts.',
        'Passive OT network monitoring preventing network packet flooding or PLC disruptions.',
        'Zero-trust network access (ZTNA) for remote engineering maintenance without VPN exposure.',
        'Comprehensive supply-chain SBOM validation for edge firmware dependencies.',
      ],
    },
    data: {
      title: 'Data & Analytics',
      tag: 'Service 04 · BI & Time-Series Intelligence',
      icon: Database,
      accentColor: 'text-teal-700',
      bgAccent: 'bg-teal-50 border-teal-200',
      headline: 'Data engineering, analytics pipelines and business intelligence for operations.',
      summary: 'Transform noisy, fragmented sensor streams into clean, structured data models that executive leadership and plant floor managers can act upon.',
      points: [
        {
          title: 'Time-Series Data Engineering',
          desc: 'High-frequency sensor cleaning, timestamp reconciliation, deadband filtering, and automated gap interpolation.',
        },
        {
          title: 'Executive Dashboards & Reporting',
          desc: 'Unified operational reporting across energy, water, production OEE, and corporate ESG metrics.',
        },
        {
          title: 'Predictive Trend Modeling',
          desc: 'Forecast utility spending and asset degradation up to 90 days in advance based on seasonal weather and production targets.',
        },
      ],
      specs: [
        { label: 'Storage Architecture', value: 'Hybrid Time-Series DB + Cloud Data Lake' },
        { label: 'Query Response Time', value: '< 200 ms across 1B+ data points' },
        { label: 'BI Connectors', value: 'Power BI, Tableau, Grafana, Custom React' },
        { label: 'Data Cleaning', value: 'Automated Deadband & Spike Suppression' },
      ],
      techDetails: [
        'Distributed time-series aggregation using TimescaleDB, ClickHouse, and Snowflake.',
        'Automated dbt transformation pipelines with integrated data quality testing.',
        'RESTful and GraphQL API layer for seamless ERP (SAP, Oracle) integration.',
        'Automated SEBI BRSR and GHG Protocol Scope 1/2 emissions calculation models.',
      ],
    },
    ai: {
      title: 'AI & Process Automation',
      tag: 'Service 05 · Intelligent Autonomy',
      icon: Bot,
      accentColor: 'text-purple-700',
      bgAccent: 'bg-purple-50 border-purple-200',
      headline: 'Applied AI for predictive maintenance, anomaly detection and automated operational workflows.',
      summary: 'Go beyond reactive dashboards. Our applied machine learning models analyze complex multi-variable sensor feeds to predict equipment breakdown and automate peak load-shedding.',
      points: [
        {
          title: 'Predictive Maintenance Models',
          desc: 'Analyzes vibration, thermal drift, and power draw to predict chiller compressor and motor failure weeks in advance.',
        },
        {
          title: 'Dynamic Anomaly Detection',
          desc: 'Machine learning baselines that adapt to shift schedules and ambient weather, eliminating false nuisance alarms.',
        },
        {
          title: 'Automated Operational Workflows',
          desc: 'Direct integration with plant computerized maintenance management systems (CMMS) to auto-generate preventive work orders.',
        },
      ],
      specs: [
        { label: 'Inference Engine', value: 'Edge AI Micro-Inference + Cloud Training' },
        { label: 'Failure Prediction Lead Time', value: '7 to 21 Days Advance Notice' },
        { label: 'False Positive Suppression', value: '94.8% Reduction vs Static Limits' },
        { label: 'Workflow Integration', value: 'SAP PM, Maximo, WhatsApp Dispatch' },
      ],
      techDetails: [
        'Lightweight TensorFlow Lite models compiled directly onto edge gateways for offline inference.',
        'Unsupervised autoencoder neural networks for multivariate anomaly detection.',
        'Bayesian optimization for automated chiller staging and cooling tower setpoint reset.',
        'End-to-end MLOps pipeline with automated model retraining and drift detection.',
      ],
    },
  };

  const currentService = servicesData[activeService];
  const ServiceIcon = currentService.icon;

  return (
    <>
      <SeoHead
        title="IT Services & Digital Transformation | IoT, Cloud, Cybersecurity, Data & AI — Prishitech"
        description="End-to-end IT services from Prishitech Solutions — IoT & Remote Monitoring, Cloud & Infrastructure, Cybersecurity & OT Security, Data & Analytics, and AI & Process Automation."
      />

      <div className="pt-24 pb-20 space-y-20">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto pt-6 sm:pt-10">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Enterprise Technology Backbone
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              IT Services &amp; Digital Transformation,{' '}
              <span className="text-sky-700">Built Around Your Operations</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              The technology backbone behind resource intelligence — available as standalone services for any digital transformation initiative.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Discuss Your IT Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
              </Link>
              <button
                onClick={onOpenCapability}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs sm:text-sm border border-slate-200 shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Architecture Specs (PDF)</span>
              </button>
            </div>
          </div>
        </section>

        {/* INTERACTIVE SERVICE STUDIO (Clean, Tabbed, User-Friendly) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Top Segmented Tab Navigation */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-6">
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
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Focused Showcase */}
          <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Bite-Sized Capabilities */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <div className={`w-9 h-9 rounded-xl ${currentService.bgAccent} flex items-center justify-center`}>
                    <ServiceIcon className={`w-5 h-5 ${currentService.accentColor}`} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                      {currentService.tag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {currentService.title}
                    </h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {currentService.headline} {currentService.summary}
                </p>

                {/* 3 Scannable Feature Pills */}
                <div className="space-y-3 pt-1">
                  {currentService.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold text-xs mb-0.5">{pt.title}</strong>
                        <span className="text-slate-600 leading-relaxed">{pt.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Consult an IT Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => setShowTechSpecs(!showTechSpecs)}
                    className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs border border-slate-200 flex items-center gap-1.5 transition-colors"
                  >
                    <span>{showTechSpecs ? 'Hide Architecture Specs' : 'View Architecture Specs'}</span>
                    {showTechSpecs ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Right Column: Architectural Highlights */}
              <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-semibold text-slate-900">Technical Highlights</span>
                  <span className="text-sky-700 font-mono font-medium">Enterprise Grade</span>
                </div>

                <div className="space-y-3">
                  {currentService.specs.map((s, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 text-xs flex justify-between items-center">
                      <span className="text-slate-500">{s.label}:</span>
                      <span className="font-semibold font-mono text-slate-900 text-right">{s.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                  ✓ Enterprise SLA with 24/7 technical support and rapid incident escalation.
                </div>
              </div>
            </div>

            {/* Collapsible Deep Engineering Specifications */}
            {showTechSpecs && (
              <div className="mt-8 pt-6 border-t border-slate-200 animate-fade-in">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                  Underlying Frameworks, Security Standards &amp; Conduits:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {currentService.techDetails.map((detail, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 flex items-start gap-2">
                      <span className="text-sky-600 font-bold">•</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* DELIVERY METHODOLOGY (Clean 4-Step Scannable Process) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Delivery Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              From Assessment to Autonomous Operations
            </h2>
            <p className="text-slate-600 text-sm mt-1.5">
              Structured engineering sprints that minimize operational disruption while ensuring fast time-to-value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: 'Phase 01',
                title: 'Discovery & Audit',
                desc: 'On-site technical assessment of existing OT networks, physical meters, and cloud readiness.',
                icon: Layers,
              },
              {
                step: 'Phase 02',
                title: 'Purdue Architecture',
                desc: 'Designing IDMZs, zero-trust edge conduits, and fail-safe hardware communication topologies.',
                icon: Lock,
              },
              {
                step: 'Phase 03',
                title: 'Pilot & Validation',
                desc: 'Deploying edge telemetry on critical incoming feeders and validating live telemetry against discom bills.',
                icon: Cpu,
              },
              {
                step: 'Phase 04',
                title: 'Enterprise Scale',
                desc: 'Full campus rollouts, ERP integration, automated AI workflows, and 24/7 managed support.',
                icon: Bot,
              },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.step} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-4">
                    <Icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase text-slate-500">{p.step}</span>
                  <h3 className="text-base font-bold text-slate-900 mt-1 mb-1.5">{p.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-6">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 inline-block mb-3">
              Next Steps
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Ready to modernize your industrial IT foundation?
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 mb-6">
              Connect with our enterprise solutions architects in Vaishali, Ghaziabad to map out your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors shadow-xs flex items-center justify-center gap-2"
              >
                <span>Schedule Architecture Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs border border-slate-200 shadow-xs transition-colors"
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
