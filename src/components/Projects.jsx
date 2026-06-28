import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Icon from './Icon';
import { cvData } from '../data/cvData';
import './Projects.css';

const Projects = () => {
  const projects = cvData.projects;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Full-Stack', 'Design'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title fade-in-up">Projects</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          A selection of projects that showcase my software engineering skills and UI design principles.
        </p>

        {/* Filter Navigation */}
        <div className="projects-filter-nav fade-in-up animation-delay-200">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid display with unique entry keys to re-trigger animate-in on filter change */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div 
              key={`${project.title}-${activeCategory}`} 
              className="project-card-wrapper fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="project-card glass-card">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600';
                  }} />
                  
                  {/* Hover Overlay Buttons */}
                  <div className="project-overlay">
                    <a 
                      href={project.githubUrl} 
                      className="project-action-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository Link"
                    >
                      <Icon name="Github" size={20} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="project-action-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="View Live Site Demo"
                      aria-label="Live Demo Link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="project-info">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                  
                  <div className="project-card-tags">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="project-card-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
