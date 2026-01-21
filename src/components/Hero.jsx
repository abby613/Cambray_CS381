import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-main">
          <h1 className="hero-title">
            Hey, I'm <span className="name">Abby</span>
          </h1>
          <p className="hero-subtitle">
            Software Engineer crafting elegant solutions through code, AI, and cloud architecture.
          </p>
          <p className="hero-description">
            I specialize in building scalable backend systems, machine learning pipelines, and DevOps infrastructure. Let's create something amazing together.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="cta-link">Get in touch</a>
            <a href="#portfolio" className="cta-link secondary">See my work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
