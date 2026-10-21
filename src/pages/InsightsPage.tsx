import React, { useState } from 'react';
import { 
  User, Clock, 
  Search, ArrowRight, X
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { PlatformBottomCta } from '../components/PlatformBottomCta';
import type { InsightArticle } from '../types';

interface InsightsPageProps {
  onRequestDemo: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onRequestDemo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  const articles: InsightArticle[] = [
    {
      id: '1',
      title: 'How to Eliminate Peak Demand Penalties in Industrial Facilities',
      slug: 'eliminate-peak-demand-penalties',
      excerpt: 'Industrial power bills in India frequently incur stiff kVA surcharge penalties. Discover how sub-second feeder telemetry and automated load-shedding protect your contract demand.',
      content: [
        'Discom billing in most industrial states across India operates on a maximum demand kVA billing structure with harsh sliding-scale penalty tariffs when contracted thresholds are breached even for a single 15-minute integration window.',
        'Traditional plant operators only discover an over-demand event when the monthly utility invoice arrives. By implementing high-frequency IoT power meters at the incoming 11kV/33kV substations, facilities gain instantaneous visibility into rolling kVA demand.',
        'The PrishiTech platform pairs this visibility with an automated predictive algorithm that models demand curves 20 minutes in advance. When a spike is projected to hit 95% of contract cap, intelligent alerts notify floor managers or trigger automated staging off of non-critical auxiliary loads (e.g. secondary water chillers or raw-material grinding mills).',
        'In a heavy manufacturing facility in NCR, this automated protection eliminated ₹6.4 Lakh in recurring penalty surcharges in the first quarter of deployment alone.'
      ],
      category: 'Energy Efficiency',
      readTime: '5 min read',
      date: 'September 2026',
      author: 'PrishiTech Energy Advisory Bench',
      tags: ['Peak Load', 'kVA Demand', 'BEE Audits', 'Power Factor'],
    },
    {
      id: '2',
      title: 'Securing Operational Technology: Applying the Purdue Model to Legacy SCADA',
      slug: 'securing-ot-purdue-model',
      excerpt: 'Air-gapped factory systems are an illusion in the modern era of remote telemetry. Learn how to segregate Level 0-3 control devices from Level 4 enterprise cloud networks.',
      content: [
        'As industrial operations modernize, edge sensors and PLCs are connected to cloud analytics pipelines. However, exposing industrial control networks directly to enterprise IT exposes facilities to catastrophic ransomware and lateral attack vectors.',
        'The Purdue Enterprise Reference Architecture (PERA) provides an indispensable blueprint for industrial cybersecurity. It establishes strict segmentation between Physical Process (Level 0), Direct Control (Level 1), Supervisory SCADA (Level 2), Operations Management (Level 3), and Enterprise IT (Level 4).',
        'PrishiTech’s IoT edge gateways are deployed within a hardened Industrial DMZ (IDMZ). Outbound telemetry is transmitted over TLS 1.3 encrypted Modbus-over-TCP channels with one-way protocol break diodes.',
        'This architecture guarantees that remote telemetry reaches the cloud intelligence platform without permitting inbound command injection into safety-critical plant PLCs.'
      ],
      category: 'OT Security',
      readTime: '7 min read',
      date: 'August 2026',
      author: 'PrishiTech OT Cyber Team',
      tags: ['Purdue Model', 'IEC 62443', 'SCADA Security', 'Zero Trust'],
    },
    {
      id: '3',
      title: 'Thermodynamic Optimization: Increasing Chiller Plant COP by 18%',
      slug: 'chiller-plant-cop-optimization',
      excerpt: 'Central cooling typically accounts for over 50% of commercial complex electricity bills. Here is how continuous approach temperature tracking and variable pumping reclaim margin.',
      content: [
        'Central water-cooled chiller plants are engineered to operate at peak efficiency under nominal design conditions. However, ambient dry and wet-bulb temperatures fluctuate constantly throughout the year.',
        'Without continuous telemetry, chiller staging remains static. Chiller operators often run multiple compressors at low part-load efficiencies rather than staging a single machine at its optimum sweet spot.',
        'By installing high-precision RTD temperature probes, magnetic flow transmitters, and digital power meters across the evaporator and condenser circuits, PrishiTech calculates the instantaneous kW/TR and COP every 60 seconds.',
        'The AI advisory module dynamically recommends condenser water setpoint adjustments and cooling tower fan modulation. Case data across a 1,200 TR IT park campus revealed an 18.2% efficiency boost and over ₹28 Lakh in annualized energy cost savings.'
      ],
      category: 'Resource Intelligence',
      readTime: '6 min read',
      date: 'August 2026',
      author: 'TRIAXIS HVAC Specialist Group',
      tags: ['Chiller Plants', 'COP Analytics', 'HVAC Staging', 'kW/TR'],
    },
    {
      id: '4',
      title: 'Water Balance Audits: Stopping Invisible Distribution Losses',
      slug: 'water-balance-audits',
      excerpt: 'Commercial campuses lose up to 30% of input water to undetected underground pipe ruptures and cooling tower drift. Discover our automated water ledger methodology.',
      content: [
        'Water conservation is no longer merely an ecological concern; for facilities dependent on private water tankers and municipal quotas, water scarcity directly limits operational uptime.',
        'A comprehensive water balance requires monitoring input streams (borewell extraction, municipal mains, tanker replenishment), secondary usage nodes (domestic consumption, HVAC cooling towers, boiler makeup, horticulture), and recycling pathways (STP/ETP outputs).',
        'PrishiTech deploys ultrasonic and electromagnetic flow meters linked to an algorithmic water accounting engine. When total measured distribution falls below 96% of bulk inflow, acoustic anomaly detection flags sub-surface pipe leaks before ground saturation occurs.',
        'Furthermore, the platform automatically compiles CGWA (Central Ground Water Authority) extraction compliance reports, reducing statutory administrative overhead to zero.'
      ],
      category: 'Resource Intelligence',
      readTime: '4 min read',
      date: 'July 2026',
      author: 'PrishiTech Engineering Team',
      tags: ['Water Balance', 'CGWA Compliance', 'Leak Detection', 'ESG'],
    },
  ];

  const categories = ['All', 'Energy Efficiency', 'OT Security', 'Resource Intelligence'];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SeoHead
        title="Insights & Knowledge Hub | PrishiTech Solutions"
        description="Thought leadership on energy efficiency, IoT, and digital transformation — technical articles, case studies, and engineering briefs by PrishiTech Solutions and TRIAXIS Consortium."
      />

      <div className="bg-[#fbfcfd] min-h-screen">
        {/* =========================================================
            1. HERO: SPLIT PLATFORM PRESENTATION
        ========================================================= */}
        <section className="pt-16 pb-14 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Knowledge Hub &amp; Engineering Articles
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.12] mt-3">
                Thought Leadership on Resource Intelligence &amp; Digital Transformation
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                Practical guides, engineering blueprints, and regulatory compliance briefs authored by PrishiTech systems architects and TRIAXIS Consortium power specialists.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            SEARCH & FILTER BAR
        ========================================================= */}
        <section className="py-12 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-sm text-xs sm:text-sm font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-slate-950 text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles &amp; topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-xs"
                />
              </div>
            </div>

            {/* ARTICLES GRID */}
            <div className="pt-8">
              {filteredArticles.length === 0 ? (
                <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-slate-200">
                  No articles found matching your criteria. Try another search keyword.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredArticles.map((art) => (
                    <article
                      key={art.id}
                      className="bg-white p-7 sm:p-8 rounded-xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                          <span className="font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-sm">
                            {art.category}
                          </span>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{art.readTime}</span>
                          </div>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-3 leading-snug">
                          {art.title}
                        </h2>

                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {art.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {art.tags.map((tag) => (
                            <span key={tag} className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm border border-slate-200">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          <span>{art.author}</span>
                        </div>

                        <button
                          onClick={() => setSelectedArticle(art)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors"
                        >
                          <span>Read Full Brief</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#05DF72]" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FULL ARTICLE MODAL */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-2xl p-6 sm:p-8 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-y-auto max-h-[85vh]">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-sm border border-emerald-200">
                  {selectedArticle.category}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-sm hover:bg-slate-100 transition-colors flex items-center gap-1 text-xs"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100">
                <span>By {selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-6">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-start">
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onRequestDemo();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-xs h-10 px-5 rounded-sm text-xs sm:text-sm"
                >
                  Schedule Telemetry Briefing
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            UNIFORM BOTTOM CTA
        ========================================================= */}
        <PlatformBottomCta
          title="Looking for a custom briefing on your facility's energy footprint?"
          description="Connect with our systems architects to review how real-time telemetry and predictive models eliminate waste across your facilities."
          onRequestDemo={onRequestDemo}
        />
      </div>
    </>
  );
};

export default InsightsPage;
