import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Growth from './components/Growth'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <header className="site-header">
        <div className="header-content">
          <div className="profile-section">
            <img 
              src="/pfp.jpg" 
              alt="Profile Picture" 
              className="profile-pic"
            />
          </div>
          <div className="header-text">
            <h1>Abby</h1>
            <p className="site-sub">Software Engineer | AI/ML | DevOps | Cloud Architecture</p>
            <p className="header-cta">Crafting intelligent, scalable systems</p>
          </div>
        </div>
      </header>
      <main>
        <section id="hero" className="scroll-section">
          <Hero />
        </section>
        <section id="about" className="scroll-section">
          <About />
        </section>
        <section id="portfolio" className="scroll-section">
          <Projects />
        </section>
        <section id="services" className="scroll-section">
          <Services />
        </section>
        <section id="growth" className="scroll-section">
          <Growth />
        </section>
        <section id="contact" className="scroll-section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
