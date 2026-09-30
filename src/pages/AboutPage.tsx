import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, MapPin, ShieldCheck, Eye, Bot, 
  ArrowRight, Award, CheckCircle2 
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

interface AboutPageProps {
  onRequestDemo: () => void;
  onOpenCapability: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestDemo, onOpenCapability }) => {
  return (
    <>
      <SeoHead
        title="About Prishitech Solutions | Resource Intelligence & TRIAXIS Consortium Partner"
        description="Learn how Prishitech Solutions combines resource intelligence and digital transformation expertise to help industrial and commercial clients cut waste and modernize operations."
      />

      <div className="pt-24 pb-20 space-y-20">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto pt-6 sm:pt-10">
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full inline-block mb-4">
              Company Story &amp; Values
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              “Built to make resources, and technology,{' '}
              <span className="text-emerald-700">work harder for you.”</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Prishitech Solutions was founded to close the gap between facility operations and digital intelligence. We bring together resource monitoring hardware, cloud software and a full IT services bench — so clients get one accountable partner instead of five vendors. As a TRIAXIS Consortium partner, we combine our platform with specialist energy and power expertise to deliver outcomes, not just dashboards.
            </p>
          </div>
        </section>

        {/* SECTION: WHAT WE BELIEVE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Guiding Philosophy
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              What We Believe
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Three foundational principles that govern every hardware deployment, data pipeline, and client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Belief 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-emerald-700 uppercase font-semibold">Principle 01</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                Visibility Precedes Optimization
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                You can't manage what you can't see. High-resolution, calibrated telemetry across electricity meters, flow sensors, and gas lines turns hidden utility leaks into quantifiable balance sheets.
              </p>
            </div>

            {/* Belief 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-sky-700 uppercase font-semibold">Principle 02</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                Security &amp; Reliability Are Non-Negotiable
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                In OT and industrial environments, a software glitch or insecure edge port can halt production lines or compromise plant safety. We design with strict Purdue Model network isolation and zero-trust verification.
              </p>
            </div>

            {/* Belief 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-5">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-teal-700 uppercase font-semibold">Principle 03</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                Automation Must Reduce Workload
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automation should reduce human workload, not add another dashboard to check. Our AI models dispatch actionable recommendations, trigger automated load-shedding, and alert before asset breakdown occurs.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: THE TRIAXIS CONSORTIUM ALLIANCE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 flex flex-col lg:flex-row items-center gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 w-fit">
                <Award className="w-3.5 h-3.5" />
                Strategic Alliance
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                The TRIAXIS Consortium Partnership
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Traditional facility revamps fail when software companies lack electrical engineering depth, or when equipment contractors lack enterprise cloud and cyber capability. The TRIAXIS Consortium solves this by uniting Prishitech's digital platform with certified power engineers, BEE auditors, and HVAC specialists.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Single Contract, Unified SLA Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Turnkey Hardware Provisioning &amp; Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Continuous Energy Advisory &amp; Tariff Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Purdue Model OT Threat Monitoring</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 text-center w-full lg:w-auto shrink-0 space-y-4 shadow-sm">
              <div className="text-4xl font-extrabold text-slate-900 font-mono">100%</div>
              <div className="text-xs text-slate-500 max-w-[200px] mx-auto">
                Accountability from physical sensor tap to board-level reporting
              </div>
              <Link
                to="/triaxis"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors"
              >
                <span>Read Consortium Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION: REGISTERED ADDRESS & OPERATIONS HUB */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 w-fit">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Corporate Presence &amp; Registered Office</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Headquartered in Vaishali, Ghaziabad
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our central engineering and software lab is strategically situated in the NCR region, enabling rapid deployment and on-site engineering dispatch across Northern India and pan-India industrial clusters.
                </p>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-sm text-slate-700 space-y-2">
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span>Prishitech Solutions (Registered Address)</span>
                  </div>
                  <p className="text-slate-600">
                    5A 45/46, Cloud-9, Sector-1, Vaishali,<br />
                    Ghaziabad, Uttar Pradesh 201019, India
                  </p>
                  <div className="pt-2 text-xs text-slate-500 flex flex-wrap gap-4 border-t border-slate-200">
                    <span>Phone: +91 120 456 7890</span>
                    <span>Email: contact@prishitech.com</span>
                    <span>Support: 24/7 OT Operations</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm transition-all shadow-sm"
                  >
                    Contact Our Office
                  </Link>
                  <button
                    onClick={onOpenCapability}
                    className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-sm border border-slate-200"
                  >
                    Download Prospectus
                  </button>
                </div>
              </div>

              {/* Transit & Facilities card */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-semibold text-slate-900">NCR Engineering Facility</span>
                  <span className="text-slate-500">Pincode: 201019</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 shadow-xs">
                    <strong className="text-slate-900 block mb-1">Access &amp; Connectivity:</strong>
                    Direct connectivity via Delhi Metro Blue Line (Vaishali Metro Station ~ 1.5 km), Anand Vihar ISBT (~ 3 km), and Delhi-Meerut Expressway.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 shadow-xs">
                    <strong className="text-slate-900 block mb-1">Testing Facilities:</strong>
                    In-house IoT edge gateway calibration, Modbus/BACnet test benches, and live cloud telemetry staging servers.
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 text-center pt-1">
                  Coordinates: 28.6472° N, 77.3402° E · Cloud-9, Sector-1, Vaishali
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-6 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-1">
              Connect With Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Ready to meet our engineering team?
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Learn how our combined domain expertise and resource platform can modernize your facility operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors shadow-xs"
              >
                Schedule an Introduction
              </Link>
              <button
                onClick={onRequestDemo}
                className="px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs border border-slate-200 shadow-xs transition-colors"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
