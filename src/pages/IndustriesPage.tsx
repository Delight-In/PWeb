import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, Building2, Zap, Hotel, Landmark, 
  ArrowRight, CheckCircle2, AlertCircle, Download,
  ChevronRight
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

interface IndustriesPageProps {
  onRequestDemo: () => void;
  onOpenCapability: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onRequestDemo, onOpenCapability }) => {
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

      <div className="pt-24 pb-20 space-y-24 overflow-hidden">
        {/* =========================================================
            1. HERO SECTION
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto pt-4 sm:pt-8">
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Sector Specialization
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Built for Facilities Where{' '}
              <span className="bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                Every Resource Counts.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From heavy plant floors to multi-tower commercial portfolios and utility substations, PrishiTech adapts to the physical operating reality of your sector.
            </p>
          </div>
        </section>

        {/* =========================================================
            2. INTERACTIVE SECTOR STUDIO (With Visual Photography)
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Tab Selector */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-8">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    selectedIndustry === ind.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{ind.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Showcase Card (Split Image & Details) */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Image Side (6 cols) */}
              <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[460px] bg-slate-950">
                <img 
                  src={current.image} 
                  alt={current.title} 
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>

                {/* Floating Stat Badge */}
                <div className="absolute top-5 left-5 bg-emerald-600/95 backdrop-blur-md text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3">
                  <CurrentIcon className="w-5 h-5 text-emerald-200" />
                  <span className="text-2xl font-black font-mono leading-none">{current.stat}</span>
                  <span className="text-xs font-semibold border-l border-emerald-400/50 pl-3 leading-tight">
                    {current.statLabel}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                    {current.tag}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    {current.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-md">
                    {current.summary}
                  </p>
                </div>
              </div>

              {/* Details Side (6 cols) */}
              <div className="lg:col-span-6 p-6 sm:p-9 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-5">
                  {/* Challenges & Solutions */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Target Operational Challenges
                    </span>
                    <div className="space-y-2 text-xs">
                      {current.challenges.map((c, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-700">
                          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      PrishiTech Engineering Solution
                    </span>
                    <div className="space-y-2 text-xs">
                      {current.solutions.map((s, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-emerald-50/50 rounded-xl border border-emerald-200/80 text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                  <button
                    onClick={onRequestDemo}
                    className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Request {current.title} Assessment</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                  </button>

                  <button
                    onClick={onOpenCapability}
                    className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-xs border border-slate-200 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. VISUAL 5-SECTOR GALLERY GRID
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Sector Overview
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Explore All 5 Sectors
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Click any industry card below to inspect technical specifications and case benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div 
                key={ind.id}
                onClick={() => {
                  setSelectedIndustry(ind.id);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all flex flex-col justify-between bg-white shadow-sm hover:shadow-md ${
                  selectedIndustry === ind.id ? 'ring-2 ring-emerald-600 border-transparent' : 'border-slate-200'
                }`}
              >
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-400 font-mono text-xs font-bold px-2.5 py-1 rounded-lg border border-emerald-500/30">
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
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            4. BOTTOM CTA
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-4">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl text-center text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-3">
              Sector Feasibility
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Need a custom engineering review for your facility?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mt-2 mb-6">
              Our engineering team and TRIAXIS certified auditors in Vaishali, Ghaziabad conduct comprehensive on-site walk-throughs and feasibility analyses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs transition-colors shadow-md flex items-center justify-center gap-1.5"
              >
                <span>Schedule Site Feasibility Walk</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-200" />
              </Link>
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs border border-white/20 shadow-xs transition-colors"
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

export default IndustriesPage;
