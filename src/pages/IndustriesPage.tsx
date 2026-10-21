import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, Building2, Zap, Hotel, Landmark, 
  ArrowRight, CheckCircle2, AlertCircle,
  ChevronRight, Check
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { PlatformBottomCta } from '../components/PlatformBottomCta';

interface IndustriesPageProps {
  onRequestDemo: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onRequestDemo }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('manufacturing');

  const industries = [
    {
      id: 'manufacturing',
      title: 'Manufacturing & Plants',
      tag: 'Heavy & Discrete Manufacturing',
      image: '/images/industry-manufacturing.jpg',
      icon: Factory,
      summary: 'Automotive, chemicals, textiles, pharmaceuticals, and precision metal fabrication.',
      stat: '26%',
      statLabel: 'Specific Energy Consumption Cut',
      challenges: [
        'Volatile electrical loads causing peak kVA demand penalty surcharges.',
        'High thermal losses in boilers and unmonitored steam/gas pipelines.',
        'Unplanned motor breakdowns causing line stoppage losses.',
      ],
      solutions: [
        'Sub-second feeder metering with predictive peak-load shedding alerts.',
        'PNG/LPG mass flow telemetry for combustion efficiency optimization.',
        'AI vibration and thermal monitoring on heavy induction motors.',
      ],
      impact: '26% reduction in specific energy consumption (SEC) per finished metric ton.',
    },
    {
      id: 'real-estate',
      title: 'Commercial Real Estate',
      tag: 'Grade-A Offices & IT Parks',
      image: '/images/industry-real-estate.jpg',
      icon: Building2,
      summary: 'Multi-tenant commercial towers, tech parks, shopping malls, and corporate campuses.',
      stat: '₹52L+',
      statLabel: 'Annual Utility Savings per Complex',
      challenges: [
        'Disputed manual tenant sub-metering readings each month.',
        'Central HVAC chiller plants consuming 50%+ of power at poor COP.',
        'Complex ESG disclosure reporting and SEBI BRSR compliance mandates.',
      ],
      solutions: [
        'Automated multi-tenant revenue-grade sub-metering and billing.',
        'Continuous COP tracking and automated condenser setpoint reset.',
        'Automated ESG Scope 1 & 2 carbon accounting dashboards.',
      ],
      impact: '₹38 – 52 Lakh annual utility savings per 500,000 sq. ft. commercial complex.',
    },
    {
      id: 'utilities',
      title: 'Utilities & Power Grid',
      tag: 'Discoms & Renewable IPPs',
      image: '/images/industry-utilities.jpg',
      icon: Zap,
      summary: 'Power distribution utilities, captive power plants, and solar/wind farm operators.',
      stat: '99.98%',
      statLabel: 'Substation Telemetry Uptime',
      challenges: [
        'High AT&C transmission losses and undetected power factor dips.',
        'Substation power quality degradation and severe harmonic distortion.',
        'Fragmented telemetry across thousands of remote transformers.',
      ],
      solutions: [
        'Feeder-level power quality analyzers streaming THD and unbalance to cloud.',
        'Automated APFC capacitor bank health monitoring for >0.99 power factor.',
        'Edge IoT cellular gateways connecting remote distribution assets.',
      ],
      impact: '99.98% telemetry availability with sub-second fault localization.',
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Campuses',
      tag: 'Hotels, Universities & Hospitals',
      image: '/images/industry-hospitality.jpg',
      icon: Hotel,
      summary: 'Luxury resorts, multi-specialty healthcare campuses, and university townships.',
      stat: '21%',
      statLabel: 'Water & Thermal Waste Eliminated',
      challenges: [
        'Fluctuating occupancy requiring dynamic cooling without guest discomfort.',
        'Massive water usage across commercial kitchens, laundry, and guest rooms.',
        'Safety-critical steam and gas monitoring in laundry and kitchens.',
      ],
      solutions: [
        'Zone-based HVAC automated scheduling mapped to PMS occupancy.',
        'Acoustic leak detection and STP recycling water balance accounting.',
        'Continuous gas leak safety telemetry with automatic shut-off triggers.',
      ],
      impact: '21% water waste eliminated and 19% reduction in HVAC thermal energy costs.',
    },
    {
      id: 'government',
      title: 'Government & PSUs',
      tag: 'Public Sector Undertakings',
      image: '/images/industry-government.jpg',
      icon: Landmark,
      summary: 'Municipal waterworks, defense establishments, railways, and state complexes.',
      stat: '100%',
      statLabel: 'Statutory BEE & ECBC Compliance',
      challenges: [
        'Strict statutory compliance with national Energy Conservation Building Codes.',
        'Mandatory BEE audit certifications and stringent procurement guidelines.',
        'Legacy equipment requiring non-invasive retrofits without replacing assets.',
      ],
      solutions: [
        'TRIAXIS Consortium accredited BEE auditors executing investment audits.',
        'Non-intrusive bolt-on IoT sensors requiring zero machinery modifications.',
        'Air-gapped and sovereign Purdue-isolated deployment architectures.',
      ],
      impact: '100% statutory compliance with Bureau of Energy Efficiency benchmarks.',
    },
  ];

  const current = industries.find((i) => i.id === selectedIndustry) || industries[0];
  const CurrentIcon = current.icon;

  return (
    <>
      <SeoHead
        title="Industries Served | PrishiTech Solutions"
        description="PrishiTech Solutions supports manufacturing, commercial real estate, utilities, hospitality and government/PSU clients with resource intelligence and digital transformation."
      />

      <div className="bg-[#fbfcfd] min-h-screen">
        {/* =========================================================
            1. HERO: SPLIT PLATFORM PRESENTATION
        ========================================================= */}
        <section className="pt-16 pb-14 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  Sector Specialization
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.12]">
                  Built for Facilities Where Every Resource Counts.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                  From heavy manufacturing floors to multi-tower commercial portfolios and utility substations, PrishiTech adapts to the physical operating reality of your industry.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={onRequestDemo}
                    className="inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-sm h-11 sm:h-12 px-7 sm:px-8 rounded-sm text-sm sm:text-[15px]"
                  >
                    <span>Request Sector Walkthrough</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <Link
                    to="/solutions/resource-intelligence"
                    className="inline-flex items-center justify-center whitespace-nowrap transition-colors border border-black bg-black hover:bg-slate-800 text-white font-medium h-11 sm:h-12 px-7 sm:px-8 rounded-sm text-sm sm:text-[15px]"
                  >
                    <span>Explore Solutions</span>
                  </Link>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    Sub-second Feeder Telemetry
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    100% Non-Invasive Retrofits
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    Guaranteed Payback Windows
                  </span>
                </div>
              </div>

              {/* Right Visual: Deep Dark Frame Platform Presentation */}
              <div className="lg:col-span-6">
                <div className="bg-[#070b12] border border-slate-800/80 rounded-xl p-2 sm:p-3 shadow-2xl overflow-hidden relative">
                  <div className="relative rounded-lg overflow-hidden border border-slate-800/80 aspect-[16/10] bg-slate-950">
                    <img 
                      src={current.image} 
                      alt={current.title} 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute top-3 left-3 bg-[#070b12]/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-sm text-xs font-mono font-bold flex items-center gap-2">
                      <CurrentIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{current.stat} {current.statLabel}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                        {current.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {current.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. INTERACTIVE SECTOR STUDIO
        ========================================================= */}
        <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Sector Studio
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                Operational Realities by Sector
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Select an industry to examine specific challenges, technical solutions, and documented savings.
              </p>
            </div>

            {/* Tab Selector */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-8">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      selectedIndustry === ind.id
                        ? 'bg-slate-950 text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{ind.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Industry Showcase Card in Dark Frame */}
            <div className="bg-[#070b12] border border-slate-800/80 rounded-xl p-2 sm:p-3 shadow-2xl overflow-hidden">
              <div className="bg-white rounded-lg overflow-hidden border border-slate-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Image Side (6 cols) */}
                  <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[460px] bg-slate-950">
                    <img 
                      src={current.image} 
                      alt={current.title} 
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent"></div>

                    {/* Floating Stat Badge */}
                    <div className="absolute top-5 left-5 bg-emerald-600 text-white px-4 py-2 rounded-sm shadow-xl flex items-center gap-3">
                      <CurrentIcon className="w-5 h-5 text-emerald-200" />
                      <span className="text-2xl font-black font-mono leading-none">{current.stat}</span>
                      <span className="text-xs font-semibold border-l border-emerald-400/50 pl-3 leading-tight">
                        {current.statLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                        {current.tag}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {current.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1.5 max-w-md">
                        {current.summary}
                      </p>
                    </div>
                  </div>

                  {/* Details Side (6 cols) */}
                  <div className="lg:col-span-6 p-6 sm:p-9 flex flex-col justify-between space-y-6 bg-white">
                    <div className="space-y-5">
                      {/* Challenges */}
                      <div className="space-y-2.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                          Target Operational Challenges
                        </span>
                        <div className="space-y-2 text-xs sm:text-sm">
                          {current.challenges.map((c, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-sm border border-slate-200 text-slate-700">
                              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                              <span className="text-xs leading-relaxed">{c}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Solutions */}
                      <div className="space-y-2.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                          PrishiTech Engineering Solution
                        </span>
                        <div className="space-y-2 text-xs sm:text-sm">
                          {current.solutions.map((s, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 p-3 bg-[#fbfcfd] rounded-sm border border-emerald-200/70 text-slate-800">
                              <CheckCircle2 className="w-4 h-4 text-[#00c862] shrink-0 mt-0.5" />
                              <span className="font-medium text-xs leading-relaxed">{s}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-start gap-3 border-t border-slate-100">
                      <button
                        onClick={onRequestDemo}
                        className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-xs h-10 px-5 rounded-sm text-xs sm:text-sm"
                      >
                        <span>Request {current.title} Assessment</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. VISUAL 5-SECTOR GALLERY GRID
        ========================================================= */}
        <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-[#f3f4f6]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Sector Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                Explore All 5 Sectors
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Click any industry card below to inspect technical specifications and case benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <div 
                  key={ind.id}
                  onClick={() => {
                    setSelectedIndustry(ind.id);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className={`group cursor-pointer rounded-xl overflow-hidden border transition-all flex flex-col justify-between bg-white shadow-xs hover:shadow-md ${
                    selectedIndustry === ind.id ? 'ring-2 ring-emerald-500 border-transparent' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img 
                      src={ind.image} 
                      alt={ind.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3 bg-[#070b12]/90 backdrop-blur-md text-emerald-400 font-mono text-xs font-bold px-2.5 py-1 rounded-sm border border-emerald-500/30">
                      {ind.stat} {ind.statLabel}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono uppercase text-emerald-300 font-semibold block">
                        {ind.tag}
                      </span>
                      <h3 className="text-base font-bold text-white">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 flex items-center justify-between text-xs font-semibold text-slate-700 bg-slate-50/50">
                    <span>Inspect Sector Specs</span>
                    <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            UNIFORM BOTTOM CTA
        ========================================================= */}
        <PlatformBottomCta
          title="Need a custom engineering review for your facility?"
          description="Our engineering team and TRIAXIS certified auditors conduct comprehensive on-site walk-throughs and feasibility analyses."
          onRequestDemo={onRequestDemo}
        />
      </div>
    </>
  );
};

export default IndustriesPage;
