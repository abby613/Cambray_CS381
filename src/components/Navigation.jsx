import React, { useState, useEffect } from 'react'

export default function Navigation() {
  const [isDark, setIsDark] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setIsDark(saved === 'dark')
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Fade out when scrolling down, fade in when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

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

  const goHome = (e) => {
    e.preventDefault()
    window.location.href = window.location.pathname
  }

  return (
    <nav className={`nav ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
      <div className="nav-content">
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
              {isDark ? '☀︎' : '⏾'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
