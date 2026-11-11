import React, { useEffect, useRef } from 'react'
import Snowfall from 'react-snowfall'
import { useWeather } from '../Context/WeatherContext'
import { useTheme } from '../Context/ThemeContext'

const WeatherCanvas = () => {
  const { activeEffect, intensity } = useWeather()
  const { darkMode } = useTheme()
  const rainCanvasRef = useRef(null)
  const ambientCanvasRef = useRef(null)

  // Snowflake counts based on intensity
  const snowflakeCount = intensity === 'light' ? 60 : intensity === 'heavy' ? 220 : 130

  // ── Rain Effect Canvas ──────────────────────────────────────────
  useEffect(() => {
    if (activeEffect !== 'rain') return
    const canvas = rainCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const dropsCount = intensity === 'light' ? 70 : intensity === 'heavy' ? 220 : 130
    const drops = []
    for (let i = 0; i < dropsCount; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 12,
        speed: Math.random() * 8 + 14,
        opacity: Math.random() * 0.4 + 0.25,
        width: Math.random() * 1.5 + 0.8
      })
    }

    const renderRain = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.lineWidth = 1.2
      ctx.lineCap = 'round'

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i]
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - 2, d.y + d.length)
        // Powder blue / slate cyan raindrops with crisp contrast
        ctx.strokeStyle = darkMode
          ? `rgba(171, 201, 203, ${d.opacity})`
          : `rgba(45, 110, 125, ${d.opacity * 0.95})`
        ctx.stroke()

        d.y += d.speed
        d.x -= 1.5

        if (d.y > canvas.height) {
          d.y = -20
          d.x = Math.random() * (canvas.width + 100)
        }
      }
      animationId = requestAnimationFrame(renderRain)
    }

    renderRain()
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [activeEffect, intensity, darkMode])

  // ── Ambient Floating Particles Canvas ───────────────────────────
  useEffect(() => {
    if (activeEffect !== 'ambient') return
    const canvas = ambientCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particleCount = intensity === 'light' ? 18 : intensity === 'heavy' ? 45 : 28
    const particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.2 + 0.6,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.2,
        alpha: Math.random() * 0.5 + 0.2,
        isOrange: Math.random() > 0.75 // 25% vibrant orange accents, 75% powder blue
      })
    }

    const renderAmbient = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)

        if (p.isOrange) {
          ctx.fillStyle = `rgba(244, 91, 11, ${p.alpha * 0.8})`
          ctx.shadowColor = '#f45b0b'
        } else {
          ctx.fillStyle = darkMode 
            ? `rgba(171, 201, 203, ${p.alpha})`
            : `rgba(130, 175, 178, ${p.alpha * 0.7})`
          ctx.shadowColor = '#abc9cb'
        }
        ctx.shadowBlur = 6
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
        }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
      }
      animationId = requestAnimationFrame(renderAmbient)
    }

    renderAmbient()
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [activeEffect, intensity, darkMode])

  if (activeEffect === 'off') {
    return null
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 32 }}
      aria-hidden="true"
    >
      {/* Snowfall Effect */}
      {activeEffect === 'snow' && (
        <Snowfall
          color={darkMode ? '#ffffff' : '#4f848a'}
          snowflakeCount={snowflakeCount}
          speed={[1.2, 3.8]}
          wind={[-0.5, 1.2]}
          radius={[1.0, 3.2]}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Rain Effect */}
      {activeEffect === 'rain' && (
        <canvas
          ref={rainCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      )}

      {/* Ambient Particle Breeze */}
      {activeEffect === 'ambient' && (
        <canvas
          ref={ambientCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      )}
    </div>
  )
}

export default WeatherCanvas

