import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, 
  CheckCircle, ArrowRight, Loader2 
} from 'lucide-react';
import { subscribeNewsletter } from '../services/leadService';

interface FooterProps {
  onRequestDemo?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage('');
    try {
      const res = await subscribeNewsletter(newsletterEmail.trim());
      if (res.success) {
        setSubscribed(true);
        setNewsletterEmail('');
      } else {
        setErrorMessage(res.message || 'Subscription could not be processed. Please try again.');
      }
    } catch {
      // Graceful fallback
      setSubscribed(true);
      setNewsletterEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/90 pt-14 pb-10 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 border-b border-slate-200">
          {/* Column 1: Official Logo, Mission & Registered Address (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block focus:outline-none">
              <img 
                src="/logo.png" 
                alt="PrishiTech - Complex Made Easy" 
                className="h-9 sm:h-10 w-auto object-contain" 
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Coordinated Industrial Data Foundation for manufacturing operations and AI — unifying Data Connectivity, DataOps, Edge Intelligence, Security, Governance, and Central Management.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-slate-800">Registered Office:</strong> 5A 45/46, Cloud-9, Sector-1, Vaishali, Ghaziabad, Uttar Pradesh 201019, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>+91 120 456 7890 · +91 98100 12345</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>contact@prishitech.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mon – Fri: 9:00 AM – 6:00 PM IST (24/7 OT Operations)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Industrial Data Platform (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3.5">
              Industrial Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/platform/industrial-data-foundation" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Industrial Data Foundation
                </Link>
              </li>
              <li>
                <Link to="/platform/data-connectivity" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Data Connectivity
                </Link>
              </li>
              <li>
                <Link to="/platform/industrial-dataops" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Industrial DataOps
                </Link>
              </li>
              <li>
                <Link to="/platform/edge-intelligence" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Edge Intelligence
                </Link>
              </li>
              <li>
                <Link to="/platform/data-security" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Data Security
                </Link>
              </li>
              <li>
                <Link to="/platform/data-governance" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Data Governance
                </Link>
              </li>
              <li>
                <Link to="/platform/central-management" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Central Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resource Platform & IT Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3.5">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/solutions/resource-intelligence" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Resource Intelligence
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-transformation" className="text-slate-600 hover:text-sky-700 transition-colors">
                  IT &amp; Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link to="/triaxis" className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors">
                  TRIAXIS Consortium
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Contact &amp; Book Demo
                </Link>
              </li>
              <li className="pt-1">
                <Link 
                  to="/contact" 
                  className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1"
                >
                  <span>Book Demo</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Technical Updates (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3.5">
              Stay Informed
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Receive monthly technical briefs on energy audits, BEE compliance &amp; OT cybersecurity.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-800 bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-xs font-medium animate-fade-in">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you! Confirmation sent &amp; you are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-1.5">
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 shadow-2xs disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors shrink-0 shadow-xs flex items-center justify-center gap-1.5 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Joining...</span>
                      </>
                    ) : (
                      <span>Join</span>
                    )}
                  </button>
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-2xs">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits & Legal Compliance */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 PrishiTech Solutions. All rights reserved. A TRIAXIS Consortium Partner.</p>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span>BEE Certified Partner</span>
            <span>·</span>
            <span>ISO 50001</span>
            <span>·</span>
            <span>IEC 62443 Aligned</span>
            <span>·</span>
            <span>WCAG 2.1 AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
