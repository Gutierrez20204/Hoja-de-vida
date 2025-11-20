import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const GridBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const gridSize = 50

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const cols = Math.ceil(dimensions.width / gridSize)
  const rows = Math.ceil(dimensions.height / gridSize)

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="50%" stopColor="rgba(37, 99, 235, 0.4)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.4)" />
          </linearGradient>
        </defs>
        
        {/* Líneas verticales */}
        {Array.from({ length: cols }).map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * gridSize}
            y1={0}
            x2={i * gridSize}
            y2={dimensions.height}
            stroke="url(#grid-gradient)"
            strokeWidth="0.5"
            opacity={0.2}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Líneas horizontales */}
        {Array.from({ length: rows }).map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1={0}
            y1={i * gridSize}
            x2={dimensions.width}
            y2={i * gridSize}
            stroke="url(#grid-gradient)"
            strokeWidth="0.5"
            opacity={0.2}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Puntos interactivos */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => {
          const x = Math.random() * 100
          const y = Math.random() * 100
          const delay = Math.random() * 2
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default GridBackground

