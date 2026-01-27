import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>About</h3>
          <p>Full-stack developer passionate about creating scalable solutions and building products that make an impact in the digital world.</p>
          <div className="footer-badges">
            <span className="badge">React</span>
            <span className="badge">Node.js</span>
            <span className="badge">DevOps</span>
            <span className="badge">Cloud</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#hero" className="footer-link">Home</a></li>
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
            <li><a href="#services" className="footer-link">Services</a></li>
            <li><a href="#growth" className="footer-link">Growth</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#services" className="footer-link">Web Development</a></li>
            <li><a href="#services" className="footer-link">AI/ML Solutions</a></li>
            <li><a href="#services" className="footer-link">DevOps</a></li>
            <li><a href="#services" className="footer-link">Cloud Architecture</a></li>
            <li><a href="#services" className="footer-link">Consulting</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            &copy; {currentYear} Althea Abbygail Cambray. All rights reserved.
          </p>
          <div className="footer-meta">
            <a href="#privacy" className="footer-meta-link">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="#terms" className="footer-meta-link">Terms of Service</a>
            <span className="divider">•</span>
            <span className="status">🟢 Available for freelance work</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
