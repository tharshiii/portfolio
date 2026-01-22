import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/css/contact.css';
import { 
    EnvelopeSimple, 
    MapPin, 
    PaperPlaneRight, 
    LinkedinLogo, 
    GithubLogo 
} from '@phosphor-icons/react';

export default function Contact() {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Envoyer le message");
    const [status, setStatus] = useState(""); 

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText("Envoi en cours...");

        // N'oublie pas de remettre tes vraies clés EmailJS ici
        emailjs.sendForm(
            'service_5cvc2rc',    // Ton Service ID
            'template_bixx4ib',  // Ton Template ID
            form.current,
            '6XMhYB6qyJEmfwciR'    // Ta Public Key
        )
        .then((result) => {
            console.log(result.text);
            setButtonText("Envoyer le message");
            setStatus("success");
            e.target.reset(); 
            alert("Message envoyé avec succès !");
        }, (error) => {
            console.log(error.text);
            setButtonText("Réessayer");
            setStatus("error");
            alert("Une erreur est survenue, veuillez réessayer.");
        });
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <h2 className="section-title">Me contacter</h2>
                <p className="section-subtitle">Un projet ? Une idée ? Parlons-en.</p>

                <div className="contact-wrapper">
                    
                    {/* --- CARTE GAUCHE : INFOS --- */}
                    <div className="contact-info-card">
                        <div>
                            <h3>Discutons ensemble</h3>
                            <p>Je suis toujours ouverte aux nouveaux projets et opportunités créatives. Retrouvez-moi aussi sur mes réseaux professionnels.</p>
                            
                            <div className="info-list">
                                {/* 1. EMAIL */}
                                <a href="mailto:contact@tharshica.com" className="info-item">
                                    <div className="icon-box"><EnvelopeSimple size={24} /></div>
                                    {/* Remplace par ton vrai mail pro ou étudiant si besoin */}
                                    <span>tharshica.s@gmail.com</span>
                                </a>

                                {/* 2. LINKEDIN (Remplace le téléphone) */}
                                <a 
                                    href="https://www.linkedin.com/in/TON-PROFIL/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="info-item"
                                >
                                    <div className="icon-box"><LinkedinLogo size={24} /></div>
                                    <span>Mon LinkedIn</span>
                                </a>

                                {/* 4. LOCALISATION (Vague = OK) */}
                                <div className="info-item">
                                    <div className="icon-box"><MapPin size={24} /></div>
                                    <span>Paris, France</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- CARTE DROITE : FORMULAIRE --- */}
                    <div className="contact-form-card">
                        <div className="form-header">
                            <h3>Envoyer un message</h3>
                        </div>

                     <form ref={form} onSubmit={sendEmail}>
    
                            {/* --- NOUVEAU : ON GROUPE LES DEUX CHAMPS SUR UNE LIGNE --- */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Nom complet</label>
                                    <input type="text" name= "name" placeholder="Votre nom" required />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name= "email" placeholder="votre@email.com" required />
                                </div>
                            </div>
                            {/* --------------------------------------------------------- */}

                            <div className="form-group">
                                <label>Message</label>
                                {/* On réduit un peu la hauteur du textarea avec rows="4" */}
                                <textarea name="message" rows="4" placeholder="Parlez-moi de votre projet..." required></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                {buttonText} <PaperPlaneRight size={20} weight="bold" />
                            </button>
                            
                            {status === "success" && <p style={{color: 'green', marginTop: '10px', fontSize:'0.9rem'}}>Merci ! Message envoyé.</p>}

                            <p className="rgpd-text">
                                * En soumettant ce formulaire, vous acceptez que vos informations soient utilisées uniquement pour répondre à votre demande.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}