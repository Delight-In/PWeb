import { useState, useEffect } from 'react';
import { Zap, Droplets, Flame, Wind, Activity, ShieldCheck } from 'lucide-react';

export const TelemetrySimulator = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'energy' | 'water' | 'gas' | 'chiller'>('all');
  const [pulse, setPulse] = useState(0);

  // Periodic sensor telemetry pulse simulation
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
    <div className="w-full glass-panel rounded-2xl p-4 sm:p-6 border border-slate-800 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-800/80 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-white font-semibold text-sm sm:text-base">Prishitech Unified Telemetry Console</h4>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Live OT Stream
              </span>
            </div>
            <p className="text-xs text-slate-400">Node ID: PRISHI-VAISHALI-GZ-EDGE01 · Sub-second sampling</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-950/70 rounded-xl border border-slate-800 text-xs">
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
              className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
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
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/90 relative group hover:border-emerald-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                Active Electrical Load
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-800/50">
                Normal
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-white">{energyLoad}</span>
              <span className="text-xs text-slate-400 font-medium">kW</span>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-400">
              <div className="flex justify-between">
                <span>Power Factor:</span>
                <span className="text-slate-200 font-mono">0.99 (Optimal)</span>
              </div>
              <div className="flex justify-between">
                <span>Peak Load Alert:</span>
                <span className="text-emerald-400 font-medium">18% under cap</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full w-[72%]"></div>
              </div>
            </div>
          </div>
        )}

        {/* Water Feed */}
        {(activeTab === 'all' || activeTab === 'water') && (
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/90 relative group hover:border-cyan-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-cyan-400" />
                Bulk Water Consumption
              </span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-800/50">
                Balanced
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-white">{waterFlow}</span>
              <span className="text-xs text-slate-400 font-medium">kL / hr</span>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-400">
              <div className="flex justify-between">
                <span>Zone Pressure:</span>
                <span className="text-slate-200 font-mono">3.85 bar</span>
              </div>
              <div className="flex justify-between">
                <span>Acoustic Leak Check:</span>
                <span className="text-emerald-400 font-medium">0 Anomaly detected</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-[58%]"></div>
              </div>
            </div>
          </div>
        )}

        {/* Gas Feed */}
        {(activeTab === 'all' || activeTab === 'gas') && (
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/90 relative group hover:border-amber-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-500" />
                Gas Flow &amp; Safety
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-800/50">
                Safe
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-white">{gasPressure}</span>
              <span className="text-xs text-slate-400 font-medium">kg/cm²</span>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-400">
              <div className="flex justify-between">
                <span>Current Velocity:</span>
                <span className="text-slate-200 font-mono">82.4 SCMH</span>
              </div>
              <div className="flex justify-between">
                <span>Safety Threshold:</span>
                <span className="text-emerald-400 font-medium">Pass (Zero leak)</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-amber-500 h-full w-[44%]"></div>
              </div>
            </div>
          </div>
        )}

        {/* Chiller Plant Feed */}
        {(activeTab === 'all' || activeTab === 'chiller') && (
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/90 relative group hover:border-teal-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Wind className="w-4 h-4 text-teal-400" />
                HVAC Chiller COP
              </span>
              <span className="text-[10px] font-mono text-teal-300 bg-teal-950/50 px-1.5 py-0.5 rounded border border-teal-800/50">
                High COP
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-white">{chillerCop}</span>
              <span className="text-xs text-slate-400 font-medium">COP rating</span>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-400">
              <div className="flex justify-between">
                <span>Chilled Water Out:</span>
                <span className="text-slate-200 font-mono">7.2 °C (ΔT 5.3°C)</span>
              </div>
              <div className="flex justify-between">
                <span>Predictive AI Health:</span>
                <span className="text-emerald-400 font-medium">Vibration optimal</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full w-[84%]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Live AI Alert Dispatch Preview */}
      <div className="mt-4 p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>
            <strong className="text-white">AI Automation Insight:</strong> Chiller staging optimized for 2:00 PM peak tariff window. Projected saving: ₹14,200/day.
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>OT Gateway Encrypted (TLS 1.3 + Modbus-over-TLS)</span>
        </div>
      </div>
    </div>
  );
};
