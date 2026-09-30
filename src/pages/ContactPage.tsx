import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Globe, Clock, CheckCircle2, 
  Send, ShieldCheck, AlertCircle, Loader2 
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { sendContactInquiry } from '../services/leadService';
import type { ContactFormData, AreaOfInterest } from '../types';

interface ContactPageProps {
  onRequestDemo: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onRequestDemo }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    areaOfInterest: 'Resource Intelligence',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      areaOfInterest: 'Resource Intelligence',
      message: '',
    });
  };

  return (
    <>
      <SeoHead
        title="Contact Prishitech Solutions"
        description="Get in touch with Prishitech Solutions to discuss Resource Intelligence or IT Services & Digital Transformation for your facility."
      />

      <div className="pt-24 pb-16 space-y-16">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto pt-6 sm:pt-10">
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Get in Touch with Engineering &amp; Sales
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              “Let's build your{' '}
              <span className="text-emerald-700">Resource Intelligence</span> platform.”
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Connect directly with our solutions architects to discuss Resource Intelligence or IT Services &amp; Digital Transformation for your facility.
            </p>
          </div>
        </section>

        {/* MAIN CONTACT CONTENT: DETAILS + FORM */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
            {/* LEFT COLUMN: CONTACT DETAILS & CREDENTIALS (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1.5">Corporate Headquarters</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Official registered address and central technical operations center.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
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
                    <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
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
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
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
                    <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
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
                    <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
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
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/90 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <ShieldCheck className="w-4 h-4" />
                  <span>TRIAXIS Consortium Assurance</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All enterprise technical enquiries are reviewed jointly by Prishitech Solutions digital architects and TRIAXIS certified electrical/HVAC engineering consultants.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onRequestDemo}
                    className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-xl text-xs border border-slate-200 transition-colors text-center shadow-sm"
                  >
                    Request Instant Telemetry Demo
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE CONTACT FORM (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-7 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm">
                {submitted ? (
                  <div className="text-center py-10 space-y-5 animate-fade-in">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Thank You, {formData.name}!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Your inquiry regarding <strong className="text-emerald-700">{formData.areaOfInterest}</strong> for <span className="text-slate-900 font-medium">{formData.company}</span> has been dispatched to our Vaishali, Ghaziabad engineering inbox.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-left max-w-md mx-auto space-y-1.5 text-slate-700">
                      <p>• <strong>Lead Routed To:</strong> Prishitech Solutions Sales &amp; TRIAXIS Advisory Bench</p>
                      <p>• <strong>Confirmation Email:</strong> Sent to <span className="text-emerald-800 font-medium">{formData.email}</span></p>
                      <p>• <strong>Response SLA:</strong> Within 4 business hours</p>
                    </div>
                    <button
                      onClick={handleReset}
                      className="mt-6 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-all shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                        Direct Inquiry
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                        Send Us a Message
                      </h2>
                      <p className="text-slate-500 text-xs sm:text-sm mt-1">
                        Please provide details below. Our technical specialists will respond within 4 business hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {error && (
                        <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-rose-800 text-xs">
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
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all shadow-sm"
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
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            id="contact-email"
                            required
                            type="email"
                            placeholder="sanjeev@company.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all shadow-sm"
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
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      {/* Area of Interest */}
                      <div>
                        <label htmlFor="contact-interest" className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Area of Interest *
                        </label>
                        <select
                          id="contact-interest"
                          required
                          value={formData.areaOfInterest}
                          onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value as AreaOfInterest })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all shadow-sm"
                        >
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
                          Message / Facility Specifics *
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={4}
                          placeholder="Tell us about your facility type, current monthly energy/utility spend, or digital transformation goals..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all shadow-sm resize-y"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 group disabled:opacity-50"
                        >
                          {loading ? (
                            <div className="flex items-center gap-2 text-slate-100">
                              <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                              <span>Routing Inquiry to Engineering...</span>
                            </div>
                          ) : (
                            <>
                              <span>Submit Facility Inquiry</span>
                              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                        <p className="text-[11px] text-slate-500 text-center mt-2.5">
                          ✓ Direct confidential routing to Prishitech Solutions leadership in Vaishali, Ghaziabad.
                        </p>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
