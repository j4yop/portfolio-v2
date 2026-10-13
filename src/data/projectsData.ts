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
    slug: "der02",
    title: "der02",
    imageTitle: "Consequence Modeling Platform",
    src: "/project-image/image copy.png",
    lightModeSrc: "/project-image/image.png",
    video: "",
    description: "Web-native threat-zone estimation & industrial consequence simulation implementing TNO Multi-Energy blast overpressure and CCPS thermal radiation models with sub-50ms numerical solvers.",
    tech: ["python", "next", "ts", "tailwind", "react"],
    github: "https://github.com/j4yop/der02",
    live: "",
    starsText: "Physics Engine",
    backgroundImage: "/project-hover-blueprint.webp",
    hasPin: true,
  },
  {
    slug: "sovereign-guard",
    title: "SovereignGuard",
    imageTitle: "Zero-Trust Agent Gateway",
    src: "/Screenshot%202026-02-07%20234301.png",
    lightModeSrc: "/Screenshot%202026-02-07%20234011.png",
    video: "",
    description: "Zero-trust deterministic authorization gateway for autonomous AI agents using AWS Cedar formal logic, compiled Rust bindings, and real-time interception of rogue tool calls in sub-0.2ms.",
    tech: ["ts", "python", "node", "github", "fastapi"],
    github: "https://github.com/j4yop/sovereign-guard",
    live: "",
    starsText: "<0.2ms Policy",
    backgroundImage: "/project-hover-scribble3d.webp",
    hasPin: true,
  },
  {
    slug: "rescuemesh",
    title: "RescueMesh",
    imageTitle: "Offline Disaster Mesh Node",
    src: "/Screenshot%202026-02-07%20233440.png",
    lightModeSrc: "/Screenshot%202026-02-07%20233831.png",
    video: "",
    description: "Offline-first emergency communication platform enabling smartphones to operate as AI-powered survival nodes using quantized local Gemma 4, Flutter, and P2P decentralized mesh routing.",
    tech: ["python", "rag", "gemini", "llama"],
    github: "https://github.com/j4yop/RescueMesh",
    live: "",
    starsText: "Decentralized AI",
    backgroundImage: "/project-hover-vengenceui.webp",
    hasPin: false,
  },
  {
    slug: "margins-oracle",
    title: "MARGINS",
    imageTitle: "Production MCP Server & Agent",
    src: "/Screenshot 2026-02-07 011550.png",
    lightModeSrc: "/Screenshot 2026-02-07 012511.png",
    video: "",
    description: "Interoperable Model Context Protocol (MCP) server over JSON-RPC 2.0 with strongly-typed tool contracts, Gemini model routing, Beckn async messaging, and automated audit logging.",
    tech: ["next", "ts", "node", "gemini", "fastapi"],
    github: "https://github.com/j4yop/margins-oracle",
    live: "",
    starsText: "MCP Standard",
    backgroundImage: "/project-hover-inquiro.webp",
    hasPin: false,
  },
];
