import React from 'react';
import { Code, Brain, Sparkles, Database, Server, Cpu, Layers } from 'lucide-react';
import { cvData } from '../data/cvData';
import './About.css';

const About = () => {
  const { bio } = cvData.profile;

  const coreCompetencies = [
    {
      icon: <Code size={24} className="competency-icon text-blue" />,
      title: "Full-Stack Web Engineering",
      desc: "Building high-performance web applications with React, Node.js, Express, and modern ORMs."
    },
    {
      icon: <Brain size={24} className="competency-icon text-purple" />,
      title: "AI & Computer Vision",
      desc: "Developing deep learning models with PyTorch/TensorFlow, focusing on Multi-Head Attention architectures."
    },
    {
      icon: <Sparkles size={24} className="competency-icon text-amber" />,
      title: "Google Student Ambassador",
      desc: "Leading technical workshops, cloud developer programs, and building student tech communities."
    },
    {
      icon: <Database size={24} className="competency-icon text-emerald" />,
      title: "Backend & API Architecture",
      desc: "Designing secure RESTful APIs, database schemas (PostgreSQL/SQL), and scalable backend workflows."
    }
  ];

  const skillGroups = [
    {
      category: "Frontend Development",
      icon: <Layers size={18} />,
      items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "TailwindCSS", "CSS3 / Sass", "Zustand / Redux"]
    },
    {
      category: "Backend & Cloud Infrastructure",
      icon: <Server size={18} />,
      items: ["Node.js", "Express.js", "Prisma ORM", "RESTful APIs", "PostgreSQL", "SQL", "Docker", "Git & GitHub"]
    },
    {
      category: "AI, Machine Learning & Automation",
      icon: <Cpu size={18} />,
      items: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "Multi-Head Attention", "FinBERT", "Speech-to-Text API"]
    }
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title fade-in-up">About Me</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          A dedicated Informatics Engineering student specializing in Software Engineering and Artificial Intelligence.
        </p>

        <div className="about-wrapper">
          {/* Top Bio & Highlights Grid */}
          <div className="about-header-grid fade-in-up animation-delay-200">
            <div className="about-bio-card glass-card">
              <h3 className="bio-card-title">Professional Overview</h3>
              <p className="about-bio">{bio}</p>
              
              <div className="bio-focus-tags">
                <span className="focus-badge">Software Engineering</span>
                <span className="focus-badge">AI & Machine Learning</span>
                <span className="focus-badge">Computer Vision Research</span>
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
            <h3 className="skills-main-title">Technical Expertise & Tooling</h3>
            
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
