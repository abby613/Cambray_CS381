import React, { useState, useEffect } from 'react'

export default function Navigation() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setIsDark(saved === 'dark')
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="nav-content">
        <a href="#" className="nav-logo">Portfolio</a>
        <ul className="nav-links">
          <li><a href="#hero" className="nav-link" onClick={() => scrollToSection('hero')}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#portfolio" className="nav-link" onClick={() => scrollToSection('portfolio')}>Projects</a></li>
          <li><a href="#services" className="nav-link" onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
          <li>
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
