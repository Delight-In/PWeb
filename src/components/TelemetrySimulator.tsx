import { useState, useEffect } from 'react';
import { Zap, Droplets, Flame, Wind, Activity, ShieldCheck } from 'lucide-react';

export const TelemetrySimulator = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'energy' | 'water' | 'gas' | 'chiller'>('all');
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((prev) => (prev + 1) % 100);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const energyLoad = (842 + (pulse % 7) * 3.4).toFixed(1);
  const waterFlow = (142.6 + ((pulse + 2) % 5) * 1.2).toFixed(1);
  const gasPressure = (4.18 + ((pulse + 1) % 4) * 0.04).toFixed(2);
  const chillerCop = (5.84 - ((pulse + 3) % 3) * 0.05).toFixed(2);

  return (
    <div className="w-full bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm relative overflow-hidden">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-slate-100 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-slate-900 font-bold text-sm sm:text-base">Prishitech Unified Telemetry Console</h4>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                Live Stream
              </span>
            </div>
            <p className="text-xs text-slate-500">Node ID: PRISHI-VAISHALI-GZ-EDGE01 · Sub-second edge sampling</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-medium">
          {[
            { id: 'all', label: 'Single Pane' },
            { id: 'energy', label: 'Energy' },
            { id: 'water', label: 'Water' },
            { id: 'gas', label: 'Gas' },
            { id: 'chiller', label: 'Chiller' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Telemetry Feeds */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Energy Feed */}
        {(activeTab === 'all' || activeTab === 'energy') && (
          <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                Active Electrical Load
              </span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                Normal
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-slate-900">{energyLoad}</span>
              <span className="text-xs text-slate-500 font-medium">kW</span>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-600">
              <div className="flex justify-between">
                <span>Power Factor:</span>
                <span className="text-slate-800 font-mono font-medium">0.99 (Optimal)</span>
              </div>
              <div className="flex justify-between">
                <span>Peak Load Alert:</span>
                <span className="text-emerald-700 font-medium">18% under cap</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-emerald-600 h-full w-[72%]"></div>
              </div>
            </div>
          </div>
        )}

        {/* Water Feed */}
        {(activeTab === 'all' || activeTab === 'water') && (
          <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-sky-600" />
                Bulk Water Consumption
              </span>
              <span className="text-[10px] font-mono text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">
                Balanced
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-slate-900">{waterFlow}</span>
              <span className="text-xs text-slate-500 font-medium">kL / hr</span>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-600">
              <div className="flex justify-between">
                <span>Zone Pressure:</span>
                <span className="text-slate-800 font-mono font-medium">3.85 bar</span>
              </div>
              <div className="flex justify-between">
                <span>Acoustic Leak Check:</span>
                <span className="text-emerald-700 font-medium">0 Anomaly detected</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-sky-600 h-full w-[58%]"></div>
              </div>
            </div>
          </div>
        )}

        {/* Gas Feed */}
        {(activeTab === 'all' || activeTab === 'gas') && (
          <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-500" />
                Gas Flow &amp; Safety
              </span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                Safe
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-slate-900">{gasPressure}</span>
              <span className="text-xs text-slate-500 font-medium">kg/cm²</span>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-600">
              <div className="flex justify-between">
                <span>Current Velocity:</span>
                <span className="text-slate-800 font-mono font-medium">82.4 SCMH</span>
              </div>
              <div className="flex justify-between">
                <span>Safety Threshold:</span>
                <span className="text-emerald-700 font-medium">Pass (Zero leak)</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-orange-500 h-full w-[44%]"></div>
              </div>
            </div>
          </div>
        )}

        {/* Chiller Plant Feed */}
        {(activeTab === 'all' || activeTab === 'chiller') && (
          <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Wind className="w-4 h-4 text-teal-600" />
                HVAC Chiller COP
              </span>
              <span className="text-[10px] font-mono text-teal-800 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200">
                High COP
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-slate-900">{chillerCop}</span>
              <span className="text-xs text-slate-500 font-medium">COP rating</span>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-600">
              <div className="flex justify-between">
                <span>Chilled Water Out:</span>
                <span className="text-slate-800 font-mono font-medium">7.2 °C (ΔT 5.3°C)</span>
              </div>
              <div className="flex justify-between">
                <span>Predictive Health:</span>
                <span className="text-emerald-700 font-medium">Vibration optimal</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-teal-600 h-full w-[84%]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Live AI Alert Dispatch Preview */}
      <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          <Activity className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong className="text-slate-900">AI Automation Insight:</strong> Chiller staging optimized for 2:00 PM peak tariff window. Projected saving: ₹14,200/day.
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 shrink-0">
          <ShieldCheck className="w-4 h-4 text-slate-600" />
          <span>OT Gateway Encrypted (TLS 1.3)</span>
        </div>
      </div>
    </div>
  );
};
