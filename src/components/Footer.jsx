import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <a href="mailto:your.email@example.com" className="contact-link">
                ✉ Email
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                💼 LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                🔗 GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                𝕏 Twitter
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section about">
          <h3>About</h3>
          <p>A modern, responsive portfolio showcasing projects and growth journey in web development.</p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul className="links-list">
            <li><a href="#hero" className="footer-link">Hero Statement</a></li>
            <li><a href="#projects" className="footer-link">Projects</a></li>
            <li><a href="#growth" className="footer-link">Growth</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Althea Abbygail Cambray. All rights reserved.</p>
      </div>
    </footer>
  )
}
