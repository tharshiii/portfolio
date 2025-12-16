import './assets/css/scheme.css'
import './assets/css/index.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Works from './pages/Works.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
      <div className="App">
        {/* La Navbar fixe en haut */}
        <Navbar />
        
        <main className="AppMain">
          
          {/* Section 1 : Accueil */}
          <section id="home">
            <Home />
          </section>

          {/* Section 2 : À propos */}
          <section id="about">
             <About />
          </section>

          {/* Section 3 : Projets */}
          <section id="works">
            <Works />
          </section>

          {/* Section 4 : Compétences */}
          <section id="skills">
            <Skills />
          </section>

          {/*Section 4 : Contact */}
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    );
}