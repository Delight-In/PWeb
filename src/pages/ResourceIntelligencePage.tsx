import React, { useState } from 'react';
import { 
  Zap, Droplets, Flame, Wind, Award, ArrowRight, 
  CheckCircle2, ChevronDown, ChevronUp, Cpu, ShieldCheck, 
  Layers, Download
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
      accentColor: 'text-amber-600',
      bgAccent: 'bg-amber-50 border-amber-200',
      headline: 'Real-time electricity consumption monitoring across meters, feeders and equipment.',
      summary: 'Prevent expensive peak demand (kVA) penalties, track power factor continuously, and benchmark consumption against actual production output.',
      points: [
        {
          title: 'Sub-second Feeder Metering',
          desc: 'Granular tracking across incoming substations, main busbars, and high-draw equipment.',
        },
        {
          title: 'Automated Peak-Demand Alerts',
          desc: 'Predictive notifications 20 minutes in advance before exceeding contracted discom maximum demand limits.',
        },
        {
          title: 'Target Benchmarking',
          desc: 'Normalizes kWh against production tonnage, weather, and shift schedules to isolate true operational waste.',
        },
      ],
      metrics: [
        { label: 'Contract Demand Utilization', value: '68.4% (Safe)', status: 'Within Normal Baseline' },
        { label: 'Average Power Factor', value: '0.992 Lag', status: 'Penalty Exempt' },
        { label: 'Total Harmonic Distortion (THD)', value: '2.4%', status: 'IEEE 519 Compliant' },
      ],
      techSpecs: [
        'Supports Class 0.2S and 0.5S revenue-grade digital power meters.',
        'Protocols: Modbus-RTU over RS-485, Modbus-TCP, BACnet/IP, MQTT.',
        'Continuous logging of active (kWh), reactive (kVArh), and apparent (kVAh) energy.',
        'Automatic load shedding integration via relay triggers or PLC commands.',
      ],
    },
    water: {
      title: 'Water Management',
      tag: 'Pillar 02 · Hydrological Intelligence',
      icon: Droplets,
      accentColor: 'text-blue-600',
      bgAccent: 'bg-blue-50 border-blue-200',
      headline: 'Continuous flow and consumption tracking across sources, zones, and recycling plants.',
      summary: 'Detect subterranean leaks before ground saturation, account for bulk tanker receipts, and streamline statutory Central Ground Water Authority (CGWA) reporting.',
      points: [
        {
          title: 'End-to-End Flow Ledger',
          desc: 'Track intake from borewells, municipal mains, and tankers down to cooling towers and restrooms.',
        },
        {
          title: 'Acoustic Leak Detection',
          desc: 'Algorithmic mass-balance auditing alerts facility teams immediately when zone distribution drops below inflow.',
        },
        {
          title: 'Water Balance & CGWA Compliance',
          desc: 'Automates digital water ledger records to meet municipal conservation and ESG water-positive goals.',
        },
      ],
      metrics: [
        { label: 'Reconciliation Balance', value: '98.6%', status: 'Zero Active Leaks' },
        { label: 'Recycled STP Utilization', value: '84.2%', status: 'Horticulture & HVAC Makeup' },
        { label: 'CGWA Statutory Ledger', value: 'Logged', status: 'Automated Compliance' },
      ],
      techSpecs: [
        'Ultrasonic transit-time and electromagnetic flow transmitters (accuracy ±0.5%).',
        'Direct pulse output and 4-20mA analog loop sensors for legacy mechanical meters.',
        'Digital hydrostatic level transmitters for overhead and underground tanks.',
        'Cloud-calculated water balance engine with daily automated variance reports.',
      ],
    },
    gas: {
      title: 'Gas Management',
      tag: 'Pillar 03 · Thermal Energy & Safety',
      icon: Flame,
      accentColor: 'text-orange-600',
      bgAccent: 'bg-orange-50 border-orange-200',
      headline: 'Live monitoring of gas consumption, line pressure, and safety thresholds across pipelines.',
      summary: 'Safeguard plant infrastructure, catch anomalous line drops instantly, and optimize boiler and furnace combustion efficiency.',
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
          title: 'Combustion Efficiency Benchmarks',
          desc: 'Correlate fuel consumption with steam output to catch boiler burner degradation early.',
        },
      ],
      metrics: [
        { label: 'Manifold Line Pressure', value: '4.20 bar', status: 'Stable Operating Range' },
        { label: 'Combustion Efficiency', value: '83.4%', status: 'Optimal Air-to-Fuel Ratio' },
        { label: 'Emergency Solenoid Status', value: 'Armed', status: 'Auto Shut-Off Linked' },
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
      accentColor: 'text-cyan-600',
      bgAccent: 'bg-cyan-50 border-cyan-200',
      headline: 'Real-time chiller plant performance (COP) and HVAC efficiency optimization.',
      summary: 'Central chillers consume over 50% of facility electricity. Our platform tracks kW/TR in real time, suggests optimal staging, and flags fouling before compressor wear.',
      points: [
        {
          title: 'Real-Time kW/TR & COP Analytics',
          desc: 'Monitors thermal cooling tonnage delivered against electrical input power every 60 seconds.',
        },
        {
          title: 'Predictive Degradation Alerts',
          desc: 'Detects condenser tube scale buildup and approach temperature deviations before failure.',
        },
        {
          title: 'Dynamic Staging Recommendations',
          desc: 'Advises operators on condenser water setpoint reset and optimal part-load compressor sequencing.',
        },
      ],
      metrics: [
        { label: 'Instantaneous Efficiency', value: '0.67 kW/TR', status: 'COP 5.25 (High Efficiency)' },
        { label: 'Evaporator Approach Temp', value: '1.2° C', status: 'Clean Heat Exchanger' },
        { label: 'Cooling Tower Delta T', value: '4.8° C', status: 'Optimal Fan Staging' },
      ],
      techSpecs: [
        'Four-wire PT100/PT1000 RTD precision temperature transmitters (±0.05°C).',
        'Direct BACnet-MSTP / BACnet-IP interfaces to York, Trane, Carrier, and Daikin chillers.',
        'Variable Primary Pumping (VPF) delta-P tracking.',
        'Predictive fouling detection algorithms based on thermodynamic models.',
      ],
    },
    advisory: {
      title: 'Energy Advisory & Audits',
      tag: 'Pillar 05 · Domain Consulting',
      icon: Award,
      accentColor: 'text-emerald-700',
      bgAccent: 'bg-emerald-50 border-emerald-200',
      headline: 'Expert-led energy audits, statutory BEE compliance, and ROI-backed retrofit roadmaps.',
      summary: 'Delivered in partnership with certified TRIAXIS energy auditors. We turn telemetry numbers into verified financial savings and bankable investment proposals.',
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
          desc: 'Clear techno-commercial business cases for VFD retrofits, solar integration, and lighting overhauls.',
        },
      ],
      metrics: [
        { label: 'BEE Audit Readiness', value: 'Certified', status: 'Statutory Grade' },
        { label: 'Average Payback Period', value: '8.4 Months', status: 'Low-CapEx Interventions' },
        { label: 'Tariff Rebate Realization', value: 'Maximum', status: 'Power Factor Incentive' },
      ],
      techSpecs: [
        'Audits conducted by Bureau of Energy Efficiency (BEE) accredited energy auditors.',
        'ISO 50001 Energy Management System (EnMS) documentation and readiness audit support.',
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
        title="Resource Intelligence Platform | Energy, Water, Gas & Chiller Management — Prishitech"
        description="A unified platform for Energy, Water, Gas and Chiller Management with expert Energy Advisory — real-time monitoring, alerts and reporting in one dashboard."
      />

      <div className="pt-24 pb-20 space-y-20">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto pt-6 sm:pt-10">
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Unified Resource Telemetry
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              One Unified Platform for{' '}
              <span className="text-emerald-700">Resource Intelligence</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Real-time visibility, automated alerts, and engineering advisory across every resource stream your facility depends on.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Request Platform Demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
              </button>
              <button
                onClick={onOpenCapability}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs sm:text-sm border border-slate-200 shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Technical Specifications (PDF)</span>
              </button>
            </div>
          </div>
        </section>

        {/* INTERACTIVE PILLAR STUDIO (Clean, Tabbed, User-Friendly) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Top Segmented Tab Navigation */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-6">
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
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Focused Showcase */}
          <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Bite-Sized Capabilities */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <div className={`w-9 h-9 rounded-xl ${currentPillar.bgAccent} flex items-center justify-center`}>
                    <PillarIcon className={`w-5 h-5 ${currentPillar.accentColor}`} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                      {currentPillar.tag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {currentPillar.title}
                    </h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {currentPillar.headline} {currentPillar.summary}
                </p>

                {/* 3 Scannable Feature Pills */}
                <div className="space-y-3 pt-1">
                  {currentPillar.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold text-xs mb-0.5">{pt.title}</strong>
                        <span className="text-slate-600 leading-relaxed">{pt.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onRequestDemo}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Request {currentPillar.title} Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setShowTechSpecs(!showTechSpecs)}
                    className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs border border-slate-200 flex items-center gap-1.5 transition-colors"
                  >
                    <span>{showTechSpecs ? 'Hide Engineering Specs' : 'View Engineering Specs'}</span>
                    {showTechSpecs ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Right Column: Live Operational Telemetry Snapshot */}
              <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-semibold text-slate-900">Operational Health Snapshot</span>
                  <span className="text-emerald-700 font-mono font-medium">Telemetry Connected</span>
                </div>

                <div className="space-y-3">
                  {currentPillar.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 text-xs flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">{m.label}</span>
                        <span className="font-bold font-mono text-slate-900">{m.value}</span>
                      </div>
                      <span className="text-[11px] font-medium text-emerald-700">{m.status}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                  ✓ Continuous sampling with historical baseline trending and automated anomaly alerts.
                </div>
              </div>
            </div>

            {/* Collapsible Deep Engineering Specifications */}
            {showTechSpecs && (
              <div className="mt-8 pt-6 border-t border-slate-200 animate-fade-in">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                  Supported Sensors, Transducers &amp; Industrial Field Protocols:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {currentPillar.techSpecs.map((spec, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* HARDWARE-TO-CLOUD ARCHITECTURE (Clean & Visual) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              End-to-End Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              How the Platform Connects Your Plant
            </h2>
            <p className="text-slate-600 text-sm mt-1.5">
              Turnkey physical installation to executive cloud dashboards without disrupting ongoing plant operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-4">
                <Cpu className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase">Step 01</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-1.5">Non-Invasive Sensor Taps</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Split-core CTs, clamp-on ultrasonic flow meters, and insertion pressure taps deployed with zero electrical shutdown.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase">Step 02</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-1.5">Hardened Edge Gateways</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Industrial DIN-rail gateways aggregate Modbus &amp; BACnet telemetry with TLS 1.3 encryption and local storage failover.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-4">
                <Layers className="w-5 h-5 text-sky-600" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase">Step 03</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-1.5">Cloud Intelligence &amp; Alerts</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Sub-second anomaly detection, predictive peak-load warnings via SMS/WhatsApp, and automated statutory audit reports.
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-6">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              Get Started
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Ready to eliminate utility waste across your facility?
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 mb-6">
              Connect with our Vaishali, Ghaziabad engineering team for a feasibility assessment or live platform walkthrough.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors shadow-xs"
              >
                Request Platform Demo
              </button>
              <button
                onClick={onOpenCapability}
                className="w-full sm:w-auto px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs border border-slate-200 shadow-xs transition-colors"
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
