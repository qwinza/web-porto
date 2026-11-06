import React from 'react';
import { Mail, MapPin, ArrowUpRight, Send, MessageCircle } from 'lucide-react';
import Icon from './Icon';
import { cvData } from '../data/cvData';
import './Contact.css';

const Contact = () => {
  const { socials } = cvData.profile;

  const getSocialUrl = (name) => {
    const found = socials.find((s) => s.name.toLowerCase() === name.toLowerCase());
    return found ? found.url : '#';
  };

  const whatsappUrl =
    'https://wa.me/6281949095389?text=Halo%20FAS%20Digital%20Solutions%2C%20saya%20ingin%20konsultasi%20IT%20gratis.';
  const emailUrl =
    "mailto:farisahmad1210@gmail.com?subject=Konsultasi%20IT%20FAS%20Digital%20Solutions";
  const linkedinUrl = getSocialUrl('linkedin') !== '#' ? getSocialUrl('linkedin') : "https://linkedin.com";

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title fade-in-up">Konsultasi IT Gratis</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          Bahas kebutuhan digital bisnis Anda. Konsultasi awal gratis, tanpa komitmen.
        </p>

        <div className="contact-direct-wrapper fade-in-up animation-delay-200">
          {/* Status availability banner */}
          <div className="contact-status-banner glass-card">
            <div className="status-indicator">
              <span className="status-pulse-dot"></span>
              <span className="status-text">Menerima Proyek Custom Web App &amp; Sistem B2B</span>
            </div>
            <span className="status-subtext">Berbasis di Bandung &bull; Melayani Klien Seluruh Indonesia</span>
          </div>

          {/* Direct Contact Cards Grid */}
          <div className="direct-cards-grid">
            {/* WhatsApp Direct Card (Primary CTA) */}
            <div className="direct-contact-card glass-card">
              <div className="direct-card-header">
                <div className="direct-card-icon icon-emerald">
                  <MessageCircle size={24} />
                </div>
                <span className="direct-card-tag">Primary Contact</span>
              </div>
              <h3 className="direct-card-title">WhatsApp Business</h3>
              <p className="direct-card-detail">+62 819-4909-5389</p>
              <a
                href={whatsappUrl}
                className="btn btn-primary direct-card-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi IT Gratis <Send size={16} />
              </a>
            </div>

            {/* Email Direct Card */}
            <div className="direct-contact-card glass-card">
              <div className="direct-card-header">
                <div className="direct-card-icon icon-blue">
                  <Mail size={24} />
                </div>
                <span className="direct-card-tag">Email Bisnis</span>
              </div>
              <h3 className="direct-card-title">Email Address</h3>
              <p className="direct-card-detail">farisahmad1210@gmail.com</p>
              <a
                href={emailUrl}
                className="btn btn-secondary direct-card-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kirim Email <Send size={16} />
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
              <h3 className="direct-card-title">LinkedIn</h3>
              <p className="direct-card-detail">Aa Faris Ahmad Shidiq</p>
              <a
                href={linkedinUrl}
                className="btn btn-secondary direct-card-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi via LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Location & Info Card */}
            <div className="direct-contact-card glass-card">
              <div className="direct-card-header">
                <div className="direct-card-icon icon-purple">
                  <MapPin size={24} />
                </div>
                <span className="direct-card-tag">Lokasi</span>
              </div>
              <h3 className="direct-card-title">Basis Operasional</h3>
              <p className="direct-card-detail">Bandung, Jawa Barat, Indonesia</p>
              <div className="location-info-badge">
                <span>Melayani Klien Seluruh Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
