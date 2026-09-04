import profileImage from '../assets/profile.jpeg';
import resumePdf from '../assets/Curriculum Vitae.pdf';

export const projectsData = [
  {
    id: 1,
    title: "SDIT Language Examination System",
    category: "Web Development",
    techStack: ["Express.js", "Prisma ORM", "JWT", "Speech-to-Text API"],
    description: "Developed an end-to-end language examination system for SDIT Daarul Huda. Features include multi-session exam scheduling, secure JWT authentication, and real-time Speech-to-Text integration for automated grading.",
    image: null,
    isConfidential: true,
    link: null,
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 2,
    title: "Facial Expression Recognition App",
    category: "AI & Mobile",
    techStack: ["Python", "React Native", "MobileNetV2", "Bi-LSTM"],
    description: "Designed a mobile interface integrated with a Python backend to analyze facial expressions. Utilized a lightweight deep learning model optimized for mobile devices for real-time video capture processing.",
    image: null,
    isConfidential: true,
    link: null,
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 3,
    title: "QR-Based School Attendance System",
    category: "Full-Stack Web",
    techStack: ["React.js", "Laravel", "TailwindCSS"],
    description: "Built a Minimum Viable Product (MVP) for daily attendance scanning using QR codes. Separated frontend and backend logic to ensure scalability and fast UI response times.",
    image: null,
    isConfidential: true,
    link: null,
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 4,
    title: "Automated Sentiment Trading Bot (XAUUSD/BTC)",
    category: "Data & Automation",
    techStack: ["Python", "MQL5", "FinBERT", "Optuna"],
    description: "Developed an Expert Advisor (EA) combining technical indicators with news sentiment analysis using FinBERT. Optimized hyperparameter algorithms to improve decision-making accuracy in financial markets.",
    image: null,
    isConfidential: true,
    link: null,
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 5,
    title: "Mobile Expedition Integration for Souvenirs",
    category: "Mobile Development",
    techStack: ["React Native", "Expo", "REST API", "Express.js"],
    description: "Developed a mobile application feature for real-time shipping integration. Implemented third-party logistics APIs (e.g., RajaOngkir/BinderByte) to automate shipping cost calculations, dynamic routing, and live package tracking for local souvenir (oleh-oleh) deliveries.",
    image: null,
    isConfidential: true,
    link: null,
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 6,
    title: "Micro-Expression Detection via Multi-Head Attention",
    category: "AI & Computer Vision",
    techStack: ["Python", "PyTorch/TensorFlow", "Multi-Head Attention", "Deep Learning"],
    description: "Engineered an advanced Computer Vision model to detect subtle facial micro-expressions. Integrated a Multi-Head Attention mechanism to effectively capture complex spatial-temporal features from short video frames, significantly improving detection accuracy over traditional CNNs.",
    image: null,
    isConfidential: true,
    link: null,
    githubUrl: null,
    liveUrl: null
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Google Student Ambassador",
    company: "Google (Campus Program)",
    period: "2026 - Present",
    description: "Managed campaign deliverables and designed structured visual assets for social media, enhancing technical community engagement on campus.",
    technologies: [
      "Google Workspace",
      "Firebase",
      "Google Cloud",
      "Community Building"
    ]
  },
  {
    id: 2,
    role: "AI Researcher (Computer Vision)",
    company: "Academic / Independent Project",
    period: "2026",
    description: "Conducted end-to-end research on facial micro-expressions, developing and training deep learning models utilizing Multi-Head Attention architectures to process complex visual data sequences.",
    technologies: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "Multi-Head Attention",
      "Deep Learning"
    ]
  },
  {
    id: 3,
    role: "Fullstack Developer",
    company: "TIK Institut Teknologi Nasional Bandung",
    period: "2024 - Present",
    description: "Developed and maintained university-wide academic portals and administrative web applications utilizing modern stack web frameworks.",
    technologies: ["React", "Node.js", "Express", "SQL", "Git", "REST APIs"]
  },
  {
    id: 4,
    role: "Head Store",
    company: "PT Zhisheng Mixue",
    period: "2022 - 2023",
    description: "Managed day-to-day storefront operations, inventory logistics, and quality assurance workflows to meet customer service metrics.",
    technologies: [
      "Store Operations",
      "Inventory Control",
      "Financial Auditing",
      "Team Leadership"
    ]
  }
];

export const profileData = {
  name: "Aa Faris Ahmad Shidiq",
  title: "Fullstack and Machine Learning Enthusiast",
  subtitle:
    "Creating seamless and user-friendly interfaces with a strong foundation in both frontend and backend development",
  bio: "I am an Informatics Engineering student with a strong interest in full-stack development and machine learning. I am passionate about building high-performance web applications and exploring the potential of artificial intelligence to solve real-world problems. I am a quick learner, a team player, and always eager to take on new challenges.",
  avatar: profileImage,
  resumeUrl: resumePdf,
  socials: [
    { name: "Github", url: "https://github.com/qwinza", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
    { name: "Email", url: "mailto:farisahmad1210@gmail.com", icon: "Mail" }
  ]
};
