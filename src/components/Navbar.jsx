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
        // Si le haut de la section arrive vers le haut de l'écran
        if (window.scrollY >= section.offsetTop - window.innerHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
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
          <span>RAMZI.DEV</span>
        </button>
      </div>

      {/* CENTRE : Liens */}
      <div className="nav-center">
        <button
          className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick('home')}
        >
          <span className="titlesbtn">Accueil</span>
        </button>

        <button
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
        >
          <span className="titlesbtn">À propos</span>
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

      {/* DROITE : Bouton Contact */}
      <div className="nav-right">
        <a href="mailto:contact@ramzi.dev" className="cta-button">
          Me contacter
        </a>
      </div>
    </nav>
  );
}