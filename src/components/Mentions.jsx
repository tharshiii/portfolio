import React from 'react';
import '../assets/css/mentions.css';
import { X } from '@phosphor-icons/react';

export default function Mentions({ onClose }) {
    return (
        <div className="mentions-overlay" onClick={onClose}>
            <div className="mentions-modal" onClick={(e) => e.stopPropagation()}>
                
                <button className="close-mentions" onClick={onClose}>
                    <X size={20} />
                </button>

                <h2 className="mentions-title">Mentions Légales</h2>

                <div className="mentions-section">
                    <h3 className="mentions-subtitle">1. Éditeur du site</h3>
                    <p className="mentions-text">
                        Le présent site est édité par <strong>Tharshica S.</strong>, étudiante en BUT Métiers du Multimédia et de l'Internet (MMI).<br/>
                        Statut : Particulier / Étudiante.<br/>
                        Email de contact : <a href="mailto: tharshica.s@gmail.com" className="mentions-link">tharshica.s@gmail.com</a>
                    </p>
                </div>

                <div className="mentions-section">
                    <h3 className="mentions-subtitle">2. Hébergement</h3>
                    <p className="mentions-text">
                        Ce site est hébergé par :<br/>
                        <strong>Vercel Inc.</strong> (ou GitHub Pages / Netlify - à modifier selon ton choix)<br/>
                        Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.<br/>
                        Site web : https://vercel.com
                    </p>
                </div>

                <div className="mentions-section">
                    <h3 className="mentions-subtitle">3. Propriété intellectuelle</h3>
                    <p className="mentions-text">
                        L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. 
                        Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        Toute reproduction, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                    </p>
                </div>

                <div className="mentions-section">
                    <h3 className="mentions-subtitle">4. Données personnelles</h3>
                    <p className="mentions-text">
                        Ce site utilise un formulaire de contact géré par le service <strong>Formspree</strong>. 
                        Les informations recueillies (Nom, Email, Message) ne sont utilisées que dans le cadre d'une prise de contact professionnelle et ne sont jamais cédées à des tiers.
                        Conformément à la loi « Informatique et Libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant l'éditeur.
                    </p>
                </div>

                <div className="mentions-section">
                    <h3 className="mentions-subtitle">5. Crédits</h3>
                    <p className="mentions-text">
                        Design & Développement : Tharshica S.<br/>
                        Icônes : Phosphor Icons.<br/>
                        Polices : Instrument Serif & Sora (Google Fonts).
                    </p>
                </div>

            </div>
        </div>
    );
}