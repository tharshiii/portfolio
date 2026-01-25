import React, { useState } from 'react';
import '../assets/css/footer.css';
// 1. AJOUT de l'icône FileText
import { LinkedinLogo, EnvelopeSimple, FileText } from '@phosphor-icons/react';
import Mentions from './Mentions';

// 2. IMPORT DU CV (Indispensable si le fichier est dans assets)
// Vérifie bien que le nom "cvtharshica.pdf" est exact (majuscules/minuscules)
import monCvFile from '../assets/cvtharshica.pdf'; 

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [showMentions, setShowMentions] = useState(false);

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    
                    {/* Partie Gauche */}
                    <div className="footer-left">
                        <p>
                            © {currentYear} <span>Tharshica.S</span> — Tous droits réservés.
                            <br />
                            <button 
                                onClick={() => setShowMentions(true)} 
                                className="mentions-btn"
                            >
                                Mentions Légales
                            </button>
                        </p>
                    </div>

                    {/* Partie Droite (Réseaux) */}
                    <div className="footer-socials">
                        <a href="https://www.linkedin.com/in/tharshica-siva-anandan-b97862358/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                            <LinkedinLogo size={24} weight="fill" />
                        </a>

                        {/* Email Gmail */}
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=tharshica.s@gmail.com&su=Prise%20de%20contact&body=Bonjour%20Tharshica,%0A%0AJe%20souhaiterais%20échanger%20avec%20vous%20concernant..." 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon"
                            aria-label="Email"
                         >
                            <EnvelopeSimple size={24} weight="bold" />
                        </a>

                        {/* 3. LE LIEN VERS LE CV */}
                        <a 
                            href={monCvFile}  // <--- On utilise la variable importée ici
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon"
                            aria-label="Télécharger mon CV"
                            title="Mon CV"
                        >
                            <FileText size={24} weight="bold" />
                        </a>

                    </div>
                </div> 
            </footer>

            {/* Pop-up Mentions */}
            {showMentions && (
                <Mentions onClose={() => setShowMentions(false)} />
            )}
        </>
    );
}