import React, { useState, useEffect } from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { cvData } from '../data/cvData';
import logoImage from '../assets/logo-agency.png';
import './Hero.css';

const Hero = () => {
  const { subtitle } = cvData.profile;
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Custom Web App', 'Sistem B2B', 'Transformasi Digital', 'Integrasi AI'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex, words]);

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
            <span className="hero-tagline">Software House &bull; IT &amp; Custom Web Solutions</span>
            <h1 className="hero-title">
              Spesialis <span className="typed-accent">{typedText}</span>
              <span className="typing-cursor"></span>
            </h1>
            <p className="hero-subtitle">{subtitle}</p>

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
                Lihat Portofolio <Briefcase size={18} />
              </a>
            </div>
          </div>

          <div className="hero-image-container fade-in-up animation-delay-200">
            <div className="hero-image-wrapper">
              <img src={logoImage} alt="Logo FAS Digital Solutions" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;