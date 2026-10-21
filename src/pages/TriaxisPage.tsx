import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Award, ArrowRight, Network, ShieldCheck, Check
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { PlatformBottomCta } from '../components/PlatformBottomCta';

interface TriaxisPageProps {
  onRequestDemo: () => void;
}

export const TriaxisPage: React.FC<TriaxisPageProps> = ({ onRequestDemo }) => {
  return (
    <>
      <SeoHead
        title="TRIAXIS Consortium | PrishiTech Solutions Partnership"
        description="PrishiTech Solutions is a TRIAXIS Consortium partner, combining resource intelligence technology with specialist energy and power domain expertise."
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
                  Strategic Enterprise Alliance
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.12]">
                  Stronger Together: Technology + Domain Expertise.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                  The TRIAXIS Consortium brings PrishiTech's resource intelligence platform and IT services together with certified partners across energy, power and facilities domains — delivering software and engineering accountability from one coordinated team.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-sm h-11 sm:h-12 px-7 sm:px-8 rounded-sm text-sm sm:text-[15px]"
                  >
                    <span>Partner With the Consortium</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    to="/solutions/resource-intelligence"
                    className="inline-flex items-center justify-center whitespace-nowrap transition-colors border border-black bg-black hover:bg-slate-800 text-white font-medium h-11 sm:h-12 px-7 sm:px-8 rounded-sm text-sm sm:text-[15px]"
                  >
                    <span>View Telemetry Solutions</span>
                  </Link>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    Single Accountable SLA
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    BEE Accredited Auditors
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    Turnkey Retrofit Delivery
                  </span>
                </div>
              </div>

              {/* Right Visual: Deep Dark Frame Platform Presentation */}
              <div className="lg:col-span-6">
                <div className="bg-[#070b12] border border-slate-800/80 rounded-xl p-2 sm:p-3 shadow-2xl overflow-hidden relative">
                  <div className="relative rounded-lg overflow-hidden border border-slate-800/80 aspect-[16/10] bg-slate-950">
                    <img 
                      src="/images/corporate-hq-center.jpg" 
                      alt="TRIAXIS Consortium Engineering Operations Center" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute top-3 left-3 bg-[#070b12]/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-sm text-xs font-mono font-bold flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>TRIAXIS Unified Alliance</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                        Consortium Delivery Model
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        Digital Software · Power Systems · BEE Audits
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION: THE THREE AXES OF TRIAXIS
        ========================================================= */}
        <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                The Consortium Framework
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                The Three Pillars of TRIAXIS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Combining software intelligence, deep power systems engineering, and certified facility execution under a single accountable umbrella.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Axis 1: PrishiTech Digital Intelligence */}
              <div className="bg-white p-7 sm:p-8 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <Network className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold">Axis 01</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                  Digital Platform &amp; OT Edge Software
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  <strong>Led by PrishiTech Solutions:</strong> Edge sensor telemetry, cloud data pipelines, real-time analytics dashboards, OT cybersecurity, and automated anomaly detection models.
                </p>
                <ul className="text-xs text-slate-500 space-y-1.5 border-t border-slate-100 pt-3">
                  <li>• Unified multi-resource telemetry software</li>
                  <li>• Purdue-compliant OT security perimeter</li>
                  <li>• Continuous cloud data synchronization</li>
                </ul>
              </div>

              {/* Axis 2: Power Systems & Electrical Engineering */}
              <div className="bg-white p-7 sm:p-8 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-sm bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mb-5">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold">Axis 02</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                  Power Systems &amp; Grid Engineering
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  <strong>Consortium Power Specialists:</strong> High-voltage substation design, transformer loss optimization, harmonic mitigation, dynamic power factor correction, and grid load-balancing.
                </p>
                <ul className="text-xs text-slate-500 space-y-1.5 border-t border-slate-100 pt-3">
                  <li>• HT/LT electrical architecture audits</li>
                  <li>• Harmonic filter bank engineering</li>
                  <li>• Diesel generator &amp; solar PV synchronization</li>
                </ul>
              </div>

              {/* Axis 3: Certified Energy Auditing & HVAC Execution */}
              <div className="bg-white p-7 sm:p-8 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-sm bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-700 font-semibold">Axis 03</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                  BEE Auditing &amp; Facilities Retrofit
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  <strong>Accredited Energy Auditors:</strong> Bureau of Energy Efficiency (BEE) certified audits, ISO 50001 compliance, chiller overhaul engineering, and turnkey retrofit implementation.
                </p>
                <ul className="text-xs text-slate-500 space-y-1.5 border-t border-slate-100 pt-3">
                  <li>• Mandatory statutory BEE energy audits</li>
                  <li>• HVAC chiller staging and pump VFD retrofits</li>
                  <li>• Guaranteed investment-grade payback terms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION: TRIAXIS VS TRADITIONAL MULTI-VENDOR APPROACH
        ========================================================= */}
        <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-[#f3f4f6]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 sm:p-12 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  The Enterprise Difference
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                  Why the Consortium Model Wins
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2">
                  Comparison of the TRIAXIS unified partnership versus the fragmented multi-vendor alternative.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs font-semibold uppercase tracking-wider">
                      <th className="py-3.5 px-4 text-slate-500">Operational Factor</th>
                      <th className="py-3.5 px-4 text-emerald-800 bg-emerald-50 rounded-t-sm font-bold">
                        TRIAXIS Consortium Delivery
                      </th>
                      <th className="py-3.5 px-4 text-slate-500">Traditional Multi-Vendor Patchwork</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    <tr>
                      <td className="py-4 px-4 font-semibold text-slate-900">Contractual SLA</td>
                      <td className="py-4 px-4 text-emerald-900 bg-emerald-50/50 font-medium">
                        ✓ Single coordinated team &amp; 1 accountable SLA
                      </td>
                      <td className="py-4 px-4 text-slate-500">
                        ✗ 4-6 distinct vendors blaming each other
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-slate-900">Hardware to Cloud Sync</td>
                      <td className="py-4 px-4 text-emerald-900 bg-emerald-50/50 font-medium">
                        ✓ Pre-calibrated sensors + native cloud pipelines
                      </td>
                      <td className="py-4 px-4 text-slate-500">
                        ✗ Incompatible gateways and costly custom bridging
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-slate-900">OT &amp; Plant Security</td>
                      <td className="py-4 px-4 text-emerald-900 bg-emerald-50/50 font-medium">
                        ✓ Industrial IEC 62443 + Purdue model enforcement
                      </td>
                      <td className="py-4 px-4 text-slate-500">
                        ✗ Generic IT firewall oblivious to SCADA protocols
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-slate-900">Energy Audits &amp; Action</td>
                      <td className="py-4 px-4 text-emerald-900 bg-emerald-50/50 font-medium">
                        ✓ Audit findings directly wired to automated telemetry
                      </td>
                      <td className="py-4 px-4 text-slate-500">
                        ✗ Static PDF audit report forgotten in a drawer
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            UNIFORM BOTTOM CTA
        ========================================================= */}
        <PlatformBottomCta
          title="Explore a TRIAXIS Consortium Partnership"
          description="Connect with our joint consortium leadership to review how our combined capabilities streamline your facility expansion or energy modernization program."
          onRequestDemo={onRequestDemo}
        />
      </div>
    </>
  );
};

export default TriaxisPage;
