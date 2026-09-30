import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Droplets, Flame, Wind, Award, ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { TelemetrySimulator } from '../components/TelemetrySimulator';

interface ResourceIntelligencePageProps {
  onRequestDemo: () => void;
  onOpenCapability: () => void;
}

export const ResourceIntelligencePage: React.FC<ResourceIntelligencePageProps> = ({
  onRequestDemo,
  onOpenCapability,
}) => {
  const [activePillar, setActivePillar] = useState<'energy' | 'water' | 'gas' | 'chiller' | 'advisory'>('energy');

  return (
    <>
      <SeoHead
        title="Resource Intelligence Platform | Energy, Water, Gas & Chiller Management — Prishitech"
        description="A unified platform for Energy, Water, Gas and Chiller Management with expert Energy Advisory — real-time monitoring, alerts and reporting in one dashboard."
      />

      <div className="pt-24 pb-16 space-y-20">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto pt-6 sm:pt-12">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-full inline-block mb-4">
              Unified Resource Telemetry
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              “One Unified Platform for{' '}
              <span className="gradient-text">Resource Intelligence</span>”
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Real-time visibility, control and advisory across every resource stream your facility depends on.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-glow-emerald flex items-center justify-center gap-2"
              >
                <span>Request a Platform Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenCapability}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm border border-slate-700 transition-colors"
              >
                Download Technical Specs
              </button>
            </div>
          </div>
        </section>

        {/* INTERACTIVE TELEMETRY PREVIEW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <TelemetrySimulator />
        </section>

        {/* PILLAR QUICK JUMP NAVIGATION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="sticky top-20 z-30 bg-slate-950/80 backdrop-blur-md p-2 rounded-2xl border border-slate-800 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto">
            {[
              { id: 'energy', label: 'Energy Management', icon: Zap },
              { id: 'water', label: 'Water Management', icon: Droplets },
              { id: 'gas', label: 'Gas Management', icon: Flame },
              { id: 'chiller', label: 'Chiller Management', icon: Wind },
              { id: 'advisory', label: 'Energy Advisory', icon: Award },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  onClick={() => setActivePillar(p.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activePillar === p.id
                      ? 'bg-emerald-500 text-slate-950 shadow-glow-emerald'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{p.label}</span>
                </a>
              );
            })}
          </div>
        </section>

        {/* 5 CORE PILLARS DETAIL SECTIONS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
          {/* PILLAR 1: ENERGY MANAGEMENT */}
          <div id="energy" className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 scroll-mt-28">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Pillar 01 · Power Telemetry
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Energy Management
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Real-time electricity consumption monitoring across meters, feeders and equipment. Move from reactive monthly utility bills to continuous sub-second power factor and harmonic optimization.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Real-time electricity consumption monitoring</strong>
                      <span className="text-slate-400">Granular tracking across main incomers, busbars, sub-distribution boards, and critical high-draw motors.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Automated anomaly detection &amp; peak-load alerts</strong>
                      <span className="text-slate-400">Instant SMS, WhatsApp, and email dispatch before exceeding contractual maximum demand (kVA) penalties.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Consumption benchmarking against baselines</strong>
                      <span className="text-slate-400">Normalizes kWh against production tonnage, weather conditions (HDD/CDD), and shift hours to isolate actual operational waste.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onRequestDemo}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition-colors"
                  >
                    <span>Request Energy Audit Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Graphic card */}
              <div className="w-full lg:w-1/2 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex justify-between items-center text-xs pb-3 border-b border-slate-800">
                  <span className="text-white font-semibold">Feeder Incomer 01 (415V 3-Phase)</span>
                  <span className="text-emerald-400 font-mono">Sampling: 100ms</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Active Demand:</span>
                    <span className="text-lg font-bold text-white font-mono">482.4 kW</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Power Factor:</span>
                    <span className="text-lg font-bold text-emerald-400 font-mono">0.992</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">THD (Voltage):</span>
                    <span className="text-lg font-bold text-slate-200 font-mono">1.8%</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Contract Cap:</span>
                    <span className="text-lg font-bold text-amber-400 font-mono">600 kVA</span>
                  </div>
                </div>
                <div className="p-3 bg-emerald-950/30 border border-emerald-900/50 rounded-xl text-xs text-emerald-300">
                  ✓ TOD (Time of Day) tariff scheduler active. Heavy pumping loads shifted to low-cost tariff block (10:00 PM – 6:00 AM).
                </div>
              </div>
            </div>
          </div>

          {/* PILLAR 2: WATER MANAGEMENT */}
          <div id="water" className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 scroll-mt-28">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Droplets className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Pillar 02 · Hydrological Intelligence
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Water Management
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Continuous flow and consumption tracking across sources and zones. Prevent underground leaks, track cooling tower makeup water, and ensure complete water balance accounting.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Continuous flow &amp; consumption tracking</strong>
                      <span className="text-slate-400">Monitor borewells, municipal supplies, STP/ETP recycling loops, and distribution networks.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Leak and abnormal-usage detection with instant alerts</strong>
                      <span className="text-slate-400">Differential pressure telemetry and night-flow algorithmic baseline flags pipe fractures and overflow conditions instantly.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Water balance reporting to support conservation targets</strong>
                      <span className="text-slate-400">Automated CGWA compliance reporting, zero-liquid-discharge (ZLD) monitoring, and ESG disclosures.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onRequestDemo}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-xl text-xs transition-colors"
                  >
                    <span>Request Water Auditing Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Graphic card */}
              <div className="w-full lg:w-1/2 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex justify-between items-center text-xs pb-3 border-b border-slate-800">
                  <span className="text-white font-semibold">Campus Water Balance Ledger</span>
                  <span className="text-cyan-400 font-mono">Balance: 98.6%</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between p-2 bg-slate-900 rounded">
                    <span className="text-slate-400">Total Input (Borewell + Municipal):</span>
                    <span className="text-white font-mono font-semibold">245.0 kL/day</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-900 rounded">
                    <span className="text-slate-400">Cooling Tower Evaporation / Makeup:</span>
                    <span className="text-white font-mono font-semibold">112.4 kL/day</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-900 rounded">
                    <span className="text-slate-400">STP Treated Water Recycled for Flushing/Horticulture:</span>
                    <span className="text-emerald-400 font-mono font-semibold">94.8 kL/day</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-900 rounded">
                    <span className="text-slate-400">Unaccounted Losses (Leak Threshold):</span>
                    <span className="text-cyan-300 font-mono font-semibold">1.4% (Within Green Zone)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PILLAR 3: GAS MANAGEMENT */}
          <div id="gas" className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 scroll-mt-28">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-orange-400">
                  Pillar 03 · Thermal Fuel &amp; Gas Safety
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Gas Management
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Live monitoring of gas consumption and pressure across connected lines. Ensure thermal efficiency in boilers and furnaces while maintaining zero-leak safety standards.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Live monitoring of gas consumption &amp; pressure</strong>
                      <span className="text-slate-400">Continuous measurement of PNG/LPG/CNG mass flow, line pressure, temperature, and calorific heat output.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Safety-threshold alerting for abnormal usage or leaks</strong>
                      <span className="text-slate-400">Automated solenoid valve shutdown triggers and acoustic leak detection linked directly to plant emergency response systems.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Usage trend reporting for cost &amp; safety planning</strong>
                      <span className="text-slate-400">Specific fuel consumption (SFC) reporting per unit output to prevent burner drift and over-firing.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onRequestDemo}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold rounded-xl text-xs transition-colors"
                  >
                    <span>Request Gas Monitoring Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Graphic card */}
              <div className="w-full lg:w-1/2 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex justify-between items-center text-xs pb-3 border-b border-slate-800">
                  <span className="text-white font-semibold">Boiler House PNG Main Feed</span>
                  <span className="text-emerald-400 font-mono">Status: 100% Safe</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Line Pressure:</span>
                    <span className="text-lg font-bold text-white font-mono">4.18 kg/cm²</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Instant Flow:</span>
                    <span className="text-lg font-bold text-orange-400 font-mono">78.5 SCMH</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Gas Temperature:</span>
                    <span className="text-lg font-bold text-slate-200 font-mono">27.4 °C</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Air-Fuel Ratio:</span>
                    <span className="text-lg font-bold text-emerald-400 font-mono">1 : 10.2 (Optimal)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PILLAR 4: CHILLER MANAGEMENT */}
          <div id="chiller" className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 scroll-mt-28">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Wind className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400">
                  Pillar 04 · Thermodynamic Optimization
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Chiller Management
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Real-time chiller plant performance and efficiency monitoring. Chillers often consume 40% to 60% of a commercial building or plant's power. Prishitech tracks Coefficient of Performance (COP) and optimizes plant sequencing.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Real-time chiller plant performance &amp; efficiency monitoring</strong>
                      <span className="text-slate-400">Sub-minute kW/TR calculations, evaporator approach temperatures, and condenser water ΔT analytics.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Predictive alerts on performance degradation before failure</strong>
                      <span className="text-slate-400">Detect tube fouling, refrigerant leaks, compressor vibration anomalies, and pump cavitation weeks before trip events.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Energy-efficiency optimization recommendations for HVAC</strong>
                      <span className="text-slate-400">Automated condenser water reset, variable secondary pumping control, and AI-optimized sequencing schedules.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onRequestDemo}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-xl text-xs transition-colors"
                  >
                    <span>Request Chiller Optimization Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Graphic card */}
              <div className="w-full lg:w-1/2 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex justify-between items-center text-xs pb-3 border-b border-slate-800">
                  <span className="text-white font-semibold">Central Chiller Bank (3 x 400 TR Water-Cooled)</span>
                  <span className="text-teal-400 font-mono">Current COP: 5.84</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Efficiency Index:</span>
                    <span className="text-lg font-bold text-white font-mono">0.602 kW / TR</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Chilled Water Supply:</span>
                    <span className="text-lg font-bold text-teal-400 font-mono">7.2 °C</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Chilled Water Return:</span>
                    <span className="text-lg font-bold text-slate-200 font-mono">12.5 °C (ΔT 5.3°C)</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Condenser Water In:</span>
                    <span className="text-lg font-bold text-emerald-400 font-mono">29.8 °C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PILLAR 5: ENERGY ADVISORY */}
          <div id="advisory" className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 scroll-mt-28">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Pillar 05 · Domain Consulting &amp; Audits
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Energy Advisory
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Expert-led energy audits and efficiency roadmaps. Backed by TRIAXIS Consortium senior power consultants, we turn sensor data into actionable capital expenditure business cases.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Expert-led energy audits &amp; efficiency roadmaps</strong>
                      <span className="text-slate-400">Comprehensive walk-through and detailed investment-grade energy audits conducted by BEE-accredited energy auditors.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Regulatory and compliance guidance</strong>
                      <span className="text-slate-400">Guidance for PAT (Perform Achieve and Trade) compliance, ISO 50001 certification, and SEBI BRSR Core sustainability mandates.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">ROI-backed recommendations for retrofits &amp; upgrades</strong>
                      <span className="text-slate-400">Financial payback models for VFD retrofits, heat recovery wheels, solar PV integration, and harmonic filter banks.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Book an Energy Audit Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Advisory deliverable breakdown */}
              <div className="w-full lg:w-1/2 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="text-xs font-semibold text-white pb-3 border-b border-slate-800">
                  Advisory Deliverables Framework
                </div>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="font-semibold text-emerald-400 mb-1">Phase 1: Baseline &amp; Diagnostic Walkthrough</div>
                    <p className="text-slate-400">Thermal imaging, power quality analyzer logging, and process flow heat balance reconciliation.</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="font-semibold text-cyan-400 mb-1">Phase 2: Techno-Commercial Feasibility</div>
                    <p className="text-slate-400">Categorization into Zero-Cost, Low-Cost, and High-Capex conservation opportunities with IRR &gt; 35%.</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="font-semibold text-emerald-400 mb-1">Phase 3: Turnkey TRIAXIS Commissioning</div>
                    <p className="text-slate-400">Engineering delivery, verification through continuous cloud telemetry, and post-retrofit savings audit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/30 max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to see the platform in action?
            </h2>
            <p className="text-slate-300 text-sm">
              Schedule a live demonstration configured for your facility's utility setup.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={onRequestDemo}
                className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-glow-emerald"
              >
                Request a Platform Demo
              </button>
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm border border-slate-700 transition-colors"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
