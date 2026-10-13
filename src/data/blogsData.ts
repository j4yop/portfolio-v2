export interface Blog {
  title: string;
  date: string;
  claps: number;
  tags: string[];
  link: string;
  isExternal: boolean;
  slug?: string;
  description?: string;
  readingTime?: string;
  content?: BlogBlock[];
}

export type BlogBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "links";
      items: {
        title: string;
        href: string;
        description: string;
      }[];
    };

export const blogsData: Blog[] = [
  {
    title: "Building SovereignGuard: Zero-Trust Deterministic Authorization for AI Agents",
    date: "Feb 2026",
    claps: 42,
    tags: ["AI Security", "AWS Cedar", "AI Agents", "Rust"],
    link: "/blogs/building-sovereign-guard",
    isExternal: false,
    slug: "building-sovereign-guard",
    readingTime: "8 min read",
    description:
      "Why large language models need mathematical determinism, and how we placed AWS Cedar formal logic between agent tool calls and physical system resources with sub-0.2ms latency.",
    content: [
      {
        type: "paragraph",
        text: "Autonomous AI agents running directly on developer workstations are taking over modern workflows: reading project configurations, searching internal codebases, calling microservices, and executing terminal commands.",
      },
      {
        type: "paragraph",
        text: "But here lies the fundamental security contradiction: Large Language Models are probabilistic reasoning engines. Security boundaries require mathematical determinism.",
      },
      {
        type: "quote",
        text: "Prompt-based safeguards ('Never read .env files') are jailbreakable by design. A single prompt injection can persuade an agent to bypass rules.",
      },
      {
        type: "heading",
        text: "Why AWS Cedar Changes the Game for AI Safety",
      },
      {
        type: "paragraph",
        text: "AWS Cedar was built using automated reasoning and formal verification. When Cedar evaluates a request, it processes Attribute-Based Access Control (ABAC) rules under strict permit and forbid semantics with default-deny.",
      },
      {
        type: "paragraph",
        text: "Compiled to native Rust bindings, Cedar evaluates security policies in under 0.2 milliseconds. If Cedar says DENY, the action is physically aborted before the disk or network socket is touched.",
      },
      {
        type: "heading",
        text: "The SovereignGuard Architecture",
      },
      {
        type: "paragraph",
        text: "SovereignGuard sits directly between the agent's reasoning loop (AWS Strands Agents SDK) and local operating system resources:",
      },
      {
        type: "list",
        items: [
          "Intercepts tool invocations before execution",
          "Translates tool payloads into strongly typed Cedar entities (Principal, Action, Resource, Context)",
          "Evaluates ABAC policies in sub-0.2ms via compiled Rust core",
          "Physically halts unauthorized operations and writes immutable audit logs",
        ],
      },
      {
        type: "heading",
        text: "Deterministic Circuits Over Probabilistic Promises",
      },
      {
        type: "paragraph",
        text: "By enforcing policy-as-code at the runtime boundary, developers can give autonomous agents full power over tools without worrying about prompt injections leaking sensitive keys or executing unauthorized operations.",
      },
    ],
  },
];

export const blogPosts = blogsData.filter(
  (blog): blog is Blog & { slug: string; content: BlogBlock[] } =>
    typeof blog.slug === "string" && Array.isArray(blog.content),
);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((blog) => blog.slug === slug);
}
