export type Project = {
  id: string;
  number: string;
  name: string;
  label: string;
  summary: string;
  problem: string;
  role: string;
  stack: string[];
  decision: string;
  challenge: string;
  outcome: string;
  demoUrl?: string;
  sourceUrl?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type Experience = {
  company: string;
  affiliation?: string;
  role: string;
  period: string;
  description: string;
};

export const portfolio = {
  name: "",
  monogram: "M.",
  location: "Tucumán - Argentina",
  availableForOpportunities: true,
  introduction:
    "I’m Martin, a Frontend Engineer working with React, Next.js, and TypeScript since 2020. I start from the problem: who uses the product, what it needs to do, and what it will cost to change later. Then I build the simplest interface and architecture that holds up.",
  summary: "Product-minded engineering. Considered interfaces. Code built to last.",
  email: "martincho111986@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/martin-jerez-leal/?isSelfProfile=true",
  githubUrl: "https://github.com/martincho222",
  resumeUrl: "",
  expertise: [
    { category: "Core", items: ["React", "Next.js", "TypeScript"] },
    { category: "Styling", items: ["Tailwind CSS", "SASS", "CSS"] },
    { category: "Engineering", items: ["Testing", "CI/CD", "Code Reviews", "SOLID Principles", "Clean Code"] },
    { category: "Tools", items: ["VS Code", "Git", "Figma", "Postman"] },
    { category: "Backend", items: ["GraphQL", "REST APIs", "NodeJS", "NestJS"] }
  ],
  experience: [
    {
      company: "Baufest",
      role: "Frontend Developer",
      period: "2025 – Present",
      description:
        "Internal applications for Banco Galicia: development and migration.",
    },
    {
      company: "GlobalLogic",
      affiliation: "Hitachi Group",
      role: "Frontend Developer",
      period: "2021 – 2025",
      description:
        "Interfaces and technology migrations for Claro’s internal tools.",
    },
    {
      company: "weKnow Inc.",
      role: "Full Stack Developer",
      period: "2020 – 2021",
      description:
        "Development and maintenance of internal company applications.",
    },
  ] satisfies Experience[],
  projects: [
    {
      id: "project-one",
      number: "01",
      name: "[Project name]",
      label: "Project placeholder · replace before publishing",
      summary:
        "A place to tell the story of a product problem and the interface built around it.",
      problem: "[Describe the user or product problem this work addressed.]",
      role: "[Your role, responsibilities, and collaborators.]",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      decision:
        "[Explain a meaningful architecture, interaction, or rendering decision.]",
      challenge: "[Describe a challenge and how you worked through it.]",
      outcome: "[Add a verified outcome, or remove this field if none is documented.]",
    },
    {
      id: "project-two",
      number: "02",
      name: "[Project name]",
      label: "Project placeholder · replace before publishing",
      summary:
        "A second case study can show a different product shape, constraint, or engineering decision.",
      problem: "[Describe the user or product problem this work addressed.]",
      role: "[Your role, responsibilities, and collaborators.]",
      stack: ["Next.js", "TypeScript", "CSS"],
      decision:
        "[Explain a meaningful architecture, interaction, or rendering decision.]",
      challenge: "[Describe a challenge and how you worked through it.]",
      outcome: "[Add a verified outcome, or remove this field if none is documented.]",
    },
    {
      id: "project-three",
      number: "03",
      name: "[Project name]",
      label: "Project placeholder · replace before publishing",
      summary:
        "A final project slot for work that demonstrates craft, collaboration, and technical judgment.",
      problem: "[Describe the user or product problem this work addressed.]",
      role: "[Your role, responsibilities, and collaborators.]",
      stack: ["React", "Next.js", "TypeScript"],
      decision:
        "[Explain a meaningful architecture, interaction, or rendering decision.]",
      challenge: "[Describe a challenge and how you worked through it.]",
      outcome: "[Add a verified outcome, or remove this field if none is documented.]",
    },
  ] satisfies Project[],
principles: [
  {
    number: "01",
    title: "Clarity over complexity",
    text: "Build focused, reusable components with clear responsibilities. Keep state and data flow predictable, making code easier to understand, maintain, and scale.",
  },
  {
    number: "02",
    title: "Quality by design",
    text: "Create accessible, responsive, and high-performance interfaces from the start. Every detail should serve the user, not just the design.",
  },
  {
    number: "03",
    title: "Better work, together",
    text: "Value collaboration, clear communication, and shared ownership. The best solutions emerge when people exchange ideas and build toward a common goal.",
  },
]
} as const;
