import { projectsData, experienceData, profileData } from './portfolioData';

export { projectsData, experienceData, profileData };

export const cvData = {
  profile: profileData,
  stats: [
    { value: "5+", label: "Years of Experience" },
    { value: "40+", label: "Completed Projects" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "15+", label: "Open Source Tools" },
  ],
  skills: [
    {
      category: "Frontend Engineering",
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "CSS3 / Sass / CSS Modules", level: 90 },
        { name: "Redux / Zustand", level: 80 },
      ],
    },
    {
      category: "Backend & Cloud",
      items: [
        { name: "Node.js / Express", level: 88 },
        { name: "GraphQL / REST APIs", level: 90 },
        { name: "PostgreSQL / MongoDB", level: 85 },
        { name: "Docker / AWS", level: 75 },
        { name: "Serverless Functions", level: 80 },
      ],
    },
    {
      category: "Design & Tools",
      items: [
        { name: "Figma UI/UX Design", level: 80 },
        { name: "Git & GitHub Actions", level: 88 },
        { name: "Vite / Webpack", level: 85 },
        { name: "Web Performance Optimization", level: 90 },
      ],
    },
  ],
  experience: experienceData,
  education: [
    {
      degree: "Informatics Engineering (Teknik Informatika)",
      institution: "Institut Teknologi Nasional Bandung",
      period: "2024 - Present",
      details:
        "Active undergraduate student focusing on software development systems, object-oriented programming, database engineering, and web application architectures.",
    },
    {
      degree: "Software Engineering (Rekayasa Perangkat Lunak)",
      institution: "SMKN 2 Bandung",
      period: "2019 - 2022",
      details:
        "Vocational high school graduate. Acquired solid foundations in programming fundamentals, database design, and front-end development.",
    },
  ],
  projects: projectsData,
  services: [
    {
      title: "Frontend Development",
      description:
        "Crafting responsive, high-performance web applications using modern React, Next.js, and native browser APIs. Optimized for Core Web Vitals and accessibility.",
      icon: "Cpu",
    },
    {
      title: "UI/UX Design Systems",
      description:
        "Designing interactive, scalable design systems and layouts in Figma, then translating them into robust, clean components with vanilla styles.",
      icon: "Palette",
    },
    {
      title: "API & Database Architecture",
      description:
        "Building secure, scalable RESTful and GraphQL APIs with Node.js and integrating them with relational and non-relational database systems.",
      icon: "Database",
    },
    {
      title: "Performance Optimization",
      description:
        "Auditing and optimizing existing web applications to decrease bundle size, implement asset caching, and achieve 95+ PageSpeed scores.",
      icon: "Zap",
    },
  ],
};
