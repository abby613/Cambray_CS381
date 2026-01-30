import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.section 
      id="hero" 
      className="hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="hero-content" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="hero-main">
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hello, I'm a
          </motion.p>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            Software Engineer
          </motion.h1>
          
          <motion.p className="hero-tagline" variants={itemVariants}>
            Building Scalable Systems & Intelligent Solutions
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            Specializing in cloud architecture, AI/ML systems, and backend development. 
            Transforming complex challenges into elegant, production-ready solutions.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.a 
              href="#portfolio" 
              className="cta-link primary" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="cta-link secondary" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
