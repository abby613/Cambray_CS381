import React from 'react'

function ProjectCard({title, description, tech, link}) {
  return (
    <article className="project-card">
      <div className="project-header">
        <h3>{title}</h3>
        <span className="project-link">→</span>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-tech">
        {tech.map((t, i) => (
          <span key={i} className="tech-badge">{t}</span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  const projects = [
    {
      title: 'ML Pipeline Automation',
      description: 'Built automated ML training and deployment pipeline reducing model iteration time by 60%. Integrated with cloud storage and monitoring systems.',
      tech: ['Python', 'TensorFlow', 'AWS', 'Docker']
    },
    {
      title: 'Microservices Architecture',
      description: 'Designed and implemented scalable microservices platform handling 100k+ daily requests with load balancing and service discovery.',
      tech: ['Node.js', 'Kubernetes', 'PostgreSQL', 'gRPC']
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Created real-time data visualization system with WebSocket integration for live analytics and custom reporting capabilities.',
      tech: ['React', 'D3.js', 'WebSocket', 'Go']
    },
    {
      title: 'Infrastructure-as-Code Setup',
      description: 'Established IaC framework for multi-environment deployments with automated CI/CD, monitoring, and rollback capabilities.',
      tech: ['Terraform', 'GitHub Actions', 'Prometheus', 'ELK']
    },
    {
      title: 'API Gateway & Rate Limiter',
      description: 'Engineered high-performance API gateway with intelligent rate limiting, authentication, and request routing for enterprise systems.',
      tech: ['Go', 'Redis', 'JWT', 'Nginx']
    },
    {
      title: 'Data Processing Engine',
      description: 'Developed distributed data processing engine for ETL operations, handling petabyte-scale datasets with fault tolerance.',
      tech: ['Spark', 'Scala', 'Cassandra', 'Airflow']
    }
  ]

  return (
    <section id="portfolio" className="scroll-section projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>A showcase of recent work across backend, ML, and cloud infrastructure</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard 
            key={i}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}
