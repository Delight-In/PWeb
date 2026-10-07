import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle, Shield, Award, Building2, Loader2 } from 'lucide-react';
import { generateAndDownloadCapabilityPdf } from '../utils/generateCapabilityPdf';
import { submitCapabilityDownloadLead } from '../services/leadService';

interface CapabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CapabilityModal: React.FC<CapabilityModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    // 1. Instantly generate & download personalized PDF binary with logo and letterhead
    generateAndDownloadCapabilityPdf(name.trim(), company.trim());
    setDownloaded(true);

    // 2. Dispatch lead notification directly to email / Web3Forms
    try {
      await submitCapabilityDownloadLead({
        name: name.trim(),
        email: email.trim(),
        company: company.trim()
      });
    } catch (err) {
      console.error("Capability dispatch error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cap-title"
    >
      <div className="relative w-full max-w-lg p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xl text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!downloaded ? (
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4">
              <FileText className="w-6 h-6" />
            </div>

            <h2 id="cap-title" className="text-xl font-bold text-slate-900 mb-1">
              Download Enterprise Capability Statement (PDF)
            </h2>
            <p className="text-slate-500 text-sm mb-5">
              Access the complete 2026 technical prospectus detailing our Resource Intelligence platform specifications, OT security framework, and TRIAXIS consortium project highlights.
            </p>

            <div className="space-y-2 mb-6 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Unified Energy, Water, Gas &amp; Chiller architecture blueprints</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-600" />
                <span>OT / ICS Cybersecurity architecture (IEC 62443 aligned)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>TRIAXIS Consortium delivery methodology and SLA structures</span>
              </div>
            </div>

            <form onSubmit={handleDownload} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="cap-name" className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="cap-name"
                    type="text"
                    required
                    placeholder="e.g. Sanjeev"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="cap-company" className="block text-xs font-medium text-slate-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    id="cap-company"
                    type="text"
                    placeholder="Facility name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cap-email" className="block text-xs font-medium text-slate-700 mb-1">
                  Work Email *
                </label>
                <input
                  id="cap-email"
                  type="email"
                  required
                  placeholder="sanjeev@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white disabled:opacity-60"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generating PDF &amp; Registering...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Capability Statement (PDF)</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">PDF Downloaded &amp; Details Sent</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
              Your personalized Capability Statement has been generated for <span className="font-semibold text-slate-900">{name}</span>. Lead registration details have been dispatched for <span className="font-semibold text-slate-900">{email}</span>.
            </p>

            <div className="py-2">
              <a
                href="/Prishitech-Solutions-Capability-Statement-2026.pdf?v=2026.3"
                download="Prishitech-Solutions-Capability-Statement-2026.pdf"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Click here if your download didn't start automatically</span>
              </a>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Prishitech Solutions · Cloud-9, Sector-1, Vaishali, Ghaziabad</span>
            </div>

            <button
              onClick={() => { setDownloaded(false); onClose(); }}
              className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-medium transition-colors shadow-sm"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
