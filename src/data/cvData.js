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
  education: [
    {
      degree: "S1 Teknik Informatika",
      institution: "Institut Teknologi Nasional Bandung",
      period: "2024 - Sekarang",
      details:
        "Fokus pada rekayasa perangkat lunak, pemrograman berorientasi objek, perancangan basis data, dan arsitektur aplikasi web.",
    },
    {
      degree: "Rekayasa Perangkat Lunak (RPL)",
      institution: "SMKN 2 Bandung",
      period: "2019 - 2022",
      details:
        "Fondasi pemrograman, desain basis data, dan pengembangan front-end.",
    },
  ],
  projects: projectsData,
  services: [
    {
      title: "Pengembangan Custom Web App",
      description:
        "Aplikasi web custom yang dirancang sesuai alur bisnis Anda: dashboard, portal, dan sistem internal yang responsif dan cepat.",
      icon: "Cpu",
    },
    {
      title: "UI/UX & Design System",
      description:
        "Desain antarmuka dan design system yang konsisten di Figma, lalu diimplementasikan menjadi komponen yang rapi dan aksesibel.",
      icon: "Palette",
    },
    {
      title: "Arsitektur API & Database",
      description:
        "Membangun REST API dan GraphQL yang aman dengan Node.js, terintegrasi ke basis data relasional maupun non-relasional.",
      icon: "Database",
    },
    {
      title: "Optimasi Performa",
      description:
        "Audit dan optimasi aplikasi web untuk memperkecil bundle, menerapkan caching aset, dan mencapai skor PageSpeed 95+.",
      icon: "Zap",
    },
  ],
};
