import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
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
        <About />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <img src={logoEmblem} alt="FAS Emblem" className="footer-logo-icon" width="28" height="31" />
            <span>FAS Digital Solutions</span>
          </div>
          <p className="footer-tagline">Software House &bull; Enterprise IT &amp; Custom Web Solutions</p>
          
          <div className="footer-socials">
            <a href="https://github.com/qwinza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon name="Github" size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon name="Linkedin" size={20} />
            </a>
          </div>

          <p className="footer-text">
            &copy; {currentYear} FAS Digital Solutions. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
