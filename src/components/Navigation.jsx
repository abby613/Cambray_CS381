import React from 'react'

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <a href="#" className="nav-logo">Portfolio</a>
        <ul className="nav-links">
          <li><a href="#hero" className="nav-link">Hero</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#growth" className="nav-link">Growth</a></li>
        </ul>
      </div>
    </nav>
  )
}
