import React, { useEffect, useRef, useState } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme')
      setIsDark(theme !== 'light')
    }
    checkTheme()

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Gradient orbs for moving glow effect
    const orbs = [
      { x: 0.2, y: 0.3, radius: 0.5, speedX: 0.3, speedY: 0.2 },
      { x: 0.7, y: 0.6, radius: 0.4, speedX: -0.2, speedY: 0.3 },
      { x: 0.5, y: 0.2, radius: 0.35, speedX: 0.15, speedY: -0.25 },
      { x: 0.8, y: 0.8, radius: 0.3, speedX: -0.25, speedY: -0.15 }
    ]

    // Color schemes
    const darkColors = {
      bg: ['#0a0f1a', '#0d1525', '#0a1220', '#081018'],
      orbs: [
        ['rgba(30, 64, 120, 0.4)', 'rgba(20, 50, 100, 0.2)'],
        ['rgba(40, 80, 140, 0.35)', 'rgba(25, 60, 110, 0.15)'],
        ['rgba(50, 90, 150, 0.3)', 'rgba(30, 70, 120, 0.12)'],
        ['rgba(35, 75, 130, 0.25)', 'rgba(20, 55, 100, 0.1)']
      ],
      accent: ['rgba(96, 165, 250, 0.08)', 'rgba(96, 165, 250, 0.03)']
    }

    const lightColors = {
      bg: ['#f0f4f8', '#e8eff5', '#f5f8fc', '#edf2f7'],
      orbs: [
        ['rgba(59, 130, 246, 0.15)', 'rgba(59, 130, 246, 0.05)'],
        ['rgba(99, 102, 241, 0.12)', 'rgba(99, 102, 241, 0.04)'],
        ['rgba(139, 92, 246, 0.1)', 'rgba(139, 92, 246, 0.03)'],
        ['rgba(79, 70, 229, 0.08)', 'rgba(79, 70, 229, 0.02)']
      ],
      accent: ['rgba(59, 130, 246, 0.1)', 'rgba(99, 102, 241, 0.04)']
    }

    const colors = isDark ? darkColors : lightColors

    const animate = () => {
      time += 0.003
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Gradient base
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      bgGradient.addColorStop(0, colors.bg[0])
      bgGradient.addColorStop(0.4, colors.bg[1])
      bgGradient.addColorStop(0.7, colors.bg[2])
      bgGradient.addColorStop(1, colors.bg[3])
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Animated glowing orbs
      orbs.forEach((orb, i) => {
        const offsetX = Math.sin(time * orb.speedX + i * 1.5) * 150
        const offsetY = Math.cos(time * orb.speedY + i * 2) * 100
        const x = orb.x * canvas.width + offsetX
        const y = orb.y * canvas.height + offsetY
        const radius = orb.radius * Math.min(canvas.width, canvas.height)

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, colors.orbs[i][0])
        gradient.addColorStop(0.5, colors.orbs[i][1])
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      // Subtle accent glow
      const accentX = canvas.width * 0.7 + Math.sin(time * 0.4) * 80
      const accentY = canvas.height * 0.3 + Math.cos(time * 0.3) * 60
      const accentGradient = ctx.createRadialGradient(accentX, accentY, 0, accentX, accentY, canvas.width * 0.3)
      accentGradient.addColorStop(0, colors.accent[0])
      accentGradient.addColorStop(0.5, colors.accent[1])
      accentGradient.addColorStop(1, 'transparent')
      ctx.fillStyle = accentGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  )
}
