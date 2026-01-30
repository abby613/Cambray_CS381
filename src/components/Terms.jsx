import React from 'react'
import { motion } from 'framer-motion'

export default function Terms() {
  const goHome = (e) => {
    e.preventDefault()
    window.location.href = window.location.pathname
  }

  return (
    <motion.section className="legal-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="legal-container">
        <a href="/" onClick={goHome} className="back-to-home">← Back to Portfolio</a>
        
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          Terms of Service
        </motion.h1>

        <motion.div className="legal-content" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="legal-section-item">
            <h2>1. About These Terms</h2>
            <p>
              Welcome! These terms govern your use of my portfolio website and outline the framework for professional engagements. By accessing this site or engaging my services as a Software Engineer, you agree to these terms.
            </p>
            <p>
              I'm available for <strong>freelance projects</strong>, <strong>contract work</strong>, and <strong>full-time opportunities</strong> in AI/ML, DevOps, Cloud Architecture, and Backend Development.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </div>

          <div className="legal-section-item">
            <h2>3. Disclaimer</h2>
            <p>
              The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>4. Limitations</h2>
            <p>
              In no event shall Althea Abbygail Cambray or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on this website are accurate, complete, or current. We may make changes to the materials contained on this website at any time without notice.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>6. Links</h2>
            <p>
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>7. Modifications</h2>
            <p>
              We may revise these terms of service for this website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the Philippines, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>9. Professional Services & Engagement</h2>
            <p>
              I offer professional software engineering services including:
            </p>
            <ul>
              <li><strong>Freelance/Contract Work:</strong> Project-based engagements with clear deliverables</li>
              <li><strong>Consulting:</strong> Technical advisory and architecture review</li>
              <li><strong>Full-time Employment:</strong> Open to the right opportunity</li>
            </ul>
            <p>
              All professional engagements are subject to a separate written agreement outlining scope, timeline, compensation, and deliverables. Portfolio items shown are for demonstration purposes; actual project details may be subject to confidentiality agreements with previous clients.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>10. Confidentiality</h2>
            <p>
              I take confidentiality seriously. Any sensitive information shared during project discussions will be treated as confidential. I'm happy to sign NDAs when required for specific engagements.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>11. Let's Work Together</h2>
            <p>
              I'm excited to collaborate on meaningful projects. Whether you need an AI/ML solution, cloud architecture, DevOps pipeline, or full-stack development, I'm here to help turn your vision into reality.
            </p>
            <p>
              <strong>Contact me at:</strong><br />
              📧 Email: altheacambray04@gmail.com<br />
              📱 Phone: 09274863190<br />
              💼 LinkedIn: linkedin.com/in/althea-abbygail-cambray-7116a0382
            </p>
          </div>

          <div className="legal-section-item">
            <p className="last-updated">Last Updated: January 29, 2028</p>
          </div>
        </motion.div>
        
        <div className="legal-cta">
          <a href="#" className="cta-button">Back to Portfolio</a>
          <a href="#contact" className="cta-button secondary">Get in Touch</a>
        </div>
      </div>
    </motion.section>
  )
}
