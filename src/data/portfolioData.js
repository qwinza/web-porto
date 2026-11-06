import profileImage from '../assets/profile.jpeg';
import resumePdf from '../assets/Curriculum Vitae.pdf';

export const projectsData = [
  {
    id: 1,
    title:
      "Salman Bumindo - Corporate Portal",
    category: "Company Profile & Portal",
    techStack: ["React", "Node.js", "Express", "Prisma", "MySQL"],
    description:
      "Portal korporat untuk perusahaan distribusi: company profile, katalog produk, dan dashboard internal terintegrasi. Meningkatkan kredibilitas digital sekaligus mempercepat alur kerja tim.",
    image: null,
    isConfidential: false,
    link: null,
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 2,
    title: "HASILTANI - Direct Trade Platform",
    category: "Sistem B2B",
    techStack: ["Laravel", "MySQL", "REST API", "TailwindCSS"],
    description:
      "Platform perdagangan langsung hasil tani yang menghubungkan petani dengan pembeli grosir. Fitur manajemen stok, penawaran harga, dan riwayat transaksi B2B.",
    image: null,
    isConfidential: false,
    link: null,
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 3,
    title: "Sistem Ujian Sekolah Terintegrasi",
    category: "Custom Web App",
    techStack: ["Express.js", "Prisma ORM", "JWT", "Speech-to-Text API"],
    description:
      "Sistem ujian digital untuk institusi pendidikan: penjadwalan multi-sesi, autentikasi JWT, dan penilaian otomatis berbasis Speech-to-Text.",
    image: null,
    isConfidential: false,
    link: null,
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 4,
    title: "QRPresence - Attendance & Access System",
    category: "Internal Tools",
    techStack: ["React", "Laravel", "TailwindCSS", "QR Code"],
    description:
      "Aplikasi absensi dan akses berbasis QR untuk operasional harian. Frontend dan backend dipisah untuk skalabilitas dan respons UI yang cepat.",
    image: null,
    isConfidential: false,
    link: null,
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 5,
    title: "Automated Trading System (XAUUSD/BTC)",
    category: "Automation & Fintech",
    techStack: ["Python", "MQL5", "FinBERT", "Optuna"],
    description:
      "Sistem otomasi trading yang menggabungkan indikator teknikal dengan analisis sentimen berita. Optimasi hyperparameter untuk akurasi keputusan di pasar finansial.",
    image: null,
    isConfidential: false,
    link: null,
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 6,
    title: "Logistics Expedition Integration",
    category: "Integrasi API",
    techStack: ["React Native", "Expo", "REST API", "Express.js"],
    description:
      "Integrasi pengiriman real-time dengan API logistik pihak ketiga (RajaOngkir/BinderByte): kalkulasi ongkir otomatis, routing dinamis, dan pelacakan paket.",
    image: null,
    isConfidential: false,
    link: null,
    githubUrl: null,
    liveUrl: null
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Lead Developer & Founder",
    company: "FAS Digital Solutions",
    period: "2024 - Sekarang",
    description: [
      "Memimpin pengembangan Custom Web App dan Sistem B2B untuk klien UMKM hingga korporat.",
      "Merancang arsitektur aplikasi, API, dan database yang aman serta siap skala.",
      "Mengelola siklus proyek end-to-end: konsultasi, desain, development, hingga deploy."
    ],
    technologies: ["React", "Node.js", "Express", "Laravel", "Prisma", "MySQL", "Docker"]
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Proyek Korporat & Institusi",
    period: "2024 - Sekarang",
    description:
      "Membangun portal akademik dan aplikasi admin berskala institusi dengan stack web modern, integrasi database, dan autentikasi yang aman.",
    technologies: ["React", "Node.js", "Express", "SQL", "Git", "REST APIs"]
  },
  {
    id: 3,
    role: "Automation & Systems Engineer",
    company: "Fintech & Otomasi",
    period: "2023 - Sekarang",
    description:
      "Mengembangkan sistem otomasi dan integrasi AI untuk analisis data serta pengambilan keputusan berbasis aturan (rule-based & ML).",
    technologies: ["Python", "MQL5", "FinBERT", "Computer Vision", "Automation"]
  }
];

export const profileData = {
  name: "FAS Digital Solutions",
  title: "Software House - Custom Web App & Sistem B2B",
  subtitle:
    "Membangun solusi digital custom untuk bisnis Anda, dari company profile hingga sistem B2B dan transformasi digital.",
  bio: "FAS Digital Solutions adalah Software House yang berfokus pada pengembangan Custom Web App, Sistem B2B, dan Transformasi Digital. Dipimpin oleh Aa Faris Ahmad Shidiq selaku Lead Developer",
  avatar: profileImage,
  resumeUrl: resumePdf,
  socials: [
    { name: "Github", url: "https://github.com/qwinza", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Email", url: "mailto:farisahmad1210@gmail.com", icon: "Mail" }
  ]
};
