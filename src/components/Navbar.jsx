import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'services', label: 'Layanan' },
  { id: 'projects', label: 'Portofolio' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'contact', label: 'Kontak' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled state
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 3. Active Section highlight
      const scrollPosition = window.scrollY + 120; // offset for nav bar
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70, // offset navbar height
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <span>FAS Digital Solutions</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="navbar-link-item">
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a
            href="#contact"
            className="navbar-cta-btn"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Konsultasi IT
          </a>

          {/* Hamburger Menu Icon */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Interactive top scroll indicator */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
