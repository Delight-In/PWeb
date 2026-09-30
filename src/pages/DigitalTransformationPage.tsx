import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, ShieldCheck, Database, Bot, ArrowRight, 
  CheckCircle2, Network 
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

interface DigitalTransformationPageProps {
  onRequestDemo: () => void;
  onOpenCapability: () => void;
}

export const DigitalTransformationPage: React.FC<DigitalTransformationPageProps> = ({
  onRequestDemo,
  onOpenCapability,
}) => {
  return (
    <>
      <SeoHead
        title="IT Services & Digital Transformation | IoT, Cloud, Cybersecurity, Data & AI — Prishitech"
        description="End-to-end IT services from Prishitech Solutions — IoT & Remote Monitoring, Cloud & Infrastructure, Cybersecurity & OT Security, Data & Analytics, and AI & Process Automation."
      />

      <div className="pt-24 pb-16 space-y-20">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto pt-6 sm:pt-12">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-950/60 border border-cyan-800/80 px-3 py-1.5 rounded-full inline-block mb-4">
              Enterprise Technology Backbone
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              “IT Services &amp; Digital Transformation,{' '}
              <span className="gradient-text">Built Around Your Operations</span>”
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              The technology backbone behind resource intelligence — available as standalone services for any digital transformation initiative.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-glow-cyan flex items-center justify-center gap-2"
              >
                <span>Discuss Your Digital Transformation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={onOpenCapability}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm border border-slate-700 transition-colors"
              >
                Download IT Architecture Specs
              </button>
            </div>
          </div>
        </section>

        {/* SECTION: 5 CORE PILLARS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
          {/* PILLAR 1: IoT & REMOTE MONITORING */}
          <div id="iot" className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 scroll-mt-28">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Network className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Pillar 01 · Edge Connectivity &amp; Telemetry
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  IoT &amp; Remote Monitoring
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Bridge the physical and digital gap. We engineer industrial-grade IoT architectures that capture high-frequency operational telemetry from harsh factory floors and disperse multi-facility campuses.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Sensor deployment and edge connectivity for real-time telemetry</strong>
                      <span className="text-slate-400">Turnkey integration of RS-485, Modbus RTU/TCP, BACnet, LoRaWAN, and 4G/5G industrial gateways with edge-caching resilience.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Remote asset monitoring across multiple sites from one console</strong>
                      <span className="text-slate-400">Centralized fleet management that aggregates geographically distributed plants into a unified multi-tenant console.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Scalable IoT architecture from pilot to enterprise rollout</strong>
                      <span className="text-slate-400">Modular deployment patterns that ensure a 5-meter pilot seamlessly expands into 10,000+ connected sensors without rewriting code.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Edge Architecture Card */}
              <div className="w-full lg:w-1/2 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="text-xs font-semibold text-white pb-3 border-b border-slate-800 flex justify-between">
                  <span>Prishitech Edge Gateway Specs</span>
                  <span className="text-cyan-400 font-mono">Firmware: v4.2.8</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex justify-between p-2.5 bg-slate-900 rounded-lg">
                    <span className="text-slate-400">Supported Protocols:</span>
                    <span className="text-white font-mono">Modbus TCP/RTU, BACnet/IP, MQTT, OPC UA</span>
                  </div>
                  <div className="flex justify-between p-2.5 bg-slate-900 rounded-lg">
                    <span className="text-slate-400">Local Edge Storage Buffer:</span>
                    <span className="text-emerald-400 font-mono">Up to 30 days offline caching</span>
                  </div>
                  <div className="flex justify-between p-2.5 bg-slate-900 rounded-lg">
                    <span className="text-slate-400">Hardware Rating:</span>
                    <span className="text-white font-mono">IP67 Enclosure (-20°C to +70°C)</span>
                  </div>
                  <div className="flex justify-between p-2.5 bg-slate-900 rounded-lg">
                    <span className="text-slate-400">Cryptographic Security:</span>
                    <span className="text-cyan-300 font-mono">Hardware TPM 2.0 + TLS 1.3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PILLAR 2: CLOUD & INFRASTRUCTURE */}
          <div id="cloud" className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 scroll-mt-28">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Cloud className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  Pillar 02 · Resilient Scalability
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Cloud &amp; Infrastructure
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Design, migration, and management of resilient hybrid-cloud architectures. We ensure your mission-critical applications remain highly available, scalable, and cost-efficient.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Cloud migration and infrastructure modernization</strong>
                      <span className="text-slate-400">Seamless transition of legacy ERPs, SCADA historials, and workloads into secure AWS, Microsoft Azure, or GCP environments.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Scalable, resilient architecture design &amp; management</strong>
                      <span className="text-slate-400">Kubernetes microservices, multi-region failover, 99.99% uptime SLAs, and Infrastructure-as-Code (Terraform) governance.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Infrastructure cost optimization and performance tuning</strong>
                      <span className="text-slate-400">FinOps practices that eliminate idle compute, right-size database clusters, and deliver 25-40% cloud billing reductions.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud blueprint card */}
              <div className="w-full lg:w-1/2 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="text-xs font-semibold text-white pb-3 border-b border-slate-800">
                  Infrastructure Modernization Capabilities
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-blue-400 font-semibold block">Multi-Cloud Orchestration</span>
                    <span className="text-slate-400 text-[11px] mt-1 block">AWS / Azure / GCP hybrid topologies</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-cyan-400 font-semibold block">Kubernetes &amp; Containers</span>
                    <span className="text-slate-400 text-[11px] mt-1 block">Production microservices &amp; GitOps</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-emerald-400 font-semibold block">FinOps Cost Governance</span>
                    <span className="text-slate-400 text-[11px] mt-1 block">Continuous spend reclamation</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-amber-400 font-semibold block">Disaster Recovery (DR)</span>
                    <span className="text-slate-400 text-[11px] mt-1 block">Sub-15 min RTO / Zero data RPO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PILLAR 3: CYBERSECURITY & OT SECURITY */}
          <div id="cybersecurity" className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 scroll-mt-28">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Pillar 03 · Industrial Defense
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Cybersecurity &amp; OT Security
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Protecting both enterprise corporate networks and operational plant assets. Unlike generic IT vendors, we understand SCADA, PLCs, and safety instrumented systems.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">IT and OT network security assessments</strong>
                      <span className="text-slate-400">Gap audits against IEC 62443, NIST SP 800-82, and ISO 27001 to uncover air-gap breaches and unpatched control firmware.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Industrial control system (ICS/SCADA) security hardening</strong>
                      <span className="text-slate-400">Purdue Model network segmentation, industrial firewalls, DMZ micro-segmentation, and zero-trust edge enforcement.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Continuous threat monitoring &amp; incident response readiness</strong>
                      <span className="text-slate-400">24/7 OT SIEM integration, anomalous Modbus packet detection, and red-team emergency containment procedures.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* OT Security Architecture card */}
              <div className="w-full lg:w-1/2 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="text-xs font-semibold text-white pb-3 border-b border-slate-800">
                  Purdue Model Defense-in-Depth Framework
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-slate-900 rounded-lg flex justify-between">
                    <span className="text-slate-400">Level 4/5 (Enterprise IT):</span>
                    <span className="text-white font-mono">ERP, BI &amp; Cloud Telemetry</span>
                  </div>
                  <div className="p-2.5 bg-emerald-950/30 border border-emerald-900/50 rounded-lg flex justify-between">
                    <span className="text-emerald-400 font-semibold">Industrial DMZ (IDMZ):</span>
                    <span className="text-emerald-300 font-mono">Prishitech Secure Proxy &amp; Gateway</span>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg flex justify-between">
                    <span className="text-slate-400">Level 3 (Operations/SCADA):</span>
                    <span className="text-white font-mono">Historian &amp; HMI Supervision</span>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg flex justify-between">
                    <span className="text-slate-400">Level 1/2 (Control Network):</span>
                    <span className="text-white font-mono">PLCs, RTUs &amp; VFD Drives</span>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg flex justify-between">
                    <span className="text-slate-400">Level 0 (Physical Process):</span>
                    <span className="text-white font-mono">Meters, Valves &amp; Sensors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PILLAR 4: DATA & ANALYTICS */}
          <div id="analytics" className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 scroll-mt-28">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Database className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
                  Pillar 04 · High-Velocity Pipelines
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Data &amp; Analytics
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Turn raw high-velocity sensor data into executive intelligence. We build clean, reliable pipelines that marry shop-floor telemetry with top-floor financial metrics.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Data pipeline design across operational and IT data sources</strong>
                      <span className="text-slate-400">Scalable streaming ETL (Kafka, MQTT brokers, time-series databases) that ingests millions of events daily without dropped frames.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Dashboards and reporting for operational &amp; executive audiences</strong>
                      <span className="text-slate-400">Role-tailored dashboards — plant engineers see shift-level heatmaps while CFOs see tariff cost-center allocations and ESG metrics.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Predictive analytics to support proactive decision-making</strong>
                      <span className="text-slate-400">Regression models that forecast tomorrow's peak demand hours based on ambient weather forecasts and planned batch runs.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data pipeline graphic */}
              <div className="w-full lg:w-1/2 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="text-xs font-semibold text-white pb-3 border-b border-slate-800">
                  Time-Series Processing Architecture
                </div>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-purple-400 font-semibold block">Ingestion Layer:</span>
                      <span className="text-slate-400 text-[11px]">MQTT / OPC UA streaming collectors</span>
                    </div>
                    <span className="text-emerald-400 font-mono">10,000+ msg/s</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-cyan-400 font-semibold block">Time-Series Engine:</span>
                      <span className="text-slate-400 text-[11px]">Sub-second aggregation &amp; rollup</span>
                    </div>
                    <span className="text-cyan-300 font-mono">Timescale / Influx</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-emerald-400 font-semibold block">Analytics &amp; BI:</span>
                      <span className="text-slate-400 text-[11px]">Real-time operational dashboards &amp; REST APIs</span>
                    </div>
                    <span className="text-emerald-400 font-mono">Single pane</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PILLAR 5: AI & PROCESS AUTOMATION */}
          <div id="ai" className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 scroll-mt-28">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400">
                  Pillar 05 · Autonomous Optimization
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  AI &amp; Process Automation
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Turn observation into autonomous action. Our machine learning algorithms close the loop between data collection and facility actuation, eliminating unnecessary operator burden.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">AI-driven anomaly detection and forecasting</strong>
                      <span className="text-slate-400">Unsupervised learning models that detect subtle degradation in power factor, motor thermal drift, or burner air-fuel ratio.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Robotic process automation for repetitive workflows</strong>
                      <span className="text-slate-400">Automate daily utility reconciliations, shift energy log generation, and statutory compliance filing without manual spreadsheet entries.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Intelligent alerting that turns data into recommended actions</strong>
                      <span className="text-slate-400">Contextual notifications that tell technicians exact corrective steps (e.g., “Clean Condenser Bank 2; approach temp exceeded 2.5°C threshold”).</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Automation card */}
              <div className="w-full lg:w-1/2 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="text-xs font-semibold text-white pb-3 border-b border-slate-800">
                  Autonomous Optimization Loop
                </div>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="font-semibold text-teal-400 mb-1">1. Continuous Sensing &amp; Drift Detection</div>
                    <p className="text-slate-400">Real-time model comparing actual equipment operating signatures against calibrated digital twins.</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="font-semibold text-cyan-400 mb-1">2. Prescriptive Recommendation Engine</div>
                    <p className="text-slate-400">Generates precise set-point adjustments to prevent peak kVA penalties or thermal inefficiencies.</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="font-semibold text-emerald-400 mb-1">3. Automated Closed-Loop Actuation</div>
                    <p className="text-slate-400">Safely dispatches commands via Modbus/BACnet to VFDs and chiller sequencing controllers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to discuss your digital transformation initiative?
            </h2>
            <p className="text-slate-300 text-sm">
              Whether retrofitting brownfield sensors or building high-concurrency cloud telemetry pipelines, our engineering team is ready to assist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-glow-cyan"
              >
                Discuss Your Digital Transformation
              </Link>
              <button
                onClick={onRequestDemo}
                className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-sm transition-colors"
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
