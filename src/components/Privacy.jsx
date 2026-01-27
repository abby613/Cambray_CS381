import React from 'react'
import { motion } from 'framer-motion'

export default function Privacy() {
  return (
    <motion.section className="legal-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="legal-container">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          Privacy Policy
        </motion.h1>

        <motion.div className="legal-content" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="legal-section-item">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy ("Policy") describes how Althea Abbygail Cambray ("we," "us," "our," or "Cambray") collects, uses, discloses, and otherwise processes personal information in connection with our website, portfolio, and professional services.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal information you voluntarily provide, such as:
            </p>
            <ul>
              <li>Contact information (name, email, phone number)</li>
              <li>Professional information (company, job title, industry)</li>
              <li>Communication history and inquiries</li>
              <li>Information automatically collected through cookies and analytics</li>
            </ul>
          </div>

          <div className="legal-section-item">
            <h2>3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Respond to your inquiries and provide professional services</li>
              <li>Improve our website and services</li>
              <li>Analyze user engagement and optimize performance</li>
              <li>Communicate updates or changes to our services</li>
              <li>Comply with legal obligations</li>
            </ul>
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
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
            </p>
          </div>

          <div className="legal-section-item">
            <p className="last-updated">Last Updated: January 27, 2026</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
