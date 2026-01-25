import React from 'react';
import '../assets/css/home.css';
// 1. IMPORT CORRIGÉ : J'ai ajouté LinkedinLogo et EnvelopeSimple
import { ArrowRight, DownloadSimple, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';
import monCvFile from '../assets/cvtharshica.pdf';

export default function Home() {
    return (
        <div className="home-container">
            
            {/* --- 1. BLOC TEXTE (GAUCHE) --- */}
            <div className="hero-content">

                <h1 className="hero-title">
                    Tharshica <br/>
                    <span style={{fontStyle: 'italic'}}>SIVA ANANDAN !</span>
                </h1>

                <h2 className="hero-subtitle" style={{ 
                    color: '#305F7D', 
                    margin: '15px 0', 
                    fontSize: '1.5rem', 
                    fontFamily: '"Instrument Serif", serif' 
                }}>
                    Designer UI/UX & Communication Digitale
                </h2>

                <p className="hero-text">
                    <strong>Actuellement en BUT2 MMI à l'IUT de Bobigny.</strong><br/>
                   Passionnée et créative, je transforme les besoins utilisateurs en expériences numériques. 
                    Webdesign, Audiovisuel et Communication sont mes terrains de jeu.
                </p>

                <div className="status-box">
                    À la recherche d'un stage de <strong>12 semaines</strong> à partir du <strong>7 avril 2026</strong>.
                </div>

                <div className="hero-buttons">
                    
                    {/* Bouton 1 : Projets */}
                    <a href="#projets" className="hero-btn">
                        Voir mes réalisations 
                        <ArrowRight size={20} weight="bold" style={{ marginLeft: '8px' }} />
                    </a>

                    {/* Bouton 2 : CV */}
                    <a 
                        href={monCvFile} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="secondary-btn"
                    >
                        Mon CV 
                        <DownloadSimple size={20} weight="bold" style={{ marginLeft: '8px' }} />
                    </a>

                    {/* --- AJOUT DES RÉSEAUX SOCIAUX --- */}
                    {/* J'ai ajouté un style inline pour l'alignement au cas où tu n'as pas le CSS */}
                    <div className="social-links" style={{ display: 'flex', gap: '10px', marginLeft: '10px', alignItems: 'center' }}>
                        
                        <a 
                            href="https://www.linkedin.com/in/tharshica-siva-anandan-b97862358/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="social-btn" 
                            aria-label="LinkedIn"
                            style={{ color: '#305F7D', cursor: 'pointer' }} // Petit style couleur
                        >
                            <LinkedinLogo size={32} />
                        </a>

                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=tharshica.s@gmail.com&su=Prise%20de%20contact&body=Bonjour%20Tharshica..." 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-btn"
                            aria-label="Email"
                            style={{ color: '#305F7D', cursor: 'pointer' }} // Petit style couleur
                        >
                            <EnvelopeSimple size={32} />
                        </a>

                    </div>
                </div>
            </div> 
            {/* Fin du bloc hero-content */}

            {/* --- 2. BLOC IMAGE (DROITE) --- */}
            <div className="hero-image-wrapper">
                <img src="/img/fleurs.png" alt="" className="flower-decoration" />
                <img 
                    src="/img/portrait.png" 
                    alt="Portrait de Tharshica" 
                    className="hero-img" 
                />
            </div>

        </div>
    );
}