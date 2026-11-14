import React, { useState } from 'react';
import { ExternalLink, Lock, Code, Smartphone, ShieldCheck, Server } from 'lucide-react';
import Icon from './Icon';

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);

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
  const slug = category ? category.toLowerCase().replace(/[^a-z0-9]/g, '') : 'portal';

  return (
    <div className="project-card glass-card">
      {/* Dashboard Top Application Bar */}
      <div className="project-dashboard-bar">
        <div className="window-dots" aria-hidden="true">
          <span className="dot dot-close"></span>
          <span className="dot dot-minimize"></span>
          <span className="dot dot-expand"></span>
        </div>
        <span className="window-app-url">sys.fasdigital.id/{slug}</span>
        <span className={`window-status-badge ${isConfidential ? 'status-confidential' : 'status-live'}`}>
          {isConfidential ? <Lock size={11} /> : <Server size={11} />}
          <span>{isConfidential ? 'Confidential' : 'Live System'}</span>
        </span>
      </div>

      <div className="project-image-container">
        {isConfidential ? (
          <div className="confidential-placeholder">
            <div className="confidential-icon-wrapper">
              <ShieldCheck size={26} className="confidential-lock-icon" />
            </div>
            <span className="confidential-title">Private Enterprise Architecture</span>
            <span className="confidential-subtitle">NDA Protected &bull; Source Code Private</span>
          </div>
        ) : !image || imageError ? (
          <div className="project-fallback-placeholder">
            <div className="fallback-dashboard-mockup">
              <div className="mockup-header-row">
                <span className="mockup-chip">{category || 'B2B Enterprise'}</span>
                <span className="mockup-metric">99.9% Uptime</span>
              </div>
              <div className="fallback-icon-wrapper">
                {isMobileProject ? (
                  <Smartphone size={24} className="fallback-icon" />
                ) : (
                  <Code size={24} className="fallback-icon" />
                )}
              </div>
              <span className="fallback-title">{title}</span>
            </div>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            loading="lazy"
            onError={() => setImageError(true)}
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
                title="Lihat Repositori GitHub"
                aria-label="GitHub Repository Link"
              >
                <Icon name="Github" size={18} />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                className="project-action-link"
                target="_blank"
                rel="noopener noreferrer"
                title="Buka Demo Sistem"
                aria-label="Live Demo Link"
              >
                <ExternalLink size={18} />
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

        {description && description.includes(' | ') ? (
          <div className="project-card-desc structured-desc">
            {description.split(' | ').map((part, pIdx) => {
              const colonIndex = part.indexOf(':');
              if (colonIndex !== -1) {
                const label = part.substring(0, colonIndex).trim();
                const value = part.substring(colonIndex + 1).trim();
                return (
                  <div key={pIdx} className="desc-segment">
                    <span className="desc-label">{label}:</span>
                    <span className="desc-value">{value}</span>
                  </div>
                );
              }
              return (
                <div key={pIdx} className="desc-segment">
                  <span>{part}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="project-card-desc">{description}</p>
        )}

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
