import React from 'react'
import { motion } from 'framer-motion'

export default function Privacy() {
  const goHome = (e) => {
    e.preventDefault()
    window.location.href = window.location.pathname
  }

  return (
    <motion.section className="legal-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="legal-container">
        <a href="/" onClick={goHome} className="back-to-home">← Back to Portfolio</a>
        
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          Privacy Policy
        </motion.h1>

        <motion.div className="legal-content" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="legal-section-item">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy describes how I, Althea Abbygail Cambray, a Software Engineer specializing in AI/ML, DevOps, and Cloud Architecture, collect, use, and protect information when you interact with my portfolio website and professional services.
            </p>
            <p>
              I am committed to protecting your privacy and handling your data transparently, especially when discussing potential projects, collaborations, or employment opportunities.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>2. Information I Collect</h2>
            <p>
              When you contact me about potential work opportunities, I may collect:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number</li>
              <li><strong>Professional Details:</strong> Company name, job title, project requirements</li>
              <li><strong>Project Information:</strong> Technical requirements, timelines, budget considerations</li>
              <li><strong>Communication Records:</strong> Emails, messages, and meeting notes</li>
              <li><strong>Technical Data:</strong> Browser type and IP address (automatically collected)</li>
            </ul>
          </div>

          <div className="legal-section-item">
            <h2>3. How I Use Your Information</h2>
            <p>I use collected information solely for professional purposes:</p>
            <ul>
              <li><strong>Project Discussions:</strong> Respond to inquiries about freelance, contract, or full-time opportunities</li>
              <li><strong>Service Delivery:</strong> Provide software engineering, consulting, and development services</li>
              <li><strong>Communication:</strong> Send project updates, proposals, and deliverables</li>
              <li><strong>Portfolio Improvement:</strong> Enhance my website and services based on feedback</li>
              <li><strong>Legal Compliance:</strong> Meet contractual and legal obligations</li>
            </ul>
            <p><em>I will never sell your information or use it for marketing without your explicit consent.</em></p>
          </div>

          <div className="legal-section-item">
            <h2>4. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect personal information from unauthorized access, alteration, and disclosure. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>5. Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance user experience. You can control cookie preferences through your browser settings.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before providing personal information.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your personal information, including access, correction, deletion, and data portability. Contact us to exercise these rights.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>8. Contact Us</h2>
            <p>
              For privacy concerns or questions, please contact us at:
              <br />
              Email: altheacambray04@gmail.com
              <br />
              Phone: 09274863190
            </p>
          </div>

          <div className="legal-section-item">
            <h2>9. Changes to This Policy</h2>
            <p>
              I may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of my services constitutes acceptance of the updated policy.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>10. Working Together</h2>
            <p>
              I'm committed to building trust with potential clients and employers. If you have any privacy concerns before starting a project together, please don't hesitate to discuss them with me. Transparency is fundamental to good working relationships.
            </p>
          </div>

          <div className="legal-section-item">
            <p className="last-updated">Last Updated: January 29, 2028</p>
          </div>
        </motion.div>
        
        <div className="legal-cta">
          <a href="#" className="cta-button">Back to Portfolio</a>
          <a href="#contact" className="cta-button secondary">Contact Me</a>
        </div>
      </div>
    </motion.section>
  )
}
