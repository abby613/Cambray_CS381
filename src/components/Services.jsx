import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])

  const services = [
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'End-to-end Google Cloud Platform (GCP) services including data pipelines, AI integrations, and secure cloud architectures to support client modernization and growth.'
    },
    {
      icon: '📊',
      title: 'Data and Analytics',
      description: 'Building ETL/ELT pipelines, optimizing databases, and enabling real-time insights through advanced analytics tools.'
    },
    {
      icon: '🧠',
      title: 'AI and Infrastructure',
      description: 'Developing AI-powered applications, containerized environments, and orchestrated systems for reliable, scalable operations.'
    },
    {
      icon: '🔐',
      title: 'Security and Optimization',
      description: 'Implementing monitoring, logging, and best practices for secure, high-performance cloud infrastructure.'
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Java, Python, Go, and C# with opportunities for front-end work in modern frameworks. SQL and NoSQL databases with schema design and query optimization.'
    },
    {
      icon: '🚀',
      title: 'DevOps & Deployment',
      description: 'CI/CD pipelines on GitHub/GitLab, Docker containerization, Kubernetes orchestration, testing with Jest/PyTest/JUnit, and GCP deployments with AWS/Azure exposure.'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section className="services" ref={ref} style={{ opacity }}>
      <motion.div className="section-header" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2>Services & Expertise</h2>
        <div className="header-line"></div>
      </motion.div>

      <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
        {services.map((service, index) => (
          <motion.div key={index} className="service-card" variants={cardVariants} whileHover={{ y: -10, transition: { duration: 0.4 } }}>
            <motion.div className="service-icon" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 5, repeat: Infinity }}>
              {service.icon}
            </motion.div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
