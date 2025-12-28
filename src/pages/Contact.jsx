import React, { useRef, useState } from 'react'; // Ajout de useRef et useState
import '../assets/css/contact.css';
import { Envelope, MapPin, PaperPlaneRight } from '@phosphor-icons/react';
import emailjs from '@emailjs/browser'; // Ajout de EmailJS
import ScrollFloat from '../components/ScrollFloat'; // Votre import ScrollFloat

    
   // ... les imports restent pareils ...

export default function Contact() {
    // On garde le useRef juste pour le reset si besoin, mais on ne l'utilise plus pour l'envoi
    const form = useRef(); 
    const [buttonText, setButtonText] = useState("Envoyer le message");

    const sendEmail = (e) => {
        e.preventDefault(); // 1. On bloque le rechargement de page IMMÉDIATEMENT
        
        // Sécurité : on vérifie que le formulaire est bien là
        if (!e.target) return;

        setButtonText("Envoi en cours...");

        // 2. MODIFICATION : On utilise 'e.target' au lieu de 'form.current'
        // C'est plus fiable car c'est le formulaire exact qui a déclenché l'événement
        emailjs.sendForm(
            'SERVICE_ID',    // Remplacez par votre vrai ID
            'TEMPLATE_ID',   // Remplacez par votre vrai ID
            e.target,        // <--- C'est ici que ça change (plus robuste)
            'PUBLIC_KEY'     // Remplacez par votre vrai ID
        )
        .then((result) => {
            console.log('Succès :', result.text);
            setButtonText("Message envoyé !");
            alert("Bien reçu ! Je vous réponds très vite.");
            
            // On vide le formulaire
            e.target.reset();
            
            // On remet le bouton normal après 3 secondes
            setTimeout(() => setButtonText("Envoyer le message"), 3000);
        }, (error) => {
            console.error('Erreur :', error.text); // Affiche l'erreur exacte dans la console
            setButtonText("Réessayer");
            alert("Oups, une erreur est survenue. Vérifiez la console (F12).");
        });
    };

    // ... le reste du code (return) reste identique ...
    return (
        <div className="contact-section" id="contact">
            <div className="contact-container">
                
                {/* --- 2. UTILISATION DU SCROLL FLOAT ICI --- */}
                <ScrollFloat>
                    <h2 className="section-title">Prenons contact</h2>
                </ScrollFloat>

                <p className="section-subtitle">Une idée ? Un projet ? Discutons-en.</p>

                <div className="contact-wrapper">
                    
                    {/* PARTIE GAUCHE */}
                    <div className="contact-info-card">
                        <div>
                            <h3>Discutons de votre <br/>futur projet</h3>
                            <p>
                                Je suis toujours à l'écoute de nouvelles opportunités. 
                                Que vous ayez une question ou simplement envie de dire bonjour, 
                                ma boîte de réception est ouverte !
                            </p>
                        </div>

                        <div className="info-list">
                            <a href="mailto:tharshica.s@gmail.com" className="info-item">
                                <div className="icon-box">
                                    <Envelope size={24} weight="fill" />
                                </div>
                                <span>tharshica.s@gmail.com</span>
                            </a>
                            
                            <div className="info-item">
                                <div className="icon-box">
                                    <MapPin size={24} weight="fill" />
                                </div>
                                <span>Paris, France</span>
                            </div>
                        </div>
                    </div>

                    {/* PARTIE DROITE : FORMULAIRE EMAILJS */}
                    <div className="contact-form-card">
                        <div className="form-header">
                            <h3>M'envoyer un message</h3>
                        </div>

                        {/* On relie le formulaire à la fonction sendEmail */}
                        <form ref={form} onSubmit={sendEmail}>
                            
                            <div className="form-group">
                                <label htmlFor="user_name">Nom complet</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="user_name" 
                                    placeholder="Votre nom" 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="user_email">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="user_email" 
                                    placeholder="votre@email.com" 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    placeholder="Dites-moi tout..." 
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                {buttonText}
                                <PaperPlaneRight size={20} weight="bold" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}