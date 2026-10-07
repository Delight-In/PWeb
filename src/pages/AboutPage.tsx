import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, MapPin, ShieldCheck, Eye, Bot, 
  ArrowRight, Award, CheckCircle2, Phone, Mail,
  Check
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
        title="About PrishiTech Solutions | Resource Intelligence & TRIAXIS Consortium Partner"
        description="Learn how PrishiTech Solutions combines resource intelligence and digital transformation expertise to help industrial and commercial clients cut waste and modernize operations."
      />

      <div className="pt-24 pb-20 space-y-24 overflow-hidden">
        {/* =========================================================
            1. HERO: SPLIT PHOTO & VALUE PROPOSITION
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (6 Cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                Company Story &amp; Values
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Built to make resources &amp; technology{' '}
                <span className="bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  work harder for you.
                </span>
              </h1>

              <p className="text-slate-600 text-base leading-relaxed">
                PrishiTech Solutions bridges the divide between physical plant operations and digital intelligence. We bring together non-invasive monitoring hardware, real-time cloud software, and specialized IT engineering — giving clients one accountable partner instead of fragmented vendors.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onRequestDemo}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
                >
                  <span>Request a Demo</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </button>
                <button
                  onClick={onOpenCapability}
                  className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl text-xs sm:text-sm border border-slate-200 shadow-2xs transition-all"
                >
                  Download Prospectus (PDF)
                </button>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                  TRIAXIS Consortium Backed
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                  NCR Engineering Labs
                </span>
              </div>
            </div>

            {/* Right Visual Image (6 Cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group bg-slate-950">
                <img 
                  src="/images/corporate-hq-center.jpg" 
                  alt="PrishiTech Global Operations & Engineering Command Center" 
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Floating Glassmorphism Badges */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white border border-emerald-500/40 px-3.5 py-2 rounded-xl text-xs shadow-lg flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold">Central Engineering Command · NCR</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-0.5">
                    Operations &amp; Research
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    Turnkey IoT calibration &amp; industrial cloud staging
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. SECTION: GUIDING PHILOSOPHY (VISUAL CARDS)
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Guiding Philosophy
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              What We Believe
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Three foundational principles that govern every hardware deployment, data pipeline, and client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Belief 1 */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-emerald-700 uppercase font-bold">Principle 01</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                  Visibility Precedes Optimization
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  You cannot manage what you do not measure. High-resolution telemetry across meters, flow transmitters, and pipelines turns invisible waste into clear balance sheet savings.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>Calibrated Sub-Second Sensors</span>
              </div>
            </div>

            {/* Belief 2 */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-sky-700 uppercase font-bold">Principle 02</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                  Security &amp; Reliability First
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  In industrial plants, an insecure port or software crash can halt production. We architect with strict Purdue Model isolation, ensuring zero external PLC write-back.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-sky-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>Purdue IDMZ &amp; IEC 62443</span>
              </div>
            </div>

            {/* Belief 3 */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 mb-5">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-purple-700 uppercase font-bold">Principle 03</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                  Automation Must Save Time
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Automation should eliminate manual work, not introduce another screen to monitor. Our algorithms dispatch actionable recommendations and alert before equipment failures.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-purple-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>Predictive Alarms &amp; Load Shedding</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. SECTION: THE TRIAXIS CONSORTIUM ALLIANCE (WITH IMAGE)
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              {/* Image Side (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] bg-slate-950">
                <img 
                  src="/images/digital-cloud-iot.jpg" 
                  alt="TRIAXIS Consortium Strategic Alliance" 
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-600/90 text-white text-xs font-semibold mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>Single-Source SLA</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">TRIAXIS Consortium Delivery</h3>
                  <p className="text-xs text-slate-300 mt-1">Software + BEE energy auditors + power grid engineering under a single contract.</p>
                </div>
              </div>

              {/* Text Side (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 space-y-5">
                <div>
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Strategic Alliance
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                    Why the TRIAXIS Alliance Matters
                  </h2>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Traditional facility upgrades fall short when software startups lack electrical engineering know-how, or when mechanical contractors lack cloud cyber capability. The TRIAXIS Consortium solves this by uniting PrishiTech's software platform with certified power engineers, BEE auditors, and HVAC specialists.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">Single Contract &amp; Unified SLA</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">Turnkey Sensor Deployment</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">Continuous BEE Energy Advisory</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">Purdue Model OT Cyber Defense</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onRequestDemo}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors flex items-center gap-2"
                  >
                    <span>Request Consortium Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. SECTION: CORPORATE HEADQUARTERS & LABS
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 w-fit">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Corporate Presence &amp; Registered Office</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Headquartered in Vaishali, Ghaziabad
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Our central engineering and software lab is strategically located in the NCR region, enabling rapid on-site dispatch across Northern India and major industrial manufacturing belts.
                </p>

                <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span>PrishiTech Solutions (Registered Office)</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    5A 45/46, Cloud-9, Sector-1, Vaishali,<br />
                    Ghaziabad, Uttar Pradesh 201019, India
                  </p>
                  <div className="pt-2 text-xs text-slate-500 flex flex-wrap gap-4 border-t border-slate-200">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-emerald-600" />
                      +91 120 456 7890
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-emerald-600" />
                      contact@prishitech.com
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-all shadow-xs"
                  >
                    Contact Engineering Lab
                  </Link>
                  <button
                    onClick={onOpenCapability}
                    className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-xs border border-slate-200"
                  >
                    Download Capability Statement
                  </button>
                </div>
              </div>

              {/* Operations Hub Detail Card */}
              <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-slate-900">NCR Technical Capabilities</span>
                  <span className="text-emerald-700 font-mono font-medium">Live Hub</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                    <strong className="text-slate-900 block mb-0.5">Rapid Deployment Transit:</strong>
                    Direct connectivity via Delhi Metro Blue Line (Vaishali Station ~1.5 km), Anand Vihar ISBT, and Delhi-Meerut Expressway.
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                    <strong className="text-slate-900 block mb-0.5">In-House Sensor Testing:</strong>
                    Hardware calibration benches for Modbus RS-485, ultrasonic flow transmitters, and live cloud telemetry staging servers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            5. CTA SECTION
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-4 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-xl text-white space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-1">
              Connect With Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to meet our engineering team?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
              Schedule a site walk or request a live demonstration of our unified resource platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs transition-colors shadow-md"
              >
                Schedule an Introduction
              </Link>
              <button
                onClick={onRequestDemo}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs border border-white/20 shadow-xs transition-colors"
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

export default AboutPage;
