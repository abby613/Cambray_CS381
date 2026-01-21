import React from 'react'

export default function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="nav-content">
        <a href="#" className="nav-logo">Abby</a>
        <ul className="nav-links">
          <li><a href="#hero" className="nav-link" onClick={() => scrollToSection('hero')}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#portfolio" className="nav-link" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
          <li><a href="#services" className="nav-link" onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
