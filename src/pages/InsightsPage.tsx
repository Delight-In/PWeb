import React, { useState } from 'react';
import { 
  FileText, Download, User, Clock, 
  Search, ChevronRight 
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import type { InsightArticle } from '../types';

interface InsightsPageProps {
  onOpenCapability: () => void;
  onRequestDemo: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onOpenCapability, onRequestDemo }) => {
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
        'The Prishitech platform pairs this visibility with an automated predictive algorithm that models demand curves 20 minutes in advance. When a spike is projected to hit 95% of contract cap, intelligent alerts notify floor managers or trigger automated staging off of non-critical auxiliary loads (e.g. secondary water chillers or raw-material grinding mills).',
        'In a heavy manufacturing facility in NCR, this automated protection eliminated ₹6.4 Lakh in recurring penalty surcharges in the first quarter of deployment alone.'
      ],
      category: 'Energy Efficiency',
      readTime: '5 min read',
      date: 'September 2026',
      author: 'Prishitech Energy Advisory Bench',
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
        'Prishitech’s IoT edge gateways are deployed within a hardened Industrial DMZ (IDMZ). Outbound telemetry is transmitted over TLS 1.3 encrypted Modbus-over-TCP channels with one-way protocol break diodes.',
        'This architecture guarantees that remote telemetry reaches the cloud intelligence platform without permitting inbound command injection into safety-critical plant PLCs.'
      ],
      category: 'OT Security',
      readTime: '7 min read',
      date: 'August 2026',
      author: 'Prishitech OT Cyber Team',
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
        'By installing high-precision RTD temperature probes, magnetic flow transmitters, and digital power meters across the evaporator and condenser circuits, Prishitech calculates the instantaneous kW/TR and COP every 60 seconds.',
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
        'Prishitech deploys ultrasonic and electromagnetic flow meters linked to an algorithmic water accounting engine. When total measured distribution falls below 96% of bulk inflow, acoustic anomaly detection flags sub-surface pipe leaks before ground saturation occurs.',
        'Furthermore, the platform automatically compiles CGWA (Central Ground Water Authority) extraction compliance reports, reducing statutory administrative overhead to zero.'
      ],
      category: 'Resource Intelligence',
      readTime: '4 min read',
      date: 'July 2026',
      author: 'Prishitech Engineering Team',
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
        title="Insights & Knowledge Hub | Prishitech Solutions"
        description="Thought leadership on energy efficiency, IoT, and digital transformation — technical articles, case studies, and engineering briefs by Prishitech Solutions and TRIAXIS Consortium."
      />

      <div className="pt-24 pb-16 space-y-16">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto pt-6 sm:pt-12">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-full inline-block mb-4">
              Knowledge Hub &amp; Engineering Articles
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Thought Leadership on{' '}
              <span className="gradient-text">Resource Intelligence</span> &amp; Digital Transformation
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Practical guides, engineering blueprints, and regulatory compliance briefs authored by Prishitech systems architects and TRIAXIS Consortium power specialists.
            </p>

            {/* Capability Statement Banner */}
            <div className="mt-8 p-4 bg-slate-900/90 rounded-2xl border border-slate-800 max-w-xl mx-auto flex items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">2026 Enterprise Capability Statement</div>
                  <div className="text-[11px] text-slate-400">Complete technical specs, architecture &amp; SLA structure</div>
                </div>
              </div>
              <button
                onClick={onOpenCapability}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs transition-all flex items-center gap-1.5 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF</span>
              </button>
            </div>
          </div>
        </section>

        {/* SEARCH & FILTER BAR */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-emerald-500 text-slate-950 shadow-glow-emerald'
                      : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
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
                className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              No articles found matching your criteria. Try another search keyword.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((art) => (
                <article
                  key={art.id}
                  className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                      <span className="font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-2.5 py-1 rounded-full">
                        {art.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{art.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-3 leading-snug">
                      {art.title}
                    </h2>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {art.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {art.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                      <span>{art.author}</span>
                    </div>

                    <button
                      onClick={() => setSelectedArticle(art)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Read Full Brief</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* FULL ARTICLE MODAL */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-2xl p-6 sm:p-8 bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-y-auto max-h-[85vh]">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
                  {selectedArticle.category}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  ✕ Close
                </button>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-slate-400 mb-6 pb-4 border-b border-slate-800/80">
                <span>By {selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed mb-6">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onRequestDemo();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs"
                >
                  Schedule Telemetry Briefing
                </button>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenCapability();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs"
                >
                  Download PDF Statement
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
