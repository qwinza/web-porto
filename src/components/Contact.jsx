import React, { useState } from 'react';
import Icon from './Icon';
import { cvData } from '../data/cvData';
import './Contact.css';

const Contact = () => {
  const { socials } = cvData.profile;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate server request delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset back to idle status after 4 seconds
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title fade-in-up">Get In Touch</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          Have an exciting project suggestion or want to chat? Fill out the form or reach out directly!
        </p>

        <div className="contact-grid">
          {/* Info Card Column */}
          <div className="contact-info-section fade-in-up animation-delay-200">
            <div className="contact-info-card glass-card">
              <div className="contact-status-badge">
                <span className="status-dot"></span>
                <span>Available for New Projects</span>
              </div>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <h4>Email</h4>
                    <p>farisahmad1210@gmail.com</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Icon name="MapPin" size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <h4>Location</h4>
                    <p>Bandung, Jawa Barat</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="contact-social-title">Connect with me</h4>
                <div className="contact-socials-list">
                  {socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-btn"
                      title={social.name}
                      aria-label={`${social.name} profile link`}
                    >
                      <Icon name={social.icon} size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Card Column */}
          <div className="contact-form-section fade-in-up animation-delay-300">
            <div className="contact-form-card glass-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Project Inquiry / Feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Hi Alex, I'd love to talk about..."
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="form-status-msg success">
                    <Icon name="Check" size={18} />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start' }}
                >
                  {status === 'loading' ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <Icon name="Send" size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
