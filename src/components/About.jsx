import React from 'react'

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a Computer Science student with a passion for building intelligent systems. With experience in full-stack development, machine learning, and cloud infrastructure, I love tackling complex problems and creating elegant solutions.
          </p>
          <p>
            Currently, I'm deepening my expertise in AI/ML and DevOps, exploring how to architect scalable systems that make an impact.
          </p>
        </div>
        
        <div className="about-roles">
          <div className="role">
            <h3>Software Engineer I</h3>
            <span>AI/ML • Python • Backend</span>
          </div>
          <div className="role">
            <h3>DevOps Engineer</h3>
            <span>AWS • Docker • CI/CD</span>
          </div>
        </div>
      </div>
    </section>
  )
}
