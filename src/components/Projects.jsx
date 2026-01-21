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
      title: 'Data Structures & Algorithms Project',
      role: 'What I know',
      bullets: [
        'Implemented core data structures: linked lists, trees, hash maps',
        'Solved complex algorithmic problems with optimal time/space complexity',
        'Built sorting and searching algorithms from first principles',
      ]
    },
    {
      title: 'Full-Stack Web Application',
      role: 'What I learned',
      bullets: [
        'Built complete REST API with Node.js and Express backend',
        'Designed normalized databases and optimized SQL queries',
        'Deployed to cloud platform and managed CI/CD pipeline',
      ]
    },
    {
      title: 'Distributed Systems Project',
      role: 'What I aspire to',
      bullets: [
        'Design scalable backend architectures for high-traffic systems',
        'Deep dive into systems programming and performance optimization',
        'Explore cloud-native development and containerization practices',
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
