import React from 'react';
import { Code, Database, Cpu, Server, Layers } from 'lucide-react';
import { cvData } from '../data/cvData';
import './About.css';

const About = () => {
  const { bio } = cvData.profile;
  const { stats } = cvData;

  const coreCompetencies = [
    {
      icon: <Code size={24} className="competency-icon text-blue" />,
      title: "Custom Web App",
      desc: "Aplikasi web custom yang dirancang sesuai alur bisnis Anda: dashboard, portal, dan sistem internal."
    },
    {
      icon: <Database size={24} className="competency-icon text-emerald" />,
      title: "Sistem B2B",
      desc: "Platform B2B untuk manajemen stok, transaksi, dan integrasi antar-pihak dengan alur yang jelas."
    },
    {
      icon: <Cpu size={24} className="competency-icon text-purple" />,
      title: "Integrasi AI & Otomasi",
      desc: "Otomasi proses dan integrasi AI untuk efisiensi operasional serta pengambilan keputusan."
    },
    {
      icon: <Server size={24} className="competency-icon text-amber" />,
      title: "Cloud & DevOps",
      desc: "Deploy aman dan andal di server/cloud, dengan pipeline rilis yang stabil."
    }
  ];

  const skillGroups = [
    {
      category: "Frontend",
      icon: <Layers size={18} />,
      items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "TailwindCSS", "CSS3 / Sass"]
    },
    {
      category: "Backend & Cloud",
      icon: <Server size={18} />,
      items: ["Node.js", "Express.js", "Laravel", "Prisma ORM", "RESTful APIs", "MySQL / PostgreSQL", "Docker", "Git & GitHub"]
    },
    {
      category: "AI & Otomasi",
      icon: <Cpu size={18} />,
      items: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "FinBERT", "Otomasi Proses"]
    }
  ];

  return (
    <section id="about">
      <div className="container">
        <span className="section-eyebrow fade-in-up">Profil</span>
        <h2 className="section-title fade-in-up">Tentang Kami</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          Software House yang berfokus pada Custom Web App, Sistem B2B, dan Transformasi Digital.
        </p>

        <div className="stats-row fade-in-up animation-delay-200">
          {stats.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="about-wrapper">
          {/* Top Bio & Highlights Grid */}
          <div className="about-header-grid fade-in-up animation-delay-200">
            <div className="about-bio-card glass-card">
              <h3 className="bio-card-title">Profil Perusahaan</h3>
              <p className="about-bio">{bio}</p>

              <div className="bio-focus-tags">
                <span className="focus-badge">Custom Web App</span>
                <span className="focus-badge">Sistem B2B</span>
                <span className="focus-badge">Transformasi Digital</span>
              </div>
            </div>

            {/* Core Competencies 2x2 Grid */}
            <div className="competencies-grid">
              {coreCompetencies.map((comp, idx) => (
                <div key={idx} className="competency-card glass-card">
                  <div className="competency-header">
                    <div className="competency-icon-bg">{comp.icon}</div>
                    <h4 className="competency-title">{comp.title}</h4>
                  </div>
                  <p className="competency-desc">{comp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Skills Section */}
          <div className="skills-section fade-in-up animation-delay-300">
            <h3 className="skills-main-title">Keahlian Teknis &amp; Tools</h3>

            <div className="skills-cards-grid">
              {skillGroups.map((group, gIdx) => (
                <div key={gIdx} className="skill-group-card glass-card">
                  <div className="skill-group-header">
                    <span className="skill-group-icon">{group.icon}</span>
                    <h4 className="skill-group-category">{group.category}</h4>
                  </div>

                  <div className="skill-tags-list">
                    {group.items.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;