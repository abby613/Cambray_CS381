import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('https://formspree.io/f/mnjdoklo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thanks for reaching out! I\'ll get back to you soon. Check your email for confirmation.',
        })
        setFormState({ name: '', email: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.',
        })
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact">
      <motion.div 
        className="section-header" 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }}
      >
        <h2>Let's Work Together</h2>
        <div className="header-line"></div>
      </motion.div>

      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Get in Touch</h3>
          <p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
          
          <div className="contact-links">
            <motion.a 
              href="mailto:altheacambray04@gmail.com" 
              className="contact-item"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="icon">📧</span>
              <span>altheacambray04@gmail.com</span>
            </motion.a>
            <motion.a 
              href="tel:09274863190" 
              className="contact-item"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="icon">📱</span>
              <span>09274863190</span>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/althea-abbygail-cambray-7116a0382" 
              className="contact-item" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="icon">💼</span>
              <span>LinkedIn</span>
            </motion.a>
            <motion.a 
              href="https://github.com/abby613" 
              className="contact-item" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="icon">🐙</span>
              <span>GitHub</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleChange}
              required
              disabled={loading}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formState.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows="5"
              value={formState.message}
              onChange={handleChange}
              required
              disabled={loading}
              className="form-input"
            ></textarea>
          </div>
          
          {status.message && (
            <motion.div 
              className={`form-status ${status.type}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {status.type === 'success' ? '✅' : '❌'} {status.message}
            </motion.div>
          )}
          
          <motion.button 
            type="submit" 
            className="submit-btn"
            disabled={loading}
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            transition={{ duration: 0.2 }}
          >
            {loading ? (
              <>
                <span className="spinner"></span> Sending...
              </>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
