import React from 'react';
import { ExternalLink, Lock, Code, Smartphone } from 'lucide-react';
import Icon from './Icon';

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    techStack,
    tags,
    category,
    isConfidential,
    link,
    githubUrl,
    liveUrl
  } = project;

  // Render techStack if provided, otherwise fallback to tags
  const technologies = techStack || tags || [];

  // Determine repository & demo URLs
  const repoUrl = githubUrl || (link && link.includes('github') ? link : null);
  const demoUrl = liveUrl || (link && !link.includes('github') ? link : null);

  const isMobileProject = category && category.toLowerCase().includes('mobile');

  return (
    <div className="project-card glass-card">
      <div className="project-image-container">
        {isConfidential ? (
          <div className="confidential-placeholder">
            <div className="confidential-icon-wrapper">
              <Lock size={26} className="confidential-lock-icon" />
            </div>
            <span className="confidential-title">Private / Confidential Project</span>
            <span className="confidential-subtitle">NDA Protected &bull; Source Code Private</span>
          </div>
        ) : !image ? (
          <div className="project-fallback-placeholder">
            <div className="fallback-icon-wrapper">
              {isMobileProject ? (
                <Smartphone size={26} className="fallback-icon" />
              ) : (
                <Code size={26} className="fallback-icon" />
              )}
            </div>
            <span className="fallback-title">{category || 'Software Project'}</span>
            <span className="fallback-subtitle">{title}</span>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}

        {/* Hover Overlay Actions - Hidden for confidential projects */}
        {!isConfidential && (repoUrl || demoUrl) && (
          <div className="project-overlay">
            {repoUrl && (
              <a
                href={repoUrl}
                className="project-action-link"
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Repository"
                aria-label="GitHub Repository Link"
              >
                <Icon name="Github" size={20} />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                className="project-action-link"
                target="_blank"
                rel="noopener noreferrer"
                title="View Live Site Demo"
                aria-label="Live Demo Link"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="project-info">
        <div className="project-header-row">
          <h3 className="project-card-title">{title}</h3>
          {category && <span className="project-category-badge">{category}</span>}
        </div>

        <p className="project-card-desc">{description}</p>

        <div className="project-card-tags">
          {technologies.map((tech, tagIdx) => (
            <span key={tagIdx} className="project-card-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
