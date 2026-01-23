import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])

  const services = [
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'RESTful APIs, microservices, database optimization, and scalable server architecture using Node.js, Python, and Go.'
    },
    {
      icon: '🧠',
      title: 'AI/ML Solutions',
      description: 'Machine learning models, data pipelines, predictive analytics, and intelligent automation with TensorFlow and scikit-learn.'
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'AWS deployment, Docker containerization, CI/CD pipelines, infrastructure-as-code, and system monitoring.'
    },
    {
      icon: '📊',
      title: 'System Design',
      description: 'Scalable architectures, database design, API optimization, and performance tuning for high-traffic systems.'
    },
    {
      icon: '🔐',
      title: 'Security',
      description: 'Authentication, authorization, encryption, vulnerability assessment, and secure coding practices.'
    },
    {
      icon: '🚀',
      title: 'Full-Stack Development',
      description: 'End-to-end web applications combining React frontend, Node.js backend, and cloud deployment strategies.'
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
