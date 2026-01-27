import React from 'react'
import { motion } from 'framer-motion'

export default function Terms() {
  return (
    <motion.section className="legal-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="legal-container">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          Terms of Service
        </motion.h1>

        <motion.div className="legal-content" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="legal-section-item">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website and professional portfolio, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
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
            <h2>9. Professional Services</h2>
            <p>
              Any professional services offered are subject to separate agreement. Portfolio items and project descriptions are for demonstration purposes. Actual project details may be subject to confidentiality agreements.
            </p>
          </div>

          <div className="legal-section-item">
            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              Email: altheacambray04@gmail.com
              <br />
              Phone: 09274863190
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
