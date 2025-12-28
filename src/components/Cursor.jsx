import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/cursor.css';

export default function Cursor() {
    const cursorRef = useRef(null);
    const [flowers, setFlowers] = useState([]); // Liste des fleurs
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let timeoutId;

        const moveCursor = (e) => {
            // 1. Bouger le rond principal
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }

            // 2. Ajouter une fleur à la traînée
            // On ajoute une petite condition aléatoire pour ne pas en mettre TROP (1 fois sur 3 mouvements)
            // pour éviter de surcharger la page
            if (Math.random() > 0.7) {
                const newFlower = {
                    x: e.clientX,
                    y: e.clientY,
                    id: Date.now() + Math.random(), // ID unique
                    rotation: Math.random() * 360 // Rotation aléatoire de départ
                };

                setFlowers((prev) => [...prev, newFlower]);

                // Supprimer la fleur après 1 seconde (la durée de l'animation CSS)
                setTimeout(() => {
                    setFlowers((prev) => prev.filter((f) => f.id !== newFlower.id));
                }, 1000);
            }
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' || 
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') || 
                e.target.closest('button') ||
                e.target.classList.contains('project-card')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            {/* Le rond principal */}
            <div 
                ref={cursorRef} 
                className={`cursor-dot ${isHovered ? 'hovered' : ''}`}
            />

            {/* La traînée de fleurs */}
            {flowers.map((flower) => (
                <div 
                    key={flower.id}
                    className="flower-trail"
                    style={{
                        left: flower.x,
                        top: flower.y,
                        // On applique une rotation de départ différente pour chaque fleur pour faire naturel
                        // Note : l'animation CSS va s'ajouter à ça
                        transform: `translate(-50%, -50%) rotate(${flower.rotation}deg)` 
                    }}
                />
            ))}
        </>
    );
}