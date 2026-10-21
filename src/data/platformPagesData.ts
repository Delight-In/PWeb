// Generated PrishiTech Platform Data
export interface PrishiTechHero {
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  image: string;
}

export interface PrishiTechOverview {
  title: string;
  description: string;
  diagramImage: string;
}

export interface PrishiTechCapability {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  linkText?: string;
  linkUrl?: string;
}

export interface PrishiTechWhyMattersItem {
  title: string;
  icon: string;
}

export interface PrishiTechWhyMatters {
  title: string;
  description: string;
  items: PrishiTechWhyMattersItem[];
}

export interface PrishiTechSystems {
  title: string;
  description: string;
  image: string;
}

export interface PrishiTechFaq {
  question: string;
  answer: string;
}

export interface PrishiTechBottomCta {
  title: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

export interface PrishiTechPageData {
  id: string;
  slug: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  hero: PrishiTechHero;
  overview: PrishiTechOverview;
  capabilities: PrishiTechCapability[];
  whyMatters?: PrishiTechWhyMatters | null;
  systems?: PrishiTechSystems | null;
  faqs: PrishiTechFaq[];
  bottomCta: PrishiTechBottomCta;
}

export const PLATFORM_PAGES_DATA: Record<string, PrishiTechPageData> = {
  "industrial-data-foundation": {
    "id": "industrial-data-foundation",
    "slug": "industrial-data-foundation",
    "badge": "INDUSTRIAL DATA FOUNDATION",
    "metaTitle": "Industrial Data Foundation Platform for AI & Scale | PrishiTech",
    "metaDescription": "Build a unified industrial data foundation to connect, structure, govern, and scale data across systems and sites. Enable analytics, automation, and Industrial AI with PrishiTech.",
    "hero": {
      "badge": "INDUSTRIAL DATA FOUNDATION",
      "title": "The Data Foundation That Scales Industrial AI",
      "subtitle": "One coordinated platform for all industrial data capabilities to enable AI use cases at scale.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform",
      "image": "/images/platform/hero_data_foundation.svg"
    },
    "overview": {
      "title": "How the industrial data foundation works",
      "description": "Industrial data doesn’t scale through isolated tools. It requires a coordinated foundation to connect, structure, govern, and manage data across systems and sites. PrishiTech brings these capabilities together in one seamless platform.",
      "diagramImage": "/images/platform/modern-industrial-data-foundation.png"
    },
    "capabilities": [
      {
        "id": "connect-industrial-systems-at-the-source",
        "eyebrow": "Data Connectivity",
        "title": "Connect industrial systems at the source",
        "description": "Every industrial data strategy starts with reliable access to source data. Data Connectivity establishes a high-throughput foundation for connecting machines, control systems, historians, and applications across heterogeneous environments—reducing onboarding complexity and preparing data for downstream use.",
        "bullets": [
          "Native connectivity across modern and legacy OT and IT systems",
          "Automated device and signal discovery at scale",
          "Flexible ingestion across protocols and environments",
          "Support for time-series, events, alarms, and structured data"
        ],
        "image": "/images/platform/conn_native_connectors.svg",
        "linkText": "Learn more",
        "linkUrl": "/data-connectivity"
      },
      {
        "id": "turn-raw-signals-into-structured-reusable-data",
        "eyebrow": "Industrial Dataops",
        "title": "Turn raw signals into structured, reusable data",
        "description": "Connectivity alone doesn’t create value. Industrial DataOps transforms raw signals into contextualized, modeled, and orchestrated data that can move reliably across OT and IT systems—creating a consistent foundation for analytics, automation, and AI.",
        "bullets": [
          "Contextualization with metadata, units, and asset relationships",
          "Reusable data models across machines, lines, cells, and plants",
          "Orchestration across collection, transformation, enrichment, and routing",
          "Real-time data sharing across systems"
        ],
        "image": "/images/platform/dataops_modeling.svg",
        "linkText": "Learn more",
        "linkUrl": "/industrial-dataops"
      },
      {
        "id": "run-intelligence-where-decisions-happen",
        "eyebrow": "Edge Intelligence",
        "title": "Run intelligence where decisions happen",
        "description": "Industrial decisions are most effective when execution happens close to the process. Edge Intelligence creates a local execution layer for applications, analytics, and AI—improving responsiveness, reducing latency, and enabling resilient operations across distributed environments.",
        "bullets": [
          "Containerized application execution at the edge",
          "Real-time analytics for KPIs, thresholds,and anomaly detection",
          "Local AI and machine learning inference",
          "Language-based workflows and agent-driven automation"
        ],
        "image": "/images/platform/edge-ai-inference.jpg",
        "linkText": "Learn more",
        "linkUrl": "/edge-intelligence"
      },
      {
        "id": "protect-systems-and-data-across-environments",
        "eyebrow": "Data Security",
        "title": "Protect systems and data across environments",
        "description": "Industrial data must move securely across connected, segmented, and isolated environments. Data Security protects systems, controls access, and secures communication.",
        "bullets": [
          "Secure operation in air-gapped and restricted network environments",
          "Controlled data gateways between OT and enterprise systems",
          "Role-based access control with least-privilege enforcement",
          "Encryption and certificate-based communication across systems"
        ],
        "image": "/images/platform/sec_gateway.svg",
        "linkText": "Learn more",
        "linkUrl": "/data-security"
      },
      {
        "id": "govern-data-as-it-scales-across-the-enterprise",
        "eyebrow": "DATA GOVERNANCE",
        "title": "Govern data as it scales across the enterprise",
        "description": "As data grows, governance ensures it remains trusted and usable. Data Governance defines how data is controlled, understood, traced, and owned across systems and teams.",
        "bullets": [
          "Policy-driven control for routing, masking, retention, and data movement",
          "Metadata catalog for searchable, standardized data assets and models",
          "End-to-end lineage across pipelines and models",
          "Ownership and documentation for accountability"
        ],
        "image": "/images/platform/gov_policy.svg",
        "linkText": "Learn more",
        "linkUrl": "/data-governance"
      },
      {
        "id": "manage-operations-at-scale-from-one-control-layer",
        "eyebrow": "Central Management",
        "title": "Manage operations at scale from one control layer",
        "description": "Industrial scale requires centralized control over distributed environments. Central Management provides the operational framework to deploy, monitor, and govern devices, data, applications, and AI models—ensuring consistency across plants.",
        "bullets": [
          "Remote provisioning, configuration, and monitoring of edge fleets",
          "Central visibility into data flows, storage behavior, and system health",
          "Application lifecycle management across deployment, versioning, and rollback",
          "Data model and AI model management across sites"
        ],
        "image": "/images/platform/mgmt_device.svg",
        "linkText": "Learn more",
        "linkUrl": "/central-management"
      },
      {
        "id": "niagara-bottling-standardizes-enterprise-wide-industrial-data-across-50-plants",
        "eyebrow": "Case Study",
        "title": "Niagara Bottling standardizes enterprise-wide industrial data across 50+ plants",
        "description": "Niagara Bottling deployed Edge Engine across 50+ plants to standardize industrial data from production lines and utility systems. Data is normalized at the edge and streamed to Databricks for advanced analytics and AI. This architecture establishes a consistent, trusted data layer across operations.\n \nImpact:",
        "bullets": [
          "50+ plants connected on a standardized data architecture",
          "Improved OEE and reduced downtime across production lines",
          "Standardized processes and enterprise data governance",
          "AI-ready data foundation for predictive maintenance"
        ],
        "image": "/images/platform/enterprise-bottling-case-study.jpg",
        "linkText": "Learn more",
        "linkUrl": ""
      }
    ],
    "whyMatters": null,
    "systems": {
      "title": "Built for legacy and modern industrial systems",
      "description": "Our platform integrates with the industrial stack you already rely on, including PLCs, SCADA platforms, historians, MES, cloud infrastructure, and analytics tools.",
      "image": "/images/platform/prishitech_systems_ecosystem.svg"
    },
    "faqs": [
      {
        "question": "What is an Industrial Data Foundation?",
        "answer": "An Industrial Data Foundation is the coordinated platform layer that connects industrial assets, structures operational data, runs intelligence at the edge, governs data usage, secures operations, and manages distributed environments at scale."
      },
      {
        "question": "Why is an Industrial Data Foundation important?",
        "answer": "It helps industrial organizations move from fragmented systems and inconsistent data practices to a more connected, trusted, and scalable environment for analytics, automation, and AI."
      },
      {
        "question": "What capabilities are included in an Industrial Data Foundation?",
        "answer": "A complete foundation typically includes Data Connectivity, Industrial DataOps, Edge Intelligence, Data Governance, Data Security, and Central Management."
      },
      {
        "question": "How does this foundation support Industrial AI?",
        "answer": "It improves Industrial AI readiness by making source data more accessible, contextualized, governed, secure, and operationally usable across distributed environments."
      },
      {
        "question": "How does governance fit into the foundation?",
        "answer": "Governance ensures that data is controlled, searchable, traceable, standardized, and owned so it can be trusted across analytics, applications, and enterprise initiatives."
      },
      {
        "question": "Why does central management matter in distributed industrial environments?",
        "answer": "Central management reduces site-by-site operational overhead by providing centralized visibility, deployment control, monitoring, and lifecycle management across devices, data, applications, and models."
      }
    ],
    "bottomCta": {
      "title": "One foundation for industrial data, operations, and AI",
      "description": "Most platforms solve one layer of the problem. PrishiTech brings together the architecture required to connect, govern, and scale industrial data across plants.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform"
    }
  },
  "data-connectivity": {
    "id": "data-connectivity",
    "slug": "data-connectivity",
    "badge": "DATA CONNECTIVITY",
    "metaTitle": "Industrial Data Connectivity & OT Integration | PrishiTech",
    "metaDescription": "Connect industrial assets, normalize operational data, and unify OT systems with PrishiTech. Build a scalable data foundation for analytics, integration, and Industrial AI.",
    "hero": {
      "badge": "DATA CONNECTIVITY",
      "title": "Connect Any Industrial Asset",
      "subtitle": "Connect legacy and modern systems, normalize data at the source, and make operational data immediately usable for analytics, applications, and Industrial AI.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform",
      "image": "/images/platform/hero_data_connectivity.svg"
    },
    "overview": {
      "title": "When industrial systems aren’t connected, everything downstream breaks",
      "description": "",
      "diagramImage": "/images/platform/modern-industrial-data-foundation.png"
    },
    "capabilities": [
      {
        "id": "connect-more-assets-without-custom-engineering",
        "eyebrow": "Native Connectors",
        "title": "Connect more assets without custom engineering",
        "description": "Connect directly to industrial devices using a high-performance library of native drivers—reducing custom integration work and accelerating time-to-first-data.\n \nWhat this enables:",
        "bullets": [
          "Connect modern and legacy OT and IT assets through native drivers",
          "Ingest data directly from devices without middleware",
          "Reduce engineering effort across vendors and systems",
          "Deliver standardized data for downstream processing"
        ],
        "image": "/images/platform/conn_native_connectors.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "apply-the-right-ingestion-approach-for-each-asset",
        "eyebrow": "Multiple Protocols",
        "title": "Apply the right ingestion approach for each asset",
        "description": "Industrial environments require different ingestion methods depending on network load, polling behavior, and reliability requirements. PrishiTech supports multiple communication approaches to balance responsiveness, throughput, and scale.\n \nWhat this enables:",
        "bullets": [
          "Support for mixed-protocol industrial environments",
          "Adapt ingestion based on network and system constraints",
          "Balance latency, throughput, and reliability",
          "Scale across brownfield and greenfield infrastructure"
        ],
        "image": "/images/platform/conn_multiple_protocols.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "unify-industrial-data-beyond-time-series-signals",
        "eyebrow": "Multiple Data Types",
        "title": "Unify industrial data beyond time-series signals",
        "description": "Industrial operations rely on more than telemetry. PrishiTech ingests time-series data, events, alarms, batches, and structured records into a consistent operational model.\n \nWhat this enables:",
        "bullets": [
          "Capture time-series, event, alarm, and batch data",
          "Ingest relational and structured data alongside telemetry",
          "Preserve high-fidelity source data during normalization",
          "Create cleaner data for analytics and AI"
        ],
        "image": "/images/platform/conn_multiple_data_types.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "reduce-onboarding-time-with-automated-asset-discovery",
        "eyebrow": "DEVICE DISCOVERY",
        "title": "Reduce onboarding time with automated asset discovery",
        "description": "Manual asset inventory slows deployment and creates visibility gaps. Automatically identify assets on the network and surface key connection details to accelerate deployment and improve visibility.\n \nWhat this enables:",
        "bullets": [
          "Detect OT and IT assets automatically",
          "Surface device type, vendor, IP, protocol, and last-seen status",
          "Reduce manual setup and inventory effort",
          "Prepare environments for multi-site deployments"
        ],
        "image": "/images/platform/conn_device_discovery.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "organize-and-scale-signal-onboarding",
        "eyebrow": "TAG DISCOVERY",
        "title": "Organize and scale signal onboarding",
        "description": "Browse, search, and organize signals at scale to eliminate manual tag configuration bottlenecks.\n \nWhat this enables:",
        "bullets": [
          "Browse large signal hierarchies without point-by-point setup",
          "Search and filter tags quickly",
          "Organize signals for modeling and analytics",
          "Support bulk onboarding workflows"
        ],
        "image": "/images/platform/conn_tag_discovery.svg",
        "linkText": "Book a demo -&gt;",
        "linkUrl": "/get-started"
      }
    ],
    "whyMatters": {
      "title": "Why data connectivity matters",
      "description": "A modern connectivity layer enables:",
      "items": []
    },
    "systems": {
      "title": "Built for legacy and modern industrial systems",
      "description": "Our platform integrates with the industrial stack you already rely on, including PLCs, SCADA platforms, historians, MES, cloud infrastructure, and analytics tools.",
      "image": "/images/platform/prishitech_systems_ecosystem.svg"
    },
    "faqs": [
      {
        "question": "What is industrial data connectivity?",
        "answer": "Industrial data connectivity is the capability to connect machines, control systems, sensors, historians, and related OT or IT assets so operational data can be collected, normalized, and used across analytics, enterprise systems, and AI workflows."
      },
      {
        "question": "Why are native connectors important in industrial environments?",
        "answer": "Native connectors reduce custom engineering effort, accelerate onboarding, and improve consistency by providing direct support for common industrial devices, protocols, and systems."
      },
      {
        "question": "What is the difference between device discovery and tag discovery?",
        "answer": "Device discovery identifies assets and key connection details on the network, while tag discovery focuses on browsing, searching, and organizing the individual signals or data points that need to be collected from connected assets."
      },
      {
        "question": "Why does protocol flexibility matter for industrial data platforms?",
        "answer": "Industrial environments often combine multiple vendors, communication standards, and network conditions. Protocol flexibility makes it possible to apply the right ingestion approach per asset while balancing performance, responsiveness, and reliability."
      },
      {
        "question": "What data types should a foundational industrial platform support?",
        "answer": "A strong foundational platform should support time-series data, events, alarms, batches, relational records, and structured data so operations can unify machine telemetry with broader operational and business context."
      },
      {
        "question": "How does strong data connectivity support Industrial AI?",
        "answer": "Strong data connectivity improves Industrial AI readiness by making more source data available in a consistent structure, reducing fragmentation early, and creating a better base for modelling, analytics, and governed data operations."
      }
    ],
    "bottomCta": {
      "title": "The foundation of the industrial data architecture",
      "description": "Talk to our team to see how PrishiTech simplifies connectivity, DataOps, and edge AI.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform"
    }
  },
  "industrial-dataops": {
    "id": "industrial-dataops",
    "slug": "industrial-dataops",
    "badge": "INDUSTRIAL DATAOPS",
    "metaTitle": "Industrial DataOps | PrishiTech",
    "metaDescription": "Contextualize, model, and orchestrate industrial data with PrishiTech. Build scalable data pipelines and enable real-time data sharing for analytics and Industrial AI.",
    "hero": {
      "badge": "INDUSTRIAL DATAOPS",
      "title": "Make Industrial Data Structured and Reusable",
      "subtitle": "Contextualize raw signals, standardize data models, and orchestrate data pipelines across systems—so industrial data becomes usable for analytics, automation, and Industrial AI.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform",
      "image": "/images/platform/hero_industrial_dataops.svg"
    },
    "overview": {
      "title": "When data lacks context, it can’t scale",
      "description": "",
      "diagramImage": "/images/platform/modern-industrial-data-foundation.png"
    },
    "capabilities": [
      {
        "id": "turn-raw-signals-into-meaningful-operational-data",
        "eyebrow": "Data Contextualization",
        "title": "Turn raw signals into meaningful operational data",
        "description": "Raw machine data becomes usable when it includes context—what the signal represents, where it belongs, and how it should be interpreted.\n \nWhat this enables:",
        "bullets": [
          "Attach asset context to machine and process data",
          "Add units, timestamps, and operational metadata",
          "Improve interpretation across OT, IT, and data teams",
          "Reduce ambiguity in analytics and applications"
        ],
        "image": "/images/platform/dataops_contextualization.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "build-once-deploy-consistent-data-models-everywhere",
        "eyebrow": "Data Modeling",
        "title": "Build once, deploy consistent data models everywhere",
        "description": "Industrial scale requires repeatable structure. Data models standardize machines, lines, and plants so data can be reused consistently across sites.\n \nWhat this enables:",
        "bullets": [
          "Create reusable data models for assets, lines, facilities",
          "Standardize attributes, relationships, and hierarchies",
          "Support build-once, deploy-everywhere architectures",
          "Improve consistency across analytics and AI workflows"
        ],
        "image": "/images/platform/dataops_modeling.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "move-transform-and-manage-data-across-systems",
        "eyebrow": "DATA ORCHESTRATION",
        "title": "Move, transform, and manage data across systems",
        "description": "Industrial data pipelines must do more than move data—they must transform, enrich, and route it reliably across edge and enterprise environments\n \nWhat this enables:",
        "bullets": [
          "Collect, transform, and route data across pipelines",
          "Coordinate data movement across OT and IT systems",
          "Monitor pipeline execution and flow health",
          "Maintain reliability across distributed environments"
        ],
        "image": "/images/platform/dataops_orchestration.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "publish-once-consume-everywhere-in-real-time",
        "eyebrow": "Data Sharing",
        "title": "Publish once, consume everywhere in real time",
        "description": "Industrial systems scale faster when data is shared through a common layer instead of point-to-point integrations. This creates a cleaner operating model for analytics and AI.\n \nWhat this enables:",
        "bullets": [
          "Publish curated data into a Unified Namespace",
          "Distribute data through MQTT and pub / sub patterns",
          "Enable real-time consumption across systems",
          "Reduce brittle point-to-point integrations"
        ],
        "image": "/images/platform/dataops_sharing.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "bridge-ot-data-with-cloud-and-business-applications",
        "eyebrow": "Data Integration",
        "title": "Bridge OT data with cloud and business applications",
        "description": "Industrial DataOps connects operational data with the broader business, enabling workflows, analytics, and closed-loop optimization.\n \nWhat this enables:",
        "bullets": [
          "Integrate with cloud, databases, and enterprise systems",
          "Enable secure OT–IT data exchange",
          "Support bi-directional data movement",
          "Connect operations with business processes"
        ],
        "image": "/images/platform/cloud-edge-integration.jpg",
        "linkText": "Book a demo -&gt;",
        "linkUrl": "/get-started"
      }
    ],
    "whyMatters": {
      "title": "Why Industrial DataOps matters",
      "description": "A strong Industrial DataOps layer enables:",
      "items": []
    },
    "systems": {
      "title": "Built for legacy and modern industrial systems",
      "description": "Our platform integrates with the industrial stack you already rely on, including PLCs, SCADA platforms, historians, MES, cloud infrastructure, and analytics tools.",
      "image": "/images/platform/prishitech_systems_ecosystem.svg"
    },
    "faqs": [
      {
        "question": "What is Industrial DataOps?",
        "answer": "Industrial DataOps is the practice of contextualizing, modelling, orchestrating, sharing, and integrating industrial data so it can be used more reliably across operations, analytics, enterprise systems, and AI workflows."
      },
      {
        "question": "Why is data contextualization important in industrial environments?",
        "answer": "Data contextualization adds operational meaning to raw signals by attaching asset context, units, timestamps, and metadata, making information easier to understand and use across teams and systems."
      },
      {
        "question": "What is the role of data modelling in Industrial DataOps?",
        "answer": "Data modelling creates reusable templates and structures for machines, lines, and plants so industrial data can be standardized and deployed consistently across multiple sites and use cases."
      },
      {
        "question": "How does data orchestration improve industrial operations?",
        "answer": "Data orchestration manages the collection, transformation, enrichment, routing, and monitoring of data pipelines, helping industrial environments maintain reliable flow across OT and IT systems."
      },
      {
        "question": "Why use a Unified Namespace for data sharing?",
        "answer": "A Unified Namespace creates a shared real-time source of truth where curated data can be published once and consumed by many systems, reducing integration complexity and improving interoperability."
      },
      {
        "question": "How does Industrial DataOps support Industrial AI?",
        "answer": "Industrial DataOps improves AI readiness by turning fragmented raw data into contextualized, standardized, shareable information that is easier to govern, integrate, and use in analytics and AI workflows."
      }
    ],
    "bottomCta": {
      "title": "The layer that makes industrial data usable",
      "description": "Talk to our team to see how PrishiTech simplifies connectivity, DataOps, and edge AI.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform"
    }
  },
  "edge-intelligence": {
    "id": "edge-intelligence",
    "slug": "edge-intelligence",
    "badge": "EDGE INTELLIGENCE",
    "metaTitle": "Industrial Edge Intelligence | PrishiTech",
    "metaDescription": "Run applications, analytics, and AI at the edge with PrishiTech. Enable real-time decisions, reduce latency, and scale Industrial AI across distributed operations.",
    "hero": {
      "badge": "EDGE INTELLIGENCE",
      "title": "Run Apps, Analytics, and AI at the Edge",
      "subtitle": "Make decisions where data is generated, with lower latency and greater operational resilience.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform",
      "image": "/images/platform/hero_edge_intelligence.svg"
    },
    "overview": {
      "title": "When decisions depend on the cloud, operations slow down",
      "description": "",
      "diagramImage": "/images/platform/modern-industrial-data-foundation.png"
    },
    "capabilities": [
      {
        "id": "deploy-and-scale-edge-applications-where-they-create-value",
        "eyebrow": "Edge Applications",
        "title": "Deploy and scale edge applications where they create value",
        "description": "Applications are most effective when they run close to machines and users. Edge applications provide a local runtime for processing, storing, analyzing, and visualizing data without relying on centralized systems.\n \nWhat this enables:",
        "bullets": [
          "Deploy containerized applications at the edge",
          "Support low-latency processing and local execution",
          "Standardize application deployment across sites",
          "Run operational, analytical, and visualization workloads locally"
        ],
        "image": "/images/platform/intel_edge_apps.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "analyze-and-act-on-data-in-real-time",
        "eyebrow": "Edge Analytics",
        "title": "Analyze and act on data in real time",
        "description": "Edge analytics enables KPIs, anomaly detection, and condition-based actions to run in real time—without sending every signal to the cloud.\n \nWhat this enables:",
        "bullets": [
          "Compute KPIs at the source of data generation",
          "Detect anomalies and deviations in real time",
          "Trigger actions immediately based on analytical outcomes",
          "Reduce cloud bandwidth dependency for high-frequency data"
        ],
        "image": "/images/platform/edge-analytics-telemetry.jpg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "deliver-predictions-and-optimization-without-delay",
        "eyebrow": "Edge AI / ML",
        "title": "Deliver predictions and optimization without delay",
        "description": "AI models create more value when they run where decisions are made. Edge AI enables local inference for anomaly detection, forecasting, optimization, and classification.\n \nWhat this enables:",
        "bullets": [
          "Run machine learning inference locally",
          "Deliver immediate predictions and optimization signals",
          "Extend enterprise AI through distributed edge execution",
          "Keep sensitive data closer to the source"
        ],
        "image": "/images/platform/edge-ai-inference.jpg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "enable-natural-language-interaction-with-industrial-systems",
        "eyebrow": "Edge LLM / SLM",
        "title": "Enable natural-language interaction with industrial systems",
        "description": "Language models make industrial systems easier to interpret by summarizing events, explaining conditions, and enabling natural-language workflows.\n \nWhat this enables:",
        "bullets": [
          "Summarize events and operational conditions",
          "Interpret logs and system activity",
          "Support guided, context-aware assistance",
          "Enable natural-language workflows at the edge"
        ],
        "image": "/images/platform/edge-ai-copilot.jpg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "move-from-automation-to-intelligent-action",
        "eyebrow": "Agentic Edge",
        "title": "Move from automation to intelligent action",
        "description": "Agentic Edge introduces guided autonomy—allowing software agents to observe conditions, reason over data, recommend actions, and execute workflows within defined guardrails.\n \nWhat this enables:",
        "bullets": [
          "Observe and interpret industrial conditions in real time",
          "Reason across OT and IT data",
          "Recommend and execute next-best actions",
          "Improve consistency in troubleshooting and workflows"
        ],
        "image": "/images/platform/intel_agentic_edge.svg",
        "linkText": "Book a demo -&gt;",
        "linkUrl": "/get-started"
      }
    ],
    "whyMatters": {
      "title": "Why edge intelligence matters",
      "description": "A strong edge intelligence layer enables:",
      "items": []
    },
    "systems": {
      "title": "Built for legacy and modern industrial systems",
      "description": "Our platform integrates with the industrial stack you already rely on, including PLCs, SCADA platforms, historians, MES, cloud infrastructure, and analytics tools.",
      "image": "/images/platform/prishitech_systems_ecosystem.svg"
    },
    "faqs": [
      {
        "question": "What is Edge Intelligence?",
        "answer": "Edge Intelligence is the capability to run applications, analytics, AI, machine learning, and language-based workflows close to industrial processes so decisions and actions can happen with lower latency and greater operational resilience."
      },
      {
        "question": "Why run applications at the edge?",
        "answer": "Running applications at the edge improves responsiveness, reduces dependency on remote infrastructure, and supports resilient local processing for acquiring, storing, analyzing, and displaying industrial data."
      },
      {
        "question": "How does edge analytics improve industrial operations?",
        "answer": "Edge analytics enables KPIs, anomaly detection, and trigger-based actions to run in real time where data is generated, improving responsiveness while reducing bandwidth requirements and cloud dependency."
      },
      {
        "question": "What is the role of Edge AI and machine learning?",
        "answer": "Edge AI and machine learning support local inference for predictions, classifications, anomaly detection, and optimization so industrial systems can respond immediately while keeping sensitive data closer to the source."
      },
      {
        "question": "How do language models support edge intelligence?",
        "answer": "Language models support edge intelligence by summarizing events, interpreting logs, and enabling natural-language workflows that help frontline and technical teams understand operational conditions more quickly."
      },
      {
        "question": "What is Agentic Edge?",
        "answer": "Agentic Edge is a guided autonomy approach in which software agents observe conditions, reason over OT and IT data, recommend actions, and execute workflows within defined guardrails to improve troubleshooting and operational consistency."
      }
    ],
    "bottomCta": {
      "title": "The execution layer of the industrial data foundation",
      "description": "Talk to our team to see how PrishiTech simplifies connectivity, DataOps, and edge AI.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform"
    }
  },
  "data-security": {
    "id": "data-security",
    "slug": "data-security",
    "badge": "DATA SECURITY",
    "metaTitle": "Industrial Data Security | PrishiTech",
    "metaDescription": "Protect industrial systems, control access, and secure data movement across edge and cloud. PrishiTech enables resilient, policy-driven data security for Industrial AI.",
    "hero": {
      "badge": "DATA SECURITY",
      "title": "Secure OT-IT Operations Across Edge & Cloud",
      "subtitle": "Control access, protect systems, and secure data movement so industrial data can scale without compromising operations.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform",
      "image": "/images/platform/hero_data_security.svg"
    },
    "overview": {
      "title": "When data isn’t secure, operations can’t scale",
      "description": "",
      "diagramImage": "/images/platform/modern-industrial-data-foundation.png"
    },
    "capabilities": [
      {
        "id": "support-air-gapped-and-segmented-industrial-networks",
        "eyebrow": "AIR-gapped network",
        "title": "Support air-gapped and segmented industrial networks",
        "description": "Many industrial environments require isolated execution models where external connectivity is limited or restricted. Data Security enables secure operation in these environments without disrupting local workflows.\n \nWhat this enables:",
        "bullets": [
          "Run applications, analytics, and AI in air-gapped environments",
          "Maintain operations without dependency on external connectivity",
          "Support segmented and restricted network architectures",
          "Preserve operational continuity under real-world constraints"
        ],
        "image": "/images/platform/airgapped-cybersecurity.jpg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "control-how-data-moves-across-ot-and-it",
        "eyebrow": "Data Gateway",
        "title": "Control how data moves across OT and IT",
        "description": "Industrial data movement must be controlled and policy-driven. A data gateway ensures that only approved data leaves production environments while maintaining reliability across network boundaries.\n \nWhat this enables:",
        "bullets": [
          "Create a controlled bridge between OT and enterprise systems",
          "Filter and govern outbound data movement",
          "Buffer data during network disruption or latency",
          "Reduce exposure of production systems to external environments"
        ],
        "image": "/images/platform/sec_gateway.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "ensure-the-right-access-for-the-right-users",
        "eyebrow": "ROLE-BASED ACCESS (RBAC)",
        "title": "Ensure the right access for the right users",
        "description": "Industrial environments require collaboration without overexposure. Role-based access ensures users only interact with the data, systems, and functions relevant to their role.\n \nWhat this enables:",
        "bullets": [
          "Apply least-privilege access across users and teams",
          "Scope permissions by site, asset, and operational role",
          "Support collaboration without broad system exposure",
          "Maintain consistent access control across distributed environments"
        ],
        "image": "/images/platform/sec_rbac.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "track-activity-across-systems-and-workflows",
        "eyebrow": "Audit Trails",
        "title": "Track activity across systems and workflows",
        "description": "Security depends on visibility. Audit trails provide traceability across user actions, system changes, and operational events.\n \nWhat this enables:",
        "bullets": [
          "Capture logs for user activity and system activity",
          "Improve traceability across administrative workflows",
          "Support compliance and internal accountability",
          "Simplify investigation of incidents and anomalies"
        ],
        "image": "/images/platform/sec_audit.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "protect-data-in-motion-across-edge-and-cloud",
        "eyebrow": "ENCRYPTION & CERTIFICATION",
        "title": "Protect data in motion across edge and cloud",
        "description": "Industrial systems rely on secure communication between devices, services, and platforms. Encryption and certificate management ensure trusted and protected data exchange.\n \nWhat this enables:",
        "bullets": [
          "Secure service and communication using SSL and TLS",
          "Protect device-to-service and service-to-service connections",
          "Manage certificates centrally across environments",
          "Maintain data integrity across distributed systems"
        ],
        "image": "/images/platform/sec_encryption.svg",
        "linkText": "Book a demo -&gt;",
        "linkUrl": "/get-started"
      }
    ],
    "whyMatters": {
      "title": "Why data security matters",
      "description": "A strong data security layer enables:",
      "items": []
    },
    "systems": {
      "title": "Built for legacy and modern industrial systems",
      "description": "Our platform integrates with the industrial stack you already rely on, including PLCs, SCADA platforms, historians, MES, cloud infrastructure, and analytics tools.",
      "image": "/images/platform/prishitech_systems_ecosystem.svg"
    },
    "faqs": [
      {
        "question": "What is Data Security in an industrial data platform?",
        "answer": "Data Security is the set of controls that protects systems, governs access, secures communications, and supports resilient operations across industrial environments, whether connected, segmented, or isolated."
      },
      {
        "question": "Why is air-gapped operation important in industrial environments?",
        "answer": "Air-gapped operation supports environments where cloud access is restricted or unavailable, allowing applications, analytics, workflows, and AI to continue running locally without external dependency."
      },
      {
        "question": "What is the role of a data gateway?",
        "answer": "A data gateway creates a controlled bridge between OT systems and enterprise or cloud environments, allowing approved data movement while buffering, filtering, and reducing direct exposure of production systems."
      },
      {
        "question": "How does role-based access improve industrial security?",
        "answer": "Role-based access applies least-privilege principles so users only access the data and functions relevant to their role, site, or asset responsibility, improving both security and compliance."
      },
      {
        "question": "Why are audit trails important for industrial operations?",
        "answer": "Audit trails provide visibility into user activity, system changes, and operational events, helping teams investigate incidents, maintain accountability, and support compliance requirements."
      },
      {
        "question": "How do encryption and certificate management support secure operations?",
        "answer": "Encryption protects data in transit, while certificate management helps establish trusted communication between devices, services, and systems, improving integrity and reducing risk across distributed environments."
      }
    ],
    "bottomCta": {
      "title": "The layer that ensures trust and resilience",
      "description": "Talk to our team to see how PrishiTech simplifies connectivity, DataOps, and edge AI.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform"
    }
  },
  "data-governance": {
    "id": "data-governance",
    "slug": "data-governance",
    "badge": "DATA GOVERNANCE",
    "metaTitle": "Data Governance | PrishiTech Industrial Data Platform",
    "metaDescription": "Standardize, govern, and trust industrial data at scale. PrishiTech enables policy-driven control, metadata visibility, and data reuse across systems, analytics, and AI.",
    "hero": {
      "badge": "DATA GOVERNANCE",
      "title": "Standardize, Govern, and Trust Industrial Data",
      "subtitle": "Define policies, standardize meaning, and create visibility across data so teams can find, trust, and reuse it across systems, analytics, and Industrial AI.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform",
      "image": "/images/platform/hero_data_governance.svg"
    },
    "overview": {
      "title": "When data isn’t governed, it can’t be trusted or reused",
      "description": "",
      "diagramImage": "/images/platform/modern-industrial-data-foundation.png"
    },
    "capabilities": [
      {
        "id": "control-how-data-flows-is-retained-and-is-shared",
        "eyebrow": "Policy & Control",
        "title": "Control how data flows, is retained, and is shared",
        "description": "Governance begins with policy. Defining how data moves, where it can go, and how it is used creates a disciplined operating model for industrial data.\n \nWhat this enables:",
        "bullets": [
          "Enforce rules for data flow, routing, and destination control",
          "Apply retention, masking, and approval-based data policies",
          "Govern how data is shared across systems and teams",
          "Create auditable, policy-driven data operations"
        ],
        "image": "/images/platform/gov_policy.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "create-a-searchable-structured-view-of-data-assets",
        "eyebrow": "Metadata Catalog",
        "title": "Create a searchable, structured view of data assets",
        "description": "As data volumes grow, teams need visibility into what exists and what can be trusted. A metadata catalog organizes assets, tags, models, and data products into a unified, searchable layer.\n \nWhat this enables:",
        "bullets": [
          "Catalog assets, tags, models, and data products",
          "Improve visibility across operational data sources",
          "Reduce duplication through governed reuse",
          "Make trusted data easier to discover for analytics and AI"
        ],
        "image": "/images/platform/gov_catalog.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "understand-where-data-comes-from-and-how-it-s-used",
        "eyebrow": "Data Lineage",
        "title": "Understand where data comes from and how it’s used",
        "description": "Data trust depends on traceability. Lineage provides visibility into how data is created, transformed, and consumed across systems.\n \nWhat this enables:",
        "bullets": [
          "Track data origins across OT and enterprise sources",
          "Map transformations across pipelines, models, and applications",
          "Show how data is consumed across analytics and AI workflows",
          "Improve trust and enable faster impact analysis through traceability"
        ],
        "image": "/images/platform/gov_lineage.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "standardize-definitions-across-ot-it-and-business",
        "eyebrow": "BUSINESS GLOSSARY",
        "title": "Standardize definitions across OT, IT, and business",
        "description": "Governance requires consistent, shared interpretation. A business glossary ensures metrics, assets, and processes are understood the same way across teams.\n \nWhat this enables:",
        "bullets": [
          "Define standardized business and technical terminology",
          "Align interpretation across systems and teams",
          "Reduce ambiguity in analytics and reporting",
          "Improve cross-functional collaboration"
        ],
        "image": "/images/platform/gov_glossary.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "assign-responsibility-for-every-critical-data-asset",
        "eyebrow": "OWNERSHIP & DOCUMENTATION",
        "title": "Assign responsibility for every critical data asset",
        "description": "Data becomes more reliable when ownership is clear. Governance defines responsibility and preserves context for long-term use.\n \nWhat this enables:",
        "bullets": [
          "Assign ownership across data assets and systems",
          "Maintain documentation for operational and analytical use",
          "Improve onboarding across teams and use cases",
          "Strengthen accountability and long-term data trust"
        ],
        "image": "/images/platform/gov_ownership.svg",
        "linkText": "Book a demo -&gt;",
        "linkUrl": "/get-started"
      }
    ],
    "whyMatters": {
      "title": "Why data governance matters",
      "description": "A strong edge intelligence layer enables:",
      "items": []
    },
    "systems": {
      "title": "Built for legacy and modern industrial systems",
      "description": "Our platform integrates with the industrial stack you already rely on, including PLCs, SCADA platforms, historians, MES, cloud infrastructure, and analytics tools.",
      "image": "/images/platform/prishitech_systems_ecosystem.svg"
    },
    "faqs": [
      {
        "question": "What is Data Governance in an industrial data platform?",
        "answer": "Data Governance is the framework that defines how industrial data is controlled, described, traced, standardized, and owned so it can be used consistently and trusted across systems and teams."
      },
      {
        "question": "Why is policy and control important for industrial data?",
        "answer": "Policy and control help enforce rules for how data moves, where it is routed, how long it is retained, and what approvals or protections apply, reducing risk as data operations scale."
      },
      {
        "question": "What is the role of a metadata catalog in data governance?",
        "answer": "A metadata catalog makes assets, tags, models, and data products easier to find and trust by organizing them in a searchable layer with consistent descriptions and context."
      },
      {
        "question": "Why does data lineage matter in industrial environments?",
        "answer": "Data lineage shows where data originated, how it changed, and where it is consumed, helping improve trust, speed troubleshooting, and support better governance decisions across complex data pipelines."
      },
      {
        "question": "How does a business glossary improve governance?",
        "answer": "A business glossary standardizes business and technical definitions so teams interpret metrics, processes, and data elements consistently across systems and functions."
      },
      {
        "question": "Why are ownership and documentation important for data trust?",
        "answer": "Ownership and documentation create accountability for data assets and preserve the context needed to use them correctly, improving stewardship, onboarding, and long-term operational continuity."
      }
    ],
    "bottomCta": {
      "title": "The layer that makes data reusable across teams and systems",
      "description": "Talk to our team to see how PrishiTech simplifies connectivity, DataOps, and edge AI.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform"
    }
  },
  "central-management": {
    "id": "central-management",
    "slug": "central-management",
    "badge": "CENTRAL MANAGEMENT",
    "metaTitle": "Central Management | PrishiTech Industrial Data Platform",
    "metaDescription": "Manage distributed industrial systems from one control plane. PrishiTech brings devices, data, applications, and AI into a centralized, scalable operating model.",
    "hero": {
      "badge": "CENTRAL MANAGEMENT",
      "title": "Manage Industrial Data at Scale from  One Control Plane",
      "subtitle": "Deploy, monitor, and govern devices, data, applications, and AI models—so distributed operations stay consistent, visible, and controlled across plants.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform",
      "image": "/images/platform/hero_central_management.svg"
    },
    "overview": {
      "title": "When operations are managed site-by-site, scale breaks down",
      "description": "",
      "diagramImage": "/images/platform/modern-industrial-data-foundation.png"
    },
    "capabilities": [
      {
        "id": "provision-configure-and-monitor-devices-across-sites",
        "eyebrow": "Edge Device Management",
        "title": "Provision, configure, and monitor devices across sites",
        "description": "Distributed environments require more than local administration. Centralized device management enables remote provisioning, configuration, monitoring, and updates across edge fleets.\n \nWhat this enables:",
        "bullets": [
          "Provision edge devices remotely across plants",
          "Standardize configuration and deployment across sites",
          "Monitor health, uptime, and performance centrally",
          "Reduce reliance on on-site deployment, maintenance, and updates",
          "Maintain consistent operations across growing fleets"
        ],
        "image": "/images/platform/mgmt_device.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "monitor-data-flows-storage-and-quality-from-one-view",
        "eyebrow": "Data Management",
        "title": "Monitor data flows, storage, and quality from one view",
        "description": "As data moves across distributed environments, reliability becomes harder to maintain. Centralized data management provides visibility into data behavior without removing edge-level control.\n \nWhat this enables:",
        "bullets": [
          "Visualize data flows across systems and sites",
          "Monitor storage behavior and data reliability",
          "Detect quality issues before they impact downstream systems",
          "Maintain oversight while preserving local execution",
          "Improve trust in operational data across environments"
        ],
        "image": "/images/platform/mgmt_data.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "deploy-version-and-manage-applications-consistently",
        "eyebrow": "Application Management",
        "title": "Deploy, version, and manage applications consistently",
        "description": "Scaling industrial applications requires disciplined lifecycle management. Centralized control ensures consistent deployment, versioning, and rollback across environments.\n \nWhat this enables:",
        "bullets": [
          "Deploy containerized applications across multiple sites",
          "Manage versioning, release workflows, and rollout",
          "Support rollback-ready operations for safer changes",
          "Standardize application deployment practices",
          "Scale innovation with reduced operational risk"
        ],
        "image": "/images/platform/mgmt_app.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "govern-data-models-with-consistency-and-version-control",
        "eyebrow": "Data Model Management",
        "title": "Govern data models with consistency and version control",
        "description": "Operational consistency depends on shared structure. Data model management ensures assets, processes, and relationships are represented consistently across plants.\n \nWhat this enables:",
        "bullets": [
          "Version and govern operational data models",
          "Standardize structures and definitions across sites",
          "Propagate approved updates with confidence",
          "Reduce schema drift over time",
          "Maintain a shared operational language across systems"
        ],
        "image": "/images/platform/mgmt_model.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      },
      {
        "id": "deploy-monitor-and-update-ai-with-control",
        "eyebrow": "AI Model Management",
        "title": "Deploy, monitor, and update AI with control",
        "description": "Industrial AI requires lifecycle discipline across environments. Centralized AI model management ensures models are deployed, monitored, and updated consistently.\n \nWhat this enables:",
        "bullets": [
          "Register and manage AI models centrally",
          "Deploy models across distributed edge locations",
          "Monitor performance and operational status",
          "Support controlled updates with rollback capability",
          "Maintain consistent governance for AI across sites"
        ],
        "image": "/images/platform/mgmt_ai.svg",
        "linkText": "Learn more",
        "linkUrl": ""
      }
    ],
    "whyMatters": {
      "title": "Why central management matters",
      "description": "A strong central management layer enables:",
      "items": []
    },
    "systems": {
      "title": "Built for legacy and modern industrial systems",
      "description": "Our platform integrates with the industrial stack you already rely on, including PLCs, SCADA platforms, historians, MES, cloud infrastructure, and analytics tools.",
      "image": "/images/platform/prishitech_systems_ecosystem.svg"
    },
    "faqs": [
      {
        "question": "What is Central Management in an industrial data platform?",
        "answer": "Central Management is the operational control layer that provides centralized visibility and lifecycle management for edge fleets, data, applications, operational models, and AI models across distributed industrial environments."
      },
      {
        "question": "Why is centralized device management important for industrial scale?",
        "answer": "Centralized device management reduces site-by-site operational overhead by enabling remote provisioning, configuration, monitoring, and updates across edge fleets while improving consistency and visibility."
      },
      {
        "question": "How does Central Management improve data reliability?",
        "answer": "It provides a central view into data flows, storage, and quality conditions so issues can be identified earlier and resolved before they affect analytics, applications, or AI workflows."
      },
      {
        "question": "Why is application lifecycle management important in distributed environments?",
        "answer": "Application lifecycle management helps control deployment, versioning, rollout, and rollback across sites, reducing operational risk and improving the repeatability of software delivery."
      },
      {
        "question": "What is the role of data model management in Central Management?",
        "answer": "Data model management versions and governs operational structures so plants can maintain a shared operational language, reduce schema drift, and propagate approved updates more consistently."
      },
      {
        "question": "How does AI model management support industrial AI programs?",
        "answer": "AI model management provides centralized registration, deployment, monitoring, and update control for models across edge locations, helping industrial organizations scale AI with stronger governance and rollback-ready lifecycle management."
      }
    ],
    "bottomCta": {
      "title": "The control layer for distributed industrial operations",
      "description": "Talk to our team to see how PrishiTech simplifies connectivity, DataOps, and edge AI.",
      "primaryCtaText": "Book a demo ->",
      "secondaryCtaText": "Explore Edge Platform"
    }
  }
};

export const PLATFORM_CLIENT_LOGOS = [
  { name: 'Philips', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/7jg1D2nmKCOOKsW9xVHR0E/ef0bc3c24aefc9049ebdf993114eaf19/logo_salad_-_philips.svg' },
  { name: 'JLR', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/OEgV6FjvCrJVU5d8SUBhq/9aa604c91d9856ccd174bd1a52ff9dfc/logo_salad_-_jlr.svg' },
  { name: 'SLB', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/36AyEgULyOpDBSK42wfz7x/e7ef8135b5af98c357f29727636dabcb/logo_salad_-_slb.svg' },
  { name: 'Pfeifer & Langen', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/4yEpkik6qmv9fNR32u0ecG/7935af6547000870632b970b204d65b8/logo_salad_-_pfeifer_langen.svg' },
  { name: 'Parker', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/3Qt28EVGadRPAoCIikJJRC/22767db45869f464093de611297c2050/logo_salad_-_parker.svg' },
  { name: 'NatureFresh', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/3TGkZxPOwejLKxIZW2CBLQ/7f38db534bc6db270c8c51dd04dc216c/logo_salad_-_naturefresh.svg' },
  { name: 'Microsoft', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/8gGxhR4vFYegF1Uxzukbw/1c4b5e7a2ba0c648d1ea6baf2799d7ab/logo_salad_-_microsoft.svg' },
  { name: 'Google Cloud', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/3A1ZtyYU3jMUcZgV81qyN0/e9382aa8b87ddf633f1cd812d23f0834/logo_salad_-_google_cloud.svg' },
  { name: 'AWS', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/6H5yhHQjFdQTab9AH8tJTu/45a27d1f93cfbd38d933a13fbe76968e/logo_salad_-_aws.svg' },
  { name: 'Databricks', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/5Az8Hj8BeJh9QMHRqIveyG/f64a5fcbb5a054e4e3a67998cbd24e09/logo_salad_-_databricks.svg' },
  { name: 'Oracle', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/2XAfjyCzcn5NFgXTUAhbiX/3af51a5bb257652935dc1c2d9365ef9d/logo_salad_-_oracle.svg' },
  { name: 'Dell', src: 'https://images.ctfassets.net/7xdd0wzmxlfo/4j04gbmudNJ4PFiPxmggF0/c0d6a90d831bca91457f190243f353eb/logo_salad_-_dell.svg' }
];

export const PLATFORM_CASE_STUDIES = [
  {
    stat: '95 sites deployed in 18 weeks',
    description: 'standardized industrial data architecture',
    image: 'https://images.ctfassets.net/7xdd0wzmxlfo/4fS0BZr1vMG8nXQMfIWcjT/c0f6ed95f5c96538e4dd7b41b8029249/Testimonial_Block_-_beer.png',
    alt: 'Food & Beverage Bottling'
  },
  {
    stat: '$3M/month savings',
    description: 'optimized packing and volume tracking',
    image: 'https://images.ctfassets.net/7xdd0wzmxlfo/7FdfBJlG2MY7vxm5TjdtAU/f127115445228737cb5ac351cb74cb48/Testimonial_Block_-_naturefresh.png',
    alt: 'Nature Fresh Farms'
  },
  {
    stat: 'Predictive maintenance at scale',
    description: 'Real-time equipment monitoring across sites',
    image: 'https://images.ctfassets.net/7xdd0wzmxlfo/2bTuoBdOSY1S0L3SFx6q2F/2197d2765a43b95c56ef9b3f743ad955/Testimonial_Block_-_jlr.png',
    alt: 'Jaguar Land Rover'
  },
  {
    stat: 'Reduced plant downtime',
    description: 'Real-time monitoring and corrective action',
    image: 'https://images.ctfassets.net/7xdd0wzmxlfo/1beFqsX6KouLB5gf0D6MZa/e6f50e69c3e9b470646980e2e6577494/Testimonial_Block_-_eid_parry.png',
    alt: 'Manufacturing Plant Operations'
  }
];
