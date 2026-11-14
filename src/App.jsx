import React from 'react';
import { MapPin, Mail, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Icon from './components/Icon';
import logoEmblem from './assets/logo-emblem-pure.png';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="app-wrapper">
      <Navbar />

      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Methodology />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-top-grid">
            {/* Kolom 1: Brand & Profil */}
            <div className="footer-brand-col">
              <div className="footer-logo">
                <img src={logoEmblem} alt="FAS Emblem" className="footer-logo-icon" width="28" height="31" />
                <span>FAS Digital Solutions</span>
              </div>
              <p className="footer-tagline">
                Mitra strategis Anda dalam pengembangan Custom Web App, Sistem ERP, dan Corporate Portal berkinerja tinggi.
              </p>
              <div className="footer-socials">
                <a href="https://github.com/qwinza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Icon name="Github" size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Icon name="Linkedin" size={18} />
                </a>
              </div>
            </div>

            {/* Kolom 2: Layanan & Solusi */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Layanan &amp; Solusi</h4>
              <ul className="footer-links-list">
                <li><a href="#services">Custom Web Application</a></li>
                <li><a href="#services">Corporate Web Presence</a></li>
                <li><a href="#services">API &amp; System Integration</a></li>
                <li><a href="#methodology">Metodologi Kerja (SOP)</a></li>
                <li><a href="#projects">Studi Kasus &amp; Dampak Bisnis</a></li>
              </ul>
            </div>

            {/* Kolom 3: Kontak & Presensi Operasional */}
            <div className="footer-contact-col">
              <h4 className="footer-col-title">Kontak &amp; Presensi</h4>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <MapPin size={18} className="footer-contact-icon" />
                  <div>
                    <span className="footer-contact-label">Alamat Operasional:</span>
                    <span className="footer-contact-val">Bandung, Jawa Barat, Indonesia</span>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <Mail size={18} className="footer-contact-icon" />
                  <div>
                    <span className="footer-contact-label">Kontak Representatif:</span>
                    <a href="mailto:hello@fasdigital.id" className="footer-contact-val footer-email-link">
                      hello@fasdigital.id
                    </a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <MessageCircle size={18} className="footer-contact-icon" />
                  <div>
                    <span className="footer-contact-label">Konsultasi Cepat:</span>
                    <a
                      href="https://wa.me/6281949095389"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-contact-val"
                    >
                      +62 819-4909-5389
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p className="footer-text">
              &copy; {currentYear} FAS Digital Solutions. Seluruh Hak Cipta Dilindungi Undang-Undang.
            </p>
            <p className="footer-subtext">
              Software House &bull; Enterprise IT &amp; B2B Custom Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
