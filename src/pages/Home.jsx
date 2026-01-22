import React from 'react';
import '../assets/css/home.css';
import { ArrowRight, DownloadSimple } from '@phosphor-icons/react';
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

                {/* MODIF ICI : Titre adapté à ton profil Design & Com */}
                <h2 className="hero-subtitle" style={{ 
                    color: '#305F7D', 
                    margin: '15px 0', 
                    fontSize: '1.5rem', 
                    fontFamily: '"Instrument Serif", serif' 
                }}>
                    Designer UI/UX & Communication Digitale
                </h2>

                {/* Rappel du cadre académique (Obligatoire pour les profs) */}
                <p className="hero-text">
                    <strong>Actuellement en BUT2 MMI à l'IUT de Bobigny.</strong><br/>
                   Passionnée et créative, je transforme les besoins utilisateurs en expériences numériques. 
                    Webdesign, Audiovisuel et Communication sont mes terrains de jeu.
                </p>

                {/* Date précise du stage */}
                <div className="status-box">
                À la recherche d'un stage de <strong>12 semaines</strong> à partir du <strong>7 avril 2026</strong>.
                </div>

                <div className="hero-buttons">
                    
                    {/* Bouton 1 : Voir mes réalisations */}
                    <a href="#projets" className="hero-btn">
                        Voir mes réalisations 
                        <ArrowRight size={20} weight="bold" style={{ marginLeft: '8px' }} />
                    </a>

                    {/* Bouton 2 : Mon CV */}
                    <a 
                        href={monCvFile} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="secondary-btn"
                    >
                        Mon CV 
                        <DownloadSimple size={20} weight="bold" style={{ marginLeft: '8px' }} />
                    </a>

                </div>
            </div> 
            {/* Fin du bloc hero-content */}

            {/* --- 2. BLOC IMAGE (DROITE) --- */}
            <div className="hero-image-wrapper">
                
                {/* Les fleurs décoratives */}
                <img src="/img/fleurs.png" alt="" className="flower-decoration" />

                {/* Ta photo */}
                <img 
                    src="/img/portrait.png" 
                    alt="Portrait de Tharshica" 
                    className="hero-img" 
                />
            </div>

        </div>
    );
}