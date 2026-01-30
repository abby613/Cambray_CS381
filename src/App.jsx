import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navigation from './components/Navigation'
import AnimatedBackground from './components/AnimatedBackground'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import WorkStatus from './components/WorkStatus'
import Services from './components/Services'
import Growth from './components/Growth'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Privacy from './components/Privacy'
import Terms from './components/Terms'

export default function App() {
  useScrollReveal()

  // Get hash from URL
  const hash = window.location.hash.slice(1)

  // Show Privacy page
  if (hash === 'privacy') {
    return (
      <div className="app">
        <AnimatedBackground />
        <Navigation />
        <main>
          <Privacy />
        </main>
        <Footer />
      </div>
    )
  }

  // Show Terms page
  if (hash === 'terms') {
    return (
      <div className="app">
        <AnimatedBackground />
        <Navigation />
        <main>
          <Terms />
        </main>
        <Footer />
      </div>
    )
  }

  // Default: Show homepage
  return (
    <div className="app snap-container">
      <AnimatedBackground />
      <Navigation />
      <header className="site-header snap-section">
        <div className="header-content">
          <motion.div 
            className="profile-section"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="profile-container">
              <motion.div 
                className="profile-glow-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <img 
                src="/pp.jpg" 
                alt="Althea Abbygail R. Cambray" 
                className="profile-pic"
              />
            </div>
          </motion.div>

          <motion.div 
            className="header-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="header-title">Althea Abbygail R. Cambray</h1>
            <p className="header-role">Senior Software Engineer | AI/ML | DevOps | Cloud Architect</p>
            <p className="header-quote">"Turning ideas into elegant, scalable solutions"</p>
          </motion.div>
        </div>
      </header>
      <main className="snap-main">
        <section id="hero" className="snap-section scroll-reveal">
          <Hero />
        </section>
        <section id="about-section" className="snap-section scroll-reveal">
          <About />
        </section>
        <section id="portfolio" className="snap-section scroll-reveal">
          <Projects />
        </section>
        <section id="work-status" className="snap-section scroll-reveal">
          <WorkStatus />
        </section>
        <section id="services" className="snap-section scroll-reveal">
          <Services />
        </section>
        <section id="growth" className="snap-section scroll-reveal">
          <Growth />
        </section>
        <section id="testimonials" className="snap-section scroll-reveal">
          <Testimonials />
        </section>
        <section id="contact" className="snap-section scroll-reveal">
          <Contact />
        </section>
        <section id="footer" className="snap-section">
          <Footer />
        </section>
      </main>
    </div>
  )
}
