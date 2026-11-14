import { projectsData, experienceData, profileData } from './portfolioData';

export { projectsData, experienceData, profileData };

export const cvData = {
  profile: profileData,
  stats: [
    { value: "5+", label: "Tahun Pengalaman" },
    { value: "40+", label: "Proyek Selesai" },
    { value: "99%", label: "Kepuasan Klien" },
    { value: "15+", label: "Teknologi Dikuasai" },
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
        { name: "PostgreSQL / MySQL", level: 85 },
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
        { name: "Optimasi Performa Web", level: 90 },
      ],
    },
  ],
  experience: experienceData,
  projects: projectsData,
  services: [
    {
      title: "Custom Web Application",
      description:
        "Pengembangan sistem internal (ERP/CRM/HRIS) yang disesuaikan 100% dengan SOP perusahaan Anda.",
      icon: "Cpu",
    },
    {
      title: "Corporate Web Presence",
      description:
        "Pembuatan Company Profile modern untuk memperkuat identitas korporat di mesin pencari.",
      icon: "Globe",
    },
    {
      title: "API & System Integration",
      description:
        "Integrasi sistem otomatisasi (WhatsApp Gateway, Bot Telegram, Payment Gateway) untuk kelancaran operasional.",
      icon: "Zap",
    },
  ],
};
