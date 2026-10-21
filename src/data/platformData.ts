export interface PlatformFeature {
  title: string;
  desc: string;
  bullets?: string[];
}

export interface PlatformMetric {
  label: string;
  value: string;
  status: string;
}

export interface PlatformFaq {
  q: string;
  a: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  tagline: string;
  path: string;
  externalUrl?: string;
  badge: string;
  iconName: 'Database' | 'Network' | 'Workflow' | 'Cpu' | 'ShieldCheck' | 'Scale' | 'LayoutGrid';
  iconUrl?: string;
  accentColor: string;
  bgLight: string;
  borderColor: string;
  heroHeadline: string;
  heroDescription: string;
  overviewSummary: string;
  keyBenefits: string[];
  features: PlatformFeature[];
  metrics: PlatformMetric[];
  faqs: PlatformFaq[];
}

export const PLATFORM_ITEMS: PlatformItem[] = [
  {
    id: 'industrial-data-foundation',
    name: 'Industrial Data Foundation',
    tagline: 'Enable AI with industrial data',
    path: '/platform/industrial-data-foundation',
    iconUrl: '/icons/platform/industrial-data-foundation.svg',
    badge: 'Coordinated Architecture · Complete Stack',
    iconName: 'Database',
    accentColor: 'text-emerald-700',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    heroHeadline: 'The Data Foundation That Scales Industrial AI',
    heroDescription:
      'One coordinated platform for all industrial data capabilities to enable AI use cases at scale. Connect, structure, govern, and manage operational data across systems and sites without fragmented point tools.',
    overviewSummary:
      'Industrial data doesn’t scale through isolated tools. It requires a coordinated foundation to connect machines, structure operational telemetry, run intelligence at the edge, govern data usage, secure operations, and manage distributed environments at scale. PrishiTech brings these capabilities together into a single, cohesive industrial operating system.',
    keyBenefits: [
      'Reduce fragmentation across OT, IT, and enterprise business environments',
      'Improve trust in operational data before it reaches analytics and AI workflows',
      'Standardize data pipelines and asset models across multiple plants and geographies',
      'Lower the operational overhead of deploying and monitoring distributed edge devices',
      'Accelerate Industrial AI readiness with high-throughput, contextualized data streams'
    ],
    features: [
      {
        title: 'Unified Operational Architecture',
        desc: 'Eliminates brittle point-to-point connections by consolidating ingestion, contextualization, edge execution, and cloud integration into a single coordinated platform layer.',
        bullets: ['Standardized data pipelines', 'Cross-plant repeatability', 'Single control surface']
      },
      {
        title: 'Native OT-to-IT Synchronization',
        desc: 'Bridges legacy factory floor protocols with modern enterprise lakes (Snowflake, Databricks, BigQuery, AWS, Azure) while preserving sub-second edge determinism.',
        bullets: ['Bi-directional streaming', 'Sub-second event propagation', 'Zero data loss edge buffering']
      },
      {
        title: 'AI-Ready Data Delivery',
        desc: 'Feeds clean, timestamp-aligned, and ISA-95 asset-tagged operational records directly into machine learning pipelines and real-time inference models.',
        bullets: ['Automated tag normalization', 'High-frequency telemetry ingestion', 'Lineage-verified datasets']
      },
      {
        title: 'Distributed Scale with Central Control',
        desc: 'Deploy once at the edge and scale across dozens of production facilities with centralized policy management, mass OTA updates, and unified governance.',
        bullets: ['Zero-touch provisioning', 'Central monitoring dashboard', 'Multi-tenant hierarchy']
      }
    ],
    metrics: [
      { label: 'Multi-Plant Deployment', value: '95 Sites / 18 Wks', status: 'Enterprise Scale' },
      { label: 'Operational Cost Reduction', value: '$3M / Month', status: 'Volume & Scrap Savings' },
      { label: 'Driver Library', value: '275+ Protocols', status: 'Brownfield & Greenfield' },
      { label: 'Telemetry Latency', value: '< 10 Milliseconds', status: 'Deterministic Edge' }
    ],
    faqs: [
      {
        q: 'What is an Industrial Data Foundation?',
        a: 'An Industrial Data Foundation is the coordinated platform layer that connects industrial assets, structures operational data, runs intelligence at the edge, governs data usage, secures operations, and manages distributed environments at scale.'
      },
      {
        q: 'Why is an Industrial Data Foundation important for Industrial AI?',
        a: 'Industrial AI models fail when fed dirty, uncontextualized, or delayed data. The data foundation normalizes disparate machine signals at the source, enriches them with operational context (asset name, shift, batch ID), and guarantees sub-second data pipelines for training and live inference.'
      },
      {
        q: 'What capabilities are included in the complete platform?',
        a: 'The platform integrates six core layers: Data Connectivity, Industrial DataOps, Edge Intelligence, Data Security, Data Governance, and Central Management.'
      },
      {
        q: 'How does it integrate with existing MES, SCADA, and Cloud Data Lakes?',
        a: 'It acts as the unified middleware layer. It ingests directly from PLCs, SCADA, and DCS systems via native drivers, contextualizes the data, and delivers it via MQTT Sparkplug B, Kafka, REST, or direct cloud connectors to Snowflake, Databricks, and cloud data warehouses.'
      }
    ]
  },
  {
    id: 'data-connectivity',
    name: 'Data Connectivity',
    tagline: 'Connect data from any asset',
    path: '/platform/data-connectivity',
    iconUrl: '/icons/platform/data-connectivity.svg',
    badge: '275+ Pre-Built Drivers · Automated Discovery',
    iconName: 'Network',
    accentColor: 'text-sky-700',
    bgLight: 'bg-sky-50',
    borderColor: 'border-sky-200',
    heroHeadline: 'Connect Any Industrial Asset',
    heroDescription:
      'Connect legacy and modern systems, normalize data at the source, and make operational telemetry immediately usable for analytics, applications, and Industrial AI without custom driver engineering.',
    overviewSummary:
      'Every industrial data strategy starts with reliable, low-latency access to source telemetry. Data Connectivity establishes a high-throughput foundation for connecting machines, PLCs, CNCs, robotics, historians, sensors, and plant applications across heterogeneous brownfield and greenfield environments.',
    keyBenefits: [
      'Rapid time-to-value: connect machines in minutes instead of months of custom coding',
      'Broad protocol support across Siemens, Rockwell, Modbus, OPC UA, BACnet, and Mitsubishi',
      'Automated device and tag discovery eliminates manual register mapping',
      'Multi-data type ingestion: time-series, alarms, events, batches, and relational records',
      'Robust edge communication buffers to prevent telemetry drops during network outages'
    ],
    features: [
      {
        title: 'Native Driver Ecosystem',
        desc: 'Extensive library of 275+ battle-tested industrial drivers covering legacy serial (RS-232/485) and modern Ethernet-based PLC, CNC, and robot protocols.',
        bullets: ['Siemens S7-300/400/1200/1500', 'Rockwell Allen-Bradley ControlLogix', 'Modbus RTU/TCP', 'OPC UA / OPC DA', 'BACnet / Profinet']
      },
      {
        title: 'Automated Device & Tag Discovery',
        desc: 'Scan plant subnets to detect live industrial assets, identify vendor and firmware metadata, and automatically enumerate readable tags and memory addresses.',
        bullets: ['One-click subnet scanning', 'Automated tag browsing', 'Bulk import of CSV/PLC symbol tables']
      },
      {
        title: 'Multi-Protocol Ingestion Fabric',
        desc: 'Ingests both polling-based registers and publish-subscribe streams into a unified high-throughput edge event bus.',
        bullets: ['MQTT & Sparkplug B', 'OPC UA Pub/Sub', 'Kafka & WebSockets', 'High-speed analog & digital loops']
      },
      {
        title: 'Local Buffering & Resilience',
        desc: 'Store-and-forward architecture with on-device flash and disk buffering ensures zero data loss even during prolonged WAN interruptions.',
        bullets: ['Up to 30 days offline buffer', 'Automatic backpressure throttling', 'Deterministic time-stamping at capture']
      }
    ],
    metrics: [
      { label: 'Native Drivers', value: '275+ Protocols', status: 'Pre-Installed' },
      { label: 'Time-to-First-Data', value: '< 15 Minutes', status: 'Zero-Code Setup' },
      { label: 'Throughput Capacity', value: '100,000+ Tags/Sec', status: 'High Performance' },
      { label: 'Connection Reliability', value: '99.999%', status: 'Industrial Hardened' }
    ],
    faqs: [
      {
        q: 'What is the difference between device discovery and tag discovery?',
        a: 'Device discovery identifies assets and their connection details (IP, MAC, protocol, vendor) on the local OT network. Tag discovery browses and lists the specific operational variables, data blocks, and telemetry registers exposed by each device.'
      },
      {
        q: 'Can it communicate with older legacy equipment without Ethernet ports?',
        a: 'Yes. It supports serial connections (RS-232, RS-485, Modbus RTU, DF1) via USB-to-serial converters or industrial gateways with integrated COM ports, allowing legacy brownfield machines to be connected alongside modern systems.'
      },
      {
        q: 'How does it protect machine control stability?',
        a: 'Communication drivers run read-only by default and use optimized polling cycles that avoid overburdening PLC CPU cycles or interfering with mission-critical ladder logic execution.'
      }
    ]
  },
  {
    id: 'industrial-dataops',
    name: 'Industrial DataOps',
    tagline: 'Contextualize industrial data',
    path: '/platform/industrial-dataops',
    iconUrl: '/icons/platform/industrial-dataops.svg',
    badge: 'ISA-95 Context · Real-Time Stream Pipelines',
    iconName: 'Workflow',
    accentColor: 'text-teal-700',
    bgLight: 'bg-teal-50',
    borderColor: 'border-teal-200',
    heroHeadline: 'Contextualize Industrial Data in Real Time',
    heroDescription:
      'Transform raw, cryptic machine signals into structured, standardized, and shareable information through edge data contextualization, reusable asset models, and pipeline orchestration.',
    overviewSummary:
      'Raw PLC tags like "DB10.DBW4" or "40001" are meaningless to data scientists and enterprise applications. Industrial DataOps enriches raw sensor readings at the source with machine hierarchy, engineering units, shift details, and operational status before routing it to OT and IT destinations.',
    keyBenefits: [
      'Eliminate cryptic tag names: automatically map raw addresses to standardized semantic models',
      'ISA-95 hierarchical structuring: Enterprise -> Site -> Area -> Line -> Workcell -> Asset',
      'Stream processing at the edge: calculate KPIs, rolling averages, and anomaly flags instantly',
      'Multi-destination routing: publish once to MQTT, Kafka, InfluxDB, Snowflake, and BigQuery',
      'Drastically reduce cloud storage and bandwidth costs with intelligent edge deadbanding'
    ],
    features: [
      {
        title: 'Semantic Data Contextualization',
        desc: 'Attach vital operational metadata to raw time-series data at the exact moment of collection: equipment name, SKU, shift ID, operator, and batch number.',
        bullets: ['Standard engineering units (°C, PSI, RPM)', 'Min/max range validation', 'Status code normalization']
      },
      {
        title: 'Reusable Asset Templates (ISA-95)',
        desc: 'Create master digital asset models for pumps, chillers, presses, and robotic arms. Deploy once and instantiate across hundreds of similar machines.',
        bullets: ['Object-oriented inheritance', 'Instant fleet-wide schema updates', 'Consistent enterprise taxonomy']
      },
      {
        title: 'Low-Code Pipeline Orchestration',
        desc: 'Visual drag-and-drop pipeline builder allows OT engineers to define transformations, filtering, mathematical formulas, and conditional logic without writing code.',
        bullets: ['Node-RED style workflow editor', 'Native Python & JavaScript runtime', 'Sub-second stream processing']
      },
      {
        title: 'Edge Deadbanding & Downsampling',
        desc: 'Filter out repetitive sensor noise and only transmit meaningful value changes or calculated aggregates, cutting WAN payload by up to 80%.',
        bullets: ['Absolute and percentage deadbands', 'Configurable sliding windows', 'Lossless compression']
      }
    ],
    metrics: [
      { label: 'Bandwidth Reduction', value: 'Up to 80%', status: 'Smart Edge Filtering' },
      { label: 'Model Deployment', value: '1-Click Reuse', status: 'ISA-95 Asset Templates' },
      { label: 'Stream Processing', value: '< 5ms Pipeline Latency', status: 'Real-Time Edge' },
      { label: 'Integration Targets', value: '50+ Connectors', status: 'Cloud & Database' }
    ],
    faqs: [
      {
        q: 'Why is contextualization needed at the edge instead of in the cloud?',
        a: 'Contextualizing at the edge ensures that data retains its exact operational state at capture time. In contrast, trying to merge shift logs, ERP batch IDs, and high-frequency sensor readings in the cloud leads to synchronization lag, missing records, and massive query overhead.'
      },
      {
        q: 'Does it adhere to the ISA-95 standard?',
        a: 'Yes. The data model provides native support for ISA-95 hierarchical modeling (Enterprise -> Site -> Area -> Line -> Workcell -> Asset) and aligns seamlessly with MQTT Sparkplug B topic namespaces.'
      },
      {
        q: 'Can engineers run custom Python scripts inside the pipeline?',
        a: 'Yes. The DataOps engine provides sandboxed runtime environments for running custom Python, JavaScript, or C++ transformation algorithms on streaming edge records.'
      }
    ]
  },
  {
    id: 'edge-intelligence',
    name: 'Edge Intelligence',
    tagline: 'Run analytics and AI at the edge',
    path: '/platform/edge-intelligence',
    iconUrl: '/icons/platform/edge-intelligence.svg',
    badge: 'Microsecond Inference · Containerized Apps',
    iconName: 'Cpu',
    accentColor: 'text-indigo-700',
    bgLight: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    heroHeadline: 'Run Analytics and AI at the Machine Edge',
    heroDescription:
      'Create a low-latency local execution layer for machine learning, containerized applications, conversational AI interfaces, and autonomous closed-loop controls directly next to industrial assets.',
    overviewSummary:
      'Critical factory operations cannot tolerate the 200–500ms latency or intermittent connectivity of cloud-only analytics. Edge Intelligence brings containerized analytics, pre-trained AI models, and real-time inference directly onto industrial PCs and edge gateways for instant action.',
    keyBenefits: [
      'Sub-millisecond inference speeds for high-speed inspection, vibration, and safety controls',
      '100% offline autonomy: maintain full operational intelligence without internet connectivity',
      'Docker & OCI container runtime: deploy custom vision, anomaly, or physics models in minutes',
      'Industrial GenAI interfaces: empower operators to query machine status in plain natural language',
      'Closed-loop feedback: directly signal PLCs to adjust feeds, speeds, or shut down safely'
    ],
    features: [
      {
        title: 'Local ML Inference Engine',
        desc: 'Execute TensorFlow Lite, ONNX, and PyTorch models locally on CPU, GPU, or NPU accelerators for real-time predictive maintenance and quality inspection.',
        bullets: ['ONNX & TensorRT acceleration', 'Sub-10ms anomaly inference', 'Real-time vibration spectral analysis']
      },
      {
        title: 'Containerized Application Runtime',
        desc: 'Fully managed OCI container engine running directly on edge hardware. Run custom apps, microservices, and databases in isolated sandboxes.',
        bullets: ['Pre-configured edge App Store', 'Docker-compose compatibility', 'Automatic container health watchdog']
      },
      {
        title: 'Interactive Industrial AI Interface',
        desc: 'Enables machine operators and maintenance technicians to converse with asset telemetry via natural language prompts and retrieve immediate troubleshooting guidance.',
        bullets: ['Plain language status summaries', 'Root-cause diagnostic assistant', 'Context-aware alarm insights']
      },
      {
        title: 'Deterministic Closed-Loop Control',
        desc: 'Link AI inference predictions directly back into PLC write commands or actuator triggers to stop bad parts before they advance down the production line.',
        bullets: ['Safety-interlocked writeback', 'Microsecond response times', 'Operator override audit trail']
      }
    ],
    metrics: [
      { label: 'Inference Latency', value: '< 2 Milliseconds', status: 'Edge Accelerated' },
      { label: 'Offline Availability', value: '100% Autonomous', status: 'Zero Cloud Reliance' },
      { label: 'Hardware Support', value: 'x86, ARM64, Nvidia', status: 'Industrial Gateways' },
      { label: 'App Ecosystem', value: '45+ Pre-Built Apps', status: 'Ready-to-Deploy' }
    ],
    faqs: [
      {
        q: 'What hardware is required to run Edge Intelligence?',
        a: 'It runs on any standard industrial PC, edge gateway, or server running Linux or Windows with x86-64 or ARM64 architectures. For computer vision or heavy deep learning models, hardware acceleration via Nvidia Jetson, Intel OpenVINO, or Google Coral is supported.'
      },
      {
        q: 'Can edge models be updated remotely when retrained in the cloud?',
        a: 'Yes. Retrained model weights and ONNX packages can be deployed from Central Management to one or hundreds of edge gateways with zero downtime and automated rollbacks.'
      },
      {
        q: 'Is write-back to machines safe?',
        a: 'Write operations are strictly gated with configurable boundary safety checks, rate limiting, and permission locks to ensure automated feedback never exceeds physical machine thresholds.'
      }
    ]
  },
  {
    id: 'data-security',
    name: 'Data Security',
    tagline: 'Secure data with controlled access',
    path: '/platform/data-security',
    iconUrl: '/icons/platform/data-security.svg',
    badge: 'Zero-Trust OT · Purdue Model Compliant',
    iconName: 'ShieldCheck',
    accentColor: 'text-rose-700',
    bgLight: 'bg-rose-50',
    borderColor: 'border-rose-200',
    heroHeadline: 'Secure Industrial Data with Controlled Access',
    heroDescription:
      'Protect industrial assets, control access rights, encrypt communications, and enforce zero-trust security across segmented, air-gapped, and connected industrial environments.',
    overviewSummary:
      'Industrial environments represent the intersection of physical machinery and digital networks. A single compromised endpoint can disrupt operations. Data Security enforces defense-in-depth protection adhering to IEC 62443 standards and strict Purdue Model boundary isolation.',
    keyBenefits: [
      'Purdue Model compliance: maintain clean separation between OT Level 2/3 and enterprise IT',
      'Outbound-only communication: no inbound firewall ports required on plant floors',
      'End-to-end encryption: TLS 1.3 in transit and AES-256 for all stored data at rest',
      'Granular Role-Based Access Control (RBAC) with corporate Single Sign-On (SSO) integration',
      'Tamper-proof audit trails for every configuration update, data query, and user login'
    ],
    features: [
      {
        title: 'Segmented Network Architecture',
        desc: 'Designed for strict operational technology network segmentation. Connects to PLCs on private subnetworks while communicating upward exclusively through secure proxy tunnels.',
        bullets: ['Outbound-only reverse proxies', 'Zero open inbound ports', 'VLAN & DMZ isolation support']
      },
      {
        title: 'Enterprise Identity & Access Control',
        desc: 'Seamless integration with enterprise Active Directory, Azure AD, Okta, and OAuth2/SAML systems to enforce least-privilege permissions.',
        bullets: ['Multi-Factor Authentication (MFA)', 'Granular tag-level permissions', 'Read-only vs. read/write scoping']
      },
      {
        title: 'Certificate-Based mTLS & Encryption',
        desc: 'All device-to-cloud and device-to-device traffic is secured using mutual TLS (mTLS) with automated X.509 certificate rotation and AES-256 local disk encryption.',
        bullets: ['TLS 1.3 protocol enforcement', 'Hardware TPM 2.0 key storage', 'Encrypted local database volumes']
      },
      {
        title: 'Forensic Audit Logging & Compliance',
        desc: 'Immutable security log files record all user activities, policy revisions, container launches, and driver connections for compliance audits.',
        bullets: ['IEC 62443-4-2 cybersecurity alignment', 'Syslog export to SIEM (Splunk, Sentinel)', 'Real-time intrusion alerts']
      }
    ],
    metrics: [
      { label: 'Cybersecurity Standard', value: 'IEC 62443 Aligned', status: 'Industrial Certified' },
      { label: 'Inbound Ports Required', value: '0 Open Ports', status: 'Outbound-Only mTLS' },
      { label: 'Encryption Level', value: 'AES-256 & TLS 1.3', status: 'At Rest & In Transit' },
      { label: 'Audit Trail', value: '100% Immutable', status: 'SIEM Export Ready' }
    ],
    faqs: [
      {
        q: 'Does installing this require opening firewall ports on the factory floor?',
        a: 'No. The edge software establishes secure outbound-only mTLS connections to Central Management or cloud brokers. It requires zero inbound open ports in the plant firewall.'
      },
      {
        q: 'Can we restrict specific operators from accessing sensitive machine parameters?',
        a: 'Yes. Granular RBAC lets you define fine-grained roles. For instance, operators may view telemetry on a dashboard, while only certified control engineers have permission to configure PLC writeback registers.'
      },
      {
        q: 'How does it protect against unauthorized physical access to edge gateways?',
        a: 'Edge deployments support full disk encryption with hardware-based TPM (Trusted Platform Module) key storage, preventing configuration extraction if hardware is stolen.'
      }
    ]
  },
  {
    id: 'data-governance',
    name: 'Data Governance',
    tagline: 'Maintain trusted data at scale',
    path: '/platform/data-governance',
    iconUrl: '/icons/platform/data-governance.svg',
    badge: 'Signal Catalog · End-to-End Lineage',
    iconName: 'Scale',
    accentColor: 'text-amber-700',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200',
    heroHeadline: 'Maintain Trusted Industrial Data at Scale',
    heroDescription:
      'Define how industrial data is cataloged, understood, traced, standardized, and owned across enterprise operations through automated lineage, data quality scoring, and policy governance.',
    overviewSummary:
      'Without governance, industrial data lakes turn into data swamps. When engineers cannot verify when a sensor was last calibrated or who created a specific data pipeline, analytics initiatives stall. Data Governance ensures full traceability and continuous data health across all facilities.',
    keyBenefits: [
      'Centralized signal catalog: single source of truth for all machine telemetry and definitions',
      'End-to-end data lineage: trace any data point back to its originating sensor, driver, and timestamp',
      'Continuous data quality scoring: automatically flag frozen values, out-of-spec spikes, and missing packets',
      'Standardized corporate glossary: harmonize terminology between different manufacturing plants',
      'Clear data ownership and stewardship across operations and IT engineering groups'
    ],
    features: [
      {
        title: 'Universal Industrial Data Catalog',
        desc: 'Searchable inventory of all operational tags, assets, units of measure, and data types across every plant in your enterprise portfolio.',
        bullets: ['Keyword & semantic search', 'Tag aliases & business glossaries', 'Automated schema discovery']
      },
      {
        title: 'Automated Lineage Tracking',
        desc: 'Visual graph showing the complete data journey: from the physical wire on the machine, through the edge driver, transformations, and into destination databases.',
        bullets: ['Pipeline transformation history', 'Model version provenance', 'Audit-ready compliance export']
      },
      {
        title: 'Real-Time Data Quality Rules',
        desc: 'Configurable automated tests that evaluate streaming telemetry against expected ranges, flatline detection, frequency consistency, and schema validity.',
        bullets: ['Automated staleness alerts', 'Out-of-range sensor detection', 'Data health confidence scoring']
      },
      {
        title: 'Stewardship & Governance Policies',
        desc: 'Assign owners to specific asset domains, document change logs, and establish review workflows for modifying critical operational metrics.',
        bullets: ['Role-based stewardship assignments', 'Policy lifecycle approvals', 'Automated regulatory reporting']
      }
    ],
    metrics: [
      { label: 'Catalog Search', value: 'Sub-Second Lookup', status: 'Global Tag Index' },
      { label: 'Data Quality Check', value: '100% Real-Time', status: 'Continuous Ingestion' },
      { label: 'Lineage Traceability', value: 'Sensor-to-Cloud', status: 'Full Provenance' },
      { label: 'Schema Drift Detection', value: 'Automated Alerts', status: 'Zero Data Loss' }
    ],
    faqs: [
      {
        q: 'How does data governance prevent inaccurate AI model predictions?',
        a: 'It continuously verifies telemetry quality at ingestion. If a sensor fails, drifts, or outputs stale flatlined data, the governance engine flags the stream immediately, preventing corrupted inputs from skewing predictive models.'
      },
      {
        q: 'Can governance rules differ across different manufacturing sites?',
        a: 'Yes. You can establish global corporate baseline policies while granting plant managers the flexibility to tailor localized quality thresholds and alarm triggers to specific machine tolerances.'
      },
      {
        q: 'Does the catalog support exporting to enterprise catalogs like Collibra or Purview?',
        a: 'Yes. REST APIs and metadata synchronization export the operational signal glossary directly into enterprise governance platforms including Microsoft Purview, Collibra, and Alation.'
      }
    ]
  },
  {
    id: 'central-management',
    name: 'Central Management',
    tagline: 'Deploy edge operations centrally',
    path: '/platform/central-management',
    iconUrl: '/icons/platform/central-management.svg',
    badge: 'Single Pane of Glass · Zero-Touch Provisioning',
    iconName: 'LayoutGrid',
    accentColor: 'text-violet-700',
    bgLight: 'bg-violet-50',
    borderColor: 'border-violet-200',
    heroHeadline: 'Deploy and Manage Edge Operations Centrally',
    heroDescription:
      'Single-pane-of-glass centralized visibility, zero-touch provisioning, and remote lifecycle management across thousands of distributed edge devices, applications, data pipelines, and AI models.',
    overviewSummary:
      'Managing ten edge nodes is easy; managing five hundred across thirty plants is an operational nightmare without centralized tooling. Central Management eliminates manual truck rolls with automated mass deployment, remote diagnostic telemetry, and instant rollback capabilities.',
    keyBenefits: [
      'Unified enterprise fleet dashboard: monitor CPU, RAM, disk, and connection health globally',
      'Zero-touch edge provisioning: boot hardware, connect to the network, and auto-apply plant profiles',
      'Over-The-Air (OTA) updates: push software, driver, and security patches without visiting the plant',
      'Centralized application deployment: roll out containerized workloads and AI models to target node groups',
      'Global template synchronization: propagate configuration adjustments across entire production lines'
    ],
    features: [
      {
        title: 'Global Fleet Telemetry & Monitoring',
        desc: 'Real-time visibility into all connected edge nodes worldwide. View online/offline status, resource consumption, pipeline throughput, and hardware health.',
        bullets: ['Real-time heartbeat monitoring', 'Proactive outage alerting', 'Geographic fleet map']
      },
      {
        title: 'Zero-Touch Mass Provisioning',
        desc: 'Standardize deployments with declarative configuration templates. New hardware automatically pulls its allocated profile upon first boot.',
        bullets: ['Automated bootstrap scripts', 'Tag group templating', 'Fast multi-site onboarding']
      },
      {
        title: 'Over-The-Air (OTA) Lifecycle Management',
        desc: 'Execute scheduled or rolling updates of edge runtime versions, OS security patches, and application containers across targeted device clusters.',
        bullets: ['Staged rollout rings', 'Automated pre-flight checks', 'One-click instant rollback']
      },
      {
        title: 'Central Model & App Store',
        desc: 'Maintain a centralized repository of vetted industrial applications, ML algorithms, and data connectors. Deploy them to edge clusters with point-and-click ease.',
        bullets: ['Enterprise private app catalog', 'Version pinning & release control', 'Cross-node configuration sync']
      }
    ],
    metrics: [
      { label: 'Fleet Scale', value: '10,000+ Edge Nodes', status: 'Single Control Pane' },
      { label: 'Mass Deployment', value: 'Minutes vs. Weeks', status: 'Zero-Touch Provisioning' },
      { label: 'OTA Success Rate', value: '99.98%', status: 'Automated Rollback' },
      { label: 'Remote Troubleshooting', value: 'Instant Access', status: 'Secure Web SSH / VNC' }
    ],
    faqs: [
      {
        q: 'Can central management run on-premises or only in the public cloud?',
        a: 'Central Management offers flexible hosting options: run it as a fully managed SaaS cloud instance, host it in your private AWS/Azure/GCP VPC, or install it on-premise in your internal enterprise datacenter.'
      },
      {
        q: 'What happens to local operations if the connection to Central Management drops?',
        a: 'Edge nodes operate with total autonomy. All data collection, DataOps transformations, edge intelligence, and PLC writeback logic run locally on the edge device without disruption, automatically synchronizing once connectivity is restored.'
      },
      {
        q: 'How does it handle rolling updates across 24/7 manufacturing plants?',
        a: 'You can define deployment rings (e.g., Pilot Line -> Plant 1 -> Global) and schedule maintenance windows to ensure production shifts are never interrupted during updates.'
      }
    ]
  }
];

export const getPlatformItemById = (id: string): PlatformItem | undefined => {
  return PLATFORM_ITEMS.find(item => item.id === id);
};
