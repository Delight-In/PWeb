import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Droplets, Flame, Wind, ShieldCheck, Cpu, Cloud, 
  Bot, ArrowRight, ChevronRight, 
  Layers, Building2, Activity, Award, Factory, Hotel, Landmark,
  ChevronDown, ChevronUp, HelpCircle, Radio
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { TelemetrySimulator } from '../components/TelemetrySimulator';
import { RoiCalculator } from '../components/RoiCalculator';

interface HomePageProps {
  onRequestDemo: () => void;
  onOpenCapability: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRequestDemo, onOpenCapability }) => {
  const [activePortfolio, setActivePortfolio] = useState<'resource' | 'digital'>('resource');
  const [activeIndustry, setActiveIndustry] = useState<string>('manufacturing');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Real-time ticking values for live hero ribbon
  const [liveTicker, setLiveTicker] = useState({
    kw: 844.2,
    water: 142.6,
    gas: 4.18,
    cop: 5.84,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTicker({
        kw: +(840 + Math.random() * 12).toFixed(1),
        water: +(140 + Math.random() * 4).toFixed(1),
        gas: +(4.15 + Math.random() * 0.08).toFixed(2),
        cop: +(5.8 + Math.random() * 0.15).toFixed(2),
      });
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const industriesData: Record<string, {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    tag: string;
    summary: string;
    challenges: string[];
    solution: string;
    impact: string;
  }> = {
    manufacturing: {
      title: 'Manufacturing & Industrial Plants',
      icon: Factory,
      tag: 'Heavy & Discrete Manufacturing',
      summary: 'Prevent discom peak kVA penalties, catch boiler line leaks, and automate motor energy baselines.',
      challenges: [
        'Volatile electrical loads causing sudden peak demand surcharge tariffs.',
        'Thermal energy losses in unmonitored steam and PNG gas distribution lines.',
      ],
      solution: 'Sub-second feeder telemetry with automated peak-load alert notifications and combustion monitoring.',
      impact: '26% reduction in specific energy consumption (SEC)',
    },
    'real-estate': {
      title: 'Commercial Real Estate & Portfolios',
      icon: Building2,
      tag: 'Grade-A Offices & IT Parks',
      summary: 'Accurate multi-tenant sub-metering, chiller plant COP optimization, and automated ESG disclosures.',
      challenges: [
        'Central HVAC chiller plants consuming over 50% of facility power at poor COP.',
        'Disputed manual sub-metering readings across commercial tenant floors.',
      ],
      solution: 'Continuous kW/TR chiller tracking, condenser setpoint reset, and automated tenant energy invoicing.',
      impact: '₹38 – 52 Lakh annual utility savings per complex',
    },
    utilities: {
      title: 'Utilities & Energy Providers',
      icon: Zap,
      tag: 'Discoms & IPPs',
      summary: 'Substation telemetry, power quality analysis, and real-time feeder loss detection.',
      challenges: [
        'High AT&C transmission losses and undetected power factor dips.',
        'Fragmented telemetry across remote distribution transformers.',
      ],
      solution: 'Cloud-connected power quality analyzers tracking THD, unbalance, and active power factor.',
      impact: '99.98% telemetry uptime with sub-second alert dispatch',
    },
    hospitality: {
      title: 'Hospitality & Large Campuses',
      icon: Hotel,
      tag: 'Hotels & Healthcare',
      summary: 'Occupancy-linked cooling, commercial laundry water accounting, and kitchen gas monitoring.',
      challenges: [
        'High cooling costs in vacant zones and undetected pipe leaks across grounds.',
        'Safety-critical gas line monitoring across food & beverage facilities.',
      ],
      solution: 'Zone-based HVAC staging and automated ultrasonic water balance accounting.',
      impact: '21% water waste eliminated; 19% thermal energy savings',
    },
    government: {
      title: 'Government & PSU Facilities',
      icon: Landmark,
      tag: 'Public Sector Undertakings',
      summary: 'Statutory BEE compliance, national energy conservation standards, and sovereign OT hardening.',
      challenges: [
        'Stringent Energy Conservation Building Code (ECBC) statutory mandates.',
        'Legacy equipment requiring non-invasive sensor retrofits.',
      ],
      solution: 'Turnkey non-intrusive CT/PT metering, automated BEE reporting, and Purdue model security.',
      impact: '100% statutory compliance with verifiable audit trails',
    },
  };

  const currentIndustry = industriesData[activeIndustry] || industriesData.manufacturing;
  const IndustryIcon = currentIndustry.icon;

  const faqs = [
    {
      q: 'How long does sensor deployment take, and will it disrupt plant operations?',
      a: 'Deployments typically take under 72 hours per facility. We utilize non-invasive split-core current transformers (CTs) and clamp-on ultrasonic flow meters that install externally without electrical shutdowns or pipe cutting.',
    },
    {
      q: 'Does PrishiTech integrate with our existing legacy meters and SCADA systems?',
      a: 'Yes. Our edge gateways support RS-485 Modbus RTU/TCP, BACnet/IP, and OPC-UA. We seamlessly interface with existing Schneider, Siemens, ABB, L&T, and Yokogawa meters and PLCs.',
    },
    {
      q: 'How does automated peak-demand load shedding prevent discom penalty tariffs?',
      a: 'The platform models rolling 15-minute integration windows 20 minutes in advance. When demand approaches 92% of contracted cap, automated alerts notify floor managers or trigger automated staging off of non-critical auxiliary loads (e.g. secondary chillers or grinders).',
    },
    {
      q: 'How is OT and industrial cybersecurity enforced?',
      a: 'We strictly implement the Purdue Reference Architecture (Levels 0–3 isolated from Level 4 cloud by an Industrial DMZ). Telemetry is outbound-only over TLS 1.3 encrypted conduits, guaranteeing zero external command injection into plant PLCs.',
    },
    {
      q: 'What is the TRIAXIS Consortium delivery advantage?',
      a: 'Clients receive single-source contractual accountability. PrishiTech provides software, IoT edge gateways, and cloud pipelines, while TRIAXIS Consortium partners supply certified Bureau of Energy Efficiency (BEE) auditors, power grid engineers, and HVAC specialists.',
    },
  ];

  return (
    <>
      <SeoHead
        title="PrishiTech Solutions | Resource Intelligence & Digital Transformation"
        description="PrishiTech Solutions unifies energy, water, gas and chiller management into a single resource intelligence platform, backed by IoT, cloud, cybersecurity, data and AI services."
      />

      <div className="pt-24 pb-20 space-y-20">
        {/* 1. HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto pt-4 sm:pt-8 pb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              TRIAXIS Consortium Partner · Industrial Grade
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              One Platform.{' '}
              <span className="text-emerald-700">Every Resource.</span>{' '}
              Total Intelligence.
            </h1>

            <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
              PrishiTech Solutions unifies energy, water, gas and chiller management into a single resource intelligence platform — backed by end-to-end IT services and digital transformation expertise.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/solutions/resource-intelligence"
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 group"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-slate-300" />
              </Link>

              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-medium rounded-xl text-xs sm:text-sm transition-all border border-slate-200 shadow-2xs flex items-center justify-center gap-2"
              >
                <span>Request a Demo</span>
              </button>
            </div>

            {/* Dynamic Live Telemetry Ribbon (Real-Time Fluctuating Stream) */}
            <div className="mt-8 p-3 bg-white rounded-2xl border border-slate-200/90 shadow-2xs max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                <Radio className="w-3 h-3 text-emerald-600 animate-pulse" />
                <span>LIVE SENSOR STREAM</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-slate-600 font-mono text-xs">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <strong>{liveTicker.kw}</strong> kW
                </span>
                <span className="flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5 text-sky-500" />
                  <strong>{liveTicker.water}</strong> m³/h
                </span>
                <span className="flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-orange-500" />
                  <strong>{liveTicker.gas}</strong> bar
                </span>
                <span className="flex items-center gap-1">
                  <Wind className="w-3.5 h-3.5 text-teal-600" />
                  <strong>{liveTicker.cop}</strong> COP
                </span>
              </div>

              <span className="text-[11px] text-slate-400 hidden md:inline">
                Sub-second sampling
              </span>
            </div>
          </div>
        </section>

        {/* 2. INTERACTIVE PLATFORM SIMULATOR STUDIO (Click-to-test real-time actions!) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Interactive Live Console
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Test Real-Time Facility Intelligence
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Click scenarios below to see how PrishiTech algorithms detect leaks, prevent maximum demand penalties, and optimize chillers automatically.
            </p>
          </div>

          <TelemetrySimulator />
        </section>

        {/* 3. SECTION: TWO WAYS WE HELP YOU (Interactive Segmented Switcher) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Two Ways We Help You
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Select a portfolio below to see how we deliver utility savings and modern enterprise IT agility.
            </p>

            {/* Segmented Switcher Tabs */}
            <div className="mt-5 inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
              <button
                onClick={() => setActivePortfolio('resource')}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activePortfolio === 'resource'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>Resource Intelligence Platform</span>
              </button>

              <button
                onClick={() => setActivePortfolio('digital')}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activePortfolio === 'digital'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Cpu className="w-4 h-4 text-sky-600" />
                <span>IT &amp; Digital Transformation</span>
              </button>
            </div>
          </div>

          {/* Active Portfolio Focused Showcase */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm transition-all">
            {activePortfolio === 'resource' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Portfolio 01 · Real-Time Control
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Resource Intelligence Platform
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Real-time visibility and control across Energy, Water, Gas and Chiller Management, plus Energy Advisory. Built to eliminate utility waste, stop hidden leaks, and automate peak-demand shedding.
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-0.5">
                        <Zap className="w-3.5 h-3.5 text-amber-600" />
                        <span>Energy Management</span>
                      </div>
                      <span className="text-slate-500">Meters, feeders &amp; peak-load alerts</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-0.5">
                        <Droplets className="w-3.5 h-3.5 text-blue-600" />
                        <span>Water Management</span>
                      </div>
                      <span className="text-slate-500">Flow meters &amp; acoustic leak alerts</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-0.5">
                        <Flame className="w-3.5 h-3.5 text-orange-600" />
                        <span>Gas Management</span>
                      </div>
                      <span className="text-slate-500">Pressure lines &amp; safety thresholds</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-0.5">
                        <Wind className="w-3.5 h-3.5 text-cyan-600" />
                        <span>Chiller Plants</span>
                      </div>
                      <span className="text-slate-500">COP analytics &amp; staging optimization</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2.5">
                    <Link
                      to="/solutions/resource-intelligence"
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore All 5 Pillars</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={onRequestDemo}
                      className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs border border-slate-200"
                    >
                      Request Platform Demo
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
                    <span className="font-semibold text-slate-900">Unified Monitoring Snapshot</span>
                    <span className="text-emerald-700 font-mono font-medium">Live Telemetry Active</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200">
                      <span className="text-slate-600">Peak Demand Surcharge Risk</span>
                      <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Zero Risk (68% Cap)
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200">
                      <span className="text-slate-600">Water Balance Reconciliation</span>
                      <span className="font-semibold text-slate-900">98.4% Accounted</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200">
                      <span className="text-slate-600">Chiller Plant Overall COP</span>
                      <span className="font-semibold text-emerald-700 font-mono">5.2 COP (0.68 kW/TR)</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200">
                      <span className="text-slate-600">BEE Statutory Audit Readiness</span>
                      <span className="font-semibold text-slate-900">Compliant (ISO 50001)</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 pt-1">
                    ✓ Non-invasive wireless CT/PT sensors deployed in under 72 hours per facility.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                    Portfolio 02 · Full-Stack IT
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    IT Services &amp; Digital Transformation
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The robust technology backbone behind resource intelligence — available as standalone services for any enterprise initiative. From edge IoT gateways to hybrid cloud analytics and Purdue OT cybersecurity.
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-0.5">
                        <Activity className="w-3.5 h-3.5 text-sky-600" />
                        <span>IoT &amp; Monitoring</span>
                      </div>
                      <span className="text-slate-500">Edge gateways &amp; multi-site telemetry</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-0.5">
                        <Cloud className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Cloud Architecture</span>
                      </div>
                      <span className="text-slate-500">Scalable AWS/Azure infrastructure</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-0.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>OT Cybersecurity</span>
                      </div>
                      <span className="text-slate-500">Purdue Model &amp; SCADA isolation</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-0.5">
                        <Bot className="w-3.5 h-3.5 text-purple-600" />
                        <span>AI &amp; Automation</span>
                      </div>
                      <span className="text-slate-500">Predictive maintenance &amp; load shedding</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2.5">
                    <Link
                      to="/solutions/digital-transformation"
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore All 5 IT Services</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={onRequestDemo}
                      className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-800 font-medium rounded-xl text-xs border border-slate-200"
                    >
                      Consult an IT Architect
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
                    <span className="font-semibold text-slate-900">Enterprise IT Architecture</span>
                    <span className="text-sky-700 font-mono font-medium">Hardened Purdue Model</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-start gap-2.5">
                      <span className="font-mono font-bold text-slate-900 text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">L4</span>
                      <div>
                        <strong className="block text-slate-900">Enterprise Cloud &amp; BI</strong>
                        <span className="text-slate-500">REST APIs, Snowflake/BigQuery data lakes, PowerBI &amp; ERP integrations.</span>
                      </div>
                    </div>

                    <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-start gap-2.5">
                      <span className="font-mono font-bold text-slate-900 text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">IDMZ</span>
                      <div>
                        <strong className="block text-slate-900">Industrial Demilitarized Zone</strong>
                        <span className="text-slate-500">One-way data diodes and encrypted Modbus-over-TLS edge conduits.</span>
                      </div>
                    </div>

                    <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-start gap-2.5">
                      <span className="font-mono font-bold text-slate-900 text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">L1-3</span>
                      <div>
                        <strong className="block text-slate-900">Physical Plant &amp; SCADA</strong>
                        <span className="text-slate-500">Substation meters, flow transmitters, chillers, and localized PLCs.</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 pt-1">
                    ✓ End-to-end OT security compliance with IEC 62443 and ISO 27001 standards.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. SECTION: WHY PRISHITECH */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
              Why PrishiTech
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Engineered for Zero Operational Downtime
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Built specifically for complex facilities where reliability, data integrity, and cyber safety are non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                title: 'Single-Pane Monitoring',
                desc: 'Unify power, water, gas, and chillers into one clean dashboard instead of juggling multiple software tools.',
                icon: Layers,
              },
              {
                title: 'OT-Aware Cyber Defense',
                desc: 'Industrial-grade security enforcing strict Purdue model isolation to keep operational machinery safe.',
                icon: ShieldCheck,
              },
              {
                title: 'Automated AI Actions',
                desc: 'Predict peak demand spikes 20 minutes in advance and automatically notify floor managers before penalties.',
                icon: Bot,
              },
              {
                title: 'TRIAXIS Consortium',
                desc: 'A unified bench of electrical power engineers, BEE auditors, and cloud developers under a single SLA.',
                icon: Award,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-3.5">
                    <Icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. ROI CALCULATOR SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <RoiCalculator />
        </section>

        {/* 6. INDUSTRIES SERVED (Interactive Selector) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Industries Served
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                Built for Facilities Where Every Resource Counts
              </h2>
            </div>
            <Link
              to="/industries"
              className="text-emerald-700 hover:text-emerald-800 font-semibold text-xs sm:text-sm flex items-center gap-1"
            >
              <span>Explore full industry specs</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive Industry Pill Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-5">
            {[
              { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
              { id: 'real-estate', label: 'Commercial Real Estate', icon: Building2 },
              { id: 'utilities', label: 'Utilities & Power', icon: Zap },
              { id: 'hospitality', label: 'Hospitality & Campuses', icon: Hotel },
              { id: 'government', label: 'Government & PSU', icon: Landmark },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndustry(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                    activeIndustry === item.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Showcase Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
              <div className="max-w-2xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800">
                    <IndustryIcon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                      {currentIndustry.tag}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {currentIndustry.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {currentIndustry.summary}
                </p>

                <div className="space-y-1.5 pt-1 text-xs">
                  <strong className="text-slate-900 block font-semibold text-[11px] uppercase tracking-wider">
                    Addressed Operational Challenges:
                  </strong>
                  {currentIndustry.challenges.map((ch, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-80 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 shrink-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                  Typical Facility Impact
                </span>
                <div className="text-lg font-bold font-mono text-emerald-700 leading-snug">
                  {currentIndustry.impact}
                </div>
                <div className="pt-2 border-t border-slate-200 text-xs text-slate-600">
                  <strong className="block text-slate-900 mb-0.5">Tailored Architecture:</strong>
                  {currentIndustry.solution}
                </div>
                <Link
                  to="/industries"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors"
                >
                  <span>View Case Metrics</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. INTERACTIVE FAQ ACCORDION (Clickable, Engaging & Educational) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Common Engineering &amp; Operational Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Clear answers regarding deployment timelines, legacy protocol integration, and data security.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-600" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 8. BOTTOM CTA SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-6">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 text-center relative overflow-hidden shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              Get Started
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Ready to modernize your facility resources?
            </h2>
            <p className="mt-2 text-slate-600 text-sm max-w-xl mx-auto">
              Connect with our engineering team in Vaishali, Ghaziabad to schedule a site walk or request a tailored demonstration.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
              </Link>
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs border border-slate-200 shadow-xs transition-colors"
              >
                Request a Platform Demo
              </button>
              <button
                onClick={onOpenCapability}
                className="w-full sm:w-auto px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs border border-slate-200 shadow-xs transition-colors"
              >
                Download Prospectus (PDF)
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
