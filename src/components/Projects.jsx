import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ProjectCard({ title, description, tech, category, impact, color, index, image }) {
  return (
    <motion.article 
      className="project-card"
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-image-overlay"></div>
      </div>
      <div className="project-inner">
        <div className="project-category-badge" style={{ backgroundColor: color + '20', color: color }}>
          {category}
        </div>
        <div className="project-header">
          <h3>{title}</h3>
        </div>
        <p className="project-description">{description}</p>
        {impact && (
          <div className="project-impact">
            <span className="impact-icon">📈</span>
            <span className="impact-text">{impact}</span>
          </div>
        )}
        <div className="project-tech">
          {tech.map((t, i) => (
            <span key={i} className="tech-badge">{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = [
    { name: 'All', color: '#e8a4c9' },
    { name: 'AI/ML', color: '#9d6bff' },
    { name: 'Backend', color: '#e8a4c9' },
    { name: 'Cloud', color: '#00b894' },
    { name: 'DevOps', color: '#f0b866' }
  ]

  const projects = [
    {
      title: 'ML Pipeline Platform',
      category: 'AI/ML',
      description: 'End-to-end automated ML training and deployment pipeline with model versioning and A/B testing.',
      tech: ['Python', 'TensorFlow', 'AWS SageMaker'],
      impact: '60% faster model iterations',
      color: '#9d6bff',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop'
    },
    {
      title: 'E-Commerce Microservices',
      category: 'Backend',
      description: 'Scalable microservices architecture with event-driven communication and 99.9% uptime.',
      tech: ['Node.js', 'Kubernetes', 'PostgreSQL'],
      impact: '100k+ daily requests',
      color: '#e8a4c9',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
    },
    {
      title: 'Multi-Cloud Infrastructure',
      category: 'Cloud',
      description: 'Infrastructure-as-code framework for seamless multi-environment deployments.',
      tech: ['Terraform', 'AWS', 'GCP'],
      impact: 'Zero-downtime deploys',
      color: '#00b894',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
    },
    {
      title: 'CI/CD Optimization',
      category: 'DevOps',
      description: 'Redesigned pipeline reducing build times with parallel testing and auto rollback.',
      tech: ['GitHub Actions', 'Docker', 'ArgoCD'],
      impact: '70% faster deployments',
      color: '#f0b866',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop'
    },
    {
      title: 'Predictive Maintenance',
      category: 'AI/ML',
      description: 'ML-powered system for predicting equipment failures using sensor data.',
      tech: ['Python', 'scikit-learn', 'Kafka'],
      impact: '40% less downtime',
      color: '#9d6bff',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop'
    },
    {
      title: 'API Gateway',
      category: 'Backend',
      description: 'High-performance gateway with rate limiting, JWT auth, and caching.',
      tech: ['Go', 'Redis', 'Prometheus'],
      impact: '1M+ requests/day',
      color: '#e8a4c9',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
    },
    {
      title: 'Real-Time Chat Platform',
      category: 'Backend',
      description: 'WebSocket-based messaging system with end-to-end encryption and offline sync.',
      tech: ['Node.js', 'Socket.io', 'MongoDB'],
      impact: '50k+ concurrent users',
      color: '#e8a4c9',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop'
    },
    {
      title: 'Smart Analytics Dashboard',
      category: 'AI/ML',
      description: 'Interactive data visualization with AI-powered insights and anomaly detection.',
      tech: ['React', 'D3.js', 'Python', 'GPT-4'],
      impact: 'Real-time insights for 500+ users',
      color: '#9d6bff',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="projects">
      <motion.div 
        className="section-header" 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }}
      >
        <h2>Featured Projects</h2>
        <p>Showcase of AI/ML, backend, cloud, and DevOps work</p>
        <div className="header-line"></div>
      </motion.div>

      <motion.div 
        className="project-filters" 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.name}
            className={`filter-btn ${activeFilter === cat.name ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={activeFilter === cat.name ? { backgroundColor: cat.color, borderColor: cat.color } : {}}
          >
            {cat.name}
          </motion.button>
        ))}
      </motion.div>

      <div className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <ProjectCard 
              key={project.title}
              index={i}
              {...project}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
