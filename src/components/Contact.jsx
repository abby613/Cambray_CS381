import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Contact SVG Icons
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="contact-svg-icon">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="contact-svg-icon">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="contact-svg-icon">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="contact-svg-icon">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
)

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

      <motion.div 
        className="contact-info"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3>Get in Touch</h3>
        <p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
        
        <div className="contact-links">
          <motion.a 
            href="mailto:altheacambray04@gmail.com" 
            className="contact-item"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="contact-icon-box"><EmailIcon /></div>
            <span className="contact-label">Email</span>
            <span className="contact-value">altheacambray04@gmail.com</span>
          </motion.a>
          <motion.a 
            href="tel:09274863190" 
            className="contact-item"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="contact-icon-box"><PhoneIcon /></div>
            <span className="contact-label">Phone</span>
            <span className="contact-value">09274863190</span>
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/althea-abbygail-cambray-7116a0382" 
            className="contact-item" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="contact-icon-box"><LinkedInIcon /></div>
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">View Profile</span>
          </motion.a>
          <motion.a 
            href="https://github.com/abby613" 
            className="contact-item" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="contact-icon-box"><GitHubIcon /></div>
            <span className="contact-label">GitHub</span>
            <span className="contact-value">View Projects</span>
          </motion.a>
        </div>
      </motion.div>

      <div className="contact-content">

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
