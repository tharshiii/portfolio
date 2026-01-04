import React, { useState } from 'react';
import '../assets/css/works.css';
import { X, ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import ScrollFloat from '../components/ScrollFloat';

export default function Works() {
    
    // --- 1. DONNÉES DES PROJETS ---
    const projects = [
       
        {
            id: 2,
            title: "Agence Immobilière",
            category: "UI/UX",
            displayCategory: "UI/UX & BRANDING • 2025",
            description: "Conception d'interface et Design System pour l'immobilier.",
            fullDescription: `
                <p class="modal-desc intro">
                    <strong>Conception Web & SEO (Mobile First).</strong><br>
                    Dans le cadre d'un projet en duo réalisé sous Figma, l'objectif était de concevoir une interface utilisateur (UI) attractive pour une agence bretonne haut de gamme, en intégrant dès le design les contraintes du SEO 2025 (SXO).
                </p>
                <h4 class="modal-section-title">RÉALISATIONS & DESIGN SYSTEM</h4>
                <ul style="list-style-type: disc; padding-left: 20px; color: var(--w-petrol);">
                    <li style="margin-bottom: 12px;"><strong>Branding complet :</strong> Recherche de nom, conception du logo et définition d'une charte graphique élégante adaptée au marché local de luxe.</li>
                    <li style="margin-bottom: 12px;"><strong>Conception Figma :</strong> Design d'une page d'accueil immersive (mise en avant de la réassurance) et d'une page "Lots" optimisée pour la conversion (filtres intuitifs, CTA clairs).</li>
                    <li style="margin-bottom: 12px;"><strong>Industrialisation :</strong> Création d'un Design System atomique (boutons, cartes de biens, inputs) pour garantir la cohérence et faciliter le développement futur.</li>
                </ul>
            `,
            context: "Projet en duo (Figma).",
            objectifs: "Allier Esthétisme & Performance SEO.",
            tags: ["Figma", "Design System", "Branding", "SEO"],
            image: "/img/armor1.webp",
            images: [
                "/img/armor1.webp",
                "/img/armor2.webp",
            ]
        },
        {
            id: 3,
            title: "Titeuf Fan Page",
            category: "WEB",
            displayCategory: "CMS • PROJET ACADÉMIQUE",
            description: "Site vitrine immersif réalisé via Jimdo.",
            fullDescription: `
                <p class="modal-desc intro">
                    <strong>Création de site via CMS (Jimdo).</strong><br>
                    Dans le cadre d'un projet académique individuel, le défi était de concevoir et déployer un site web fonctionnel sans code, afin de maîtriser la logique des Systèmes de Gestion de Contenu.
                </p>
                <p class="modal-desc">
                    J'ai réalisé un site vitrine dédié à l'univers de la BD "Titeuf". Le projet s'est concentré sur la structuration de l'information et l'adaptation d'un template pour offrir une expérience utilisateur ludique.
                </p>
                <br>
                <h4 class="modal-section-title">MISSIONS & RÉALISATIONS</h4>
                <ul style="list-style-type: disc; padding-left: 20px; color: var(--w-petrol);">
                    <li style="margin-bottom: 12px;"><strong>Architecture de l'information :</strong> Organisation logique des pages (Accueil, Personnages, Auteur, Galerie) pour une navigation fluide.</li>
                    <li style="margin-bottom: 12px;"><strong>Design & Personnalisation :</strong> Adaptation complète du template Jimdo pour correspondre à l'identité visuelle colorée de la bande dessinée.</li>
                    <li style="margin-bottom: 12px;"><strong>Gestion de contenu :</strong> Intégration et mise en page des textes et images via l'éditeur du CMS.</li>
                </ul>
            `,
            context: "Projet académique individuel.",
            objectifs: "Comprendre la logique CMS & Arborescence.",
            tags: ["Jimdo", "CMS", "Web Design", "Arborescence"],
            image: "/img/titeuftestt.webp",
            images: [
                "/img/titeuftestt.webp",
            ]
        },
        {
            id: 4,
            title: "EquiliBio",
            category: "COMMUNICATION",
            displayCategory: "MARKETING & STRATÉGIE",
            description: "Application étudiante : Manger mieux, polluer moins.",
            fullDescription: `
                <p class="modal-desc intro">
                    <strong>Manger mieux, polluer moins.</strong><br>
                    En tant que <em>Développeuse de Stratégie</em>, j'ai piloté le positionnement et la viabilité d'EquiliBio, une application pensée pour aider les étudiants à concilier alimentation saine, budget serré et écologie.
                </p>
                <p class="modal-desc">
                    L'objectif était de créer une solution "inspirée par la vie étudiante", offrant un équilibre parfait entre le plaisir de manger et l'engagement bio, grâce à des fonctionnalités comme le calcul de l'empreinte carbone et la redirection vers des circuits courts (AMAP).
                </p>
                <br>
                <h4 class="modal-section-title">MISSIONS & STRATÉGIE</h4>
                <ul style="list-style-type: disc; padding-left: 20px; color: var(--w-petrol);">
                    <li style="margin-bottom: 12px;"><strong>Étude de marché :</strong> Analyse concurrentielle (Yazio, LifeSum) et définition précise des personas étudiants pour identifier notre niche éco-responsable.</li>
                    <li style="margin-bottom: 12px;"><strong>Stratégie Marketing :</strong> Élaboration d'un plan de communication digital 360° (Campagnes réseaux sociaux, SEO, Partenariats) pour assurer l'acquisition utilisateurs.</li>
                    <li style="margin-bottom: 12px;"><strong>Pilotage & Performance :</strong> Définition du budget prévisionnel et mise en place des KPIs pour mesurer le succès du lancement.</li>
                </ul>
            `,
            context: "Projet de groupe (Stratégie de lancement).",
            objectifs: "Définir la viabilité & Acquérir des utilisateurs.",
            tags: ["Étude de marché", "Marketing Digital", "KPIs", "Gestion de projet"],
            image: "/img/equilibiotestt.webp",
            images: [
                "/img/equilibiotestt.webp",
            ]
        },
        {
            id: 5,
            title: "Spot KIKO",
            category: "AUDIOVISUEL",
            displayCategory: "MOTION DESIGN & PUBLICITÉ • 2025",
            description: "Publicité immersive en Mixed Media (Réel + 2D).",
            fullDescription: `
                <p class="modal-desc intro">
                    <strong>La Beauté Augmentée (Mixed Media).</strong><br>
                    En tant que <em>Co-réalisatrice & Motion Designer</em>, j'ai conçu une publicité immersive pour KIKO, détournant les codes sociaux du "Get Ready With Me" grâce à une approche visuelle innovante.
                </p>
                <p class="modal-desc">
                    Pour se démarquer, l'influenceuse interagit avec des éléments graphiques 2D (interface, produits flottants) qui se matérialisent en objets réels. Une "réalité augmentée" créée en post-production pour captiver l'audience instantanément.
                </p>
                <br>
                <h4 class="modal-section-title">COMPÉTENCES TECHNIQUES</h4>
                <ul style="list-style-type: disc; padding-left: 20px; color: var(--w-petrol);">
                    <li style="margin-bottom: 12px;"><strong>Pré-production :</strong> Storyboard et découpage technique précis pour anticiper les interactions complexes entre le réel et le virtuel (timing, gestuelle).</li>
                    <li style="margin-bottom: 12px;"><strong>Tournage & DA :</strong> Gestion du cadrage (espace négatif pour les incrustations) et direction d'actrice pour synchroniser les mouvements avec les futures animations.</li>
                    <li style="margin-bottom: 12px;"><strong>Motion Design & Compositing :</strong> Création des assets (Illustrator) et animation complexe sur DaVinci Resolve (Tracking, Masques, Keyframing).</li>
                    <li style="margin-bottom: 12px;"><strong>Sound Design :</strong> Montage rythmé et ajout de Sound FX pour donner du "poids" aux apparitions graphiques.</li>
                </ul>
            `,
            context: "Projet Créatif (Format Reels/TikTok).",
            objectifs: "Dynamiser la présentation produit.",
            tags: ["DaVinci Resolve", "Motion Design", "Mixed Media", "Tournage"],
            image: "/img/kiko-thumb.jpg",
            images: [
                "/img/kiko-thumb.jpg",
                "/img/kiko-storyboard.jpg",
                "/img/kiko-motion.jpg"
            ]
        },
        {
            id: 6,
            title: "LPAM",
            category: "COMMUNICATION",
            displayCategory: "STRATÉGIE DIGITALE • 2025",
            description: "Campagne de sensibilisation 360° et stratégie sociale.",
            fullDescription: `
                <p class="modal-desc intro">
                    <strong>Campagne de Sensibilisation & Stratégie Digitale.</strong><br>
                    En tant que <em>Responsable Stratégie de Communication</em>, j'ai piloté la conception d'une campagne multi-canaux (Web, Instagram, TikTok) pour la Ligue de Prévention des Abus sur Mineurs.
                </p>
                <p class="modal-desc">
                    Le défi était double : moderniser l'image de l'ONG et créer un espace sécurisant pour libérer la parole et briser les tabous autour des violences faites aux mineurs.
                </p>
                <br>
                <h4 class="modal-section-title">MISSIONS & RÉALISATIONS CLÉS</h4>
                <ul style="list-style-type: disc; padding-left: 20px; color: var(--w-petrol);">
                    <li style="margin-bottom: 12px;"><strong>Storytelling Transmédia :</strong> Conception de la campagne narrative <em>"The Phantom Threat"</em> basés sur un mécanisme de "teasing".</li>
                    <li style="margin-bottom: 12px;"><strong>Planification Social Media :</strong> Gestion complète du calendrier éditorial pour un lancement synchronisé.</li>
                    <li style="margin-bottom: 12px;"><strong>Copywriting Sensible :</strong> Rédaction de messages pédagogiques et bienveillants pour déculpabiliser les victimes.</li>
                    <li style="margin-bottom: 12px;"><strong>Stratégie UX :</strong> Collaboration avec l'équipe design pour une navigation "rassurante".</li>
                </ul>
            `,
            context: "Projet de groupe (Refonte & Campagne)",
            objectifs: "Moderniser l'image & Libérer la parole.",
            tags: ["Stratégie", "Social Media", "Copywriting", "UX Design"],
            image: "/img/lpam1.webp",
            images: [
                "/img/lpam1.webp",
                "/img/lpam2.webp",
                "/img/lpam3.webp",
                "/img/lpam4.webp",
            ]
        },
        {
            id: 7,
            title: "MonuTime",
            category: "COMMUNICATION",
            displayCategory: "STRATÉGIE DE MARQUE & AR • 2025",
            description: "Application de Réalité Augmentée pour le patrimoine.",
            fullDescription: `
                <p class="modal-desc intro">
                    <strong>Démocratiser l'histoire grâce à l'AR/IA.</strong><br>
                    En charge de la stratégie de marque de MonuTime, j'ai transformé un concept technologique complexe en un produit grand public attractif, avec un objectif ambitieux : l'acquisition de 100 000 utilisateurs la première année.
                </p>
                <p class="modal-desc">
                    Mon intervention a permis de structurer l'identité de la marque et de définir une feuille de route claire pour son implantation sur le marché touristique et culturel.
                </p>
                <br>
                <h4 class="modal-section-title">EXPERTISE STRATÉGIQUE & MARKETING</h4>
                <ul style="list-style-type: disc; padding-left: 20px; color: var(--w-petrol);">
                    <li style="margin-bottom: 12px;"><strong>Positionnement & Audit :</strong> Réalisation d'un benchmark approfondi (Ohrizon, AGP) pour identifier notre proposition de valeur unique : l'immersion "avant/après" et l'accessibilité universelle.</li>
                    <li style="margin-bottom: 12px;"><strong>Storytelling & Brand Content :</strong> Conception de l'univers narratif ("Remonte le temps...") et scénarisation du spot publicitaire de lancement pour assurer une tonalité enthousiaste et pédagogique.</li>
                    <li style="margin-bottom: 12px;"><strong>Stratégie d'Acquisition 360° :</strong> Élaboration d'un mix marketing puissant : Partenariats institutionnels (Ministère de la Culture) + Campagnes directes (TikTok Ads, Influenceurs voyage).</li>
                    <li style="margin-bottom: 12px;"><strong>Créativité Social Media :</strong> Conception de supports viraux (Vidéos courtes, Affiches QR Codes) adaptés aux codes des réseaux pour maximiser l'engagement.</li>
                </ul>
            `,
            context: "Lancement de produit (Start-up/Innovation).",
            objectifs: "Acquisition de 100k utilisateurs.",
            tags: ["Stratégie de Marque", "Réalité Augmentée", "Growth Marketing", "Storytelling"],
            image: "/img/monu1.webp",
            images: [
                "/img/monu1.webp",
            ]
        },
        {
            id: 8,
            title: "Sana terra",
            category: "WEB",
            displayCategory: "WORDPRESS & BRANDING • PROJET PERSONNEL",
            description: "Création de site vitrine de A à Z (Branding + Dev).",
            fullDescription: `
                <p class="modal-desc intro">
                    <strong>Webmaster & Créateur de Site.</strong><br>
                    Le défi était de créer une identité numérique complète pour un club de yoga. L'objectif : concevoir un site à la fois apaisant (pour l'image de marque) et fonctionnel (pour la conversion) afin de faciliter l'inscription des nouveaux adhérents.
                </p>
                <br>
                <h4 class="modal-section-title">RÉALISATIONS : DE L'IDÉE À LA MISE EN LIGNE</h4>
                <ul style="list-style-type: disc; padding-left: 20px; color: var(--w-petrol);">
                    <li style="margin-bottom: 12px;"><strong>Branding & Identité :</strong> Création complète du nom, du logo et d'une charte graphique aux couleurs douces et typographies zen pour transmettre les valeurs du club.</li>
                    <li style="margin-bottom: 12px;"><strong>Développement WordPress :</strong> Installation et configuration du CMS. Personnalisation avancée du thème pour qu'il colle parfaitement à l'identité visuelle créée.</li>
                    <li style="margin-bottom: 12px;"><strong>Fonctionnalités clés :</strong> Mise en place d'un système de planning des cours, formulaires de contact dynamiques et intégration d'une section "Blog" optimisée pour le SEO.</li>
                    <li style="margin-bottom: 12px;"><strong>UX/UI & Responsive :</strong> Architecture du site pensée pour une navigation fluide, aussi bien sur mobile (pour la prise de rdv rapide) que sur ordinateur.</li>
                </ul>
            `,
            context: "Projet personnel (Full Stack CMS).",
            objectifs: "Allier image zen & conversion.",
            tags: ["WordPress", "SEO", "Branding", "Responsive"],
            image: "/img/yoga-home.jpg",
            images: [
                "/img/yoga-home.jpg",
            ]
        },
       
    ];

    // --- 2. GESTION DES FILTRES ---
    const filters = ["Tous", "Web", "UI/UX", "Audiovisuel", "Communication"];
    const [activeFilter, setActiveFilter] = useState("Tous");
    const filteredProjects = projects.filter(project => 
        activeFilter === "Tous" ? true : project.category.toUpperCase() === activeFilter.toUpperCase()
    );

    // --- 3. GESTION DU POP-UP & SLIDER ---
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0); 

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentSlide(0); 
        document.body.style.overflow = 'hidden'; 
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    // Fonctions pour changer d'image
    const nextSlide = (e) => {
        e.stopPropagation();
        const total = (selectedProject.images || [selectedProject.image]).length;
        setCurrentSlide((prev) => (prev === total - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        const total = (selectedProject.images || [selectedProject.image]).length;
        setCurrentSlide((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    return (
        <div className="works-container" id="projets">
            <ScrollFloat>
                <h2 className="works-title">Mes Réalisations</h2>
            </ScrollFloat>

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
                                {project.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>
                            <X size={24} weight="bold" />
                        </button>

                        {/* --- COLONNE GAUCHE AVEC SLIDER --- */}
                        <div className="modal-image-col">
                            
                            {/* --- REMPLACEMENT ICI : BLOC LOGIQUE VIDÉO/IMAGE --- */}
                            {(() => {
                                const currentMedia = (selectedProject.images || [selectedProject.image])[currentSlide];
                                const isVideo = currentMedia.endsWith('.mp4') || currentMedia.endsWith('.webm');

                                return isVideo ? (
                                    <video 
                                        src={currentMedia} 
                                        className="slider-img" 
                                        controls      /* Affiche les boutons play/pause */
                                        autoPlay      /* Lance la vidéo tout seul */
                                        loop          /* Rejoue en boucle */
                                        muted         /* Coupe le son (obligatoire pour l'autoplay sur certains navigateurs) */
                                        playsInline   /* Pour que ça reste dans le cadre sur mobile */
                                    />
                                ) : (
                                    <img 
                                        src={currentMedia} 
                                        alt={selectedProject.title} 
                                        className="slider-img"
                                    />
                                );
                            })()}
                            {/* --- FIN DU BLOC --- */}

                            {/* Contrôles du slider */}
                            <div className="slider-controls">
                                <button className="slider-btn" onClick={prevSlide}>
                                    <ArrowLeft size={20} weight="bold" />
                                </button>
                                
                                <span className="slider-counter">
                                    {currentSlide + 1} / {(selectedProject.images || [selectedProject.image]).length}
                                </span>
                                
                                <button className="slider-btn" onClick={nextSlide}>
                                    <ArrowRight size={20} weight="bold" />
                                </button>
                            </div>
                        </div>

                        {/* --- COLONNE DROITE --- */}
                        <div className="modal-text-col">
                            <h2 className="modal-title">{selectedProject.title}</h2>
                            <div 
                                className="modal-desc intro" 
                                dangerouslySetInnerHTML={{ __html: selectedProject.fullDescription }} 
                            />
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
                                {selectedProject.tags.map((tag, i) => <span key={i} className="modal-tag">{tag}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}