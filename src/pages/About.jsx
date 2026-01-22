import React, { useState, useEffect } from 'react';
import '../assets/css/about.css';
import { 
    Student, Briefcase, Code, PaintBrush, Globe, MagicWand, 
    VideoCamera, PenNib, Kanban, 
    Medal, Lightbulb, GearSix, Pen, Users, User, MagnifyingGlass, ClipboardText,
    ArrowUp, DownloadSimple, LinkedinLogo, EnvelopeSimple, Heart 
} from '@phosphor-icons/react';
import monCvFile from '../assets/cvtharshica.pdf';

export default function About() {
    
    // --- 1. LOGIQUE D'ANIMATION ---
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // --- 2. SCROLL TO TOP ---
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.scrollY > 300) {
                setShowScroll(true);
            } else if (showScroll && window.scrollY <= 300) {
                setShowScroll(false);
            }
        };
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`about-container ${isLoaded ? 'loaded' : ''}`}>
            
            <h1 className="about-title fade-element">Qui suis-je ?
            </h1>
            
            <div className="bento-grid">
                
                {/* 1. BIO RAPIDE (Intro Factuelle) */}
                <div className="bento-card card-bio fade-element" style={{ transitionDelay: '0.1s' }}>
                    <div className="bio-content">
                        <p className="bio-text">
                           Je suis <span className="bio-highlight">Tharshica SIVA ANANDAN</span>. 
                           Étudiante en BUT MMI, je navigue à l'intersection du design créatif et de la communication digitale.
                           <br/><br/>
                           Passionnée par le numérique, je cherche constamment de nouvelles inspirations pour donner vie à des idées innovantes.
                        </p>
                        
                        <div className="bio-actions">
                            <a 
                                href={monCvFile}            
                                target="_blank" 
                                rel="noopener noreferrer"   
                                className="btn-primary"
                            >
                                <DownloadSimple size={20} weight="bold" />
                                <span>Mon CV</span>
                            </a>

                            <div className="social-links">
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                                    <LinkedinLogo size={24} />
                                </a>
                                <a href="mailto:contact@tharshica.com" className="social-btn" aria-label="Email">
                                    <EnvelopeSimple size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 2. MON PARCOURS (Le Storytelling adapté) --- */}
                <div className="bento-card card-story fade-element" style={{ transitionDelay: '0.15s', gridColumn: 'span 2' }}>
                    <div className="card-header">
                        <div className="card-icon"><Heart size={20} weight="fill" color="#e87c7c" /></div>
                        <h2 className="bento-title">Mon histoire</h2>
                    </div>
                    <div className="story-content" style={{ padding: '0 10px' }}>
                        
                        <p style={{ fontFamily: 'Sora', lineHeight: '1.6', color: '#104668', marginBottom: '15px', fontSize: '1rem' }}>
                            Immergée dans le numérique depuis toujours, j'ai grandi avec Internet, les réseaux sociaux et la culture web. Très vite, j'ai su que mon avenir se dessinerait dans ce vaste milieu.
                        </p>
                        
                        <p style={{ fontFamily: 'Sora', lineHeight: '1.6', color: '#104668', fontSize: '1rem' }}>
                            Mais c'est en arrivant en <strong>BUT MMI</strong> que j'ai eu mon véritable déclic. J'ai compris que ma place n'était pas derrière des lignes de code, mais dans la <strong>création visuelle</strong>. Ce que j'aime, c'est traduire une idée complexe en une interface claire. Aujourd'hui, je mets cette sensibilité au service de l'utilisateur pour créer des projets qui ont du sens.
                        </p>
                    
                    </div>
                </div>

                {/* 3. FORMATION */}
                <div className="bento-card card-formation fade-element" style={{ transitionDelay: '0.2s' }}>
                    <div className="card-header">
                        <div className="card-icon"><Student size={20} /></div>
                        <h2 className="bento-title">Formation</h2>
                    </div>
                    <div className="list-item">
                        <span className="item-date">2024 - 2027</span>
                        <h3 className="item-title">BUT MMI</h3>
                        <p className="item-place">IUT de Bobigny</p>
                    </div>
                    <div className="list-item">
                        <span className="item-date">2024</span>
                        <h3 className="item-title">Bac STI2D</h3>
                        <p className="item-place">Lycée Paul Le Rolland </p>
                    </div>
                </div>

                {/* 4. EXPÉRIENCE */}
                <div className="bento-card card-experience fade-element" style={{ transitionDelay: '0.3s' }}>
                    <div className="card-header">
                        <div className="card-icon"><Briefcase size={20} /></div>
                        <h2 className="bento-title">Expérience</h2>
                    </div>
                    <div className="list-item">
                        <span className="item-date">2025</span>
                        <h3 className="item-title">Trésorière</h3>
                        <p className="item-place">BDE MMI Corp</p>
                    </div>
                    <div className="list-item">
                        <span className="item-date">2022 - Présent</span>
                        <h3 className="item-title">Projets Académiques</h3>
                        <p className="item-place">Design & Communication</p>
                    </div>
                </div>

                {/* 5. COMPÉTENCES */}
                <div className="bento-card card-competences fade-element" style={{ transitionDelay: '0.4s' }}>
                    <div className="card-header">
                        <div className="card-icon"><Medal size={20} /></div>
                        <h2 className="bento-title">Compétences</h2>
                    </div>
                    
                    <div className="competences-grid">
                        <div className="comp-item">
                            <PaintBrush size={32} className="comp-icon" weight="regular" />
                            <div className="comp-content">
                                <span className="comp-title">UX/UI design</span>
                                <p className="comp-desc">Zonings, wireframes, maquettes et prototypes.</p>
                            </div>
                        </div>
                        <div className="comp-item">
                            <Code size={32} className="comp-icon" weight="regular" />
                            <div className="comp-content">
                                <span className="comp-title">Intégration Web</span>
                                <p className="comp-desc">HTML, CSS et intégration sur CMS.</p>
                            </div>
                        </div>
                        <div className="comp-item">
                            <Globe size={32} className="comp-icon" weight="regular" />
                            <div className="comp-content">
                                <span className="comp-title">Stratégie de Com'</span>
                                <p className="comp-desc">Réseaux sociaux, benchmarks, personaes et user stories.</p>
                            </div>
                        </div>
                        <div className="comp-item">
                            <PenNib size={32} className="comp-icon" weight="regular" />
                            <div className="comp-content">
                                <span className="comp-title">Création numérique</span>
                                <p className="comp-desc">Designs au format web et print.</p>
                            </div>
                        </div>
                        <div className="comp-item">
                            <VideoCamera size={32} className="comp-icon" weight="regular" />
                            <div className="comp-content">
                                <span className="comp-title">Tournage & Montage</span>
                                <p className="comp-desc">Réalisation et montage.</p>
                            </div>
                        </div>
                        <div className="comp-item">
                            <Kanban size={32} className="comp-icon" weight="regular" />
                            <div className="comp-content">
                                <span className="comp-title">Gestion de projet</span>
                                <p className="comp-desc">Méthode Agile, Notion, veille digitale.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6. BOÎTE À OUTILS */}
                <div className="bento-card card-tools fade-element" style={{ transitionDelay: '0.5s' }}>
                    <div className="card-header">
                        <div className="card-icon"><MagicWand size={20} /></div>
                        <h2 className="bento-title">Ma boîte à outils</h2>
                    </div>
                    
                    <h3 className="tools-category">🎨 Design & Audiovisuel</h3>
                    <div className="tools-grid">
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="tool-img" /><span className="tool-name">Figma</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" className="tool-img" /><span className="tool-name">Photoshop</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Illustrator" className="tool-img" /><span className="tool-name">Illustrator</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Adobe_InDesign_CC_icon.svg" alt="InDesign" className="tool-img" /><span className="tool-name">InDesign</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" alt="Premiere" className="tool-img" /><span className="tool-name">Premiere</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/7/72/DaVinci_Resolve_12_logo.png" alt="DaVinci" className="tool-img" /><span className="tool-name">DaVinci</span></div>
                    </div>

                    <h3 className="tools-category">💻 Développement</h3>
                    <div className="tools-grid">
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" className="tool-img" /><span className="tool-name">HTML</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" className="tool-img" /><span className="tool-name">CSS</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JS" className="tool-img" /><span className="tool-name">JS</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" className="tool-img" /><span className="tool-name">PHP</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="tool-img" /><span className="tool-name">React</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="SQL" className="tool-img" /><span className="tool-name">SQL</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" className="tool-img" /><span className="tool-name">VS Code</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="GitHub" className="tool-img" /><span className="tool-name">GitHub</span></div>
                    </div>
                    
                    <h3 className="tools-category">⚙️ Gestion & CMS</h3>
                    <div className="tools-grid">
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" alt="Notion" className="tool-img" /><span className="tool-name">Notion</span></div>
                        <div className="tool-item"><img src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" alt="Wordpress" className="tool-img" /><span className="tool-name">Wordpress</span></div>
                    </div>

                </div>

                {/* 7. SOFT SKILLS */}
                <div className="soft-skills-wrapper fade-element" style={{ transitionDelay: '0.6s' }}>
                    <h2 className="section-title-center">Soft-skills</h2>
                    
                    <div className="soft-skills-grid">
                        <div className="soft-card"><Pen size={32} className="soft-icon" /><span className="soft-name">Créativité</span></div>
                        <div className="soft-card"><Users size={32} className="soft-icon" /><span className="soft-name">Travail en équipe</span></div>
                        <div className="soft-card"><User size={32} className="soft-icon" /><span className="soft-name">Autonomie</span></div>
                        <div className="soft-card"><GearSix size={32} className="soft-icon" /><span className="soft-name">Adaptabilité</span></div>
                        <div className="soft-card"><MagnifyingGlass size={32} className="soft-icon" /><span className="soft-name">Esprit d’analyse</span></div>
                        <div className="soft-card"><ClipboardText size={32} className="soft-icon" /><span className="soft-name">Gestion de projet</span></div>
                        <div className="soft-card"><Lightbulb size={32} className="soft-icon" /><span className="soft-name">Curiosité</span></div>
                    </div>
                </div>

            </div>

            {/* SCROLL TO TOP */}
            <div 
                className={`scroll-top-btn ${showScroll ? 'show' : ''}`} 
                onClick={scrollTop}
            >
                <ArrowUp size={24} weight="bold" />
            </div>

        </div>
    );
}