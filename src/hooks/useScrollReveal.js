import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all scroll-reveal elements
    const revealElements = document.querySelectorAll('.scroll-reveal')
    revealElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
