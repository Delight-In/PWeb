import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Droplets, Flame, Wind, 
  ArrowRight, 
  Factory, Building2, Hotel, Landmark,
  Radio, CheckCircle2,
  Sparkles, Check, Gauge, ShieldCheck, Activity,
  ChevronDown, ChevronUp, HelpCircle
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { TelemetrySimulator } from '../components/TelemetrySimulator';
import { RoiCalculator } from '../components/RoiCalculator';
import { PlatformBottomCta } from '../components/PlatformBottomCta';

interface HomePageProps {
  onRequestDemo: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRequestDemo }) => {
  const [activeIndustry, setActiveIndustry] = useState<string>('manufacturing');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
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

  const industries = [
    {
      id: 'manufacturing',
      title: 'Manufacturing & Plants',
      tag: 'Heavy Industry',
      image: '/images/industry-manufacturing.jpg',
      stat: '-26%',
      statLabel: 'Energy Consumption',
      highlight: 'Automated peak-load shedding before discom penalties.',
      icon: Factory,
    },
    {
      id: 'real-estate',
      title: 'Commercial Real Estate',
      tag: 'Grade-A Towers',
      image: '/images/industry-real-estate.jpg',
      stat: '₹52L+',
      statLabel: 'Annual Utility Savings',
      highlight: 'Chiller plant COP optimization & tenant sub-metering.',
      icon: Building2,
    },
    {
      id: 'utilities',
      title: 'Utilities & Power Grid',
      tag: 'Substations & IPPs',
      image: '/images/industry-utilities.jpg',
      stat: '99.98%',
      statLabel: 'Telemetry Uptime',
      highlight: 'Continuous THD power factor & transformer loss detection.',
      icon: Zap,
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Campuses',
      tag: 'Hotels & Healthcare',
      image: '/images/industry-hospitality.jpg',
      stat: '21%',
      statLabel: 'Water Waste Cut',
      highlight: 'Occupancy-synced HVAC and kitchen gas safety thresholds.',
      icon: Hotel,
    },
    {
      id: 'government',
      title: 'Government & PSUs',
      tag: 'Public Facilities',
      image: '/images/industry-government.jpg',
      stat: '100%',
      statLabel: 'BEE Compliance',
      highlight: 'Turnkey ECBC audit reporting with Purdue-isolated OT security.',
      icon: Landmark,
    },
  ];

  const currentIndustry = industries.find(i => i.id === activeIndustry) || industries[0];

  return (
    <>
      <SeoHead
        title="PrishiTech Solutions | Unified Resource Intelligence & Industrial AI"
        description="PrishiTech Solutions unifies industrial energy, water, gas and chiller telemetry into a single coordinated intelligence platform with rapid non-invasive deployment."
      />

      <div className="pt-16 pb-0 overflow-hidden bg-white text-slate-900">
        {/* =========================================================
            1. HERO: MODERN PLATFORM-ALIGNED LAYOUT
        ========================================================= */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-100 bg-[#fbfcfd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
              <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                INDUSTRIAL GRADE · ENTERPRISE RESOURCE INTELLIGENCE &amp; AI
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.12]">
                Intelligence for <br className="hidden sm:inline" />
                <span className="text-slate-900">
                  Every Industrial Resource.
                </span>
              </h1>

              <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
                Real-time Energy, Water, Gas &amp; Chiller telemetry normalized on a single pane of glass — installed in &lt; 72 hours with zero operational shutdowns.
              </p>

              {/* Quick Actions (Platform UI Buttons) */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
                <Link
                  to="/platform/industrial-data-foundation"
                  className="inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-sm h-11 sm:h-12 px-7 sm:px-8 rounded-sm text-sm sm:text-[15px]"
                >
                  <span>Explore Platform -&gt;</span>
                </Link>

                <button
                  onClick={onRequestDemo}
                  className="inline-flex items-center justify-center whitespace-nowrap transition-colors border border-black bg-black hover:bg-slate-800 text-white font-medium h-11 sm:h-12 px-7 sm:px-8 rounded-sm text-sm sm:text-[15px]"
                >
                  <span>Book a demo</span>
                </button>
              </div>

              {/* Micro Trust Proof Chips */}
              <div className="pt-3 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-medium text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#05DF72] stroke-[3]" />
                  Non-Invasive Clamp Retrofit
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#05DF72] stroke-[3]" />
                  Zero Plant Downtime
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#05DF72] stroke-[3]" />
                  Sub-Second High Frequency Telemetry
                </span>
              </div>
            </div>

            {/* Large Hero Interactive UI Preview (Dark Frame Matching Platform Diagrams) */}
            <div className="relative max-w-5xl mx-auto">
              <div className="relative rounded-xl overflow-hidden border border-slate-800/80 shadow-2xl bg-[#070b12] p-2 sm:p-3 group">
                <img 
                  src="/images/dashboard-mockup.jpg" 
                  alt="Resource Intelligence Unified Live Dashboard" 
                  className="w-full h-auto object-cover object-center max-h-[580px] rounded-lg transition-transform duration-700 group-hover:scale-[1.01]"
                />

                {/* Ambient Corner Badges */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 text-white rounded-xl p-2.5 sm:p-3 shadow-2xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-[#05DF72] flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-[#05DF72] font-semibold tracking-wider">
                      Live Telemetry
                    </div>
                    <div className="text-sm font-bold text-white">
                      {liveTicker.kw} kW Active Load
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white rounded-xl p-2.5 sm:p-3 shadow-2xl hidden sm:flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-sky-400 flex items-center justify-center shrink-0">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-sky-400 font-semibold tracking-wider">
                      Chiller Efficiency
                    </div>
                    <div className="text-sm font-bold text-white">
                      COP {liveTicker.cop} · Optimal
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#05DF72] text-black font-extrabold text-xs px-3.5 py-1.5 rounded-sm shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>-26% Energy Cost</span>
                </div>
              </div>

              {/* Live Data Ticker Bar Attached Under Preview */}
              <div className="mt-4 p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <Radio className="w-3 h-3 text-emerald-600 animate-pulse" />
                  <span>LIVE SENSOR STREAM</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-700 font-mono text-xs">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <strong className="text-slate-900">{liveTicker.kw}</strong> kW
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-sky-500" />
                    <strong className="text-slate-900">{liveTicker.water}</strong> m³/h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-orange-500" />
                    <strong className="text-slate-900">{liveTicker.gas}</strong> bar
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5 text-emerald-600" />
                    <strong className="text-slate-900">{liveTicker.cop}</strong> COP
                  </span>
                </div>

                <span className="text-[11px] text-slate-400 hidden lg:inline">
                  Sub-second sampling · RS-485 &amp; BACnet
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. CORE CAPABILITIES (Alternating Grid & Bento Cards)
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
              <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                CORE ARCHITECTURE
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Everything in One Unified Ecosystem
              </h2>
              <p className="text-base text-slate-600 font-normal">
                Seamlessly connecting physical plant operations, OT cybersecurity, and cloud analytics.
              </p>
            </div>

            {/* 4-Card Visual Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Bento Card 1: Live Chiller & Water Telemetry (7 cols) */}
              <div className="lg:col-span-7 bg-[#f8fafc] rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#070b12] p-2">
                  <img 
                    src="/images/chiller-water-plant.jpg" 
                    alt="Industrial Chiller and Water Monitoring Room" 
                    className="w-full h-full object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent rounded-lg"></div>
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-[#05DF72] border border-emerald-500/30 text-[11px] font-mono px-3 py-1 rounded-sm font-semibold flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5" />
                    <span>COP 5.8 Optimized</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">Chiller &amp; Thermal Intelligence</h3>
                    <p className="text-xs text-slate-300 mt-0.5">Continuous COP (kW/TR) tracking, automated condenser reset, and leak detection.</p>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4 bg-white border-t border-slate-100">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#05DF72]" />
                      Automated Staging
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#05DF72]" />
                      Acoustic Leak Alerts
                    </span>
                  </div>
                  <Link
                    to="/solutions/resource-intelligence"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-emerald-700 underline-offset-4 hover:underline shrink-0"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#05DF72]" />
                  </Link>
                </div>
              </div>

              {/* Bento Card 2: Non-Invasive Hardware (5 cols) */}
              <div className="lg:col-span-5 bg-[#f8fafc] rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#070b12] p-2">
                  <img 
                    src="/images/iot-hardware-sensors.jpg" 
                    alt="Non-Invasive Clamp-on CT Sensors and IoT Gateway" 
                    className="w-full h-full object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent rounded-lg"></div>
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-sky-400 border border-sky-500/30 text-[11px] font-mono px-3 py-1 rounded-sm font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Clamp-On Retrofit</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">&lt; 72h Rapid Hardware</h3>
                    <p className="text-xs text-slate-300 mt-0.5">Non-invasive split-core CTs snap on externally without cutting power cables.</p>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4 bg-white border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#05DF72]" />
                    Zero Operational Shutdowns
                  </span>
                  <button
                    onClick={onRequestDemo}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-emerald-700 underline-offset-4 hover:underline shrink-0"
                  >
                    <span>Book demo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#05DF72]" />
                  </button>
                </div>
              </div>

              {/* Bento Card 3: Enterprise Cloud & OT Cybersecurity (5 cols) */}
              <div className="lg:col-span-5 bg-[#f8fafc] rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#070b12] p-2">
                  <img 
                    src="/images/digital-cloud-iot.jpg" 
                    alt="Enterprise Cloud Architecture and OT Cybersecurity" 
                    className="w-full h-full object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent rounded-lg"></div>
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-[#05DF72] border border-emerald-500/30 text-[11px] font-mono px-3 py-1 rounded-sm font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Purdue IDMZ Isolated</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">OT Cyber Defense</h3>
                    <p className="text-xs text-slate-300 mt-0.5">Outbound-only TLS 1.3 data diodes. Zero external write-back to plant PLCs.</p>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4 bg-white border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#05DF72]" />
                    IEC 62443 Compliant
                  </span>
                  <Link
                    to="/platform/data-security"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-emerald-700 underline-offset-4 hover:underline shrink-0"
                  >
                    <span>Security Layer</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#05DF72]" />
                  </Link>
                </div>
              </div>

              {/* Bento Card 4: Automated Peak Load Shaving (7 cols) */}
              <div className="lg:col-span-7 bg-[#f8fafc] rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#070b12] p-2">
                  <img 
                    src="/images/industry-manufacturing.jpg" 
                    alt="Manufacturing Automated Energy Feeder Monitoring" 
                    className="w-full h-full object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent rounded-lg"></div>
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[11px] font-mono px-3 py-1 rounded-sm font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>20-Min Peak Prediction</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">Zero Tariff Surcharges</h3>
                    <p className="text-xs text-slate-300 mt-0.5">AI models rolling 15-minute windows and alerts operators before hitting 92% cap.</p>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4 bg-white border-t border-slate-100">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#05DF72]" />
                      Feeder-Level Alarms
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#05DF72]" />
                      Automated Shedding
                    </span>
                  </div>
                  <Link
                    to="/industries"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-emerald-700 underline-offset-4 hover:underline shrink-0"
                  >
                    <span>View metrics</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#05DF72]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. INTERACTIVE CONSOLE: TEST REAL-TIME SCENARIOS
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-[#f3f4f6]/60 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12 space-y-2">
              <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                INTERACTIVE CONSOLE
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Test Real-Time Facility Response
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Simulate anomaly injections, peak load shifts, and automated edge reactions.
              </p>
            </div>

            <TelemetrySimulator />
          </div>
        </section>

        {/* =========================================================
            5. VISUAL INDUSTRY GALLERY (High-Impact Sector Overview)
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  INDUSTRIES SERVED
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1 leading-tight">
                  Proven Across Critical Infrastructure
                </h2>
              </div>
              <Link
                to="/industries"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-emerald-700 underline-offset-4 hover:underline"
              >
                <span>Explore all industry case studies</span>
                <ArrowRight className="w-4 h-4 text-[#05DF72]" />
              </Link>
            </div>

            {/* Industry Interactive Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustry(ind.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      activeIndustry === ind.id
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{ind.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Featured Industry Photographic Card */}
            <div className="bg-[#f8fafc] rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Image Side (7 Cols) */}
                <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] bg-[#070b12] p-2">
                  <img 
                    src={currentIndustry.image} 
                    alt={currentIndustry.title} 
                    className="w-full h-full object-cover object-center absolute inset-2 rounded-lg"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent rounded-lg"></div>

                  {/* Floating Stat Badge */}
                  <div className="absolute top-5 left-5 bg-[#05DF72] text-black px-4 py-2 rounded-sm shadow-xl flex items-center gap-3">
                    <span className="text-2xl font-black font-mono leading-none">{currentIndustry.stat}</span>
                    <span className="text-xs font-bold border-l border-black/20 pl-3 leading-tight">
                      {currentIndustry.statLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#05DF72] font-bold block mb-1">
                      {currentIndustry.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {currentIndustry.title}
                    </h3>
                  </div>
                </div>

                {/* Info Side (5 Cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold">
                      <currentIndustry.icon className="w-4 h-4 text-emerald-600" />
                      <span>Sector Architecture</span>
                    </div>

                    <p className="text-slate-800 font-medium text-sm leading-relaxed">
                      {currentIndustry.highlight}
                    </p>

                    <div className="space-y-2.5 pt-2 text-xs">
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-2.5 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#05DF72] shrink-0" />
                        <span>Non-invasive split-core external sensor attachments</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-2.5 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#05DF72] shrink-0" />
                        <span>Live 15-minute peak demand surge integration</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      to="/industries"
                      className="inline-flex items-center justify-center flex-1 py-2.5 px-4 bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold rounded-sm text-xs text-center transition-colors shadow-xs"
                    >
                      View Industry Specs
                    </Link>
                    <button
                      onClick={onRequestDemo}
                      className="inline-flex items-center justify-center py-2.5 px-4 border border-black bg-black hover:bg-slate-800 text-white font-medium rounded-sm text-xs transition-colors"
                    >
                      Book Walkthrough
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. TURNKEY 3-STEP FLOW: VISUAL HARDWARE TO SAVINGS
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-[#f3f4f6]/60 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-2">
              <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                RAPID ONBOARDING
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                From Sensors to Savings in 72 Hours
              </h2>
              <p className="text-base text-slate-600">
                Turnkey non-invasive installation with guaranteed zero plant interruption.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-sm flex items-center justify-center mb-4 border border-emerald-200">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Clamp Sensors
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Split-core CTs snap over cables and ultrasonic flow sensors clamp onto pipes externally. Zero wire cuts or pipe breaks.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                  <Check className="w-3.5 h-3.5 text-[#05DF72] stroke-[3]" />
                  <span>Zero Downtime</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-800 font-bold text-sm flex items-center justify-center mb-4 border border-sky-200">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Edge Gateways
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Plug-and-play IoT hubs read RS-485 Modbus, BACnet, and OPC-UA. Streams encrypted outbound-only data over TLS 1.3.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                  <Check className="w-3.5 h-3.5 text-[#05DF72] stroke-[3]" />
                  <span>Purdue IDMZ Security</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-800 font-bold text-sm flex items-center justify-center mb-4 border border-purple-200">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Live Savings
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Interactive dashboards flag leaks, predict maximum demand surges, and optimize chiller setpoints in real time.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                  <Check className="w-3.5 h-3.5 text-[#05DF72] stroke-[3]" />
                  <span>Immediate 15–26% Cost Cut</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            7. INTERACTIVE ROI CALCULATOR
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                FINANCIAL IMPACT
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Calculate Projected Savings
              </h2>
            </div>
            <RoiCalculator />
          </div>
        </section>

        {/* =========================================================
            8. FAQs ACCORDION SECTION (Platform UI Standard)
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-[#f3f4f6]/50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-2">
              <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                FAQS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-slate-600">
                Quick answers to common questions about deployment, hardware, and security.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: 'How long does sensor deployment take, and will it disrupt plant operations?',
                  a: 'Deployments take under 72 hours per facility. We utilize non-invasive split-core CTs and clamp-on ultrasonic meters that install externally without electrical shutdowns or pipe cutting.',
                },
                {
                  q: 'Does PrishiTech integrate with existing legacy meters and SCADA systems?',
                  a: 'Yes. Our edge gateways support RS-485 Modbus RTU/TCP, BACnet/IP, and OPC-UA. We interface directly with Schneider, Siemens, ABB, L&T, and Yokogawa meters and PLCs.',
                },
                {
                  q: 'How is OT and industrial cybersecurity enforced?',
                  a: 'We strictly implement the Purdue Reference Architecture (Levels 0–3 isolated by an Industrial DMZ). Telemetry is outbound-only over TLS 1.3 conduits, ensuring zero external command injection.',
                },
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-semibold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                        <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{faq.q}</span>
                      </span>
                      <span className="text-slate-400 shrink-0">
                        {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-600" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            9. STANDARDIZED PLATFORM BOTTOM CTA BANNER
        ========================================================= */}
        <PlatformBottomCta 
          title="Ready to eliminate industrial utility waste?"
          description="Schedule a facility walkthrough with our engineering team or request a live demonstration of our Resource Intelligence & Edge AI platform."
          onRequestDemo={onRequestDemo}
        />
      </div>
    </>
  );
};

export default HomePage;
