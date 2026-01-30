import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>About</h3>
          <p>Senior Software Engineer passionate about creating scalable solutions and building products that make an impact.</p>
          <div className="footer-badges">
            <span className="badge">React</span>
            <span className="badge">Node.js</span>
            <span className="badge">AI/ML</span>
            <span className="badge">Cloud</span>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#services" className="footer-link">Cloud Architecture</a></li>
            <li><a href="#services" className="footer-link">AI/ML Solutions</a></li>
            <li><a href="#services" className="footer-link">Backend Systems</a></li>
            <li><a href="#services" className="footer-link">DevOps</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {currentYear} Althea Abbygail Cambray. All rights reserved.
          </p>
          <div className="footer-meta">
            <a href="#privacy" className="footer-meta-link" onClick={(e) => { window.location.hash = 'privacy'; window.location.reload(); }}>Privacy</a>
            <span className="divider">•</span>
            <a href="#terms" className="footer-meta-link" onClick={(e) => { window.location.hash = 'terms'; window.location.reload(); }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
