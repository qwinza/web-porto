import React, { useEffect, useState, useRef } from 'react';
import { cvData } from '../data/cvData';
import './About.css';

const About = () => {
  const { bio } = cvData.profile;
  const stats = cvData.stats;
  const skills = cvData.skills;
  const [animateSkills, setAnimateSkills] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimateSkills(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in-up">About Me</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          A brief insight into my professional journey, key milestones, and core technologies.
        </p>

        <div className="about-grid">
          {/* Bio & Stats */}
          <div className="about-info fade-in-up animation-delay-200">
            <p className="about-bio">{bio}</p>
            
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card glass-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Bars */}
          <div className="skills-container fade-in-up animation-delay-300">
            {skills.map((category, catIdx) => (
              <div key={catIdx} className="skills-category">
                <h3 className="skills-category-title">{category.category}</h3>
                
                <div className="skills-list">
                  {category.items.map((skill, skillIdx) => (
                    <div key={skillIdx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level-percentage">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar-bg">
                        <div 
                          className="skill-bar-fill"
                          style={{ width: animateSkills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
