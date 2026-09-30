import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, 
  CheckCircle, FileText, ExternalLink 
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
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Capability Statement Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl mb-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-4 h-4" /> TRIAXIS Enterprise Resource Intelligence
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Stay ahead on industrial energy audits &amp; OT telemetry.
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Receive monthly technical briefs on BEE regulatory compliance, peak-load shedding, and cyber-physical security.
            </p>
          </div>

          <div className="w-full lg:auto flex flex-col sm:flex-row gap-3 items-center">
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/60 border border-emerald-800/70 px-4 py-2.5 rounded-xl text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                <span>Thank you! Subscribed to technical briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your enterprise email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-2.5 bg-slate-950/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 min-w-[260px]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-glow-emerald whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}

            <button
              onClick={onOpenCapability}
              className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-sm transition-colors border border-slate-700 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Get Capability PDF</span>
            </button>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Consortium */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-emerald-500/40 p-1.5 flex items-center justify-center shadow-glow-emerald">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <path d="M 50 16 A 34 34 0 0 1 84 50" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 84 50 A 34 34 0 0 1 50 84" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 50 84 A 34 34 0 0 1 16 50" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 16 50 A 34 34 0 0 1 50 16" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 36 28 L 52 28 C 62 28 68 34 68 42 C 68 50 62 56 52 56 L 46 56 L 46 72" 
                        stroke="#34d399" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Prishitech Solutions</span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Unifying Energy, Water, Gas and Chiller management into a single resource intelligence platform — backed by end-to-end IT services and digital transformation expertise, as a proud TRIAXIS Consortium partner.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Registered Office:</strong> 5A 45/46, Cloud-9, Sector-1, Vaishali, Ghaziabad, Uttar Pradesh 201019, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 120 456 7890 · +91 98100 12345</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>contact@prishitech.com · sales@prishitech.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Monday – Friday: 9:00 AM – 6:00 PM IST (24/7 OT Ops)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Resource Intelligence Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Resource Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/solutions/resource-intelligence#energy" className="hover:text-emerald-400 transition-colors">
                  Energy Management
                </Link>
              </li>
              <li>
                <Link to="/solutions/resource-intelligence#water" className="hover:text-emerald-400 transition-colors">
                  Water Management
                </Link>
              </li>
              <li>
                <Link to="/solutions/resource-intelligence#gas" className="hover:text-emerald-400 transition-colors">
                  Gas Flow &amp; Safety
                </Link>
              </li>
              <li>
                <Link to="/solutions/resource-intelligence#chiller" className="hover:text-emerald-400 transition-colors">
                  Chiller Plant Optimization
                </Link>
              </li>
              <li>
                <Link to="/solutions/resource-intelligence#advisory" className="hover:text-emerald-400 transition-colors">
                  Energy Advisory &amp; Audits
                </Link>
              </li>
              <li>
                <button onClick={onRequestDemo} className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 mt-2">
                  <span>Interactive Walkthrough</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: IT Services & OT Security */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              IT &amp; Digital Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/solutions/digital-transformation#iot" className="hover:text-cyan-400 transition-colors">
                  IoT &amp; Remote Monitoring
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-transformation#cloud" className="hover:text-cyan-400 transition-colors">
                  Cloud &amp; Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-transformation#cybersecurity" className="hover:text-cyan-400 transition-colors">
                  OT &amp; SCADA Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-transformation#analytics" className="hover:text-cyan-400 transition-colors">
                  Data Pipelines &amp; Analytics
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-transformation#ai" className="hover:text-cyan-400 transition-colors">
                  AI &amp; Process Automation
                </Link>
              </li>
              <li>
                <Link to="/triaxis" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>TRIAXIS Consortium</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Industries */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Company &amp; Sectors
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Prishitech
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">
                  Technical Insights &amp; Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Support
                </Link>
              </li>
              <li>
                <button onClick={onOpenCapability} className="hover:text-emerald-400 transition-colors text-left">
                  Capability Statement
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Prishitech Solutions. All rights reserved. A TRIAXIS Consortium Partner.</p>
          <div className="flex items-center gap-6">
            <span>Registered in Ghaziabad, UP (India)</span>
            <span className="hidden sm:inline">·</span>
            <span>WCAG 2.1 AA Compliant</span>
            <span className="hidden sm:inline">·</span>
            <span>IEC 62443 Aligned OT Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
