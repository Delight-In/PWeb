import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Award, ArrowRight, Network 
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

interface TriaxisPageProps {
  onRequestDemo: () => void;
  onOpenCapability: () => void;
}

export const TriaxisPage: React.FC<TriaxisPageProps> = ({ onRequestDemo, onOpenCapability }) => {
  return (
    <>
      <SeoHead
        title="TRIAXIS Consortium | Prishitech Solutions Partnership"
        description="Prishitech Solutions is a TRIAXIS Consortium partner, combining resource intelligence technology with specialist energy and power domain expertise."
      />

      <div className="pt-24 pb-16 space-y-20">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto pt-6 sm:pt-12">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-full inline-block mb-4">
              Strategic Enterprise Alliance
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              “Stronger together:{' '}
              <span className="gradient-text">technology + domain expertise</span>.”
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              The TRIAXIS Consortium brings Prishitech's resource intelligence platform and IT services together with specialist partners across energy, power and facilities domains — so clients get technology and subject-matter expertise from one coordinated team, not a patchwork of vendors.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-glow-emerald flex items-center justify-center gap-2"
              >
                <span>Learn About Partnering With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={onOpenCapability}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm border border-slate-700 transition-colors"
              >
                Download Consortium Prospectus
              </button>
            </div>
          </div>
        </section>

        {/* SECTION: THE THREE AXES OF TRIAXIS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              The Consortium Framework
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              The Three Pillars of TRIAXIS
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Combining software intelligence, deep power systems engineering, and certified facility execution under a single accountable umbrella.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Axis 1: Prishitech Digital Intelligence */}
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 relative hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Network className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Axis 01</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3">
                Digital Platform &amp; OT Edge Software
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                <strong>Led by Prishitech Solutions:</strong> Edge sensor telemetry, cloud data pipelines, real-time analytics dashboards, OT cybersecurity, and automated anomaly detection models.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 border-t border-slate-800 pt-3">
                <li>• Unified multi-resource telemetry software</li>
                <li>• Purdue-compliant OT security perimeter</li>
                <li>• Continuous cloud data synchronization</li>
              </ul>
            </div>

            {/* Axis 2: Power Systems & Electrical Engineering */}
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 relative hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Axis 02</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3">
                Power Systems &amp; Grid Engineering
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                <strong>Consortium Power Specialists:</strong> High-voltage substation design, transformer loss optimization, harmonic mitigation, dynamic power factor correction, and grid load-balancing.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 border-t border-slate-800 pt-3">
                <li>• HT/LT electrical architecture audits</li>
                <li>• Harmonic filter bank engineering</li>
                <li>• Diesel generator &amp; solar PV synchronization</li>
              </ul>
            </div>

            {/* Axis 3: Certified Energy Auditing & HVAC Execution */}
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 relative hover:border-teal-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-teal-400">Axis 03</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3">
                BEE Auditing &amp; Facilities Retrofit
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                <strong>Accredited Energy Auditors:</strong> Bureau of Energy Efficiency (BEE) certified audits, ISO 50001 compliance, chiller overhaul engineering, and turnkey retrofit implementation.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 border-t border-slate-800 pt-3">
                <li>• Mandatory statutory BEE energy audits</li>
                <li>• HVAC chiller staging and pump VFD retrofits</li>
                <li>• Guaranteed investment-grade payback terms</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: TRIAXIS VS TRADITIONAL MULTI-VENDOR APPROACH */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                The Enterprise Difference
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Why the Consortium Model Wins
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Comparison of the TRIAXIS unified partnership versus the fragmented multi-vendor alternative.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-xs font-semibold uppercase tracking-wider">
                    <th className="py-4 px-4 text-slate-400">Operational Factor</th>
                    <th className="py-4 px-4 text-emerald-400 bg-emerald-950/30 rounded-t-xl">
                      TRIAXIS Consortium Delivery
                    </th>
                    <th className="py-4 px-4 text-slate-400">Traditional Multi-Vendor Patchwork</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                  <tr>
                    <td className="py-4 px-4 font-semibold text-white">Contractual SLA</td>
                    <td className="py-4 px-4 text-emerald-300 bg-emerald-950/20 font-medium">
                      ✓ Single coordinated team &amp; 1 accountable SLA
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      ✗ 4-6 distinct vendors blaming each other
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-white">Hardware to Cloud Sync</td>
                    <td className="py-4 px-4 text-emerald-300 bg-emerald-950/20 font-medium">
                      ✓ Pre-calibrated sensors + native cloud pipelines
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      ✗ Incompatible gateways and costly custom bridging
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-white">OT &amp; Plant Security</td>
                    <td className="py-4 px-4 text-emerald-300 bg-emerald-950/20 font-medium">
                      ✓ Industrial IEC 62443 + Purdue model enforcement
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      ✗ Generic IT firewall oblivious to SCADA protocols
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-white">Energy Audits &amp; Action</td>
                    <td className="py-4 px-4 text-emerald-300 bg-emerald-950/20 font-medium">
                      ✓ Audit findings directly wired to automated telemetry
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      ✗ Static PDF audit report forgotten in a drawer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Explore a TRIAXIS Consortium Partnership
            </h2>
            <p className="text-slate-300 text-sm">
              Connect with our joint consortium leadership to review how our combined capabilities streamline your facility expansion or energy modernization program.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-glow-emerald"
              >
                Learn About Partnering With Us
              </Link>
              <button
                onClick={onRequestDemo}
                className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-sm transition-colors"
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
