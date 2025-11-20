import { motion } from 'framer-motion'

const GradientOrbs = () => {
  const orbs = [
    { size: 400, x: 10, y: 10, color: 'rgba(59, 130, 246, 0.2)' },
    { size: 300, x: 80, y: 20, color: 'rgba(37, 99, 235, 0.2)' },
    { size: 350, x: 20, y: 80, color: 'rgba(139, 92, 246, 0.2)' },
    { size: 250, x: 70, y: 70, color: 'rgba(59, 130, 246, 0.15)' },
  ]

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: orb.color,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Partículas pequeñas flotantes */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(${59 + Math.random() * 50}, ${130 + Math.random() * 20}, ${246 + Math.random() * 10}, 0.6)`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default GradientOrbs

