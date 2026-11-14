import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { cvData } from '../data/cvData';
import './Projects.css';

const Projects = () => {
  const projects = cvData.projects;
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamically build category filters based on current projects
  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category).filter(Boolean)));
  const categories = ['All', ...uniqueCategories];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects">
      <div className="container">
        <span className="section-eyebrow fade-in-up">Studi Kasus</span>
        <h2 className="section-title fade-in-up">Studi Kasus &amp; Dampak Bisnis</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          Studi kasus implementasi solusi teknologi kami dalam mentransformasi proses bisnis, memangkas inefisiensi operasional, dan menghadirkan dampak nyata bagi klien.
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

        {/* Dynamic Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id || `${project.title}-${idx}`}
              className="project-card-wrapper fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
