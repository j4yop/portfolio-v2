import type { ComponentType } from "react";
import { Network, Search } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
  SiLangchain,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiBun,
  SiEslint,
  SiRadixui,
  SiChartdotjs,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiTldraw,
  SiCss3,
  SiPython,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiMeta,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "three" | "prisma" | "cloud" | "langchain" | "langgraph" | "rag"
  | "node" | "motion" | "tailwind" | "bun" | "eslint" | "radixui" | "charts" | "github" | "fastapi"
  | "redis" | "celery" | "tldraw" | "css3" | "python" | "anthropic" | "claude" | "gemini" | "llama";

export type TechItem = TechKey | { label: string; tooltip?: string; };

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  video: string;
  description: string;
  tech: TechItem[];
  github: string;
  live: string;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, three: SiThreedotjs, prisma: SiPrisma,
  cloud: SiCloudflare, langchain: SiLangchain, langgraph: Network, rag: Search, node: SiNodedotjs,
  motion: SiFramer, tailwind: SiTailwindcss, bun: SiBun, eslint: SiEslint, radixui: SiRadixui,
  charts: SiChartdotjs, github: SiGithub, fastapi: SiFastapi, redis: SiRedis, celery: SiCelery,
  tldraw: SiTldraw, css3: SiCss3, python: SiPython, anthropic: SiAnthropic, claude: SiClaude,
  gemini: SiGooglegemini, llama: SiMeta,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", three: "Three.js", prisma: "Prisma",
  cloud: "Cloudflare", langchain: "LangChain", langgraph: "LangGraph", rag: "RAG",
  node: "Node.js", motion: "Framer Motion", tailwind: "Tailwind CSS", bun: "Bun", eslint: "ESLint",
  radixui: "Radix UI", charts: "Charts", github: "GitHub API", fastapi: "FastAPI", redis: "Redis",
  celery: "Celery", tldraw: "tldraw", css3: "CSS3", python: "Python", anthropic: "Anthropic",
  claude: "Claude", gemini: "Gemini", llama: "LLaMA",
};

export const projectsData: Project[] = [
  {
    slug: "pulse911",
    title: "Pulse911",
    imageTitle: "Operational Telemetry & Voice AI",
    src: "/project-image/image copy.png",
    lightModeSrc: "/project-image/image.png",
    video: "",
    description: "Real-time operational dispatch platform in React 19 & TypeScript executing deterministic query search via WebAssembly in sub-10ms with live bidirectional WebSocket streaming. Awarded 1st Place Winner in YC Fall 2026 × Moss Zero-Latency Builder Sprint.",
    tech: ["react", "ts", "next", "fastapi", "node"],
    github: "https://github.com/j4yop/pulse911",
    live: "https://pulse911.vercel.app",
    starsText: "YC F26 1st Place",
    backgroundImage: "/project-hover-blueprint.webp",
    hasPin: true,
  },
  {
    slug: "contextgc",
    title: "ContextGC",
    imageTitle: "Semantic Context Defragmenter",
    src: "/Screenshot 2026-02-07 011550.png",
    lightModeSrc: "/Screenshot 2026-02-07 012511.png",
    video: "",
    description: "Autonomous semantic context defragmenter for long-horizon AI agents. Deterministic AST engine optimization published to PyPI. Selected as Top 50 Global Finalist out of 1,500+ submissions in Hack Devengers 2.0.",
    tech: ["python", "github", "ts", "fastapi", "claude"],
    github: "https://github.com/j4yop/context-hackdevengers",
    live: "https://context-hackdevengers.vercel.app",
    starsText: "Top 50 PyPI Engine",
    backgroundImage: "/project-hover-scribble3d.webp",
    hasPin: true,
  },
  {
    slug: "der02",
    title: "der02",
    imageTitle: "Threat-Zone Consequence Modeling",
    src: "/project-image/image copy.png",
    lightModeSrc: "/project-image/image.png",
    video: "",
    description: "Web-native threat-zone estimation and industrial consequence simulation implementing TNO Multi-Energy blast overpressure and CCPS thermal radiation models with sub-50ms numerical solvers.",
    tech: ["python", "next", "ts", "tailwind", "react"],
    github: "https://github.com/j4yop/der02",
    live: "https://der02.vercel.app",
    starsText: "Physics Engine",
    backgroundImage: "/project-hover-blueprint.webp",
    hasPin: true,
  },
  {
    slug: "pitwallear",
    title: "PitwallEar",
    imageTitle: "F1 Race Radio Telemetry Engine",
    src: "/Screenshot%202026-02-07%20233440.png",
    lightModeSrc: "/Screenshot%202026-02-07%20233831.png",
    video: "",
    description: "Real-time Formula 1 pitwall audio telemetry and radio stream processing engine. Transcribes, analyzes, and extracts strategic telemetry from high-noise driver-engineer communications with low-latency audio pipelines.",
    tech: ["python", "fastapi", "react", "ts", "node"],
    github: "https://github.com/j4yop/PitwallEar",
    live: "https://pitwall-ear-main-ec61.vercel.app",
    starsText: "Telemetry Audio",
    backgroundImage: "/project-hover-vengenceui.webp",
    hasPin: true,
  },
  {
    slug: "vericred",
    title: "VeriCred",
    imageTitle: "Decentralized Credential Verification",
    src: "/Screenshot%202026-02-07%20234301.png",
    lightModeSrc: "/Screenshot%202026-02-07%20234011.png",
    video: "",
    description: "Instant, tamper-proof academic transcript and migration verification system leveraging Web3 cryptographic verification for verifiable social impact and fraud-proof institutional credentialing.",
    tech: ["next", "ts", "react", "tailwind", "prisma"],
    github: "https://github.com/j4yop/vericred",
    live: "https://vericred-tpfs.vercel.app/",
    starsText: "Web3 Integrity",
    backgroundImage: "/project-hover-inquiro.webp",
    hasPin: true,
  },
  {
    slug: "sovereign-guard",
    title: "SovereignGuard",
    imageTitle: "Zero-Trust Agent Policy Gateway",
    src: "/Screenshot%202026-02-07%20234301.png",
    lightModeSrc: "/Screenshot%202026-02-07%20234011.png",
    video: "",
    description: "Zero-trust deterministic authorization gateway for autonomous AI agents using AWS Cedar formal logic, compiled Rust bindings, and real-time interception of rogue tool calls in sub-0.2ms.",
    tech: ["ts", "python", "node", "github", "fastapi"],
    github: "https://github.com/j4yop/sovereign-guard",
    live: "https://sovereign-guard-sand.vercel.app",
    starsText: "<0.2ms Cedar Policy",
    backgroundImage: "/project-hover-scribble3d.webp",
    hasPin: false,
  },
  {
    slug: "margins-oracle",
    title: "MARGINS",
    imageTitle: "Trade Credit Economics Oracle",
    src: "/Screenshot 2026-02-07 011550.png",
    lightModeSrc: "/Screenshot 2026-02-07 012511.png",
    video: "",
    description: "Intelligent commercial intelligence platform resolving pricing and margin asymmetry across Indian trade ecosystems, automatically reconciling wholesale invoices against manufacturer scheme slabs over typed JSON-RPC 2.0 endpoints.",
    tech: ["python", "next", "ts", "gemini", "fastapi"],
    github: "https://github.com/j4yop/margins-oracle",
    live: "",
    starsText: "Economics Engine",
    backgroundImage: "/project-hover-inquiro.webp",
    hasPin: false,
  },
  {
    slug: "rescuemesh",
    title: "RescueMesh",
    imageTitle: "Offline Disaster Mesh Node",
    src: "/Screenshot%202026-02-07%20233440.png",
    lightModeSrc: "/Screenshot%202026-02-07%20233831.png",
    video: "",
    description: "Offline disaster response mesh network with on-device quantized Gemma 4 AI — built for BUILD WITH GEMMA AI Buildathon 2026. Peer-to-peer decentralized mesh routing synchronizing critical survivor telemetry.",
    tech: ["python", "rag", "gemini", "llama"],
    github: "https://github.com/j4yop/RescueMesh",
    live: "",
    starsText: "Gemma 4 Mesh",
    backgroundImage: "/project-hover-vengenceui.webp",
    hasPin: false,
  },
];
