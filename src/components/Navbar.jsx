import React, { useState, useEffect } from 'react';
import '../assets/css/navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  // Détection du scroll pour allumer le bon bouton
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Si la section est majoritairement visible (plus de la moitié)
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Appel initial pour le cas où la page n'est pas tout en haut
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour scroll smooth vers la section
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      {/* GAUCHE : Logo */}
      <div className="nav-left">
        <button className="logo-text" onClick={() => handleNavClick('home')}>
          <span>Tharshica.S</span>
        </button>
      </div>

      {/* CENTRE : Liens */}
      <div className="nav-center">

        <button
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
        >
          <span className="titlesbtn">Qui suis-je ?</span>
        </button>

        <button
          className={`nav-link ${activeSection === 'works' ? 'active' : ''}`}
          onClick={() => handleNavClick('works')}
        >
          <span className="titlesbtn">Projets</span>
        </button>

        <button
          className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
          onClick={() => handleNavClick('skills')}
        >
          <span className="titlesbtn">Compétences</span>
        </button>
      </div>

      <div className="nav-right">
        {/* On utilise handleNavClick pour scroller vers la section #contact */}
        <a 
            href="#contact" 
            className="cta-button"
            onClick={(e) => handleNavClick(e, 'contact')}
        >
          Me contacter
        </a>
      </div>
    </nav>
  );
}