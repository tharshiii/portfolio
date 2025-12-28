import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/css/contact.css'; // Assurez-vous que le chemin est bon
import { EnvelopeSimple, MapPin, Phone, PaperPlaneRight } from '@phosphor-icons/react';

export default function Contact() {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Envoyer le message");
    const [status, setStatus] = useState(""); // Pour afficher un message de succès/erreur

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText("Envoi en cours...");

        emailjs.sendForm(
            'service_5cvc2rc',   // À remplacer (voir étape 3)
            'VOTRE_TEMPLATE_ID',  // À remplacer (voir étape 3)
            form.current,
            'VOTRE_PUBLIC_KEY'    // À remplacer (voir étape 3)
        )
        .then((result) => {
            console.log(result.text);
            setButtonText("Envoyer le message");
            setStatus("success");
            e.target.reset(); // Vide le formulaire
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
                            <p>Je suis toujours ouverte aux nouveaux projets et opportunités créatives.</p>
                            
                            <div className="info-list">
                                <a href="mailto:contact@tharshica.com" className="info-item">
                                    <div className="icon-box"><EnvelopeSimple size={24} /></div>
                                    <span>contact@tharshica.com</span>
                                </a>
                                <a href="tel:+33600000000" className="info-item">
                                    <div className="icon-box"><Phone size={24} /></div>
                                    <span>06 00 00 00 00</span>
                                </a>
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
                            <div className="form-group">
                                <label>Nom complet</label>
                                <input type="text" name="user_name" placeholder="Votre nom" required />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="user_email" placeholder="votre@email.com" required />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" placeholder="Parlez-moi de votre projet..." required></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                {buttonText} <PaperPlaneRight size={20} weight="bold" />
                            </button>
                            
                            {status === "success" && <p style={{color: 'green', marginTop: '10px', fontSize:'0.9rem'}}>Merci ! Votre message a bien été envoyé.</p>}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}