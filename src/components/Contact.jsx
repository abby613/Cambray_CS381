import React, { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, integrate with a service like EmailJS or Formspree
    alert(`Thanks for reaching out, ${formState.name}! I'll get back to you soon.`)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact">
      <div className="section-header">
        <h2>Let's Work Together</h2>
        <div className="header-line"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
          
          <div className="contact-links">
            <a href="mailto:abby@example.com" className="contact-item">
              <span className="icon">📧</span>
              <span>Email Me</span>
            </a>
            <a href="https://linkedin.com" className="contact-item" target="_blank" rel="noopener noreferrer">
              <span className="icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com" className="contact-item" target="_blank" rel="noopener noreferrer">
              <span className="icon">🐙</span>
              <span>GitHub</span>
            </a>
            <a href="https://twitter.com" className="contact-item" target="_blank" rel="noopener noreferrer">
              <span className="icon">𝕏</span>
              <span>Twitter</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}
