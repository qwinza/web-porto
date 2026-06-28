import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { cvData } from '../data/cvData';
import './Experience.css';

const Experience = () => {
  const experiences = cvData.experience;
  const education = cvData.education;

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title fade-in-up">Journey & Expertise</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          A walk through my professional work experience and academic milestones.
        </p>

        <div className="experience-container">
          {/* Work Experience Timeline */}
          <div className="work-experience-section fade-in-up animation-delay-200">
            <h3 className="experience-title-sub">
              <Briefcase size={22} /> Work Experience
            </h3>
            
            <div className="timeline">
              {experiences.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  
                  <div className="timeline-card glass-card">
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-role">{exp.role}</h4>
                        <span className="timeline-company">{exp.company}</span>
                      </div>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    
                    <ul className="timeline-desc-list">
                      {exp.description.map((bullet, bulletIdx) => (
                        <li key={bulletIdx}>{bullet}</li>
                      ))}
                    </ul>
                    
                    <div className="timeline-tags">
                      {exp.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="timeline-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Section */}
          <div className="education-section fade-in-up animation-delay-300">
            <h3 className="experience-title-sub">
              <GraduationCap size={22} /> Education
            </h3>
            
            <div className="education-list">
              {education.map((edu, idx) => (
                <div key={idx} className="education-card glass-card">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <div className="education-institution">{edu.institution}</div>
                  <span className="education-period">{edu.period}</span>
                  <p className="education-details">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
