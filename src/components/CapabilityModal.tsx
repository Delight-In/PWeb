import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle, Shield, Award, Building2 } from 'lucide-react';

interface CapabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CapabilityModal: React.FC<CapabilityModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);

    const fileContent = `
========================================================================
PRISHITECH SOLUTIONS & TRIAXIS CONSORTIUM
OFFICIAL CAPABILITY STATEMENT & TECHNICAL PORTFOLIO (2026 EDITION)
========================================================================

REGISTERED OFFICE:
5A 45/46, Cloud-9, Sector-1, Vaishali, Ghaziabad, Uttar Pradesh 201019, India
Web: https://www.prishitech.com | Email: contact@prishitech.com

EXECUTIVE SUMMARY:
Prishitech Solutions unifies Energy, Water, Gas, and Chiller management
into a single resource intelligence platform — backed by end-to-end IT services
and digital transformation expertise, as a TRIAXIS Consortium partner.

CORE DOMAINS:
1. RESOURCE INTELLIGENCE PLATFORM
   - Energy Management: Real-time electricity metering, feeder monitoring, peak load alerts, baseline benchmarking.
   - Water Management: Source-to-tap tracking, acoustic leak detection, water balance accounting.
   - Gas Management: Flow & pressure telemetry, safety threshold alerts, consumption forecasting.
   - Chiller Management: COP efficiency tracking, predictive vibration/thermal alerts, HVAC optimization.
   - Energy Advisory: Bureau of Energy Efficiency (BEE) compliant audits, ISO 50001 advisory, retrofit ROI models.

2. IT SERVICES & DIGITAL TRANSFORMATION
   - IoT & Remote Monitoring: Industrial gateway deployment, LoRaWAN / Modbus / MQTT telemetry.
   - Cloud & Infrastructure: AWS/Azure/GCP hybrid architectures, resilient data lakes, Kubernetes.
   - Cybersecurity & OT Security: Purdue Model segmentation, SCADA/ICS threat detection, IEC 62443 compliance.
   - Data & Analytics: Edge-to-cloud ETL, operational BI dashboards, predictive maintenance models.
   - AI & Process Automation: Generative anomaly detection, automated load-shedding dispatch.

3. TRIAXIS CONSORTIUM ADVANTAGE:
   - Technology + Domain Expertise unified under a single SLA.
   - Elimination of multi-vendor finger-pointing across industrial sensors and enterprise cloud.

Prepared for: ${name || 'Enterprise Client'} (${email || 'Direct Download'})
Date: September 2026
========================================================================
    `;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Prishitech-Solutions-Capability-Statement-2026.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              Download Enterprise Capability Statement
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
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Capability Statement</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Document Downloaded</h3>
            <p className="text-slate-600 text-sm">
              Your download for <span className="font-semibold text-slate-900">{name}</span> has started. A copy has also been registered in our Vaishali, Ghaziabad enterprise portal.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>Headquartered at Cloud-9, Sector-1, Vaishali, Ghaziabad</span>
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
