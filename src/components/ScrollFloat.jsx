import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollFloat({ children }) {
  return (
    <motion.div
      // 1. ÉTAT DE DÉPART (Invisible et un peu plus bas)
      initial={{ opacity: 0, y: 50 }} 
      
      // 2. ÉTAT D'ARRIVÉE (Visible et à sa place)
      whileInView={{ opacity: 1, y: 0 }} 
      
      // 3. RÉGLAGES DU DÉCLENCHEMENT (Plus sensible)
      viewport={{ 
        once: true,    // L'animation ne se joue qu'une fois
        amount: 0.1    // Se déclenche dès que 10% de l'élément est visible à l'écran
      }}
      
      // 4. VITESSE (Un peu plus rapide pour qu'on la remarque)
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}