import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, 
  CheckCircle, FileText, ArrowRight 
} from 'lucide-react';

interface FooterProps {
  onOpenCapability: () => void;
  onRequestDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCapability, onRequestDemo }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/90 pt-14 pb-10 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 border-b border-slate-200">
          {/* Column 1: Official Logo, Mission & Registered Address (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block focus:outline-none">
              <img 
                src="/logo.png" 
                alt="PrishiTech - Complex Made Easy" 
                className="h-9 sm:h-10 w-auto object-contain" 
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Unifying Energy, Water, Gas and Chiller management into a single resource intelligence platform — backed by end-to-end IT services, as a TRIAXIS Consortium partner.
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

          {/* Column 2: Resource Platform (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3.5">
              Resource Platform
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/solutions/resource-intelligence" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Energy Management
                </Link>
              </li>
              <li>
                <Link to="/solutions/resource-intelligence" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Water Management
                </Link>
              </li>
              <li>
                <Link to="/solutions/resource-intelligence" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Gas &amp; Pressure Safety
                </Link>
              </li>
              <li>
                <Link to="/solutions/resource-intelligence" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Chiller Plants (COP)
                </Link>
              </li>
              <li>
                <Link to="/solutions/resource-intelligence" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Energy Advisory &amp; Audits
                </Link>
              </li>
              <li>
                <button 
                  onClick={onRequestDemo} 
                  className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1 pt-1"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: IT Services & OT Security (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3.5">
              IT Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/solutions/digital-transformation" className="text-slate-600 hover:text-sky-700 transition-colors">
                  IoT &amp; Remote Monitoring
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-transformation" className="text-slate-600 hover:text-sky-700 transition-colors">
                  Cloud &amp; Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-transformation" className="text-slate-600 hover:text-sky-700 transition-colors">
                  OT &amp; SCADA Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-transformation" className="text-slate-600 hover:text-sky-700 transition-colors">
                  Data &amp; Analytics
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-transformation" className="text-slate-600 hover:text-sky-700 transition-colors">
                  AI &amp; Automation
                </Link>
              </li>
              <li>
                <Link to="/triaxis" className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors">
                  TRIAXIS Consortium
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Capability Statement (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3.5">
              Stay Informed
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Receive monthly technical briefs on energy audits, BEE compliance &amp; OT cybersecurity.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-xs font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Thank you! You are subscribed.</span>
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
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 shadow-2xs"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors shrink-0 shadow-xs"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}

            <div className="pt-1">
              <button
                onClick={onOpenCapability}
                className="w-full py-2 px-3 bg-white hover:bg-slate-100 text-slate-700 font-medium rounded-lg text-xs border border-slate-200 flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>Download Capability Statement (PDF)</span>
              </button>
            </div>
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
