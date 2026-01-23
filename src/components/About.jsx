import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section className="about" ref={ref} style={{ opacity }}>
      <motion.div className="about-container" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
        <motion.div className="about-text" variants={itemVariants}>
          <h2>About Me</h2>
          <p>
            I'm a Software Engineer with a passion for building intelligent, scalable systems. With extensive experience in full-stack development, machine learning, and cloud infrastructure, I excel at tackling complex problems and crafting elegant solutions that drive real business impact.
          </p>
          <p>
            I specialize in AI/ML architectures, DevOps practices, and cloud-native development. I'm dedicated to continuous learning and staying at the forefront of emerging technologies to build systems that matter.
          </p>
        </motion.div>
        
        <motion.div className="about-roles">
          <motion.div className="role" variants={itemVariants}>
            <h3>Software Engineer I</h3>
            <span>AI/ML • Python • Backend</span>
          </motion.div>
          <motion.div className="role" variants={itemVariants}>
            <h3>DevOps Engineer</h3>
            <span>AWS • Docker • CI/CD</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
