import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Globe, Clock, CheckCircle2, 
  Send, ShieldCheck, AlertCircle, Loader2, Calendar, Sparkles
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { sendContactInquiry } from '../services/leadService';
import type { ContactFormData, AreaOfInterest } from '../types';

interface ContactPageProps {
  onRequestDemo?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const location = useLocation();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    areaOfInterest: 'Book a Platform Demo',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-detect incoming pillar / demo intent from router navigation
  useEffect(() => {
    const state = location.state as { pillar?: string; fromDemo?: boolean } | null;
    if (state?.pillar) {
      if (state.pillar.toLowerCase().includes('resource')) {
        setFormData((prev) => ({ ...prev, areaOfInterest: 'Resource Intelligence' }));
      } else if (state.pillar.toLowerCase().includes('digital') || state.pillar.toLowerCase().includes('it')) {
        setFormData((prev) => ({ ...prev, areaOfInterest: 'IT Services & Digital Transformation' }));
      } else if (state.pillar.toLowerCase().includes('triaxis') || state.pillar.toLowerCase().includes('consortium')) {
        setFormData((prev) => ({ ...prev, areaOfInterest: 'TRIAXIS Consortium Partnership' }));
      } else {
        setFormData((prev) => ({ 
          ...prev, 
          areaOfInterest: 'Book a Platform Demo',
          message: `Requesting a live platform demonstration for: ${state.pillar}`
        }));
      }
    } else if (state?.fromDemo) {
      setFormData((prev) => ({ ...prev, areaOfInterest: 'Book a Platform Demo' }));
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await sendContactInquiry(formData);
      if (res.success) {
        setSubmitted(true);
      } else {
        setError(res.message || 'Unable to route message at this moment. Please email contact@prishitech.com directly.');
      }
    } catch (err) {
      console.error('Contact inquiry error:', err);
      setError('A network error occurred. Please check your connection or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError(null);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      areaOfInterest: 'Book a Platform Demo',
      message: '',
    });
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SeoHead
        title="Book a Demo & Contact Engineering | PrishiTech Solutions"
        description="Book a live demonstration of the PrishiTech Resource Intelligence platform or contact our engineering team in Vaishali, Ghaziabad for facility inquiries."
      />

      <div className="bg-[#fbfcfd] min-h-screen">
        {/* =========================================================
            1. HERO: SPLIT PLATFORM PRESENTATION
        ========================================================= */}
        <section className="pt-16 pb-14 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Book a Demo &amp; Enterprise Inquiries
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.12] mt-3">
                Book a Live Demo or Connect with Engineering.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                Experience the PrishiTech Resource Intelligence platform with an engineer-guided walkthrough, or discuss custom IoT, cloud pipelines, and energy advisory roadmaps for your facility.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            MAIN CONTENT: DETAILS + UNIFIED BOOK DEMO / INQUIRY FORM
        ========================================================= */}
        <section id="contact-form-section" className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* LEFT COLUMN: CONTACT DETAILS & CREDENTIALS (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Visual Image in Dark Frame */}
                <div className="bg-[#070b12] border border-slate-800/80 rounded-xl p-2 sm:p-3 shadow-2xl overflow-hidden relative">
                  <div className="relative rounded-lg overflow-hidden border border-slate-800/80 aspect-[16/10] bg-slate-950">
                    <img 
                      src="/images/corporate-hq-center.jpg" 
                      alt="PrishiTech Central Operations & Engineering Facility" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute top-3 left-3 bg-[#070b12]/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-sm text-xs font-mono font-bold flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>NCR Technical Hub</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                        Corporate Headquarters &amp; Operations Center
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        Vaishali, Ghaziabad Operations Hub
                      </h3>
                    </div>
                  </div>
                </div>

                {/* What Happens When You Book / Reach Out */}
                <div className="p-6 bg-slate-50/80 rounded-xl border border-slate-200 space-y-3.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span>What to Expect When You Book a Demo</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Immediate Routing:</strong> Confirmation email sent within 15 minutes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>30-Minute Live Demo:</strong> Tailored walkthrough of sub-second energy, water, gas, and chiller analytics.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Facility Review:</strong> Zero-obligation discussion of your plant meters, discom tariffs, and retrofit payback.</span>
                    </li>
                  </ul>
                </div>

                {/* Direct Coordinates Card */}
                <div className="bg-white p-7 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1.5">Direct Technical Coordinates</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      Official registered address and central technical operations center.
                    </p>
                  </div>

                  <div className="space-y-4 text-sm">
                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-sm bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          Registered Address
                        </strong>
                        <span className="text-slate-800 text-sm mt-0.5 block font-medium leading-relaxed">
                          5A 45/46, Cloud-9, Sector-1, Vaishali,<br />
                          Ghaziabad, Uttar Pradesh 201019, India
                        </span>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          Phone
                        </strong>
                        <a href="tel:+911204567890" className="hover:text-emerald-700 font-medium transition-colors block text-slate-800 text-sm mt-0.5">
                          +91 120 456 7890 (Direct Switchboard)
                        </a>
                        <a href="tel:+919810012345" className="hover:text-emerald-700 transition-colors block text-slate-500 text-xs mt-0.5">
                          +91 98100 12345 (Sales &amp; Enterprise WhatsApp)
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-sm bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          Email
                        </strong>
                        <a href="mailto:contact@prishitech.com" className="hover:text-emerald-700 font-medium transition-colors block text-slate-800 text-sm mt-0.5">
                          contact@prishitech.com
                        </a>
                        <a href="mailto:sales@prishitech.com" className="hover:text-emerald-700 transition-colors block text-slate-500 text-xs mt-0.5">
                          sales@prishitech.com
                        </a>
                      </div>
                    </div>

                    {/* Website */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          Website
                        </strong>
                        <a href="https://www.prishitech.com" className="hover:text-emerald-700 font-medium transition-colors block text-slate-800 text-sm mt-0.5">
                          https://www.prishitech.com
                        </a>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          Business Hours
                        </strong>
                        <span className="text-slate-800 text-sm block font-medium mt-0.5">
                          Monday – Friday: 9:00 AM – 6:00 PM IST
                        </span>
                        <span className="text-slate-500 text-xs block mt-0.5">
                          24/7 Priority OT Emergency Support for Contracted Facilities
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TRIAXIS Consortium Assurance Banner */}
                <div className="p-6 bg-[#fbfcfd] rounded-xl border border-slate-200/90 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                    <ShieldCheck className="w-4 h-4" />
                    <span>TRIAXIS Consortium Assurance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All enterprise technical enquiries and demo bookings are reviewed jointly by PrishiTech Solutions digital architects and TRIAXIS certified electrical/HVAC engineering consultants.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="w-full inline-flex items-center justify-center whitespace-nowrap transition-colors border border-black bg-black hover:bg-slate-800 text-white font-medium h-10 px-4 rounded-sm text-xs gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#05DF72]" />
                      <span>Jump to Demo Booking Form</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: INTERACTIVE UNIFIED FORM (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-white p-7 sm:p-10 rounded-xl border border-slate-200 shadow-xs">
                  {submitted ? (
                    <div className="text-center py-10 space-y-5 animate-fade-in">
                      <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Thank You, {formData.name}!</h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                        Your request regarding <strong className="text-emerald-700">{formData.areaOfInterest}</strong> for <span className="text-slate-900 font-medium">{formData.company}</span> has been received by our engineering team.
                      </p>
                      <div className="bg-slate-50 p-4 rounded-sm border border-slate-200 text-xs text-left max-w-md mx-auto space-y-1.5 text-slate-700">
                        <p>• <strong>Lead Routed To:</strong> PrishiTech Solutions Sales &amp; TRIAXIS Advisory Bench</p>
                        <p>• <strong>Confirmation Email:</strong> Dispatched to <span className="text-emerald-800 font-medium">{formData.email}</span></p>
                        <p>• <strong>Response SLA:</strong> Within 4 business hours</p>
                      </div>
                      <button
                        onClick={handleReset}
                        className="mt-6 inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-xs h-11 px-7 rounded-sm text-sm"
                      >
                        Send Another Message / Book Another Demo
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-6">
                        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                          Book a Demo &amp; Direct Inquiry
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                          Schedule a Demo or Send Us a Message
                        </h2>
                        <p className="text-slate-500 text-xs sm:text-sm mt-1">
                          Please provide your details below. Our engineering specialists will confirm your tailored walkthrough or inquiry within 4 business hours.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                          <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-sm flex items-start gap-2.5 text-rose-800 text-xs">
                            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold block">Routing Notice</span>
                              <span>{error}</span>
                            </div>
                          </div>
                        )}

                        {/* Name & Company */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Your Name *
                            </label>
                            <input
                              id="contact-name"
                              required
                              type="text"
                              placeholder="e.g. Sanjeev"
                              autoComplete="name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all shadow-2xs"
                            />
                          </div>

                          <div>
                            <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Company / Organization *
                            </label>
                            <input
                              id="contact-company"
                              required
                              type="text"
                              placeholder="Facility or Enterprise"
                              autoComplete="organization"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all shadow-2xs"
                            />
                          </div>
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Work Email Address *
                            </label>
                            <input
                              id="contact-email"
                              required
                              type="email"
                              placeholder="sanjeev@company.com"
                              autoComplete="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all shadow-2xs"
                            />
                          </div>

                          <div>
                            <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Phone / Mobile *
                            </label>
                            <input
                              id="contact-phone"
                              required
                              type="tel"
                              placeholder="+91 98100 XXXXX"
                              autoComplete="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all shadow-2xs"
                            />
                          </div>
                        </div>

                        {/* Area of Interest */}
                        <div>
                          <label htmlFor="contact-interest" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Area of Interest / Session Type *
                          </label>
                          <select
                            id="contact-interest"
                            required
                            value={formData.areaOfInterest}
                            onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value as AreaOfInterest })}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all shadow-2xs font-medium"
                          >
                            <option value="Book a Platform Demo">Book a Live Platform Demo (Interactive Walkthrough)</option>
                            <option value="Resource Intelligence">Resource Intelligence (Energy, Water, Gas, Chiller)</option>
                            <option value="IT Services & Digital Transformation">IT Services &amp; Digital Transformation (IoT, Cloud, Cyber, AI)</option>
                            <option value="Energy Advisory">Energy Advisory &amp; Statutory BEE Audits</option>
                            <option value="TRIAXIS Consortium Partnership">TRIAXIS Consortium Partnership</option>
                            <option value="Full Enterprise Suite">Full Enterprise Suite (Both Portfolios)</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Facility Details / Specific Areas of Focus *
                          </label>
                          <textarea
                            id="contact-message"
                            required
                            rows={4}
                            placeholder="Tell us about your facility type (e.g. manufacturing plant, commercial building), current monthly energy/utility spend, or what you would like to see during the demo..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all shadow-2xs resize-y"
                          ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-sm h-12 px-7 rounded-sm text-sm sm:text-[15px] disabled:opacity-50"
                          >
                            {loading ? (
                              <div className="flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin text-black" />
                                <span>Routing to Engineering Bench...</span>
                              </div>
                            ) : (
                              <>
                                <span>Book Demo &amp; Submit Inquiry</span>
                                <Send className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </button>
                          <p className="text-[11px] text-slate-500 text-center mt-2.5">
                            ✓ Direct confidential routing to PrishiTech Solutions engineering leadership in Vaishali, Ghaziabad.
                          </p>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
