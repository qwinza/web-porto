import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { cvData } from '../data/cvData';
import './Hero.css';

const Hero = () => {
  const { name, title, subtitle, avatar, resumeUrl } = cvData.profile;
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [title, 'Software Engineer', 'AI & ML Developer', 'Full-Stack Developer'];
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

  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: 'smooth'
      });
    } else {
      window.location.hash = 'contact';
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content fade-in-up">
            <span className="hero-tagline">Software Engineering & AI Portfolio</span>
            <h1 className="hero-title">
              Hi, I'm <span>{name}</span>
              <br />
              <span className="typed-text-container">
                a {typedText}
                <span className="typing-cursor"></span>
              </span>
            </h1>
            <p className="hero-subtitle">{subtitle}</p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary" onClick={handleContactClick}>
                Get in Touch <ArrowRight size={18} />
              </a>
              <a
                href={resumeUrl || "/resume.pdf"}
                download="Resume_Aa_Faris_Ahmad_Shidiq.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume <FileText size={18} />
              </a>
            </div>
          </div>

          <div className="hero-image-container fade-in-up animation-delay-200">
            <div className="hero-image-wrapper">
              <img
                src={avatar}
                alt={name}
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
