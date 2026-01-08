import React, { useState, useEffect } from 'react';
import { Cookie, X } from '@phosphor-icons/react';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Vérifie si l'utilisateur a déjà fermé le bandeau
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            // Petit délai pour l'animation d'entrée
            setTimeout(() => setIsVisible(true), 1000);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={styles.banner}>
            <div style={styles.content}>
                <Cookie size={32} color="#305F7D" weight="duotone" />
                <p style={styles.text}>
                    <strong>🍪 Pas de cookies traqueurs ici !</strong><br/>
                    Ce site respecte votre vie privée. Aucun traceur publicitaire n'est utilisé, juste l'essentiel pour que le site fonctionne.
                </p>
            </div>
            <button onClick={acceptCookies} style={styles.button}>
                C'est noté !
            </button>
        </div>
    );
}

// Petit CSS en JS pour ne pas créer un fichier juste pour ça
const styles = {
    banner: {
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        right: '20px', // Sur mobile
        maxWidth: '400px', // Sur desktop
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid #fff',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        animation: 'slideUp 0.5s ease-out'
    },
    content: {
        display: 'flex',
        gap: '15px',
        alignItems: 'center'
    },
    text: {
        fontFamily: '"Sora", sans-serif',
        fontSize: '0.85rem',
        color: '#104668',
        margin: 0,
        lineHeight: '1.4'
    },
    button: {
        background: '#305F7D',
        color: '#fff',
        border: 'none',
        padding: '10px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontFamily: '"Sora", sans-serif',
        fontWeight: '600',
        fontSize: '0.9rem',
        transition: 'background 0.2s'
    }
};