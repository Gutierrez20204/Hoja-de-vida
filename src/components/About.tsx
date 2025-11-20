import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa'
import { aboutText } from '../data/cv-data'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Trabajo en Equipo',
      description: 'Capacidades de liderazgo y excelente manejo de relaciones interpersonales',
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: 'Proactividad',
      description: 'Facilidad de adaptación al cambio y enfoque en soluciones',
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: 'Responsabilidad',
      description: 'Alto sentido de responsabilidad y pertenencia en el área laboral',
    },
  ]

  return (
    <section id="about" className="relative py-20 section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Título */}
            <motion.div
              className="text-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Sobre Mí
              </h2>
              <div className="accent-line mx-auto" />
            </motion.div>

            {/* Texto principal */}
            <motion.div
              className="card-elegant p-8 md:p-12 mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                {aboutText.main}
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                {aboutText.secondary}
              </p>
            </motion.div>

            {/* Características */}
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="card-elegant p-8 text-center"
                  initial={{ y: 50, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
