import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { cvData } from './data/cvData';
import { Heart } from 'lucide-react';
import Icon from './components/Icon';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="app-wrapper">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">AR.</div>
          
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon name="Github" size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon name="Linkedin" size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Icon name="Twitter" size={20} />
            </a>
          </div>

          <p className="footer-text">
            © {currentYear} {cvData.profile.name}. Made with <Heart size={12} style={{ color: 'red', display: 'inline', verticalAlign: 'middle' }} /> and React.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
