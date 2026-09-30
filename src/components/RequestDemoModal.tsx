import React, { useState } from 'react';
import { X, CheckCircle, Calendar, ArrowRight, ShieldCheck, Zap, Droplets, Flame, Wind, Cpu } from 'lucide-react';

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPillar?: string;
}

export const RequestDemoModal: React.FC<RequestDemoModalProps> = ({
  isOpen,
  onClose,
  defaultPillar
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    phone: '',
    facilitySize: 'Medium (100k - 500k sq ft)',
    pillars: defaultPillar ? [defaultPillar] : ['Energy Management', 'Water Management'],
    notes: '',
  });

  if (!isOpen) return null;

  const togglePillar = (pillar: string) => {
    if (formData.pillars.includes(pillar)) {
      setFormData({
        ...formData,
        pillars: formData.pillars.filter((p) => p !== pillar),
      });
    } else {
      setFormData({
        ...formData,
        pillars: [...formData.pillars, pillar],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-xl p-6 sm:p-8 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Demo Scheduled Successfully!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you, <span className="font-semibold text-emerald-400">{formData.name}</span>. A senior Prishitech Solutions technical consultant from our Ghaziabad engineering hub has received your request for <span className="text-white font-medium">{formData.company}</span>.
            </p>
            <div className="bg-slate-800/80 p-4 rounded-xl text-left border border-slate-700 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Calendar className="w-4 h-4" /> Next Steps:
              </div>
              <p>• We have sent a calendar invitation and platform walkthrough overview to <strong className="text-white">{formData.workEmail}</strong>.</p>
              <p>• Live telemetry sandbox credentials will be provisioned prior to the briefing.</p>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-xl transition-all shadow-glow-emerald"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Platform Walkthrough
            </div>
            <h2 id="modal-title" className="text-2xl font-bold text-white">
              Request a Resource Intelligence Demo
            </h2>
            <p className="text-slate-400 text-sm mt-1 mb-6">
              Experience single-pane telemetry across Energy, Water, Gas & Chiller assets tailored to your facility operations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-name" className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="demo-name"
                    required
                    type="text"
                    placeholder="e.g. Sanjeev Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="demo-email" className="block text-xs font-medium text-slate-300 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    id="demo-email"
                    required
                    type="email"
                    placeholder="sanjeev@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-company" className="block text-xs font-medium text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    id="demo-company"
                    required
                    type="text"
                    placeholder="Facility or Enterprise name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="demo-phone" className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    id="demo-phone"
                    required
                    type="tel"
                    placeholder="+91 98100 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Select Focus Streams for Walkthrough:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    { label: 'Energy Management', icon: Zap },
                    { label: 'Water Management', icon: Droplets },
                    { label: 'Gas Monitoring', icon: Flame },
                    { label: 'Chiller Management', icon: Wind },
                    { label: 'Energy Advisory', icon: ShieldCheck },
                    { label: 'OT & IoT Platform', icon: Cpu },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = formData.pillars.includes(item.label);
                    return (
                      <button
                        type="button"
                        key={item.label}
                        onClick={() => togglePillar(item.label)}
                        className={`flex items-center gap-1.5 p-2 rounded-lg border text-left transition-all ${
                          isSelected
                            ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300 font-medium'
                            : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="demo-size" className="block text-xs font-medium text-slate-300 mb-1">
                  Facility Scale / Portfolio Type
                </label>
                <select
                  id="demo-size"
                  value={formData.facilitySize}
                  onChange={(e) => setFormData({ ...formData, facilitySize: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950/60 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                >
                  <option value="Single Plant / Industrial Site">Single Plant / Industrial Site</option>
                  <option value="Multi-site Commercial Real Estate">Multi-site Commercial Real Estate</option>
                  <option value="Hospitality / Hospital Campus">Hospitality / Hospital Campus</option>
                  <option value="Utility / PSU Infrastructure">Utility / PSU Infrastructure</option>
                  <option value="IT Park / Data Center">IT Park / Data Center</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-slate-950 font-bold rounded-xl transition-all shadow-glow-emerald flex items-center justify-center gap-2 group"
                >
                  <span>Confirm Demo Reservation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  🔒 Zero spam guarantee. Direct connection with Prishitech &amp; TRIAXIS systems engineers.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
