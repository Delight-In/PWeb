import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Droplets, Flame, Wind, ShieldCheck, Cpu, Cloud, 
  Database, Bot, ArrowRight, CheckCircle2, ChevronRight, 
  Layers, Building2, Activity, Award 
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { TelemetrySimulator } from '../components/TelemetrySimulator';
import { RoiCalculator } from '../components/RoiCalculator';

interface HomePageProps {
  onRequestDemo: () => void;
  onOpenCapability: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRequestDemo, onOpenCapability }) => {
  return (
    <>
      <SeoHead
        title="Prishitech Solutions | Resource Intelligence & Digital Transformation for Industry"
        description="Prishitech Solutions helps industrial and commercial facilities cut energy, water and gas waste with a unified resource intelligence platform, backed by IoT, cloud, cybersecurity, data and AI services."
      />

      <div className="pt-24 pb-16 space-y-24">
        {/* 1. HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Subtle grid background & lighting accent */}
          <div className="absolute inset-0 tech-grid-bg opacity-70 pointer-events-none -z-10"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10"></div>

          <div className="text-center max-w-4xl mx-auto pt-6 sm:pt-12 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 shadow-glow-emerald">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              TRIAXIS Consortium Partner · Industrial Grade
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              One Platform.{' '}
              <span className="gradient-text">Every Resource.</span>{' '}
              Total Intelligence.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
              Prishitech Solutions unifies energy, water, gas and chiller management into a single resource intelligence platform — backed by end-to-end IT services and digital transformation expertise, as a TRIAXIS Consortium partner.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/solutions/resource-intelligence"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-base transition-all shadow-glow-emerald hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-white font-semibold rounded-xl text-base transition-all border border-slate-700/80 hover:border-emerald-500/40 flex items-center justify-center gap-2"
              >
                <span>Request a Demo</span>
              </button>
            </div>

            {/* Quick trust metrics bar */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-3xl mx-auto">
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400">18 - 32%</div>
                <div className="text-xs text-slate-400 mt-0.5">Average Utility Cost Reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-cyan-400">&lt; 1 sec</div>
                <div className="text-xs text-slate-400 mt-0.5">Edge Sensor Telemetry Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white">4 Utility Streams</div>
                <div className="text-xs text-slate-400 mt-0.5">Power, Water, Gas &amp; Chiller</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400">1 SLA</div>
                <div className="text-xs text-slate-400 mt-0.5">TRIAXIS Unified Governance</div>
              </div>
            </div>
          </div>

          {/* Real-time Interactive Telemetry Console Display */}
          <div className="mt-8">
            <TelemetrySimulator />
          </div>
        </section>

        {/* 2. SECTION: TWO WAYS WE HELP YOU */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
              Integrated Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Two Ways We Help You
            </h2>
            <p className="text-slate-400 text-base mt-2">
              Whether you need turnkey utility stream optimization or a modern cloud &amp; OT technology foundation, Prishitech provides single-source accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Resource Intelligence Platform */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-8 border border-slate-800 relative flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-glow-emerald">
                  <Zap className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Portfolio 01
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                  Resource Intelligence Platform
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Real-time visibility and control across Energy, Water, Gas and Chiller Management, plus Energy Advisory. Built to eliminate blind spots, stop resource leaks, and automate peak-demand shedding across your physical plant.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    { title: 'Energy Management', desc: 'Meters, feeders, peak-load alerts', icon: Zap },
                    { title: 'Water Management', desc: 'Flow tracking, acoustic leak detection', icon: Droplets },
                    { title: 'Gas Management', desc: 'Pressure telemetry, safety thresholds', icon: Flame },
                    { title: 'Chiller Management', desc: 'COP monitoring, predictive HVAC staging', icon: Wind },
                    { title: 'Energy Advisory', desc: 'BEE audits, compliance, retrofit ROI', icon: Award },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/90 text-xs">
                        <div className="flex items-center gap-2 font-semibold text-white mb-1">
                          <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{item.title}</span>
                        </div>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Link
                to="/solutions/resource-intelligence"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm group"
              >
                <span>Explore Resource Intelligence Platform</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 2: IT Services & Digital Transformation */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-8 border border-slate-800 relative flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-glow-cyan">
                  <Cpu className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Portfolio 02
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                  IT Services &amp; Digital Transformation
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  The technology backbone behind resource intelligence — available as standalone services for any digital transformation initiative. From rugged edge sensors to enterprise cloud analytics and Purdue-model OT security.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    { title: 'IoT & Remote Monitoring', desc: 'Edge telemetry & multi-site visibility', icon: Activity },
                    { title: 'Cloud & Infrastructure', desc: 'Scalable hybrid cloud architecture', icon: Cloud },
                    { title: 'Cybersecurity & OT Security', desc: 'ICS/SCADA hardening & compliance', icon: ShieldCheck },
                    { title: 'Data & Analytics', desc: 'Pipeline design & predictive BI models', icon: Database },
                    { title: 'AI & Process Automation', desc: 'Anomaly detection & robotic workflows', icon: Bot },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/90 text-xs">
                        <div className="flex items-center gap-2 font-semibold text-white mb-1">
                          <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{item.title}</span>
                        </div>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Link
                to="/solutions/digital-transformation"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group"
              >
                <span>Discover IT &amp; Digital Transformation Services</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. SECTION: WHY PRISHITECH */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Core Differentiators
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                Why Prishitech
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Engineered specifically for complex facilities where reliability, data integrity, and cyber-physical security cannot be compromised.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Single-Pane-of-Glass Monitoring',
                  desc: 'Unify electricity meters, water flows, gas valves, and chiller staging into one contextualized interface instead of 5 disconnected software vendors.',
                  icon: Layers,
                  accent: 'emerald',
                },
                {
                  title: 'OT-Aware Cybersecurity',
                  desc: 'Built specifically for operational technology and industrial control systems (ICS/SCADA), enforcing Purdue model isolation and zero-trust edge policies.',
                  icon: ShieldCheck,
                  accent: 'cyan',
                },
                {
                  title: 'AI-Driven Process Automation',
                  desc: 'Turn raw sensor streams into automated physical actions, predictive maintenance work orders, and dynamic peak-load mitigation in real time.',
                  icon: Bot,
                  accent: 'emerald',
                },
                {
                  title: 'Backed by TRIAXIS Consortium',
                  desc: 'Combined depth of power grid engineers, certified energy auditors, and enterprise cloud architects under a single accountable SLA.',
                  icon: Award,
                  accent: 'cyan',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 bg-slate-950/70 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl transition-all shadow-glow-emerald"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. ROI CALCULATOR SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <RoiCalculator />
        </section>

        {/* 5. TRIAXIS CONSORTIUM HIGHLIGHT */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <Building2 className="w-4 h-4" />
                <span>The Power of Strategic Partnership</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">
                Stronger Together: Technology + Domain Expertise
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                The TRIAXIS Consortium brings Prishitech's resource intelligence platform and IT services together with specialist partners across energy, power and facilities domains — so clients get technology and subject-matter expertise from one coordinated team, not a patchwork of vendors.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bureau of Energy Efficiency (BEE) Certified
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Turnkey Hardware + Cloud Architecture
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Vendor Disconnect
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                to="/triaxis"
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-glow-emerald flex items-center justify-center gap-2"
              >
                <span>Learn About TRIAXIS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={onOpenCapability}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm border border-slate-700 transition-colors"
              >
                View Capability PDF
              </button>
            </div>
          </div>
        </section>

        {/* 6. INDUSTRIES SERVED PREVIEW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Sectors &amp; Facilities
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Built for Facilities Where Every Resource Counts
              </h2>
            </div>
            <Link
              to="/industries"
              className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm flex items-center gap-1"
            >
              <span>Explore all industries</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Manufacturing & Industrial Plants',
                desc: 'Heavy motor telemetry, peak electricity tariff shedding, boiler gas flow, and compressed air leakage tracking.',
                metric: '26% avg power saving',
              },
              {
                title: 'Commercial Real Estate & Portfolios',
                desc: 'Multi-tenant sub-metering, chiller plant COP optimization, and automated ESG carbon disclosure reporting.',
                metric: '₹42 Lakh/yr portfolio saving',
              },
              {
                title: 'Utilities & Energy Providers',
                desc: 'Feeder loss identification, smart grid edge analytics, power factor correction, and substation monitoring.',
                metric: '99.98% telemetry uptime',
              },
              {
                title: 'Hospitality & Large Campuses',
                desc: 'Zone-based guest cooling automation, commercial laundry water recycling balance, and kitchen gas telemetry.',
                metric: '19% water waste eliminated',
              },
              {
                title: 'Government / PSU Facilities',
                desc: 'Strict adherence to national energy conservation codes, automated BEE compliance, and sovereign-grade OT hardening.',
                metric: 'Full BEE & ISO 50001 compliance',
              },
              {
                title: 'IT Parks & Hyperscale Data Centers',
                desc: 'PUE optimization, high-density server rack temperature monitoring, UPS battery health, and dual-source power balancing.',
                metric: '1.24 target PUE achieved',
              },
            ].map((ind) => (
              <div
                key={ind.title}
                className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{ind.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">{ind.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Benchmark:</span>
                  <span className="text-emerald-400 font-mono font-semibold">{ind.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. BOTTOM CTA SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 p-8 sm:p-14 rounded-3xl border border-emerald-500/30 text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to modernize your facility resources?
            </h2>
            <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
              Connect with our solutions engineering team in Vaishali, Ghaziabad to schedule a site walk or request a tailored Resource Intelligence platform demonstration.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-base transition-all shadow-glow-emerald"
              >
                Talk to an Expert
              </Link>
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-base border border-slate-700 transition-colors"
              >
                Request a Platform Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
