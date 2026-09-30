import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, Building2, Zap, Hotel, Landmark, 
  ArrowRight, CheckCircle2, AlertCircle, Download
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
      title: 'Manufacturing & Industrial Plants',
      icon: Factory,
      tag: 'Heavy & Discrete Manufacturing',
      summary: 'Automotive, chemicals, textiles, pharmaceuticals, and precision metal fabrication.',
      challenges: [
        'Volatile electrical loads causing sudden peak kVA demand surcharge penalties from discoms.',
        'High thermal losses in boilers, furnaces, and unmonitored steam and gas distribution lines.',
        'Unplanned motor and air compressor breakdowns causing severe line stoppage losses.',
      ],
      solutions: [
        'Sub-second feeder metering with predictive peak-demand shedding alerts.',
        'PNG/LPG mass flow and air-fuel ratio telemetry for boiler combustion optimization.',
        'AI vibration and thermal monitoring on heavy induction motors and chiller compressors.',
      ],
      impact: '26% reduction in specific energy consumption (SEC) per finished metric ton.',
    },
    {
      id: 'real-estate',
      title: 'Commercial Real Estate & Portfolios',
      icon: Building2,
      tag: 'Grade-A Offices & IT Parks',
      summary: 'Multi-tenant commercial towers, tech parks, shopping malls, and corporate campuses.',
      challenges: [
        'Disputed tenant sub-metering and laborious manual meter readings each month.',
        'Central HVAC chiller plants consuming 50%+ of common area electricity at low efficiency.',
        'Complex ESG disclosure reporting and SEBI BRSR core compliance requirements.',
      ],
      solutions: [
        'Automated multi-tenant revenue-grade sub-metering with automated digital billing.',
        'Real-time COP tracking and condenser water temperature reset for chiller plants.',
        'Automated ESG Scope 1 & 2 carbon reporting dashboards accessible to property executives.',
      ],
      impact: '₹38 – 52 Lakh annual utility savings per 500,000 sq. ft. commercial complex.',
    },
    {
      id: 'utilities',
      title: 'Utilities & Energy Providers',
      icon: Zap,
      tag: 'Discoms & Renewable IPPs',
      summary: 'Power distribution utilities, captive power plants, and solar/wind farm operators.',
      challenges: [
        'High AT&C transmission losses and undetected power factor dips.',
        'Substation power quality degradation, severe harmonic distortion, and low power factor.',
        'Fragmented telemetry across thousands of remote distribution transformers.',
      ],
      solutions: [
        'Feeder-level power quality analyzers streaming THD, unbalance, and harmonics to the cloud.',
        'Automated APFC capacitor bank health monitoring to guarantee >0.99 power factor.',
        'Edge IoT cellular gateways connecting rural/remote distribution assets reliably.',
      ],
      impact: '99.98% telemetry availability with sub-second fault localization.',
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Large Campuses',
      icon: Hotel,
      tag: 'Hotels, Universities & Hospitals',
      summary: 'Luxury hotels, multi-specialty healthcare campuses, and university townships.',
      challenges: [
        'Fluctuating occupancy requiring dynamic cooling without sacrificing guest comfort.',
        'Massive water usage across commercial kitchens, laundry, and guest rooms with high sewer bills.',
        'Safety-critical steam and gas monitoring in laundry and dietary boilers.',
      ],
      solutions: [
        'Zone-based HVAC automated scheduling mapped to PMS property management occupancy.',
        'Acoustic leak detection and STP recycling water balance accounting.',
        'Continuous gas leak safety telemetry with automatic shut-off valve integration.',
      ],
      impact: '21% water waste eliminated and 19% reduction in HVAC thermal energy costs.',
    },
    {
      id: 'government',
      title: 'Government / PSU Facilities',
      icon: Landmark,
      tag: 'Public Sector Undertakings',
      summary: 'Municipal waterworks, defense establishments, railways, and state administrative complexes.',
      challenges: [
        'Strict statutory compliance with national Energy Conservation Building Codes (ECBC).',
        'Mandatory BEE audit certifications and stringent public procurement guidelines.',
        'Legacy equipment requiring non-invasive retrofits without replacing functional infrastructure.',
      ],
      solutions: [
        'TRIAXIS Consortium accredited BEE energy auditors executing investment-grade audits.',
        'Non-intrusive bolt-on IoT sensors requiring zero modification to existing heavy machinery.',
        'Air-gapped and on-premise capable sovereign deployment architectures.',
      ],
      impact: '100% statutory compliance with Bureau of Energy Efficiency benchmarks.',
    },
  ];

  const current = industries.find((i) => i.id === selectedIndustry) || industries[0];
  const CurrentIcon = current.icon;

  return (
    <>
      <SeoHead
        title="Industries We Serve | Prishitech Solutions"
        description="Prishitech Solutions supports manufacturing, commercial real estate, utilities, hospitality and government/PSU clients with resource intelligence and digital transformation."
      />

      <div className="pt-24 pb-20 space-y-20">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto pt-6 sm:pt-10">
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Sector Specialization
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Built for Facilities Where{' '}
              <span className="text-emerald-700">Every Resource Counts</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From heavy manufacturing plant floors to multi-tower commercial portfolios and utilities, Prishitech adapts to the specific operating physics of your sector.
            </p>
          </div>
        </section>

        {/* INTERACTIVE SECTOR STUDIO (User-Friendly Tab Selector) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Tab Selector */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    selectedIndustry === ind.id
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{ind.title.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Focused Showcase Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm transition-all">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800">
                <CurrentIcon className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                  {current.tag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {current.title}
                </h2>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed my-6">
              {current.summary}
            </p>

            {/* Split Comparison: Challenges vs Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Challenges */}
              <div className="lg:col-span-6 p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Common Operational Challenges</span>
                </div>
                <div className="space-y-2.5 pt-1 text-xs">
                  {current.challenges.map((c, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-slate-600">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions & Measured Benchmark */}
              <div className="lg:col-span-6 p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Prishitech Telemetry &amp; Automation</span>
                </div>
                <div className="space-y-2.5 pt-1 text-xs">
                  {current.solutions.map((s, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-slate-600">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span className="leading-relaxed">{s}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Verified Sector Benchmark:
                  </span>
                  <div className="text-base font-bold font-mono text-emerald-700 mt-0.5">
                    {current.impact}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Request {current.title.split('&')[0]} Assessment</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
              </button>

              <button
                onClick={onOpenCapability}
                className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs border border-slate-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Sector Capability Brief (PDF)</span>
              </button>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Need a custom engineering review for your facility?
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 mb-6">
              Our engineering team and TRIAXIS certified auditors in Vaishali, Ghaziabad conduct comprehensive on-site walk-throughs and feasibility analyses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors shadow-sm"
              >
                Schedule Site Feasibility Walk
              </Link>
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 font-medium rounded-xl text-xs border border-slate-200 shadow-xs transition-colors"
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
