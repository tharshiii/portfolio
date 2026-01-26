import React from 'react';
import '../assets/css/mentions.css'; 
import { X, ShieldCheck, Copyright, Cookie, Wheelchair } from '@phosphor-icons/react'; // J'ai ajouté l'icône Wheelchair pour l'accessibilité

export default function Mentions({ onClose }) {
    return (
        <div className="mentions-overlay" onClick={onClose}>
            <div className="mentions-modal" onClick={(e) => e.stopPropagation()}>
                
                <button className="close-btn" onClick={onClose}>
                    <X size={24} weight="bold" />
                </button>

                <h2 className="mentions-title">Mentions Légales & RGPD</h2>

                <div className="mentions-content">
                    
                    {/* --- 1. ÉDITEUR & HÉBERGEUR --- */}
                    <section className="mentions-section">
                        <h3><ShieldCheck size={20} className="icon-title"/> Édition & Hébergement</h3>
                        <p>
                            <strong>Propriétaire du site :</strong> Tharshica SIVA ANANDAN<br/>
                            <strong>Statut :</strong> Personne physique (Étudiante)<br/>
                            <strong>Contact :</strong> tharshica.s@gmail.com<br/>
                            <br/>
                            <strong>Hébergement :</strong><br/>
                            Ce site est hébergé par <strong>Vercel Inc.</strong><br/>
                            340 S Lemon Ave #4133 Walnut, CA 91789, USA.<br/>
                            <br/>
                            <em style={{fontSize: '0.9em', opacity: 0.8}}>
                                Conformément à la loi, mes coordonnées postales complètes sont disponibles sur demande via l'adresse email ci-dessus.
                            </em>
                        </p>
                    </section>

                    {/* --- 2. PROPRIÉTÉ INTELLECTUELLE --- */}
                    <section className="mentions-section">
                        <h3><Copyright size={20} className="icon-title"/> Propriété Intellectuelle</h3>
                        <p>
                            L'ensemble de ce site (structure, design, textes, images) est protégé par le droit de la propriété intellectuelle. Toute reproduction totale ou partielle est interdite sans autorisation.
                        </p>
                        <ul>
                            <li><strong>Contenus originaux :</strong> Les maquettes et textes sont la propriété de Tharshica SIVA ANANDAN.</li>
                            <li><strong>Crédits :</strong> Icônes par <em>Phosphor Icons</em>. Polices via <em>Google Fonts</em>.</li>
                        </ul>
                    </section>

                    {/* --- 3. ACCESSIBILITÉ (Ajout inspiré de Fahed) --- */}
                    <section className="mentions-section">
                        <h3><Wheelchair size={20} className="icon-title"/> Accessibilité</h3>
                        <p>
                            Des efforts sont faits pour rendre ce portfolio accessible au plus grand nombre (contraste des couleurs, structure sémantique). Si vous rencontrez un problème de navigation, n'hésitez pas à me le signaler.
                        </p>
                    </section>

                    {/* --- 4. RGPD & COOKIES --- */}
                    <section className="mentions-section">
                        <h3><ShieldCheck size={20} className="icon-title"/> Données Personnelles</h3>
                        <p>
                            <strong>Formulaire :</strong> Les données collectées (Nom, Email) servent uniquement à répondre à votre demande. Elles ne sont jamais cédées à des tiers.
                        </p>
                        <p>
                            <strong>Cookies :</strong> Ce site n'utilise <strong>aucun cookie publicitaire</strong> ou de traçage commercial. Seuls des cookies techniques essentiels peuvent être utilisés.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}