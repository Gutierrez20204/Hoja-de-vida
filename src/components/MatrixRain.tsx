import { useEffect, useRef } from 'react'

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Guardar dimensiones iniciales
    let canvasWidth = window.innerWidth
    let canvasHeight = window.innerHeight
    
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    const fontSize = 14
    const columns = Math.floor(canvasWidth / fontSize)
    const drops: number[] = []

    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const chars = characters.split('')

    function draw() {
      const currentCanvas = canvasRef.current
      if (!ctx || !currentCanvas) return
      
      ctx.fillStyle = 'rgba(17, 24, 39, 0.05)'
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)

      ctx.fillStyle = '#3b82f6'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvasHeight && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    const handleResize = () => {
      const currentCanvas = canvasRef.current
      if (currentCanvas) {
        canvasWidth = window.innerWidth
        canvasHeight = window.innerHeight
        currentCanvas.width = canvasWidth
        currentCanvas.height = canvasHeight
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

export default MatrixRain
