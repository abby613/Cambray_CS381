import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Growth from './components/Growth'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="container">
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
            <h1>My Portfolio</h1>
            <p className="site-sub">Future-Proof Portfolio — built with React</p>
          </div>
        </div>
      </header>
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="growth">
          <Growth />
        </section>
      </main>
      <Footer />
    </div>
  )
}
