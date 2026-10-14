export type Highlight = {
  id: string;
  title: string;
  badge: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageFit?: "cover" | "contain";
  cardWidth?: number;
  link?: string;
};

export const highlightsData: Highlight[] = [
  {
    id: "yc-moss-2026",
    title: "1st Place Winner (Best Use of Moss) at YC Fall 2026 × Moss Zero-Latency Builder Sprint (Pulse911)",
    badge: "1st Place YC F26",
    image: "/highlights/sih-2025.svg",
    imageWidth: 600,
    imageHeight: 400,
    imageFit: "cover",
    cardWidth: 280,
    link: "https://github.com/j4yop/pulse911",
  },
  {
    id: "hackdevengers-2",
    title: "Top 50 Global Finalist (out of 1,500+ submissions) at Hack Devengers 2.0 (contextgc AST Engine on PyPI)",
    badge: "Top 50 Global",
    image: "/highlights/eureka-iitb.svg",
    imageWidth: 600,
    imageHeight: 400,
    imageFit: "cover",
    cardWidth: 280,
    link: "https://github.com/j4yop/context-hackdevengers",
  },
  {
    id: "eureka-iitb",
    title: "National Finalist (Top 10) at Eureka! Junior 2022 conducted by E-Cell IIT Bombay",
    badge: "IIT Bombay",
    image: "/highlights/eureka-iitb.svg",
    imageWidth: 600,
    imageHeight: 400,
    imageFit: "cover",
    cardWidth: 260,
  },
  {
    id: "aim-marathon",
    title: "Selected among Top 250 Projects at Atal Innovation Marathon (AIM, NITI Aayog, Govt. of India)",
    badge: "AIM NITI Aayog",
    image: "/highlights/aim-marathon.svg",
    imageWidth: 600,
    imageHeight: 400,
    imageFit: "cover",
    cardWidth: 260,
  },
  {
    id: "ccps-research",
    title: "Lead Research on Geospatial Physical System Modeling at CCPS, VIT Chennai (0.722 PA-IoU)",
    badge: "CCPS Research",
    image: "/highlights/d8fn-research.svg",
    imageWidth: 600,
    imageHeight: 400,
    imageFit: "cover",
    cardWidth: 280,
    link: "https://drive.google.com/file/d/1N6lqog6sus3Fm4-v5PYpv69yX5Ok6i_E/view?usp=sharing",
  },
];
