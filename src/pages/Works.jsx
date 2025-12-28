import React, { useState } from 'react';
import '../assets/css/works.css';
import { X } from '@phosphor-icons/react';
// On importe ton composant d'animation
import ScrollFloat from '../components/ScrollFloat';

export default function Works() {
    
    // --- 1. DONNÉES DES PROJETS ---
    const projects = [
        {
            id: 1,
            title: "EtuKit",
            category: "WEB",
            displayCategory: "WEB • 2023",
            description: "Plateforme d'outils pour étudiants.",
            fullDescription: "Projet de création d'une suite d'outils web pour faciliter la vie des étudiants. Intégration d'un calendrier, d'un gestionnaire de tâches et de ressources partagées.",
            context: "Projet universitaire en groupe de 4.",
            objectifs: "Créer une interface intuitive et responsive.",
            tags: ["React", "Node.js", "Figma"],
            image: "https://placehold.co/800x600/104668/FFF?text=EtuKit",
            images: [
                "https://placehold.co/800x600/104668/FFF?text=EtuKit+Accueil",
                "https://placehold.co/800x600/305F7D/FFF?text=EtuKit+Tableau+de+bord",
                "https://placehold.co/800x600/5A99C2/FFF?text=EtuKit+Mobile"
            ]
        },
        {
            id: 2,
            title: "Chourak Consulting",
            category: "WEB",
            displayCategory: "WEB • 2025",
            description: "Site vitrine pour un cabinet de consulting.",
            fullDescription: "Design et développement d'un site corporate épuré. Mise en avant des services et prise de rendez-vous en ligne.",
            context: "Freelance.",
            objectifs: "Renforcer l'image de marque du client.",
            tags: ["Wordpress", "CSS", "SEO"],
            image: "https://placehold.co/800x600/305F7D/FFF?text=Chourak",
            images: [
                "https://placehold.co/800x600/305F7D/FFF?text=Chourak+Hero",
                "https://placehold.co/800x600/104668/FFF?text=Chourak+Services",
                "https://placehold.co/800x600/5A99C2/FFF?text=Chourak+Contact"
            ]
        },
        {
            id: 3,
            title: "ABL FRANCE",
            category: "WEB",
            displayCategory: "WEB • 2025",
            description: "Refonte identité visuelle et site web.",
            fullDescription: "Modernisation complète de la présence numérique d'ABL France. Nouvelle charte graphique et développement web sur mesure.",
            context: "Stage de fin d'études.",
            objectifs: "Augmenter le taux de conversion.",
            tags: ["Vue.js", "Tailwind", "UX Design"],
            image: "https://placehold.co/800x600/555/FFF?text=ABL",
            images: [
                "https://placehold.co/800x600/555/FFF?text=ABL+Homepage",
                "https://placehold.co/800x600/333/FFF?text=ABL+Design+System"
            ]
        },
        {
            id: 4,
            title: "App Sport Santé",
            category: "UI/UX",
            displayCategory: "UI/UX • 2023",
            description: "Application mobile pour seniors.",
            fullDescription: "Conception d'une interface adaptée aux personnes âgées pour le suivi d'activité physique.",
            context: "Hackathon Santé.",
            objectifs: "Accessibilité et simplicité.",
            tags: ["Figma", "Prototypage"],
            image: "https://placehold.co/800x600/5A99C2/FFF?text=Sport+Sante",
            images: [
                "https://placehold.co/800x600/5A99C2/FFF?text=Sport+Accueil",
                "https://placehold.co/800x600/C8DDED/000?text=Sport+Suivi"
            ]
        },
        {
            id: 5,
            title: "Film Noir",
            category: "AUDIOVISUEL",
            displayCategory: "AUDIOVISUEL • 2024",
            description: "Court métrage style années 50.",
            fullDescription: "Court métrage jouant sur les codes du cinéma noir et le clair-obscur. Écriture, tournage et montage.",
            context: "Projet scolaire.",
            objectifs: "Maîtriser l'éclairage et l'étalonnage noir & blanc.",
            tags: ["Premiere Pro", "Scénario"],
            image: "https://placehold.co/800x600/111/FFF?text=Film+Noir",
            images: [
                "https://placehold.co/800x600/111/FFF?text=Film+Affiche",
                "https://placehold.co/800x600/222/FFF?text=Film+Scene+1",
                "https://placehold.co/800x600/333/FFF?text=Film+Backstage"
            ]
        },
        {
            id: 6,
            title: "Campagne Eco",
            category: "COMMUNICATION",
            displayCategory: "COMMUNICATION • 2025",
            description: "Conception visuelle 360° marque éco-responsable.",
            fullDescription: "Création des visuels pour les réseaux sociaux, affiches abribus et bannières web.",
            context: "Projet fictif.",
            objectifs: "Sensibiliser au recyclage.",
            tags: ["Photoshop", "Illustrator"],
            image: "https://placehold.co/800x600/99BCD3/FFF?text=Campagne",
            images: [
                "https://placehold.co/800x600/99BCD3/FFF?text=Affiche+Bus",
                "https://placehold.co/800x600/305F7D/FFF?text=Instagram+Post",
                "https://placehold.co/800x600/104668/FFF?text=Flyer"
            ]
        }
    ];

    // --- 2. GESTION DES FILTRES ---
    const filters = ["Tous", "Web", "UI/UX", "Audiovisuel", "Communication"];
    const [activeFilter, setActiveFilter] = useState("Tous");

    const filteredProjects = projects.filter(project => 
        activeFilter === "Tous" 
        ? true 
        : project.category.toUpperCase() === activeFilter.toUpperCase()
    );

    // --- 3. GESTION DU POP-UP ---
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden'; 
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="works-container" id="projets">
            
            {/* C'EST ICI QUE J'AI AJOUTÉ L'EFFET SCROLL FLOAT */}
            <ScrollFloat>
                <h2 className="works-title">Mes Réalisations</h2>
            </ScrollFloat>

            {/* BARRE DE FILTRES */}
            <div className="filters-container">
                {filters.map((filter) => (
                    <button 
                        key={filter}
                        className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* GRILLE DES PROJETS */}
            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card" onClick={() => openModal(project)}>
                        <div className="card-image-wrapper">
                            <img src={project.image} alt={project.title} className="card-image" />
                        </div>
                        
                        <div className="card-content">
                            <span className="card-category">{project.displayCategory}</span>
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-desc">{project.description}</p>
                            
                            <div className="card-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL (POP-UP) */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>
                            <X size={24} weight="bold" />
                        </button>

                        <div className="modal-image-col">
                            {(selectedProject.images || [selectedProject.image]).map((imgUrl, index) => (
                                <img 
                                    key={index} 
                                    src={imgUrl} 
                                    alt={`${selectedProject.title} ${index + 1}`} 
                                />
                            ))}
                        </div>

                        <div className="modal-text-col">
                            <h2 className="modal-title">{selectedProject.title}</h2>
                            <p className="modal-desc intro">{selectedProject.fullDescription}</p>

                            <div className="modal-info-block">
                                <div className="modal-section-title">Contexte</div>
                                <p className="modal-desc">{selectedProject.context}</p>
                            </div>

                            <div className="modal-info-block">
                                <div className="modal-section-title">Objectifs</div>
                                <p className="modal-desc">{selectedProject.objectifs}</p>
                            </div>

                            <div className="modal-section-title">Outils & Technologies</div>
                            <div className="modal-tags">
                                {selectedProject.tags.map((tag, i) => (
                                    <span key={i} className="modal-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}