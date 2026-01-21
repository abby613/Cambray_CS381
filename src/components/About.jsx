import React from 'react'

export default function About() {
  return (
    <section className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="header-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-intro">
          <p className="intro-text">
            Hey, I'm <span className="highlight">Abby</span> — a Software Engineer passionate about building intelligent systems and scalable solutions. Currently exploring AI/ML, cloud architecture, and DevOps practices.
          </p>
        </div>

        <div className="roles-grid">
          <div className="role-card">
            <div className="role-icon">🤖</div>
            <h3>Software Engineer I</h3>
            <p>AI/ML | Python | Backend Systems</p>
          </div>
          <div className="role-card">
            <div className="role-icon">☁️</div>
            <h3>DevOps Engineer</h3>
            <p>AWS | Docker | CI/CD Pipelines</p>
          </div>
          <div className="role-card">
            <div className="role-icon">💻</div>
            <h3>Full-Stack Developer</h3>
            <p>React | Node.js | System Design</p>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Shipped</span>
          </div>
          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">Always Learning</span>
          </div>
        </div>
      </div>
    </section>
  )
}
