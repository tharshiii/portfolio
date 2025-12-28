import React from 'react';
import '../assets/css/home.css';
import { ArrowRight, DownloadSimple } from '@phosphor-icons/react';

export default function Home() {
    return (
        <div className="home-container">
            
            {/* --- 1. BLOC TEXTE (GAUCHE) --- */}
            <div className="hero-content">
    
                <h1 className="hero-title">
                    Tharshica <br/>
                    <span style={{fontStyle: 'italic'}}>SIVA ANANDAN !</span>
                </h1>

                <p className="hero-text">
                    <strong>Un seul profil, plusieurs expertises.</strong><br/>
                    Passionnée et créative, je transforme les besoins utilisateurs en expériences numériques. 
                    Webdesign, Audiovisuel et Communication sont mes terrains de jeu.
                </p>

                <div className="status-box">
                À la recherche d'un stage de 12 semaines à partir d'avril.
                </div>

                <div className="hero-buttons">
                    <a href="#works" className="hero-btn">
                        Voir mes réalisations
                        <ArrowRight size={18} weight="bold" />
                    </a>

                    <a href="/cv.pdf" download className="secondary-btn">
                        Mon CV
                        <DownloadSimple size={18} weight="bold" />
                    </a>
                </div>
            </div> 
            {/* Fin du bloc hero-content */}

            {/* --- 2. BLOC IMAGE (DROITE) --- */}
            <div className="hero-image-wrapper">
                <img 
                    src="https://placehold.co/400x550/EEE/31343C?text=Tharshica" 
                    alt="Portrait de Tharshica" 
                    className="hero-img" 
                />
            </div>

        </div>
    );
}