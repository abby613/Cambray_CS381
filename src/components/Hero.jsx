import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-main">
          <h1 className="hero-title">
            Software Engineer & <span className="accent">DevOps Specialist</span>
          </h1>
          <p className="hero-subtitle">
            Crafting elegant solutions through scalable code, AI pipelines, and cloud infrastructure.
          </p>
          <p className="hero-description">
            I specialize in building robust backend systems, deploying machine learning models, and architecting cloud solutions that scale. Let's build something exceptional.
          </p>
          <div className="hero-cta">
            <a href="#portfolio" className="cta-link">View my projects</a>
            <a href="#contact" className="cta-link secondary">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
