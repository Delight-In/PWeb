import React, { useState, useEffect } from 'react';
import { 
  Zap, Droplets, Flame, Wind, Activity, ShieldCheck, 
  AlertTriangle, RotateCcw, Play, CheckCircle2 
} from 'lucide-react';

type SimScenario = 'normal' | 'peak_surge' | 'water_leak' | 'chiller_cop';

export const TelemetrySimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'energy' | 'water' | 'gas' | 'chiller'>('all');
  const [pulse, setPulse] = useState(0);
  const [scenario, setScenario] = useState<SimScenario>('normal');
  const [autoMitigated, setAutoMitigated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((prev) => (prev + 1) % 100);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // When scenario changes, trigger automated mitigation after 3 seconds
  useEffect(() => {
    setAutoMitigated(false);
    if (scenario !== 'normal') {
      const t = setTimeout(() => {
        setAutoMitigated(true);
      }, 2800);
      return () => clearTimeout(t);
    }
  }, [scenario]);

  // Dynamic values based on scenario and pulse
  let energyLoad = (842 + (pulse % 7) * 3.4).toFixed(1);
  let energyStatus = 'Normal';
  let waterFlow = (142.6 + ((pulse + 2) % 5) * 1.2).toFixed(1);
  let waterStatus = 'Balanced';
  let gasPressure = (4.18 + ((pulse + 1) % 4) * 0.04).toFixed(2);
  let chillerCop = (5.84 - ((pulse + 3) % 3) * 0.05).toFixed(2);
  let chillerStatus = 'High COP';

  if (scenario === 'peak_surge') {
    if (!autoMitigated) {
      energyLoad = '1,184.2';
      energyStatus = '96% Peak Demand Surge';
    } else {
      energyLoad = '892.4';
      energyStatus = 'Auto Shedding Active (-292 kW)';
    }
  } else if (scenario === 'water_leak') {
    if (!autoMitigated) {
      waterFlow = '198.8';
      waterStatus = 'Acoustic Leak Alert (Zone 2)';
    } else {
      waterFlow = '144.1';
      waterStatus = 'Zone Isolated & Flow Normalized';
    }
  } else if (scenario === 'chiller_cop') {
    if (!autoMitigated) {
      chillerCop = '3.82';
      chillerStatus = 'Approach Degradation';
    } else {
      chillerCop = '5.92';
      chillerStatus = 'AI Setpoint Reset (Optimal)';
    }
  }

  return (
    <div className="w-full bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden transition-all">
      {/* Top Header & Node Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-slate-900 font-bold text-sm sm:text-base">PrishiTech Unified Telemetry Console</h4>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                Live Edge Stream
              </span>
            </div>
            <p className="text-xs text-slate-500">Gateway: PRISHI-VAISHALI-GZ-EDGE01 · Modbus &amp; BACnet continuous sampling</p>
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

      {/* Interactive Simulation Triggers (Users can test real-time AI responses!) */}
      <div className="mb-5 p-3 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
          <Play className="w-3.5 h-3.5 text-emerald-600" />
          <span>Interactive Simulation Studio:</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          <button
            onClick={() => setScenario('normal')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              scenario === 'normal'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Normal Baseline
          </button>

          <button
            onClick={() => setScenario('peak_surge')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
              scenario === 'peak_surge'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Zap className="w-3 h-3" />
            <span>Simulate Peak Surge</span>
          </button>

          <button
            onClick={() => setScenario('water_leak')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
              scenario === 'water_leak'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Droplets className="w-3 h-3" />
            <span>Simulate Pipe Leak</span>
          </button>

          <button
            onClick={() => setScenario('chiller_cop')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
              scenario === 'chiller_cop'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Wind className="w-3 h-3" />
            <span>Chiller Optimization</span>
          </button>

          {scenario !== 'normal' && (
            <button
              onClick={() => setScenario('normal')}
              className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
              title="Reset simulation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Dynamic Telemetry Feeds */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Energy Feed */}
        {(activeTab === 'all' || activeTab === 'energy') && (
          <div className={`p-4 rounded-xl border transition-all ${
            scenario === 'peak_surge' && !autoMitigated
              ? 'bg-amber-50 border-amber-300 ring-2 ring-amber-400/30'
              : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                Active Power Load
              </span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border font-semibold ${
                scenario === 'peak_surge' && !autoMitigated
                  ? 'bg-amber-200 text-amber-900 border-amber-400'
                  : 'text-emerald-700 bg-emerald-50 border-emerald-200'
              }`}>
                {energyStatus}
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-slate-900 transition-all">{energyLoad}</span>
              <span className="text-xs text-slate-500 font-medium">kW</span>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-600">
              <div className="flex justify-between">
                <span>Power Factor:</span>
                <span className="text-slate-800 font-mono font-medium">0.992 (Optimal)</span>
              </div>
              <div className="flex justify-between">
                <span>Discom Tariff Cap:</span>
                <span className={scenario === 'peak_surge' && !autoMitigated ? 'text-amber-700 font-bold' : 'text-emerald-700 font-medium'}>
                  {scenario === 'peak_surge' && !autoMitigated ? 'Spike Alert (>95%)' : 'Under 1,200 kVA cap'}
                </span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                <div className={`h-full transition-all duration-500 ${
                  scenario === 'peak_surge' && !autoMitigated ? 'bg-amber-500 w-[96%]' : 'bg-emerald-600 w-[72%]'
                }`}></div>
              </div>
            </div>
          </div>
        )}

        {/* Water Feed */}
        {(activeTab === 'all' || activeTab === 'water') && (
          <div className={`p-4 rounded-xl border transition-all ${
            scenario === 'water_leak' && !autoMitigated
              ? 'bg-blue-50 border-blue-300 ring-2 ring-blue-400/30'
              : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-sky-600" />
                Bulk Water Inflow
              </span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border font-semibold ${
                scenario === 'water_leak' && !autoMitigated
                  ? 'bg-blue-200 text-blue-900 border-blue-400'
                  : 'text-sky-700 bg-sky-50 border-sky-200'
              }`}>
                {waterStatus}
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-slate-900 transition-all">{waterFlow}</span>
              <span className="text-xs text-slate-500 font-medium">m³ / hr</span>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-600">
              <div className="flex justify-between">
                <span>Mass Balance:</span>
                <span className="text-slate-800 font-mono font-medium">
                  {scenario === 'water_leak' && !autoMitigated ? '81.4% (Leak Detected)' : '98.6% Reconciled'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Acoustic Sensor:</span>
                <span className={scenario === 'water_leak' && !autoMitigated ? 'text-blue-700 font-bold' : 'text-emerald-700 font-medium'}>
                  {scenario === 'water_leak' && !autoMitigated ? 'Zone 2 Pipe Anomaly' : '0 Anomalies'}
                </span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                <div className={`h-full transition-all duration-500 ${
                  scenario === 'water_leak' && !autoMitigated ? 'bg-blue-500 w-[94%]' : 'bg-sky-600 w-[62%]'
                }`}></div>
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
                Gas Pressure &amp; Safety
              </span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                Safe
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-slate-900">{gasPressure}</span>
              <span className="text-xs text-slate-500 font-medium">bar</span>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-600">
              <div className="flex justify-between">
                <span>Mass Flow Rate:</span>
                <span className="text-slate-800 font-mono font-medium">84.2 SCMH</span>
              </div>
              <div className="flex justify-between">
                <span>Emergency Valve:</span>
                <span className="text-emerald-700 font-medium">Armed (No Drop)</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-orange-500 h-full w-[46%]"></div>
              </div>
            </div>
          </div>
        )}

        {/* Chiller Plant Feed */}
        {(activeTab === 'all' || activeTab === 'chiller') && (
          <div className={`p-4 rounded-xl border transition-all ${
            scenario === 'chiller_cop' && !autoMitigated
              ? 'bg-teal-50 border-teal-300 ring-2 ring-teal-400/30'
              : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Wind className="w-4 h-4 text-teal-600" />
                HVAC Chiller COP
              </span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border font-semibold ${
                scenario === 'chiller_cop' && !autoMitigated
                  ? 'bg-teal-200 text-teal-900 border-teal-400'
                  : 'text-teal-800 bg-teal-50 border-teal-200'
              }`}>
                {chillerStatus}
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-slate-900 transition-all">{chillerCop}</span>
              <span className="text-xs text-slate-500 font-medium">COP (kW/TR: 0.62)</span>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-600">
              <div className="flex justify-between">
                <span>Approach Delta:</span>
                <span className="text-slate-800 font-mono font-medium">
                  {scenario === 'chiller_cop' && !autoMitigated ? '3.4 °C (Fouling Drift)' : '1.3 °C (Optimal)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>AI Setpoint:</span>
                <span className="text-emerald-700 font-medium">
                  {scenario === 'chiller_cop' && autoMitigated ? 'Reset applied (+18% eff)' : 'Staging Nominal'}
                </span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                <div className={`h-full transition-all duration-500 ${
                  scenario === 'chiller_cop' && !autoMitigated ? 'bg-amber-500 w-[45%]' : 'bg-teal-600 w-[86%]'
                }`}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Automated Mitigation Feedback Box */}
      <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          {scenario === 'normal' && (
            <>
              <Activity className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong className="text-slate-900">AI Platform Status:</strong> Continuous sub-second edge polling active. All 4 utility streams operating within historical baselines.
              </span>
            </>
          )}

          {scenario === 'peak_surge' && !autoMitigated && (
            <>
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 animate-bounce" />
              <span className="text-amber-900 font-medium">
                <strong>Peak Spike Alert:</strong> Feeder load reached 96% of discom contract cap. Calculating automated load shed...
              </span>
            </>
          )}

          {scenario === 'peak_surge' && autoMitigated && (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-emerald-900 font-medium">
                <strong>Automated Action Taken:</strong> Auxiliary Chiller #2 stepped down. 292 kW shed in 2.8s. Maximum demand penalty successfully eliminated!
              </span>
            </>
          )}

          {scenario === 'water_leak' && !autoMitigated && (
            <>
              <AlertTriangle className="w-4 h-4 text-blue-600 shrink-0 animate-bounce" />
              <span className="text-blue-900 font-medium">
                <strong>Water Ledger Discrepancy:</strong> Zone 2 outflow down by 18.6%. Acoustic frequency matches sub-surface rupture.
              </span>
            </>
          )}

          {scenario === 'water_leak' && autoMitigated && (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-emerald-900 font-medium">
                <strong>Isolation Triggered:</strong> Solenoid valve #04 automatically isolated Zone 2 rupture. Maintenance team alerted via SMS/WhatsApp.
              </span>
            </>
          )}

          {scenario === 'chiller_cop' && !autoMitigated && (
            <>
              <AlertTriangle className="w-4 h-4 text-teal-600 shrink-0" />
              <span className="text-teal-900 font-medium">
                <strong>Thermodynamic Alert:</strong> Condenser approach temperature drifted past 3.0°C. Recalculating cooling tower fan staging...
              </span>
            </>
          )}

          {scenario === 'chiller_cop' && autoMitigated && (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-emerald-900 font-medium">
                <strong>Optimization Complete:</strong> Condenser water setpoint reset by 1.8°C. Chiller COP restored to 5.92 (+18% efficiency).
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-slate-500 shrink-0 text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
          <span>Purdue IDMZ · TLS 1.3</span>
        </div>
      </div>
    </div>
  );
};
