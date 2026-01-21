import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Welcome to My Digital Space</h2>
        <p className="hero-statement">
          I'm a Software Engineer passionate about building intelligent, scalable systems using AI/ML, cloud technologies, and modern software architecture.
        </p>
        
        <div className="hero-highlights">
          <div className="highlight-item">
            <span className="highlight-emoji">🚀</span>
            <span>Building Production Systems</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-emoji">🤖</span>
            <span>AI/ML Integration</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-emoji">☁️</span>
            <span>Cloud & DevOps</span>
          </div>
        </div>

        <div className="hero-cta">
          <button className="cta-btn primary">View My Work</button>
          <button className="cta-btn secondary">Get in Touch</button>
        </div>
      </div>
    </section>
  )
}
