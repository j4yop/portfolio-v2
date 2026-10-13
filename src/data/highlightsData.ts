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
    id: "eureka-iitb",
    title: "Finalist (Top-10) at Eureka! Junior 2022 conducted by E-Cell IIT Bombay",
    badge: "IIT Bombay",
    image: "/highlights/eureka-iitb.svg",
    imageWidth: 600,
    imageHeight: 400,
    imageFit: "cover",
    cardWidth: 260,
  },
  {
    id: "aim-marathon",
    title: "Selected among Top 250 Projects (Healthcare Category) at Atal Innovation Marathon",
    badge: "AIM NITI Aayog",
    image: "/highlights/aim-marathon.svg",
    imageWidth: 600,
    imageHeight: 400,
    imageFit: "cover",
    cardWidth: 260,
  },
  {
    id: "sih-2025",
    title: "Lead Architect of 6-member team in Smart India Hackathon 2025",
    badge: "SIH 2025",
    image: "/highlights/sih-2025.svg",
    imageWidth: 600,
    imageHeight: 400,
    imageFit: "cover",
    cardWidth: 260,
  },
  {
    id: "d8fn-research",
    title: "Research on Differentiable D8 Flow Routing with Physics Constraints for SAR Flood Mapping",
    badge: "Research",
    image: "/highlights/d8fn-research.svg",
    imageWidth: 600,
    imageHeight: 400,
    imageFit: "cover",
    cardWidth: 260,
  },
];
