import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, Eye, Bot, 
  Award, CheckCircle2, Phone, Mail,
  Check
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { PlatformLogoCloud } from '../components/PlatformLogoCloud';
import { PlatformBottomCta } from '../components/PlatformBottomCta';

interface AboutPageProps {
  onRequestDemo: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestDemo }) => {
  return (
    <>
      <SeoHead
        title="About PrishiTech Solutions | Industrial Data Foundation & TRIAXIS Consortium Partner"
        description="Learn how PrishiTech Solutions combines industrial data connectivity, edge intelligence, and TRIAXIS consortium expertise to help manufacturing clients modernize operations."
      />

      <div className="pt-16 pb-0 overflow-hidden bg-white text-slate-900 font-sans antialiased">
        {/* =========================================================
            1. HERO: PLATFORM-ALIGNED SPLIT 2-COLUMN
        ========================================================= */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-100 bg-[#fbfcfd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Content (6 Cols) */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  COMPANY STORY &amp; VALUES
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.12]">
                  Built to Make Industrial Operations &amp; Technology Work as One.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                  PrishiTech Solutions bridges the divide between physical plant equipment and digital intelligence. We bring together non-invasive monitoring hardware, industrial edge computing, and specialized cloud software — giving manufacturing clients one accountable partner.
                </p>

                <div className="pt-2 flex flex-wrap gap-3.5">
                  <button
                    onClick={onRequestDemo}
                    className="inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-sm h-11 sm:h-12 px-7 sm:px-8 rounded-sm text-sm sm:text-[15px]"
                  >
                    <span>Request a Demo -&gt;</span>
                  </button>
                  <Link
                    to="/platform"
                    className="inline-flex items-center justify-center whitespace-nowrap transition-colors border border-black bg-black hover:bg-slate-800 text-white font-medium h-11 sm:h-12 px-7 sm:px-8 rounded-sm text-sm sm:text-[15px]"
                  >
                    <span>Explore Platform</span>
                  </Link>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#05DF72] stroke-[3]" />
                    TRIAXIS Consortium Backed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#05DF72] stroke-[3]" />
                    NCR Engineering Command Labs
                  </span>
                </div>
              </div>

              {/* Right Visual Image (6 Cols) */}
              <div className="lg:col-span-6">
                <div className="relative rounded-xl overflow-hidden bg-[#070b12] border border-slate-800/80 shadow-2xl p-2 sm:p-2.5 group">
                  <img 
                    src="/images/corporate-hq-center.jpg" 
                    alt="PrishiTech Global Operations & Engineering Command Center" 
                    className="w-full h-80 sm:h-96 object-cover object-center rounded-lg group-hover:scale-[1.01] transition-transform duration-700"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent rounded-lg"></div>

                  {/* Ambient Badge */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white border border-emerald-500/40 px-3.5 py-1.5 rounded-sm text-xs shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#05DF72] animate-pulse"></span>
                    <span className="font-semibold text-slate-100">Central Engineering Command · NCR</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#05DF72] font-semibold block mb-0.5">
                      Operations &amp; Research
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">
                      Turnkey IoT calibration &amp; industrial cloud staging
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. ENTERPRISE LOGO CLOUD (Platform UI Standard)
        ========================================================= */}
        <PlatformLogoCloud />

        {/* =========================================================
            3. GUIDING PHILOSOPHY (3-Column Clean Cards)
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
              <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                GUIDING PHILOSOPHY
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Principles That Govern Every Partnership
              </h2>
              <p className="text-base text-slate-600 font-normal">
                Three foundational commitments that guide our hardware engineering, edge analytics, and client deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Belief 1 */}
              <div className="bg-[#f8fafc] p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-5">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-emerald-800 uppercase font-bold tracking-wider">Principle 01</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1.5 mb-2">
                    Visibility Precedes Optimization
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    You cannot manage what you do not measure. High-resolution telemetry across meters, flow transmitters, and pipelines turns invisible waste into clear balance sheet savings.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-[#05DF72]" />
                  <span>Calibrated Sub-Second Sensors</span>
                </div>
              </div>

              {/* Belief 2 */}
              <div className="bg-[#f8fafc] p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-800 mb-5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-sky-800 uppercase font-bold tracking-wider">Principle 02</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1.5 mb-2">
                    Security &amp; Operational Continuity
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    In industrial facilities, an insecure port or software crash can halt production. We architect with strict Purdue Model isolation, ensuring zero external PLC write-back.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-[#05DF72]" />
                  <span>Purdue IDMZ &amp; IEC 62443</span>
                </div>
              </div>

              {/* Belief 3 */}
              <div className="bg-[#f8fafc] p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-800 mb-5">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-purple-800 uppercase font-bold tracking-wider">Principle 03</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1.5 mb-2">
                    Intelligence Must Save Time
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Intelligence should eliminate manual work, not introduce another screen to monitor. Our algorithms dispatch actionable recommendations and alert before equipment failures.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-[#05DF72]" />
                  <span>Predictive Alarms &amp; Load Shedding</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. THE TRIAXIS CONSORTIUM ALLIANCE (Alternating Block)
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-[#f3f4f6]/60 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#f8fafc] rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                {/* Image Side (5 cols) */}
                <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] bg-[#070b12] p-2">
                  <img 
                    src="/images/digital-cloud-iot.jpg" 
                    alt="TRIAXIS Consortium Strategic Alliance" 
                    className="w-full h-full object-cover object-center absolute inset-2 rounded-lg"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#05DF72] text-black text-xs font-bold mb-2">
                      <Award className="w-3.5 h-3.5" />
                      <span>Single-Source SLA</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">TRIAXIS Consortium Delivery</h3>
                    <p className="text-xs text-slate-300 mt-1">Software + BEE energy auditors + power grid engineering under a single contract.</p>
                  </div>
                </div>

                {/* Text Side (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-10 space-y-5">
                  <div className="space-y-1">
                    <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                      STRATEGIC ALLIANCE
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                      Why the TRIAXIS Alliance Matters
                    </h2>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Traditional facility upgrades fall short when software startups lack electrical engineering know-how, or when mechanical contractors lack cloud cyber capability. The TRIAXIS Consortium solves this by uniting PrishiTech's software platform with certified power engineers, BEE auditors, and HVAC specialists.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#05DF72] shrink-0" />
                      <span className="font-medium">Single Contract &amp; Unified SLA</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#05DF72] shrink-0" />
                      <span className="font-medium">Turnkey Sensor Deployment</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#05DF72] shrink-0" />
                      <span className="font-medium">Continuous BEE Energy Advisory</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#05DF72] shrink-0" />
                      <span className="font-medium">Purdue Model OT Cyber Defense</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onRequestDemo}
                      className="inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-sm h-11 px-7 rounded-sm text-sm"
                    >
                      <span>Request Consortium Consultation -&gt;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            5. CORPORATE HEADQUARTERS & LABS
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  CORPORATE PRESENCE &amp; REGISTERED OFFICE
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Headquartered in Vaishali, Ghaziabad
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our central engineering and software lab is strategically located in the NCR region, enabling rapid on-site dispatch across Northern India and major industrial manufacturing belts.
                </p>

                <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-3">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span>PrishiTech Solutions (Registered Office)</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    5A 45/46, Cloud-9, Sector-1, Vaishali,<br />
                    Ghaziabad, Uttar Pradesh 201019, India
                  </p>
                  <div className="pt-2 text-xs text-slate-500 flex flex-wrap gap-4 border-t border-slate-200/80">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      +91 120 456 7890
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-emerald-600" />
                      contact@prishitech.com
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold h-11 px-6 rounded-sm text-sm transition-colors shadow-xs"
                  >
                    Contact Engineering Lab
                  </Link>
                  <Link
                    to="/solutions/resource-intelligence"
                    className="inline-flex items-center justify-center whitespace-nowrap border border-black bg-black hover:bg-slate-800 text-white font-medium h-11 px-6 rounded-sm text-sm transition-colors"
                  >
                    Explore Telemetry
                  </Link>
                </div>
              </div>

              {/* Operations Hub Detail Card */}
              <div className="lg:col-span-6 bg-[#f8fafc] rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 uppercase tracking-wide">NCR Technical Capabilities</span>
                  <span className="text-[#05DF72] font-mono font-bold bg-black px-2.5 py-0.5 rounded-xs">Live Hub</span>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block mb-1">Rapid Deployment Transit:</strong>
                    Direct connectivity via Delhi Metro Blue Line (Vaishali Station ~1.5 km), Anand Vihar ISBT, and Delhi-Meerut Expressway.
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block mb-1">In-House Sensor Testing:</strong>
                    Hardware calibration benches for Modbus RS-485, ultrasonic flow transmitters, and live cloud telemetry staging servers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. STANDARDIZED PLATFORM BOTTOM CTA
        ========================================================= */}
        <PlatformBottomCta 
          title="Ready to meet our engineering team?"
          description="Schedule a facility walkthrough or request a live demonstration of our unified resource platform."
          onRequestDemo={onRequestDemo}
        />
      </div>
    </>
  );
};

export default AboutPage;
