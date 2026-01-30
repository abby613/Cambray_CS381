import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: '☁️',
      title: 'Cloud',
      description: 'End-to-end cloud solutions including data pipelines, AI integrations, and secure architectures.',
      skills: ['GCP', 'AWS', 'Terraform']
    },
    {
      icon: '🧠',
      title: 'AI/ML',
      description: 'AI-powered applications with containerized ML systems for reliable, scalable operations.',
      skills: ['TensorFlow', 'PyTorch', 'MLOps']
    },
    {
      icon: '⚙️',
      title: 'Backend',
      description: 'High-performance APIs and microservices with SQL/NoSQL database optimization.',
      skills: ['Python', 'Go', 'Node.js']
    },
    {
      icon: '🚀',
      title: 'DevOps',
      description: 'CI/CD pipelines, Docker containerization, and Kubernetes orchestration.',
      skills: ['Docker', 'Kubernetes', 'GitHub Actions']
    }
  ]

  return (
    <motion.section 
      className="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="section-header" 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }}
      >
        <h2>Services</h2>
        <div className="header-line"></div>
      </motion.div>

      <div className="services-horizontal">
        <div className="services-tabs">
          {services.map((service, index) => (
            <motion.button
              key={index}
              className={`service-tab ${activeService === index ? 'active' : ''}`}
              onClick={() => setActiveService(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tab-icon">{service.icon}</span>
              <span className="tab-title">{service.title}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            className="service-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="service-description">{services[activeService].description}</p>
            <div className="service-skills">
              {services[activeService].skills.map((skill, i) => (
                <span key={i} className="service-skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
