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
  certificateUrl?: string;
};

export const experiences: ExperienceData[] = [
  {
    title: "Research Intern",
    role: "Centre for Cyber-Physical Systems (CCPS), VIT Chennai",
    dates: "May 2026 – Aug 2026",
    location: "Chennai, Tamil Nadu",
    src: "/Experience-image/vit.svg",
    imageFit: "contain",
    imageZoom: 1,
    type: "Research",
    certificateUrl: "https://drive.google.com/file/d/1N6lqog6sus3Fm4-v5PYpv69yX5Ok6i_E/view?usp=sharing",
    description: `
      Conducted academic research on physical system modeling and geospatial deep learning at the Centre for Cyber-Physical Systems (CCPS), VIT Chennai
      Developed physics-informed deep learning models in PyTorch validating physical environmental flow perimeters across multi-spectral satellite remote sensing imagery
      Formulated five differentiable loss regularizers enforcing physical conservation constraints on the GEO-Bench-2 / Kuro Siwo Benchmark, achieving 0.722 Physics-Aware IoU (PA-IoU) and reducing violation rates to 1.07%
      Integrated digital elevation models (DEM) and Height Above Nearest Drainage (HAND) constraints with terrain-aware D8 flow routing for SAR satellite flood mapping
      Co-developed web-native threat-zone estimation frameworks integrating TNO Multi-Energy blast overpressure and CCPS thermal radiation models with atmospheric wind distortion
    `,
    tech: ["PyTorch", "Geospatial Deep Learning", "Physics-Informed Neural Networks", "SAR Imagery", "Computer Vision", "Mathematical Modeling"],
    metrics: [
      { label: "Evaluation", value: "0.722 PA-IoU" },
      { label: "Violation Rate", value: "1.07%" },
      { label: "Benchmark", value: "GEO-Bench-2" },
      { label: "Credential", value: "Verified Drive" },
    ],
  },
];
