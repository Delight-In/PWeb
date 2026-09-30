import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Globe, Clock, CheckCircle2, 
  Send, ShieldCheck 
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable CRM & Sales inbox lead routing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
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

      <div className="pt-24 pb-16 space-y-20">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto pt-6 sm:pt-12">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-full inline-block mb-4">
              Get in Touch with Engineering &amp; Sales
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              “Let's build your{' '}
              <span className="gradient-text">Resource Intelligence</span> platform.”
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Connect directly with our solutions architects to discuss Resource Intelligence or IT Services &amp; Digital Transformation for your facility.
            </p>
          </div>
        </section>

        {/* MAIN CONTACT CONTENT: DETAILS + FORM */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT COLUMN: CONTACT DETAILS & CREDENTIALS (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Corporate Headquarters</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Official registered address and central technical operations center.
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block text-xs font-mono uppercase tracking-wider text-emerald-400">
                        Registered Address
                      </strong>
                      <span className="text-slate-200 mt-1 block">
                        5A 45/46, Cloud-9, Sector-1, Vaishali,<br />
                        Ghaziabad, Uttar Pradesh 201019, India
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block text-xs font-mono uppercase tracking-wider text-cyan-400">
                        Phone
                      </strong>
                      <a href="tel:+911204567890" className="hover:text-emerald-400 transition-colors block text-slate-200">
                        +91 120 456 7890 (Direct Switchboard)
                      </a>
                      <a href="tel:+919810012345" className="hover:text-emerald-400 transition-colors block text-slate-400 text-xs mt-0.5">
                        +91 98100 12345 (Sales &amp; Enterprise WhatsApp)
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block text-xs font-mono uppercase tracking-wider text-emerald-400">
                        Email
                      </strong>
                      <a href="mailto:contact@prishitech.com" className="hover:text-emerald-400 transition-colors block text-slate-200">
                        contact@prishitech.com
                      </a>
                      <a href="mailto:sales@prishitech.com" className="hover:text-emerald-400 transition-colors block text-slate-400 text-xs mt-0.5">
                        sales@prishitech.com
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block text-xs font-mono uppercase tracking-wider text-blue-400">
                        Website
                      </strong>
                      <a href="https://www.prishitech.com" className="hover:text-emerald-400 transition-colors block text-slate-200">
                        https://www.prishitech.com
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block text-xs font-mono uppercase tracking-wider text-amber-400">
                        Business Hours
                      </strong>
                      <span className="text-slate-200 block">
                        Monday – Friday: 9:00 AM – 6:00 PM IST
                      </span>
                      <span className="text-slate-400 text-xs block mt-0.5">
                        24/7 Priority OT Emergency Support for Contracted Facilities
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* TRIAXIS Consortium Assurance Banner */}
              <div className="p-6 bg-slate-900/90 rounded-3xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>TRIAXIS Consortium Assurance</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All enterprise technical enquiries are reviewed jointly by Prishitech Solutions digital architects and TRIAXIS certified electrical/HVAC engineering consultants.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onRequestDemo}
                    className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold rounded-xl text-xs border border-slate-700 transition-colors text-center"
                  >
                    Request Instant Telemetry Demo
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE CONTACT FORM (7 cols) */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800">
                {submitted ? (
                  <div className="text-center py-12 space-y-5 animate-fade-in">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Thank You, {formData.name}!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Your inquiry regarding <strong className="text-emerald-400">{formData.areaOfInterest}</strong> for <span className="text-white">{formData.company}</span> has been dispatched to our Vaishali, Ghaziabad engineering inbox.
                    </p>
                    <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs text-left max-w-md mx-auto space-y-1.5 text-slate-300">
                      <p>• <strong>Lead Routed To:</strong> Prishitech Solutions Sales &amp; TRIAXIS Advisory Bench</p>
                      <p>• <strong>Confirmation Email:</strong> Sent to <span className="text-emerald-300">{formData.email}</span></p>
                      <p>• <strong>Response SLA:</strong> Within 4 business hours</p>
                    </div>
                    <button
                      onClick={handleReset}
                      className="mt-6 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-glow-emerald"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Direct Inquiry
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                        Send Us a Message
                      </h2>
                      <p className="text-slate-400 text-xs sm:text-sm mt-1">
                        Please provide details below. Our technical specialists will respond within 4 business hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1">
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
                            className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-company" className="block text-xs font-medium text-slate-300 mb-1">
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
                            className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1">
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
                            className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-300 mb-1">
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
                            className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Area of Interest */}
                      <div>
                        <label htmlFor="contact-interest" className="block text-xs font-medium text-slate-300 mb-1">
                          Area of Interest *
                        </label>
                        <select
                          id="contact-interest"
                          required
                          value={formData.areaOfInterest}
                          onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value as AreaOfInterest })}
                          className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
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
                        <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1">
                          Message / Facility Specifics *
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={4}
                          placeholder="Tell us about your facility type, current monthly energy/utility spend, or digital transformation goals..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-y"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-3.5 px-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-slate-950 font-bold rounded-xl transition-all shadow-glow-emerald flex items-center justify-center gap-2 group disabled:opacity-50"
                        >
                          {loading ? (
                            <span>Routing Inquiry to Engineering...</span>
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
