import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Droplets, Flame, Wind, 
  ArrowRight, ChevronRight, 
  Factory, Building2, Hotel, Landmark,
  Radio, CheckCircle2,
  Sparkles, Check, Gauge, ShieldCheck, Activity,
  ChevronDown, ChevronUp, HelpCircle
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { TelemetrySimulator } from '../components/TelemetrySimulator';
import { RoiCalculator } from '../components/RoiCalculator';

interface HomePageProps {
  onRequestDemo: () => void;
  onOpenCapability: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRequestDemo, onOpenCapability }) => {
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
        title="PrishiTech Solutions | Unified Resource Intelligence & Digital Engineering"
        description="PrishiTech Solutions unifies energy, water, gas and chiller management into a single real-time intelligence platform with non-invasive IoT deployment."
      />

      <div className="pt-20 pb-20 space-y-20 sm:space-y-28 overflow-hidden">
        {/* =========================================================
            1. HERO: SLEEK, MODERN, VISUAL-FIRST
        ========================================================= */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 sm:pt-8">
          {/* Subtle Ambient Radial Gradients */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-200/30 via-teal-200/20 to-sky-200/30 blur-3xl -z-10 rounded-full pointer-events-none"></div>

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wide mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Industrial Grade · Enterprise IoT Platform
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Intelligence for <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-sky-700 bg-clip-text text-transparent">
                Every Resource.
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">
              Real-time Energy, Water, Gas &amp; Chiller telemetry on a single pane of glass — installed in &lt; 72 hours with zero shutdowns.
            </p>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/solutions/resource-intelligence"
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-slate-300" />
              </Link>

              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl text-sm transition-all border border-slate-200/80 shadow-2xs flex items-center justify-center gap-2"
              >
                <span>Request Live Demo</span>
              </button>
            </div>

            {/* Micro Trust Proof Chips */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-medium text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                Non-Invasive Clamps
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                Zero Plant Downtime
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                Sub-Second Telemetry
              </span>
            </div>
          </div>

          {/* Large Hero Interactive UI Preview (Glassmorphic Frame) */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-950 group">
              <img 
                src="/images/dashboard-mockup.jpg" 
                alt="Resource Intelligence Unified Live Dashboard" 
                className="w-full h-auto object-cover object-center max-h-[580px] transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* Glowing Ambient Corner Badges */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 text-white rounded-2xl p-2.5 sm:p-3 shadow-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-emerald-400 font-semibold tracking-wider">
                    Live Telemetry
                  </div>
                  <div className="text-sm font-bold text-white">
                    {liveTicker.kw} kW Active Load
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-slate-900/90 backdrop-blur-md border border-sky-500/40 text-white rounded-2xl p-2.5 sm:p-3 shadow-2xl hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
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

              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-emerald-600 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                <span>-26% Energy Cost</span>
              </div>
            </div>

            {/* Live Data Ticker Bar Attached Under Preview */}
            <div className="mt-4 p-3.5 bg-white rounded-2xl border border-slate-200/90 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
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
                  <Wind className="w-3.5 h-3.5 text-teal-600" />
                  <strong className="text-slate-900">{liveTicker.cop}</strong> COP
                </span>
              </div>

              <span className="text-[11px] text-slate-400 hidden lg:inline">
                Sub-second sampling · RS-485 &amp; BACnet
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. MODERN VISUAL BENTO GRID: 4 KEY CAPABILITIES
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Core Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Everything in One Visual Ecosystem
            </h2>
          </div>

          {/* 4-Card Visual Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Bento Card 1: Live Chiller & Water Telemetry (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm group hover:shadow-md transition-all flex flex-col justify-between">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img 
                  src="/images/chiller-water-plant.jpg" 
                  alt="Industrial Chiller and Water Monitoring Room" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[11px] font-mono px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5" />
                  <span>COP 5.8 Optimized</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">Chiller &amp; Thermal Intelligence</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Continuous COP (kW/TR) tracking, automated condenser reset, and leak detection.</p>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between gap-4 bg-slate-50/50">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Automated Staging
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Acoustic Leak Alerts
                  </span>
                </div>
                <Link
                  to="/solutions/resource-intelligence"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 shrink-0"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Bento Card 2: Non-Invasive Hardware (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm group hover:shadow-md transition-all flex flex-col justify-between">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img 
                  src="/images/iot-hardware-sensors.jpg" 
                  alt="Non-Invasive Clamp-on CT Sensors and IoT Gateway" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-sky-400 border border-sky-500/30 text-[11px] font-mono px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Clamp-On Retrofit</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">&lt; 72h Rapid Hardware</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Non-invasive split-core CTs snap on externally without cutting power cables.</p>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between gap-4 bg-slate-50/50">
                <span className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Zero Operational Shutdowns
                </span>
                <button
                  onClick={onRequestDemo}
                  className="text-xs font-semibold text-slate-900 hover:text-emerald-700 flex items-center gap-1 shrink-0"
                >
                  <span>Book demo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bento Card 3: Enterprise Cloud & OT Cybersecurity (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm group hover:shadow-md transition-all flex flex-col justify-between">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img 
                  src="/images/digital-cloud-iot.jpg" 
                  alt="Enterprise Cloud Architecture and OT Cybersecurity" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[11px] font-mono px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Purdue IDMZ Isolated</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">OT Cyber Defense</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Outbound-only TLS 1.3 data diodes. Zero external write-back to plant PLCs.</p>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between gap-4 bg-slate-50/50">
                <span className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  IEC 62443 Compliant
                </span>
                <Link
                  to="/solutions/digital-transformation"
                  className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 shrink-0"
                >
                  <span>IT Services</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Bento Card 4: Automated Peak Load Shaving (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm group hover:shadow-md transition-all flex flex-col justify-between">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img 
                  src="/images/industry-manufacturing.jpg" 
                  alt="Manufacturing Automated Energy Feeder Monitoring" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[11px] font-mono px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>20-Min Peak Prediction</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">Zero Tariff Surcharges</h3>
                  <p className="text-xs text-slate-300 mt-0.5">AI models rolling 15-minute windows and alerts operators before hitting 92% cap.</p>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between gap-4 bg-slate-50/50">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Feeder-Level Alarms
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Automated Shedding
                  </span>
                </div>
                <Link
                  to="/industries"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 shrink-0"
                >
                  <span>View metrics</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. INTERACTIVE CONSOLE: TEST REAL-TIME SCENARIOS
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Interactive Console
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Test Real-Time Facility Response
            </h2>
          </div>

          <TelemetrySimulator />
        </section>

        {/* =========================================================
            4. VISUAL INDUSTRY GALLERY (High-Impact Photo Cards)
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Industries Served
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Proven in Critical Infrastructure
              </h2>
            </div>
            <Link
              to="/industries"
              className="text-emerald-700 hover:text-emerald-800 font-semibold text-sm flex items-center gap-1.5"
            >
              <span>Explore all industry case studies</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Industry Interactive Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeIndustry === ind.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{ind.title}</span>
                </button>
              );
            })}
          </div>

          {/* Featured Industry Photographic Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Image Side (7 Cols) */}
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] bg-slate-950">
                <img 
                  src={currentIndustry.image} 
                  alt={currentIndustry.title} 
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>

                {/* Floating Huge Stat Badge */}
                <div className="absolute top-5 left-5 bg-emerald-600/95 backdrop-blur-md text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3">
                  <span className="text-2xl font-black font-mono leading-none">{currentIndustry.stat}</span>
                  <span className="text-xs font-semibold border-l border-emerald-400/50 pl-3 leading-tight">
                    {currentIndustry.statLabel}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                    {currentIndustry.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {currentIndustry.title}
                  </h3>
                </div>
              </div>

              {/* Info Side (5 Cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold">
                    <currentIndustry.icon className="w-4 h-4 text-emerald-600" />
                    <span>Sector Architecture</span>
                  </div>

                  <p className="text-slate-800 font-medium text-sm leading-relaxed">
                    {currentIndustry.highlight}
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Non-invasive split-core external sensor attachments</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Live 15-minute peak demand surge integration</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <Link
                    to="/industries"
                    className="flex-1 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs text-center transition-colors shadow-xs"
                  >
                    View Industry Specs
                  </Link>
                  <button
                    onClick={onRequestDemo}
                    className="py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl text-xs border border-slate-200 shadow-2xs transition-colors"
                  >
                    Book Walkthrough
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            5. TURNKEY 3-STEP FLOW: VISUAL HARDWARE TO SAVINGS
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Rapid Onboarding
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              From Sensors to Savings in 72 Hours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 font-black text-base flex items-center justify-center mb-4 border border-emerald-200">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                Clamp Sensors
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Split-core CTs snap over cables and ultrasonic flow sensors clamp onto pipes externally. Zero wire cuts or pipe breaks.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Zero Downtime</span>
              </div>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 font-black text-base flex items-center justify-center mb-4 border border-sky-200">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                Edge Gateways
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Plug-and-play IoT hubs read RS-485 Modbus, BACnet, and OPC-UA. Streams encrypted outbound-only data over TLS 1.3.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-sky-700">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Purdue IDMZ Security</span>
              </div>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 font-black text-base flex items-center justify-center mb-4 border border-purple-200">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                Live Savings
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Interactive dashboards flag leaks, predict maximum demand surges, and optimize chiller setpoints in real time.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-purple-700">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Immediate 15–26% Cost Cut</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. INTERACTIVE ROI CALCULATOR
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <RoiCalculator />
        </section>

        {/* =========================================================
            7. COMPACT ENGAGING FAQ (Only 3 high-value questions)
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Quick Answers
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              Common Questions
            </h2>
          </div>

          <div className="space-y-2">
            {[
              {
                q: 'How long does sensor deployment take, and will it disrupt plant operations?',
                a: 'Deployments take under 72 hours per facility. We utilize non-invasive split-core CTs and clamp-on ultrasonic meters that install externally without electrical shutdowns or pipe cutting.',
              },
              {
                q: 'Does PrishiTech integrate with existing legacy meters and SCADA systems?',
                a: 'Yes. Our edge gateways support RS-485 Modbus RTU/TCP, BACnet/IP, and OPC-UA. We interface with Schneider, Siemens, ABB, L&T, and Yokogawa meters and PLCs.',
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
                  className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-600" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-slate-600 text-xs leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            8. SLEEK VISUAL CALL TO ACTION
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-4">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 text-center relative overflow-hidden shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-3">
              Get Started
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to eliminate utility waste?
            </h2>
            <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
              Schedule a site walk with our engineering team or request a live platform demonstration.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs transition-colors shadow-md flex items-center justify-center gap-1.5"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-200" />
              </Link>
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs border border-white/20 shadow-xs transition-colors"
              >
                Request Platform Demo
              </button>
              <button
                onClick={onOpenCapability}
                className="w-full sm:w-auto px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs border border-white/20 shadow-xs transition-colors"
              >
                Download PDF
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
