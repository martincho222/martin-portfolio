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

export type ExpertiseGroup = {
  category: string;
  items: string[];
};

export type Principle = {
  number: string;
  title: string;
  text: string;
};

export type Portfolio = {
  name: string;
  monogram: string;
  location: string;
  availableForOpportunities: boolean;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    introduction: string;
    summary: string;
  };
  about: {
    heading: string;
    headingAccent: string;
    paragraphs: string[];
  };
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl?: string;
  footer: {
    note: string;
    backToTopLabel: string;
    copyright: string;
  };
  expertise: ExpertiseGroup[];
  experience: Experience[];
  projects: Project[];
  principles: Principle[];
};

export const portfolio: Portfolio = {
  name: "Martin Jerez Leal",
  monogram: "M.",
  location: "Tucumán, Argentina",
  availableForOpportunities: true,

  seo: {
    title: "Martin Jerez Leal — Frontend Developer (React, Next.js, TypeScript)",
    description:
      "Frontend Developer working with React, Next.js, and TypeScript since 2020. Product-minded engineering, considered interfaces, and code built to last.",
  },

  hero: {
    eyebrow: "Frontend Developer / Since 2020",
    headline: "Interfaces built with",
    headlineAccent: "product judgment.",
    introduction:
      "I'm Martin, a Frontend Developer working with React, Next.js, and TypeScript since 2020. I build and modernize the applications people rely on every day, starting from the problem and the people who use it, and choosing the simplest interface and architecture that will hold up as the product evolves.",
    summary:
      "Product-minded engineering. Considered interfaces. Code built to last.",
  },

  about: {
    heading: "Care about the decision,",
    headingAccent: "not just the code.",
    paragraphs: [
      "I've worked in frontend development since 2020, building web applications with React, Next.js, and TypeScript. I started at weKnow Inc. as a Full Stack Developer, developing and maintaining internal company applications and adding features that improved the tools their teams used daily. At GlobalLogic, a Hitachi Group digital engineering company, I built interfaces and worked on technology migrations for internal tools at Claro. Today, at Baufest, I develop and migrate internal applications for Banco Galicia.",
      "Working on internal products has shaped how I build. Their users depend on them to get work done, so clarity, reliability, and a safe path from the old system to the new one matter more than novelty. I like asking why before deciding how, weighing trade-offs, and leaving behind code that other people can read and change with confidence.",
      "I'm based in Tucumán, Argentina, and open to [remote / international] opportunities with product-focused teams.",
    ],
  },

  email: "martincho111986@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/martin-jerez-leal/",
  githubUrl: "https://github.com/martincho222",
  resumeUrl: "",
  footer: {
    note: "Interfaces with purpose. Engineering with care.",
    backToTopLabel: "Back to top",
    copyright: "All rights reserved.",
  },

  expertise: [
    { category: "Core", items: ["React", "Next.js", "TypeScript"] },
    { category: "Styling", items: ["Tailwind CSS", "SASS", "CSS"] },
    {
      category: "Engineering",
      items: ["Testing", "CI/CD", "Code Reviews", "SOLID Principles", "Clean Code"],
    },
    { category: "Tools", items: ["VS Code", "Git", "Figma", "Postman"] },
    { category: "Backend", items: ["GraphQL", "REST APIs", "NodeJS", "NestJS"] },
  ],

  experience: [
    {
      company: "Baufest",
      role: "Frontend Developer",
      period: "2025 – Present",
      description:
        "Development and migration of internal applications for Banco Galicia.",
    },
    {
      company: "GlobalLogic",
      affiliation: "Hitachi Group",
      role: "Frontend Developer",
      period: "2021 – 2025",
      description:
        "Interface development and technology migrations for Claro's internal tools.",
    },
    {
      company: "weKnow Inc.",
      role: "Full Stack Developer",
      period: "2020 – 2021",
      description:
        "Development and maintenance of internal company applications, adding features to improve those tools.",
    }
  ],

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
      outcome:
        "[Add a verified outcome, or remove this field if none is documented.]",
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
      outcome:
        "[Add a verified outcome, or remove this field if none is documented.]",
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
      outcome:
        "[Add a verified outcome, or remove this field if none is documented.]",
    },
  ],

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
};