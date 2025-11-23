import './assets/css/scheme.css'
import './assets/css/index.css'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Works from './pages/Works.jsx'

export default function App() {
  return (
      <div className="App">
        <main className="AppMain">
          <section id="home">
            <Home />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="works">
            <Works />
          </section>
        </main>
      </div>
  );
}