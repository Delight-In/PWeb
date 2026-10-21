import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Droplets, Flame, Wind, Award, ArrowRight, 
  CheckCircle2, ChevronDown, ChevronUp, Cpu, ShieldCheck, 
  Layers, Check, Radio
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { PlatformLogoCloud } from '../components/PlatformLogoCloud';
import { PlatformBottomCta } from '../components/PlatformBottomCta';

interface ResourceIntelligencePageProps {
  onRequestDemo: () => void;
}

type PillarKey = 'energy' | 'water' | 'gas' | 'chiller' | 'advisory';

export const ResourceIntelligencePage: React.FC<ResourceIntelligencePageProps> = ({
  onRequestDemo,
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
      accentColor: 'text-amber-500',
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
      accentColor: 'text-blue-500',
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
      accentColor: 'text-orange-500',
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
      accentColor: 'text-cyan-500',
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
      accentColor: 'text-emerald-400',
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

      <div className="bg-[#fbfcfd] min-h-screen">
        {/* =========================================================
            1. HERO: SPLIT PLATFORM PRESENTATION
        ========================================================= */}
        <section className="pt-16 pb-14 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Copy */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  Unified Resource Telemetry
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.12]">
                  One Unified Platform for Resource Intelligence.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                  Real-time operational visibility, sub-second telemetry, automated threshold alerts, and certified engineering advisory across every resource stream your facility operates.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={onRequestDemo}
                    className="inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-sm h-11 sm:h-12 px-7 sm:px-8 rounded-sm text-sm sm:text-[15px]"
                  >
                    <span>Request Platform Demo</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <Link
                    to="/platform/industrial-data-foundation"
                    className="inline-flex items-center justify-center whitespace-nowrap transition-colors border border-black bg-black hover:bg-slate-800 text-white font-medium h-11 sm:h-12 px-7 sm:px-8 rounded-sm text-sm sm:text-[15px]"
                  >
                    <span>Explore Architecture</span>
                  </Link>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    Sub-second Telemetry
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    RS-485 Modbus &amp; BACnet
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    Zero Shutdowns
                  </span>
                </div>
              </div>

              {/* Right Visual: Deep Dark Frame Platform Presentation */}
              <div className="lg:col-span-6">
                <div className="bg-[#070b12] border border-slate-800/80 rounded-xl p-2 sm:p-3 shadow-2xl overflow-hidden relative">
                  <div className="relative rounded-lg overflow-hidden border border-slate-800/80 aspect-[16/10] bg-slate-950">
                    <img 
                      src="/images/dashboard-mockup.jpg" 
                      alt="Resource Intelligence Unified Dashboard" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute top-3 left-3 bg-[#070b12]/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-sm text-xs font-mono font-bold flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                      <span>5-Stream Live Sync Active</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                        Unified Telemetry Console
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        Energy · Water · Gas · Chiller · Advisory
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ENTERPRISE LOGO CLOUD
        ========================================================= */}
        <PlatformLogoCloud />

        {/* =========================================================
            2. INTERACTIVE PILLAR STUDIO (5-STREAM TELEMETRY)
        ========================================================= */}
        <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Facility Resource Telemetry
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                Five Specialized Resource Streams
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Select any operational stream to review field sensors, precision metrics, and control capabilities.
              </p>
            </div>

            {/* Segmented Tab Navigation */}
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
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      activePillar === item.id
                        ? 'bg-slate-950 text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Card (Split Image & Details in Dark Frame) */}
            <div className="bg-[#070b12] border border-slate-800/80 rounded-xl p-2 sm:p-3 shadow-2xl overflow-hidden">
              <div className="bg-white rounded-lg overflow-hidden border border-slate-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Image Side (5 cols) */}
                  <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[460px] bg-slate-950">
                    <img 
                      src={currentPillar.image} 
                      alt={currentPillar.title} 
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent"></div>

                    <div className="absolute top-5 left-5 bg-slate-900/90 backdrop-blur-md text-white border border-slate-700 px-3.5 py-1.5 rounded-sm text-xs font-mono font-bold flex items-center gap-2">
                      <PillarIcon className={`w-4 h-4 ${currentPillar.accentColor}`} />
                      <span>{currentPillar.tag}</span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold text-white">
                        {currentPillar.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1.5">
                        {currentPillar.headline}
                      </p>
                    </div>
                  </div>

                  {/* Details Side (7 cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-9 flex flex-col justify-between space-y-6 bg-white">
                    <div className="space-y-5">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {currentPillar.summary}
                      </p>

                      {/* 3 Scannable Feature Cards */}
                      <div className="space-y-2.5">
                        {currentPillar.points.map((pt, idx) => (
                          <div key={idx} className="p-3.5 bg-[#fbfcfd] rounded-sm border border-slate-200/90 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#00c862] shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-900 block font-semibold text-xs sm:text-sm mb-0.5">{pt.title}</strong>
                              <span className="text-slate-600 leading-relaxed text-xs">{pt.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Live Operational Health Badges */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                        {currentPillar.metrics.map((m, idx) => (
                          <div key={idx} className="p-3 bg-slate-50/80 rounded-sm border border-slate-200 text-center">
                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">{m.label}</span>
                            <div className="text-base font-bold font-mono text-slate-900 my-0.5">{m.value}</div>
                            <span className="text-[11px] text-emerald-700 font-semibold">{m.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                      <button
                        onClick={onRequestDemo}
                        className="inline-flex items-center justify-center whitespace-nowrap transition-colors bg-[#05DF72] hover:bg-[#00c862] text-black font-semibold shadow-xs h-10 px-5 rounded-sm text-xs sm:text-sm"
                      >
                        <span>Request {currentPillar.title} Demo</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </button>

                      <button
                        onClick={() => setShowTechSpecs(!showTechSpecs)}
                        className="inline-flex items-center justify-center whitespace-nowrap transition-colors border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-medium h-10 px-4 rounded-sm text-xs sm:text-sm"
                      >
                        <span>{showTechSpecs ? 'Hide Engineering Specs' : 'View Engineering Specs'}</span>
                        {showTechSpecs ? <ChevronUp className="w-3.5 h-3.5 ml-1.5" /> : <ChevronDown className="w-3.5 h-3.5 ml-1.5" />}
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
                            <div key={idx} className="p-2.5 bg-slate-50 rounded-sm border border-slate-200 text-slate-700 flex items-start gap-2">
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
            </div>
          </div>
        </section>

        {/* =========================================================
            3. HARDWARE-TO-CLOUD PIPELINE
        ========================================================= */}
        <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-[#f3f4f6]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                End-to-End Pipeline
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                Physical Plant to Cloud Analytics
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Engineered for continuous telemetry without requiring machinery stoppages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 sm:p-8 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-sm bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">Step 01</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Non-Invasive Sensor Taps</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Split-core CTs snap on incoming power lines and clamp-on ultrasonic meters attach to fluid pipes with zero facility shutdowns.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">Step 02</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Hardened Edge Gateways</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Industrial DIN-rail hubs aggregate Modbus &amp; BACnet telemetry with TLS 1.3 encryption and 30-day offline disk buffering.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-sm bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">Step 03</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Real-Time Cloud Dashboard</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Instant anomaly alarms, predictive peak-demand warnings via SMS/WhatsApp, and automated statutory BEE audit reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. UNIFORM BOTTOM CTA
        ========================================================= */}
        <PlatformBottomCta
          title="Ready to eliminate utility waste across your facility?"
          description="Connect with our industrial engineering team for an on-site feasibility assessment or live platform walkthrough."
          onRequestDemo={onRequestDemo}
        />
      </div>
    </>
  );
};

export default ResourceIntelligencePage;
