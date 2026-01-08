import './assets/css/scheme.css'
import './assets/css/index.css'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import Contact from './components/Contact'; // Import unique

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Works from './pages/Works.jsx'
import CookieBanner from './components/CookieBanner';

export default function App() {
  return (
      <div className="App">
        <Navbar />
        <Cursor />
        <CookieBanner />
        
        <main className="AppMain">
          
          <section id="home">
            <Home />
          </section>

          <section id="about">
             <About />
          </section>

          <section id="works">
            <Works />
          </section>

          {/* PAS de <section id="contact"> autour, car le composant l'a déjà ! */}
          <Contact />

        </main>

        <Footer />

      </div>
    );
}
