export type ExperienceData = {
  title: string;
  role: string;
  dates: string;
  location: string;
  src: string;
  type?: string;
  imageFit?: "contain" | "cover";
  imageZoom?: number;
  description: string;
  tech: string[];
  metrics?: { label: string; value: string }[];
  screenshot?: string;
};

export const experiences: ExperienceData[] = [
  {
    title: "Smart Community Health Monitoring System",
    role: "Lead Architect (Smart India Hackathon)",
    dates: "2025",
    location: "Chennai, India",
    src: "/Experience-image/sih.svg",
    imageFit: "contain",
    imageZoom: 1,
    type: "Leadership",
    description: `
      Led a multidisciplinary team of 6 engineers during a 36-hour sprint to build an AI-based healthcare monitoring system for water-borne disease detection
      Architected scalable backend infrastructure using Node.js and Firebase for real-time sensor telemetry, ingestion, and event processing
      Engineered live operational dashboards for community healthcare workers, integrating sensor inputs with predictive analytics
      Spearheaded hardware-to-cloud integration and API contracts, delivering end-to-end functionality within the competitive deadline
    `,
    tech: ["Node.js", "Firebase", "Real-time Telemetry", "AI Analytics", "REST APIs", "IoT Sensors"],
    metrics: [
      { label: "Team Size", value: "6 Engineers" },
      { label: "Sprint Duration", value: "36 Hours" },
      { label: "Architecture", value: "Event-Driven" },
      { label: "Platform", value: "SIH 2025" },
    ],
  },
  {
    title: "Centre for AI & Robotics, VIT Chennai",
    role: "Undergraduate Researcher & Systems Architect",
    dates: "2024 - Present",
    location: "Chennai, Tamil Nadu",
    src: "/Experience-image/vit.svg",
    imageFit: "contain",
    imageZoom: 1,
    type: "Research",
    description: `
      Conducting advanced research at the intersection of deep learning, physical terrain modeling, and autonomous robotics
      Developing D8FN: a physics-informed deep learning framework integrating CNN segmentation with terrain-aware D8 flow routing for SAR satellite flood mapping
      Synthesizing digital elevation models (DEM) and Height Above Nearest Drainage (HAND) constraints to penalize non-physical hydrological predictions
      Evaluating model performance across multi-event disaster benchmarks using IoU, F1-score, and HAND Violation Rate metrics
    `,
    tech: ["PyTorch", "Computer Vision", "UNet", "ConvNeXt", "SAR Imagery", "Hydrology", "Robotics"],
    metrics: [
      { label: "Domain", value: "AI & Robotics" },
      { label: "Evaluation", value: "PA-IoU / F1" },
      { label: "Constraint", value: "D8 Routing" },
      { label: "Institution", value: "VIT Chennai" },
    ],
  },
  {
    title: "SovereignGuard & Autonomous Systems",
    role: "Security & Policy Architect",
    dates: "2025 - Present",
    location: "Remote / Open Source",
    src: "/Experience-image/sovereign-guard.svg",
    imageFit: "contain",
    imageZoom: 1,
    type: "Systems",
    description: `
      Architected SovereignGuard, a zero-trust deterministic authorization gateway for autonomous AI agents
      Engineered pre-execution policy checks using AWS Cedar formal logic and AWS Strands SDK to intercept rogue tool calls and prompt injection
      Compiled performance-critical policy engines to native Rust bindings, achieving sub-0.2ms validation latencies
      Implemented audit logs and immutable cryptographic execution trails with OpenSearch for enterprise agent compliance
    `,
    tech: ["AWS Cedar", "Rust", "Agent Security", "OpenSearch", "Policy Engines", "TypeScript"],
    metrics: [
      { label: "Latency", value: "< 0.2ms" },
      { label: "Policy Model", value: "Cedar Logic" },
      { label: "Protection", value: "Zero-Trust" },
      { label: "Inspection", value: "Pre-Execution" },
    ],
  },
  {
    title: "RescueMesh Disaster Response Network",
    role: "Lead Systems Engineer",
    dates: "2025 - Present",
    location: "Remote / Open Source",
    src: "/Experience-image/rescuemesh.svg",
    imageFit: "contain",
    imageZoom: 1,
    type: "Decentralized",
    description: `
      Architected RescueMesh, an offline-first emergency mesh communication platform enabling smartphones to act as autonomous survival nodes
      Integrated quantized local Gemma 4 models directly on-device for multimodal triage without requiring internet connectivity
      Built peer-to-peer decentralized mesh routing protocols in Flutter, synchronizing critical survivor telemetry across disconnected zones
      Engineered offline Retrieval-Augmented Generation (RAG) engines to query emergency medical and survival manuals locally
    `,
    tech: ["Gemma 4", "Flutter", "P2P Mesh", "Offline RAG", "Local SLM", "Mobile AI"],
    metrics: [
      { label: "Architecture", value: "Offline-First" },
      { label: "AI Model", value: "Gemma 4 SLM" },
      { label: "Network", value: "P2P Mesh" },
      { label: "Latency", value: "Real-Time" },
    ],
  },
];
