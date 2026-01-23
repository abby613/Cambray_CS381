import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function ProjectCard({title, description, tech, link}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article 
      className="project-card"
      whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="project-inner">
        <div className="project-header">
          <h3>{title}</h3>
          <motion.span className="project-link" animate={isHovered ? { x: 5 } : { x: 0 }} transition={{ duration: 0.3 }}>→</motion.span>
        </div>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {tech.map((t, i) => (
            <motion.span key={i} className="tech-badge" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05, duration: 0.4 }}>
              {t}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="project-glow"></div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.section id="portfolio" className="scroll-section projects" ref={ref} style={{ opacity }}>
      <motion.div className="section-header" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2>Featured Projects</h2>
        <p>A showcase of recent work across backend, ML, and cloud infrastructure</p>
      </motion.div>
      <motion.div className="projects-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
        {projects.map((project, i) => (
          <ProjectCard 
            key={i}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </motion.div>
    </motion.section>
  )
}
