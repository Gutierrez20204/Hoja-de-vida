import { motion } from 'framer-motion'
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import ReactTyped from 'react-typed'
import { personalInfo } from '../data/cv-data'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda - Información */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="accent-line mb-6"
                initial={{ width: 0 }}
                animate={inView ? { width: 80 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
              
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4 text-white"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                {personalInfo.name.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                className="text-2xl md:text-3xl font-semibold mb-6 h-12 text-gradient"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <ReactTyped
                  strings={[
                    personalInfo.title,
                    'Atención al Cliente',
                    'Servicio y Hospitalidad',
                    'Desarrollador en Formación',
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                  className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                />
              </motion.div>

              <motion.p
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                {personalInfo.description}
              </motion.p>

              {/* Información de contacto */}
              <motion.div
                className="space-y-3 mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-3 text-gray-300">
                  <FaEnvelope className="text-blue-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaPhone className="text-blue-400" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </motion.div>

              {/* Botones sociales */}
              <motion.div
                className="flex gap-4"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                {personalInfo.github && (
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/50"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                  </motion.a>
                )}
                {personalInfo.linkedin && (
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/50"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                )}
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/50"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Columna derecha - Avatar/Imagen */}
            <motion.div
              className="flex justify-center"
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 p-1 shadow-2xl shadow-blue-500/50"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center border border-blue-500/20">
                      <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SG</span>
                    </div>
                  </div>
                </motion.div>
                {/* Decoración */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Botón scroll */}
          <motion.button
            onClick={scrollToNext}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.2 }}
          >
            <FaArrowDown className="text-3xl" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
