import React from 'react';
import { Mail, MapPin, ArrowUpRight, Send } from 'lucide-react';
import Icon from './Icon';
import { cvData } from '../data/cvData';
import './Contact.css';

const Contact = () => {
  const { socials } = cvData.profile;

  const getSocialUrl = (name) => {
    const found = socials.find((s) => s.name.toLowerCase() === name.toLowerCase());
    return found ? found.url : '#';
  };

  const emailUrl = "mailto:farisahmad1210@gmail.com?subject=Software%20Engineering%20/%20AI%20Internship%20Inquiry";
  const linkedinUrl = getSocialUrl('linkedin') !== '#' ? getSocialUrl('linkedin') : "https://linkedin.com";
  const githubUrl = getSocialUrl('github') !== '#' ? getSocialUrl('github') : "https://github.com/qwinza";

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title fade-in-up">Get In Touch</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          Interested in technical collaboration, Software Engineering, or AI Internship roles? Feel free to reach out directly through any of the channels below.
        </p>

        <div className="contact-direct-wrapper fade-in-up animation-delay-200">
          {/* Status availability banner */}
          <div className="contact-status-banner glass-card">
            <div className="status-indicator">
              <span className="status-pulse-dot"></span>
              <span className="status-text">Available for Software Engineering & AI Internship Roles</span>
            </div>
            <span className="status-subtext">Based in Bandung, Jawa Barat &bull; Open for Remote / Hybrid Work</span>
          </div>

          {/* Direct Contact Cards Grid */}
          <div className="direct-cards-grid">
            {/* Email Direct Card */}
            <div className="direct-contact-card glass-card">
              <div className="direct-card-header">
                <div className="direct-card-icon icon-blue">
                  <Mail size={24} />
                </div>
                <span className="direct-card-tag">Primary Contact</span>
              </div>
              <h3 className="direct-card-title">Email Address</h3>
              <p className="direct-card-detail">farisahmad1210@gmail.com</p>
              <a
                href={emailUrl}
                className="btn btn-primary direct-card-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email <Send size={16} />
              </a>
            </div>

            {/* LinkedIn Direct Card */}
            <div className="direct-contact-card glass-card">
              <div className="direct-card-header">
                <div className="direct-card-icon icon-cyan">
                  <Icon name="Linkedin" size={24} />
                </div>
                <span className="direct-card-tag">Professional Network</span>
              </div>
              <h3 className="direct-card-title">LinkedIn Profile</h3>
              <p className="direct-card-detail">Aa Faris Ahmad Shidiq</p>
              <a
                href={linkedinUrl}
                className="btn btn-secondary direct-card-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>

            {/* GitHub Direct Card */}
            <div className="direct-contact-card glass-card">
              <div className="direct-card-header">
                <div className="direct-card-icon icon-purple">
                  <Icon name="Github" size={24} />
                </div>
                <span className="direct-card-tag">Code Repositories</span>
              </div>
              <h3 className="direct-card-title">GitHub Profile</h3>
              <p className="direct-card-detail">github.com/qwinza</p>
              <a
                href={githubUrl}
                className="btn btn-secondary direct-card-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repositories <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Location & Info Card */}
            <div className="direct-contact-card glass-card">
              <div className="direct-card-header">
                <div className="direct-card-icon icon-emerald">
                  <MapPin size={24} />
                </div>
                <span className="direct-card-tag">Location</span>
              </div>
              <h3 className="direct-card-title">Current Location</h3>
              <p className="direct-card-detail">Bandung, Jawa Barat, Indonesia</p>
              <div className="location-info-badge">
                <span>Institut Teknologi Nasional Bandung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
