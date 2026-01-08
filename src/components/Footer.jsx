import React, { useState } from 'react';
import '../assets/css/footer.css';
import { LinkedinLogo, GithubLogo, EnvelopeSimple } from '@phosphor-icons/react';

// Vérifie que le chemin vers Mentions est correct (ici supposé dans ../pages/)
import Mentions from './Mentions';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    // État pour gérer l'ouverture/fermeture du pop-up
    const [showMentions, setShowMentions] = useState(false);

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    
                    {/* Gauche : Copyright + Bouton Mentions */}
                    <div className="footer-left">
                        <p>
                            © {currentYear} <span>Tharshica.S</span> — Tous droits réservés.
                            <br />
                            
                            {/* Bouton qui ouvre la fenêtre */}
                            <button 
                                onClick={() => setShowMentions(true)} 
                                className="mentions-btn"
                            >
                                Mentions Légales
                            </button>
                        </p>
                    </div>

                    {/* Droite : Réseaux Sociaux */}
                    <div className="footer-socials">
                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/TON-PROFIL" target="_blank" rel="noreferrer" className="social-icon">
                            <LinkedinLogo size={24} weight="fill" />
                        </a>

                        {/* Email */}
                        <a href="mailto:tharshica.s@gmail.com" className="social-icon">
                            <EnvelopeSimple size={24} weight="bold" />
                        </a>
                    </div>

                </div>
            </footer>

            {/* Affiche le Pop-up Mentions si showMentions est vrai */}
            {showMentions && (
                <Mentions onClose={() => setShowMentions(false)} />
            )}
        </>
    );
}