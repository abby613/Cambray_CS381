import React from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import WorkStatus from './components/WorkStatus'
import Services from './components/Services'
import Growth from './components/Growth'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useScrollReveal()
  return (
    <div className="app">
      <Navigation />
      <header className="site-header">
        <div className="header-content">
          <div className="profile-section">
            <div className="profile-container">
              <img 
                src="/profile.jpg" 
                alt="Profile Picture" 
                className="profile-pic"
              />
            </div>
          </div>
          <div className="header-text">
            <h1 className="header-title">Althea Abbygail Cambray</h1>
            <p className="site-sub"> Software Engineer | AI/ML | DevOps | Cloud Architecture
              <br />
              <br />"Building scalable systems that solve real-world problems"
              <br />
              <br />🟢 Available for freelance/contract work • She/Her
              <br />
              <br />✉ altheacambray04@gmail.com 
              <br />📱 09274863190
            </p>
          </div>
        </div>
      </header>
      <main>
        <section id="hero" className="scroll-section scroll-reveal">
          <Hero />
        </section>
        <section id="about" className="scroll-section scroll-reveal">
          <About />
        </section>
        <section id="portfolio" className="scroll-section scroll-reveal">
          <Projects />
        </section>
        <section id="work-status" className="scroll-section scroll-reveal">
          <WorkStatus />
        </section>
        <section id="services" className="scroll-section scroll-reveal">
          <Services />
        </section>
        <section id="growth" className="scroll-section scroll-reveal">
          <Growth />
        </section>
        <section id="contact" className="scroll-section scroll-reveal">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
