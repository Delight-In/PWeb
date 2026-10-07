import React, { useState } from 'react';
import { 
  Zap, Droplets, Flame, Wind, Award, ArrowRight, 
  CheckCircle2, ChevronDown, ChevronUp, Cpu, ShieldCheck, 
  Layers, Download, Check, Radio
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

interface ResourceIntelligencePageProps {
  onRequestDemo: () => void;
  onOpenCapability: () => void;
}

type PillarKey = 'energy' | 'water' | 'gas' | 'chiller' | 'advisory';

export const ResourceIntelligencePage: React.FC<ResourceIntelligencePageProps> = ({
  onRequestDemo,
  onOpenCapability,
}) => {
  const [activePillar, setActivePillar] = useState<PillarKey>('energy');
  const [showTechSpecs, setShowTechSpecs] = useState<boolean>(false);

  const pillarsData: Record<PillarKey, {
    title: string;
    tag: string;
    icon: React.ComponentType<{ className?: string }>;
    image: string;
    accentColor: string;
    bgAccent: string;
    headline: string;
    summary: string;
    points: { title: string; desc: string }[];
    metrics: { label: string; value: string; status: string }[];
    techSpecs: string[];
  }> = {
    energy: {
      title: 'Energy Management',
      tag: 'Pillar 01 · Power Telemetry',
      icon: Zap,
      image: '/images/industry-manufacturing.jpg',
      accentColor: 'text-amber-600',
      bgAccent: 'bg-amber-50 border-amber-200',
      headline: 'Real-time power draw tracking across meters, busbars and equipment.',
      summary: 'Prevent expensive peak demand (kVA) penalties, track power factor continuously, and benchmark kWh against production tonnage.',
      points: [
        {
          title: 'Sub-Second Feeder Metering',
          desc: 'High-frequency telemetry across incoming discom substations, main breakers, and induction loads.',
        },
        {
          title: 'Automated Peak-Demand Alerts',
          desc: 'Predictive warnings 20 minutes in advance before surpassing contracted maximum demand caps.',
        },
        {
          title: 'Target Benchmarking',
          desc: 'Normalizes kWh against production output and shift schedules to isolate true operational waste.',
        },
      ],
      metrics: [
        { label: 'Demand Utilization', value: '68.4% Cap', status: 'Penalty Exempt' },
        { label: 'Average Power Factor', value: '0.992 Lag', status: 'Maximum Discom Rebate' },
        { label: 'Harmonic Distortion', value: '2.4% THD', status: 'IEEE 519 Compliant' },
      ],
      techSpecs: [
        'Supports Class 0.2S and 0.5S revenue-grade digital meters.',
        'Protocols: Modbus-RTU over RS-485, Modbus-TCP, BACnet/IP, MQTT.',
        'Continuous logging of active (kWh), reactive (kVArh), and apparent (kVAh) energy.',
        'Automatic load shedding integration via relay triggers or PLC commands.',
      ],
    },
    water: {
      title: 'Water Management',
      tag: 'Pillar 02 · Hydrological Intelligence',
      icon: Droplets,
      image: '/images/chiller-water-plant.jpg',
      accentColor: 'text-blue-600',
      bgAccent: 'bg-blue-50 border-blue-200',
      headline: 'Continuous flow tracking across sources, zones, and recycling plants.',
      summary: 'Detect subterranean leaks before ground saturation, account for bulk tankers, and streamline statutory CGWA compliance.',
      points: [
        {
          title: 'End-to-End Flow Ledger',
          desc: 'Track intake from borewells, municipal mains, and tankers down to cooling towers and kitchens.',
        },
        {
          title: 'Acoustic Leak Detection',
          desc: 'Automated mass-balance algorithms alert operations immediately when zone distribution drops below inflow.',
        },
        {
          title: 'CGWA Statutory Ledger',
          desc: 'Automates digital water ledger records to meet municipal conservation and ESG water-positive goals.',
        },
      ],
      metrics: [
        { label: 'Reconciliation Balance', value: '98.6%', status: 'Zero Active Leaks' },
        { label: 'STP Recycled Reuse', value: '84.2%', status: 'Cooling Tower Makeup' },
        { label: 'CGWA Statutory Status', value: 'Compliant', status: 'Automated Filings' },
      ],
      techSpecs: [
        'Ultrasonic transit-time and electromagnetic flow transmitters (±0.5% accuracy).',
        'Direct pulse output and 4-20mA loop sensors for legacy mechanical meters.',
        'Digital hydrostatic level transmitters for overhead and underground sumps.',
        'Cloud-calculated water balance engine with daily automated variance reports.',
      ],
    },
    gas: {
      title: 'Gas Management',
      tag: 'Pillar 03 · Thermal Energy & Safety',
      icon: Flame,
      image: '/images/iot-hardware-sensors.jpg',
      accentColor: 'text-orange-600',
      bgAccent: 'bg-orange-50 border-orange-200',
      headline: 'Live monitoring of gas consumption, line pressure, and safety thresholds.',
      summary: 'Safeguard plant infrastructure, catch anomalous line pressure drops, and optimize boiler combustion efficiency.',
      points: [
        {
          title: 'Mass Flow & Thermal Telemetry',
          desc: 'Real-time PNG, LPG, and compressed air flow tracking with temperature and pressure compensation.',
        },
        {
          title: 'Safety-Threshold Alerts',
          desc: 'Instant notifications on abnormal pressure drops, high-limit exceedances, or line rupture risks.',
        },
        {
          title: 'Combustion Efficiency',
          desc: 'Correlate fuel consumption with steam output to catch boiler burner degradation early.',
        },
      ],
      metrics: [
        { label: 'Manifold Pressure', value: '4.20 bar', status: 'Nominal Operating Band' },
        { label: 'Combustion Efficiency', value: '83.4%', status: 'Optimal Air-Fuel Ratio' },
        { label: 'Solenoid Safety Shutoff', value: 'Armed', status: 'Automatic Tripping Linked' },
      ],
      techSpecs: [
        'Thermal mass flow meters and vortex shedding flow sensors.',
        'Explosion-proof ATEX / IECEx certified pressure transmitters.',
        'Hardwired safety interlock interface for emergency shut-off valves.',
        'Automated specific fuel consumption (SFC) reporting per tonne of steam.',
      ],
    },
    chiller: {
      title: 'Chiller Management',
      tag: 'Pillar 04 · Thermodynamic Efficiency',
      icon: Wind,
      image: '/images/chiller-water-plant.jpg',
      accentColor: 'text-cyan-600',
      bgAccent: 'bg-cyan-50 border-cyan-200',
      headline: 'Real-time chiller plant performance (COP) and HVAC staging optimization.',
      summary: 'Central chillers consume over 50% of facility power. Our platform tracks kW/TR in real time, suggests optimal staging, and flags condenser fouling.',
      points: [
        {
          title: 'Real-Time kW/TR & COP Analytics',
          desc: 'Monitors thermal cooling tonnage delivered against electrical input power every 60 seconds.',
        },
        {
          title: 'Predictive Degradation Alerts',
          desc: 'Detects condenser tube scale buildup and approach temperature deviations before compressor damage.',
        },
        {
          title: 'Dynamic Staging Recommendations',
          desc: 'Advises operators on condenser water setpoint reset and part-load compressor sequencing.',
        },
      ],
      metrics: [
        { label: 'Plant Efficiency', value: '0.67 kW/TR', status: 'COP 5.25 (Optimal)' },
        { label: 'Approach Temperature', value: '1.2° C', status: 'Clean Heat Exchanger' },
        { label: 'Cooling Tower Delta T', value: '4.8° C', status: 'Optimal Fan Staging' },
      ],
      techSpecs: [
        'Four-wire PT100/PT1000 RTD precision temperature transmitters (±0.05°C).',
        'Direct BACnet interfaces to York, Trane, Carrier, and Daikin chillers.',
        'Variable Primary Pumping (VPF) delta-P tracking.',
        'Thermodynamic fouling detection algorithms for predictive maintenance.',
      ],
    },
    advisory: {
      title: 'Energy Advisory & Audits',
      tag: 'Pillar 05 · Domain Consulting',
      icon: Award,
      image: '/images/dashboard-mockup.jpg',
      accentColor: 'text-emerald-700',
      bgAccent: 'bg-emerald-50 border-emerald-200',
      headline: 'Expert-led energy audits, statutory BEE compliance, and retrofit roadmaps.',
      summary: 'Delivered with certified TRIAXIS energy auditors. We turn telemetry numbers into verified financial savings and bankable investment proposals.',
      points: [
        {
          title: 'Certified BEE & ISO 50001 Audits',
          desc: 'Mandatory statutory walk-through and detailed investment-grade facility energy audits.',
        },
        {
          title: 'Regulatory & Tariff Advisory',
          desc: 'Discom tariff structure optimization, open-access renewable power sourcing, and power factor rebates.',
        },
        {
          title: 'ROI-Backed Retrofit Roadmaps',
          desc: 'Techno-commercial business cases for VFD retrofits, solar integration, and lighting overhauls.',
        },
      ],
      metrics: [
        { label: 'BEE Audit Readiness', value: 'Certified', status: 'Statutory Grade' },
        { label: 'Average Payback Period', value: '8.4 Months', status: 'Low-CapEx Interventions' },
        { label: 'Tariff Rebate Realization', value: 'Maximum', status: 'Power Factor Incentive' },
      ],
      techSpecs: [
        'Audits conducted by Bureau of Energy Efficiency (BEE) accredited auditors.',
        'ISO 50001 Energy Management System (EnMS) documentation support.',
        'Level 1, 2, and 3 ASHRAE / BEE compliant energy audits.',
        'Full ESG Scope 1, 2, and 3 carbon accounting methodologies.',
      ],
    },
  };

  const currentPillar = pillarsData[activePillar];
  const PillarIcon = currentPillar.icon;

  return (
    <>
      <SeoHead
        title="Resource Intelligence Platform | Energy, Water, Gas & Chiller Management — PrishiTech"
        description="A unified platform for Energy, Water, Gas and Chiller Management with expert Energy Advisory — real-time monitoring, alerts and reporting in one dashboard."
      />

      <div className="pt-24 pb-20 space-y-24 overflow-hidden">
        {/* =========================================================
            1. HERO: WITH 3D DASHBOARD PREVIEW
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block">
                Unified Resource Telemetry
              </span>

              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                One Unified Platform for{' '}
                <span className="bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  Resource Intelligence.
                </span>
              </h1>

              <p className="text-slate-600 text-base leading-relaxed">
                Real-time visibility, automated alerts, and engineering advisory across every resource stream your facility operates.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onRequestDemo}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
                >
                  <span>Request Platform Demo</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </button>
                <button
                  onClick={onOpenCapability}
                  className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl text-xs sm:text-sm border border-slate-200 shadow-2xs transition-all flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Technical Specs (PDF)</span>
                </button>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-5 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                  Sub-second Telemetry
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                  RS-485 Modbus &amp; BACnet
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                  Zero Shutdowns
                </span>
              </div>
            </div>

            {/* Right Visual Dashboard Mockup (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-950 group">
                <img 
                  src="/images/dashboard-mockup.jpg" 
                  alt="Resource Intelligence Unified Dashboard" 
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>5-Stream Live Sync</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-0.5">
                    Unified Telemetry Console
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    Energy · Water · Gas · Chiller · Advisory
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. INTERACTIVE PILLAR STUDIO (WITH HIGH-RES PHOTOGRAPHY)
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Top Segmented Tab Navigation */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-8">
            {(
              [
                { id: 'energy', label: 'Energy Management', icon: Zap },
                { id: 'water', label: 'Water Management', icon: Droplets },
                { id: 'gas', label: 'Gas Management', icon: Flame },
                { id: 'chiller', label: 'Chiller Management', icon: Wind },
                { id: 'advisory', label: 'Energy Advisory', icon: Award },
              ] as const
            ).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePillar(item.id);
                    setShowTechSpecs(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activePillar === item.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Card (Split Image & Details) */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Image Side (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[460px] bg-slate-950">
                <img 
                  src={currentPillar.image} 
                  alt={currentPillar.title} 
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>

                <div className="absolute top-5 left-5 bg-slate-900/90 backdrop-blur-md text-white border border-slate-700 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2">
                  <PillarIcon className={`w-4 h-4 ${currentPillar.accentColor}`} />
                  <span>{currentPillar.tag}</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-extrabold text-white">
                    {currentPillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {currentPillar.headline}
                  </p>
                </div>
              </div>

              {/* Details Side (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-9 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-5">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {currentPillar.summary}
                  </p>

                  {/* 3 Scannable Feature Cards */}
                  <div className="space-y-2.5">
                    {currentPillar.points.map((pt, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block font-semibold text-xs mb-0.5">{pt.title}</strong>
                          <span className="text-slate-600 leading-relaxed">{pt.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Live Operational Health Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    {currentPillar.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block">{m.label}</span>
                        <div className="text-base font-bold font-mono text-slate-900 my-0.5">{m.value}</div>
                        <span className="text-[10px] text-emerald-700 font-semibold">{m.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                  <button
                    onClick={onRequestDemo}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Request {currentPillar.title} Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                  </button>

                  <button
                    onClick={() => setShowTechSpecs(!showTechSpecs)}
                    className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-xs border border-slate-200 flex items-center gap-1.5 transition-colors"
                  >
                    <span>{showTechSpecs ? 'Hide Engineering Specs' : 'View Engineering Specs'}</span>
                    {showTechSpecs ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Collapsible Deep Engineering Specifications */}
                {showTechSpecs && (
                  <div className="mt-4 pt-4 border-t border-slate-200 animate-fade-in">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                      Industrial Field Sensors &amp; Protocols:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {currentPillar.techSpecs.map((spec, idx) => (
                        <div key={idx} className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. HARDWARE-TO-CLOUD PIPELINE
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              End-to-End Pipeline
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Physical Plant to Cloud Analytics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Step 01</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-1">Non-Invasive Sensor Taps</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Split-core CTs snap on power lines and clamp-on ultrasonic sensors attach to pipes with zero shutdown.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Step 02</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-1">Hardened Edge Gateways</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Industrial DIN-rail hubs aggregate Modbus &amp; BACnet telemetry with TLS 1.3 encryption and 30-day offline buffer.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Step 03</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-1">Real-Time Cloud Dashboard</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Instant anomaly alarms, predictive peak-load warnings via SMS/WhatsApp, and automated BEE audit reporting.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. BOTTOM CTA
        ========================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-4 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-xl text-white space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-1">
              Get Started
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to eliminate utility waste across your facility?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
              Connect with our engineering team for an on-site feasibility assessment or live platform walkthrough.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <button
                onClick={onRequestDemo}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs transition-colors shadow-md"
              >
                Request Platform Demo
              </button>
              <button
                onClick={onOpenCapability}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs border border-white/20 shadow-xs transition-colors"
              >
                Download Technical Prospectus
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResourceIntelligencePage;
