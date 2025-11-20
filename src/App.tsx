import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import References from './components/References'
import Contact from './components/Contact'
import BackgroundOptions, { BackgroundType } from './components/BackgroundOptions'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)
  const [backgroundType, setBackgroundType] = useState<BackgroundType>('particles')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Cambiar fondo con las teclas 1-5
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '1') setBackgroundType('particles')
      if (e.key === '2') setBackgroundType('waves')
      if (e.key === '3') setBackgroundType('grid')
      if (e.key === '4') setBackgroundType('orbs')
      if (e.key === '5') setBackgroundType('matrix')
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gray-950">
      <BackgroundOptions type={backgroundType} />
      
      {/* Selector de fondo flotante */}
      <div className="fixed bottom-4 right-4 z-50 glass rounded-lg p-2 flex gap-2">
        <button
          onClick={() => setBackgroundType('particles')}
          className={`px-3 py-1 rounded text-sm transition-all ${
            backgroundType === 'particles' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          title="Partículas (Tecla 1)"
        >
          1
        </button>
        <button
          onClick={() => setBackgroundType('waves')}
          className={`px-3 py-1 rounded text-sm transition-all ${
            backgroundType === 'waves' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          title="Ondas (Tecla 2)"
        >
          2
        </button>
        <button
          onClick={() => setBackgroundType('grid')}
          className={`px-3 py-1 rounded text-sm transition-all ${
            backgroundType === 'grid' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          title="Grid (Tecla 3)"
        >
          3
        </button>
        <button
          onClick={() => setBackgroundType('orbs')}
          className={`px-3 py-1 rounded text-sm transition-all ${
            backgroundType === 'orbs' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          title="Orbes (Tecla 4)"
        >
          4
        </button>
        <button
          onClick={() => setBackgroundType('matrix')}
          className={`px-3 py-1 rounded text-sm transition-all ${
            backgroundType === 'matrix' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          title="Matrix (Tecla 5)"
        >
          5
        </button>
      </div>

      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <References />
        <Contact />
      </motion.div>
    </div>
  )
}

export default App

