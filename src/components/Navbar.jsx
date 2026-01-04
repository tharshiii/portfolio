import React, { useState, useEffect } from 'react';
import '../assets/css/navbar.css';
import { Sun, Moon, List, X } from '@phosphor-icons/react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu mobile

  // 1. Gestion du Thème (Ta logique existante)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // 2. Gestion du Scroll (Ta logique existante)
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        /* On ajuste un peu la détection (1/3 de l'écran) pour que le lien change plus vite */
        if (rect.top <= window.innerHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour fermer le menu quand on clique sur un lien
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* LOGO (Gauche) */}
        <div className="nav-left">
          <a href="#home" className="logo-text" onClick={closeMenu}>
             Tharshica.S
          </a>
        </div>

        {/* ICONE BURGER (Visible uniquement sur mobile) */}
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <List size={28} />}
        </div>

        {/* CONTENEUR LIENS + BOUTONS (Caché sur mobile sauf si open) */}
        <div className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
            
            {/* LIENS (Centre) */}
            <div className="nav-center">
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Qui suis-je ?
              </a>
              <a 
                href="#works" 
                className={`nav-link ${activeSection === 'works' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Projets
              </a>
            </div>

            {/* BOUTONS (Droite) */}
            <div className="nav-right">
              {/* 1. Bouton CONTACT (avant le thème) */}
              <a href="#contact" className="nav-link">
                Me contacter
              </a>
            </div>

        </div>
      </div>
    </nav>
  );
}