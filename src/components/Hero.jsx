import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function MyPortfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  return (
    <motion.section className="hero" ref={ref} style={{ opacity }}>
      <div className="hero-background">
        <motion.div className="floating-cube cube-1" animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className="floating-cube cube-2" animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }} />
        <motion.div className="floating-cube cube-3" animate={{ y: [0, -15, 0] }} transition={{ duration: 5.5, repeat: Infinity, delay: 1 }} />
      </div>
      <motion.div className="hero-content" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="hero-main">
          <motion.div className="code-block" variants={itemVariants}>&lt;Developer&gt;</motion.div>
          <motion.p className="hero-greeting" variants={itemVariants}>Hello there!</motion.p>
          <motion.h1 className="hero-title" variants={itemVariants}>
            Welcome to my portfolio.
          </motion.h1>
          <motion.p className="hero-role" variants={itemVariants}>Software Engineer</motion.p>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Crafting elegant solutions through scalable code, AI pipelines, and cloud infrastructure.
          </motion.p>
          <motion.p className="hero-description" variants={itemVariants}>
            I specialize in building robust backend systems, deploying machine learning models, and architecting cloud solutions that scale. Let's build something exceptional.
          </motion.p>
          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.a href="#portfolio" className="cta-link primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>View my projects</motion.a>
            <motion.a href="#contact" className="cta-link secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Get in touch</motion.a>
          </motion.div>
          <motion.div className="code-block closing" variants={itemVariants}>&lt;/developer&gt;</motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
