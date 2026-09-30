import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, Building2, Zap, Hotel, Landmark, 
  ArrowRight, CheckCircle2, TrendingDown 
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

interface IndustriesPageProps {
  onRequestDemo: () => void;
  onOpenCapability: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onRequestDemo, onOpenCapability }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = [
    {
      id: 'manufacturing',
      title: 'Manufacturing & Industrial Plants',
      icon: Factory,
      tag: 'Heavy & Discrete Manufacturing',
      summary: 'Automotive, chemicals, textiles, pharmaceuticals, and precision metal fabrication.',
      challenges: [
        'Volatile electrical loads and sudden peak kVA demand penalty charges from discoms.',
        'High thermal losses in boilers, furnaces, and unmonitored steam/gas distribution lines.',
        'Unplanned motor and air compressor breakdowns causing severe line stoppage losses.',
      ],
      solutions: [
        'Sub-second feeder metering with predictive peak-demand shedding alerts.',
        'PNG/LPG mass flow and air-fuel ratio telemetry for boiler combustion optimization.',
        'AI vibration and thermal monitoring on heavy induction motors and chiller compressors.',
      ],
      impact: '26% reduction in specific energy consumption (SEC) per finished product metric ton.',
    },
    {
      id: 'real-estate',
      title: 'Commercial Real Estate & Facility Portfolios',
      icon: Building2,
      tag: 'Grade-A Offices & IT Parks',
      summary: 'Multi-tenant commercial towers, tech parks, shopping malls, and corporate campuses.',
      challenges: [
        'Disputed tenant sub-metering and laborious manual meter readings each month.',
        'Central HVAC chiller plants consuming 50%+ of common area electricity with sub-optimal staging.',
        'Complex ESG disclosure reporting and SEBI BRSR core compliance requirements.',
      ],
      solutions: [
        'Automated multi-tenant revenue-grade sub-metering with automated digital billing.',
        'Real-time COP tracking and condenser water temperature reset for chiller plants.',
        'Automated ESG and Scope 1/2 carbon reporting dashboards accessible to property executives.',
      ],
      impact: '₹38 – 52 Lakh annual savings per 500,000 sq. ft. commercial complex.',
    },
    {
      id: 'utilities',
      title: 'Utilities & Energy Providers',
      icon: Zap,
      tag: 'Discoms & Renewable IPPs',
      summary: 'Power distribution utilities, captive power plants, and solar/wind farm operators.',
      challenges: [
        'High AT&C (aggregate technical and commercial) transmission and distribution losses.',
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
        'Zone-based HVAC automated scheduling mapped to PMS (property management system) occupancy.',
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
        'Mandatory BEE audit certifications and stringent procurement guidelines.',
        'Legacy equipment requiring retrofits without replacing existing functional infrastructure.',
      ],
      solutions: [
        'TRIAXIS Consortium accredited BEE energy auditors executing investment-grade audits.',
        'Non-intrusive bolt-on IoT sensors requiring zero modification to existing heavy machinery.',
        'Air-gapped and on-premise capable sovereign deployment architectures.',
      ],
      impact: 'Guaranteed compliance with Bureau of Energy Efficiency statutory benchmarks.',
    },
  ];

  const filtered = selectedIndustry === 'all' 
    ? industries 
    : industries.filter((i) => i.id === selectedIndustry);

  return (
    <>
      <SeoHead
        title="Industries We Serve | Prishitech Solutions"
        description="Prishitech Solutions supports manufacturing, commercial real estate, utilities, hospitality and government/PSU clients with resource intelligence and digital transformation."
      />

      <div className="pt-24 pb-16 space-y-20">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto pt-6 sm:pt-12">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-full inline-block mb-4">
              Sector Specialization
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              “Built for facilities where{' '}
              <span className="gradient-text">every resource counts</span>.”
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              From heavy manufacturing plant floors to multi-tower commercial portfolios and municipal utilities, Prishitech adapts to the specific operating physics of your sector.
            </p>

            {/* Filter buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setSelectedIndustry('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedIndustry === 'all'
                    ? 'bg-emerald-500 text-slate-950 shadow-glow-emerald'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                All 5 Sectors
              </button>
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedIndustry === ind.id
                      ? 'bg-emerald-500 text-slate-950 shadow-glow-emerald'
                      : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {ind.title.split('&')[0]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES LIST */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
          {filtered.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="w-full lg:w-1/3 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                      {ind.tag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {ind.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {ind.summary}
                    </p>
                    <div className="p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-2xl text-xs text-emerald-300 space-y-1">
                      <strong className="block text-white">Proven Sector Impact:</strong>
                      <span>{ind.impact}</span>
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={onRequestDemo}
                        className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                      >
                        <span>Schedule a Sector-Specific Walkthrough</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
                    {/* Challenges */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                        <TrendingDown className="w-4 h-4" /> Operational Roadblocks
                      </h4>
                      <div className="space-y-2.5">
                        {ind.challenges.map((c, i) => (
                          <div key={i} className="p-3 bg-slate-900 rounded-xl text-xs text-slate-300 border border-slate-800/80">
                            • {c}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> Prishitech Platform Solutions
                      </h4>
                      <div className="space-y-2.5">
                        {ind.solutions.map((s, i) => (
                          <div key={i} className="p-3 bg-slate-900 rounded-xl text-xs text-slate-300 border border-slate-800/80">
                            ✓ {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* BOTTOM CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Do you operate in one of these sectors?
            </h2>
            <p className="text-slate-300 text-sm">
              Connect with our facility engineering team to explore anonymized case benchmarks and customized utility monitoring architecture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-glow-emerald"
              >
                Discuss Your Facility
              </Link>
              <button
                onClick={onOpenCapability}
                className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-sm transition-colors"
              >
                Download Industry Capability Brief
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
