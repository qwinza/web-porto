export const cvData = {
  profile: {
    name: "Aa Faris Ahmad Shidiq",
    title: "Fullstack and Machine Leaning Enthusiast",
    subtitle:
      "Creating seamless and user-friendly interfaces with a strong foundation in both frontend and backend development",
    bio: "I am an Informatics Engineering student with a strong interest in full-stack development and machine learning. I am passionate about building high-performance web applications and exploring the potential of artificial intelligence to solve real-world problems. I am a quick learner, a team player, and always eager to take on new challenges.",
    avatar: "../src/assets/profile.jpg",
    resumeUrl: "#",
    socials: [
      { name: "Github", url: "https://github.com/qwinza", icon: "Github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
      { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
      { name: "Email", url: "farisahmad1210@gmail.com", icon: "Mail" },
    ],
  },
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
  experience: [
    {
      role: "Google Student Ambassador",
      company: "Google",
      period: "2026 - Present",
      description: [
        "Acted as a liaison between Google and the campus student community to share knowledge about modern cloud technologies and developer programs.",
        "Organized tech workshops, info-sessions, and coding bootcamps to introduce students to Google Developer tools and developer resources.",
        "Collaborated with local student tech groups to facilitate technical growth and networking opportunities.",
      ],
      technologies: [
        "Google Workspace",
        "Firebase",
        "Google Cloud",
        "Community Building",
      ],
    },
    {
      role: "Fullstack Developer",
      company: "TIK Institut Teknologi Nasional Bandung",
      period: "2024 - Present",
      description: [
        "Developed and maintained university-wide academic portals and administrative web applications utilizing modern stack web frameworks.",
        "Designed database schemas and optimized API endpoints to manage large datasets for university registration and scheduling systems.",
        "Collaborated with university IT administrators to ensure application stability, security compliance, and clean deployments.",
      ],
      technologies: ["React", "Node.js", "Express", "SQL", "Git", "REST APIs"],
    },
    {
      role: "Head Store",
      company: "PT Zhisheng Mixue",
      period: "2022 - 2023",
      description: [
        "Managed day-to-day storefront operations, inventory logistics, and quality assurance workflows to meet customer service metrics.",
        "Led and coached a team of 10+ store associates, optimizing work shifts, employee onboarding, and collaborative store floor efficiency.",
        "Monitored store-level revenue records and provided weekly sales performance evaluations to regional management.",
      ],
      technologies: [
        "Store Operations",
        "Inventory Control",
        "Financial Auditing",
        "Team Leadership",
      ],
    },
  ],
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
  projects: [
    {
      title: "Aura Analytics Dashboard",
      description:
        "A premium SaaS dashboard featuring real-time financial tracking, interactive charts, and user behavior analysis tools. Built with a focus on web performance and smooth micro-interactions.",
      image: "/images/project-aura.webp", // We will generate these project cards
      tags: ["React", "Zustand", "Chart.js", "Vanilla CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Frontend",
    },
    {
      title: "Scribe CMS Platform",
      description:
        "A headless Content Management System with a modular block editor, nested page structures, collaborative editing, and an automated deployment engine for static site generators.",
      image: "/images/project-scribe.webp",
      tags: ["Next.js", "Node.js", "PostgreSQL", "GraphQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Full-Stack",
    },
    {
      title: "Synapse UI System",
      description:
        "A modern design system containing 40+ accessible React components styled purely with Vanilla CSS. Designed with glassmorphic styles, dark mode by default, and high customizability.",
      image: "/images/project-synapse.webp",
      tags: ["React", "Storybook", "Vanilla CSS", "NPM Package"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Design",
    },
    {
      title: "Solaria E-Commerce API",
      description:
        "A secure, high-throughput backend service API supporting multi-currency carts, discount rules, payment gateway integrations, and instant webhooks. Serves 1M+ requests per day.",
      image: "/images/project-solaria.webp",
      tags: ["Node.js", "Express", "Redis", "Docker", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Full-Stack",
    },
  ],
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
