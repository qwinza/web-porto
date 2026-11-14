import React from 'react';
import { ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react';
import { cvData } from '../data/cvData';
import logoImage from '../assets/logo-full-transparent.png';
import './Hero.css';

const Hero = () => {
  const { subtitle } = cvData.profile;

  const whatsappUrl =
    'https://wa.me/6281949095389?text=Halo%20FAS%20Digital%20Solutions%2C%20saya%20ingin%20konsultasi%20IT%20gratis.';

  const scrollToId = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    } else {
      window.location.hash = id;
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content fade-in-up">
            <span className="hero-eyebrow">SOFTWARE HOUSE &bull; IT &amp; CUSTOM WEB SOLUTIONS</span>
            
            <h1 className="hero-title">
              <span className="hero-title-main">Digitalisasi Bisnis Anda.</span>
              <span className="hero-title-accent">Lebih Cepat, Lebih Efisien, Skalabel.</span>
            </h1>

            <p className="hero-subtitle">
              FAS Digital Solutions adalah mitra strategis Anda dalam pengembangan Custom Web App, Sistem ERP, dan Corporate Portal berkinerja tinggi.
            </p>

            <div className="hero-buttons">
              <a
                href={whatsappUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi IT Gratis <ArrowRight size={18} />
              </a>
              <a
                href="#projects"
                className="btn btn-secondary"
                onClick={(e) => scrollToId(e, 'projects')}
              >
                Lihat Studi Kasus <Briefcase size={18} />
              </a>
            </div>

            {/* B2B Trust Badge under CTA */}
            <div className="hero-trust-badge">
              <span className="trust-badge-text">
                Dipercaya oleh: <strong className="trust-client">Salman Bumindo</strong> | <strong className="trust-client">HASILTANI</strong>
              </span>
            </div>

            <div className="hero-trust-row">
              <span className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" /> Solusi Skalabel
              </span>
              <span className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" /> Keamanan Standar B2B
              </span>
              <span className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" /> Bergaransi &amp; Siap Deploy
              </span>
            </div>
          </div>

          <div className="hero-image-container fade-in-up animation-delay-200">
            <div className="hero-brand-frame">
              <div className="hero-image-wrapper">
                <img 
                  src={logoImage} 
                  alt="Logo FAS Digital Solutions HD" 
                  className="hero-logo-img"
                  width="1024"
                  height="1024"
                />
              </div>

              {/* Floating Corporate Badges */}
              <div className="floating-badge badge-top">
                <span className="badge-dot"></span>
                <span className="badge-text">Enterprise IT Partner</span>
              </div>
              <div className="floating-badge badge-bottom">
                <span className="badge-pulse"></span>
                <span className="badge-text">99.9% Production SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
