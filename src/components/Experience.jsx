import React from 'react';
import { Briefcase } from 'lucide-react';
import { cvData } from '../data/cvData';
import './Experience.css';

const Experience = () => {
  const experiences = cvData.experience;

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title fade-in-up">Track Record &amp; Keahlian</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          Pengalaman dan keahlian yang kami bawa ke setiap proyek.
        </p>

        <div className="experience-container">
          {/* Work Experience Timeline */}
          <div className="work-experience-section fade-in-up animation-delay-200">
            <h3 className="experience-title-sub">
              <Briefcase size={22} /> Pengalaman
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
                      {Array.isArray(exp.description) ? (
                        exp.description.map((bullet, bulletIdx) => (
                          <li key={bulletIdx}>{bullet}</li>
                        ))
                      ) : (
                        <li>{exp.description}</li>
                      )}
                    </ul>

                    {exp.technologies && (
                      <div className="timeline-tags">
                        {exp.technologies.map((tech, techIdx) => (
                          <span key={techIdx} className="timeline-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
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

export default Experience;