import React from 'react';
import '../assets/css/mentions.css'; // On va créer ce CSS juste après
import { X, ShieldCheck, Copyright, Cookie } from '@phosphor-icons/react';

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
                            <strong>Statut :</strong> Étudiante en BUT MMI (Projet Pédagogique)<br/>
                            <strong>Contact :</strong> contact@tharshica.com<br/>
                            <br/>
                            <strong>Hébergement :</strong><br/>
                            Ce site est hébergé par <strong>Vercel Inc.</strong><br/>
                            340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                        </p>
                    </section>

                    {/* --- 2. PROPRIÉTÉ INTELLECTUELLE --- */}
                    <section className="mentions-section">
                        <h3><Copyright size={20} className="icon-title"/> Propriété Intellectuelle</h3>
                        <p>
                            L'ensemble de ce site (structure, design, textes, images, animations) relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                        </p>
                        <ul>
                            <li><strong>Contenus originaux :</strong> Les maquettes, logos et textes présentés dans la section "Projets" sont la propriété exclusive de Tharshica SIVA ANANDAN, sauf mention contraire (projets de groupe).</li>
                            <li><strong>Crédits tiers :</strong> Les icônes proviennent de la librairie <em>Phosphor Icons</em>. Les polices sont issues de <em>Google Fonts</em> (Sora, Instrument Serif).</li>
                        </ul>
                        <p className="warning-text">
                            Toute reproduction, totale ou partielle, sans autorisation expresse est interdite.
                        </p>
                    </section>

                    {/* --- 3. RGPD & DONNÉES --- */}
                    <section className="mentions-section">
                        <h3><ShieldCheck size={20} className="icon-title"/> Protection des Données (RGPD)</h3>
                        <p>
                            Dans le cadre du formulaire de contact, certaines données personnelles sont collectées (Nom, Email).
                        </p>
                        <p>
                            <strong>Finalité :</strong> Ces données servent uniquement à répondre à votre demande de contact. Elles ne sont <strong>jamais</strong> vendues ni cédées à des tiers.
                        </p>
                        <p>
                            <strong>Droit d'accès :</strong> Conformément à la loi, vous disposez d'un droit d'accès, de modification et de suppression de vos données en me contactant par email.
                        </p>
                    </section>

                    {/* --- 4. COOKIES --- */}
                    <section className="mentions-section">
                        <h3><Cookie size={20} className="icon-title"/> Gestion des Cookies</h3>
                        <p>
                            Ce site a été conçu pour respecter votre vie privée.
                        </p>
                        <p>
                            <strong>Cookies techniques :</strong> Seuls des cookies strictement nécessaires au fonctionnement (ex: mémorisation de votre choix de thème ou de fermeture de ce bandeau) peuvent être déposés. Ils ne nécessitent pas de consentement.
                        </p>
                        <p>
                            <strong>Cookies de suivi :</strong> Ce site <strong>n'utilise aucun cookie publicitaire</strong> ou de tracking tiers (type Google Analytics). Vous naviguez donc en toute tranquillité.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}