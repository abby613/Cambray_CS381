import React from 'react'

function ProjectCard({title, role, bullets}){
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p className="role">{role}</p>
      <ul>
        {bullets.map((b,i)=>(<li key={i}>{b}</li>))}
      </ul>
    </article>
  )
}

export default function Projects(){
  const projects = [
    {
      title: 'E-Commerce REST API',
      role: 'What I know',
      bullets: [
        'Built a RESTful API with Node.js and Express',
        'Database design with PostgreSQL and query optimization',
        'Implemented authentication and authorization patterns',
      ]
    },
    {
      title: 'Real-Time Chat Application',
      role: 'What I learned',
      bullets: [
        'Mastered WebSocket communication for real-time updates',
        'Implemented message persistence and room management',
        'Learned deployment and scaling considerations',
      ]
    },
    {
      title: 'Microservices Architecture',
      role: 'What I aspire to',
      bullets: [
        'Design distributed systems with service isolation',
        'Implement containerization and orchestration (Docker/Kubernetes)',
        'Master observability, logging, and monitoring at scale',
      ]
    }
  ]

  return (
    <section className="projects">
      <h2>The Big Three</h2>
      <p>Select three projects that show growth: one that shows what you know, one that shows what you learned, and one that shows what you aspire to do.</p>
      <div className="project-grid">
        {projects.map((p,i)=>(
          <ProjectCard key={i} title={p.title} role={p.role} bullets={p.bullets} />
        ))}
      </div>
    </section>
  )
}
