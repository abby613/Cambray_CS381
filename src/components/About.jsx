import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const highlights = [
    { number: '100+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '25+', label: 'Technologies' },
  ]

  return (
    <motion.section 
      id="about" 
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="about-content-wrapper">
        <motion.div className="section-header" variants={itemVariants}>
          <h2>About Me</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div className="about-intro-text" variants={itemVariants}>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Opportunities
          </div>
        </motion.div>

        <motion.h3 className="about-headline" variants={itemVariants}>
          I'm a <span className="highlight">Software Engineer</span> passionate about building intelligent, scalable systems.
        </motion.h3>

        <motion.p className="about-paragraph" variants={itemVariants}>
          With hands-on experience across full-stack development, machine learning, and cloud infrastructure, 
          I bring a holistic approach to system design. I thrive on tackling complex challenges and translating 
          business requirements into elegant, maintainable solutions.
        </motion.p>

        <motion.div className="about-highlights" variants={itemVariants}>
          {highlights.map((item, i) => (
            <motion.div 
              key={i} 
              className="highlight-card"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <span className="highlight-number">{item.number}</span>
              <span className="highlight-label">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
