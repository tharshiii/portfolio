import React, { useState } from 'react';
import '../assets/css/footer.css';
import { LinkedinLogo, GithubLogo, InstagramLogo, EnvelopeSimple } from '@phosphor-icons/react';
// Import du composant Mentions
import Mentions from './Mentions.jsx'; 

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    // État pour gérer l'ouverture/fermeture du pop-up
    const [showMentions, setShowMentions] = useState(false);

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    
                    {/* Gauche : Copyright */}
                    <div className="footer-left">
                        <p>
                            © {currentYear} <span>Tharshica.S</span> — Tous droits réservés.
                            <br />
                            
                            {/* Lien Mentions Légales */}
                            <button 
                                onClick={() => setShowMentions(true)} 
                                style={{
                                    background: 'none', 
                                    border: 'none', 
                                    padding: 0, 
                                    fontFamily: 'Sora', 
                                    fontSize: '0.8rem', 
                                    color: '#888', 
                                    textDecoration: 'underline', 
                                    cursor: 'pointer',
                                    marginTop: '4px'
                                }}
                            >
                                Mentions Légales
                            </button>
                        </p>
                    </div>

                    {/* Droite : Réseaux Sociaux */}
                    <div className="footer-socials">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                            <LinkedinLogo size={24} weight="fill" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
                            <GithubLogo size={24} weight="fill" />
                        </a>
                        <a href="mailto:contact@ramzi.dev" className="social-icon">
                            <EnvelopeSimple size={24} weight="bold" />
                        </a>
                    </div>

                </div>
            </footer>

            {/* Affiche le Pop-up si showMentions est vrai */}
            {showMentions && (
                <Mentions onClose={() => setShowMentions(false)} />
            )}
        </>
    );
}