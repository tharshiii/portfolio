import React from 'react';
import '../assets/css/contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <h3 className="contact-title">Parlons ensemble.</h3>
            
            <p className="contact-text">
                Je suis actuellement à la recherche de nouvelles opportunités. 
                Que vous ayez une question ou juste envie de dire bonjour, 
                ma boîte mail est toujours ouverte !
            </p>

            {/* Remplace par ton vrai email */}
            <a href="mailto:tharshica.s@gmail.com" className="email-btn">
                Envoyer un message
            </a>

            <div className="socials">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
            </div>
        </div>
    )
}