import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import { experiences as experiencesData } from '../data/cv-data'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="relative py-20 section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Experiencia Profesional
            </h2>
            <div className="accent-line mx-auto" />
            <p className="text-gray-400 mt-4 text-lg">Mi trayectoria laboral y crecimiento profesional</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Timeline vertical mejorado */}
            <div className="relative">
              {/* Línea del timeline */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform md:-translate-x-1/2 opacity-30" />
              
              {/* Línea brillante animada */}
              <motion.div
                className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 transform md:-translate-x-1/2"
                initial={{ height: 0 }}
                animate={inView ? { height: '100%' } : {}}
                transition={{ duration: 2, delay: 0.5 }}
                style={{ 
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                }}
              />

              {experiencesData.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8 md:text-right'}`}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
                >
                  {/* Punto del timeline */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full transform md:-translate-x-1/2 -translate-y-1/2 top-8 border-4 border-gray-950 shadow-lg z-10"
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        '0 0 0px rgba(59, 130, 246, 0.5)',
                        '0 0 20px rgba(59, 130, 246, 0.8)',
                        '0 0 0px rgba(59, 130, 246, 0.5)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-white/20" />
                  </motion.div>

                  {/* Card de experiencia */}
                  <motion.div
                    className={`card-elegant p-6 md:p-8 relative overflow-hidden group ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
                    
                    {/* Borde superior con color */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      {/* Header con icono y título */}
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg flex-shrink-0 ${
                            index % 2 === 0 ? '' : 'md:order-2 md:ml-auto'
                          }`}
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <FaBriefcase className="text-xl" />
                        </motion.div>
                        
                        <div className={`flex-1 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                          <motion.h3
                            className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors"
                            whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
                          >
                            {exp.title}
                          </motion.h3>
                          <motion.p
                            className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                          >
                            {exp.company}
                          </motion.p>
                        </div>
                      </div>

                      {/* Información de ubicación y fecha */}
                      <div className={`flex flex-wrap gap-4 text-gray-400 text-sm mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.1, color: '#60a5fa' }}
                        >
                          <FaMapMarkerAlt className="text-blue-400" />
                          <span>{exp.location}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.1, color: '#60a5fa' }}
                        >
                          <FaCalendarAlt className="text-purple-400" />
                          <span className="font-medium">{exp.period}</span>
                        </motion.div>
                      </div>

                      {/* Descripción */}
                      <motion.p
                        className="text-gray-300 mb-6 leading-relaxed text-base"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {exp.description}
                      </motion.p>

                      {/* Tecnologías/Habilidades */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15 + techIndex * 0.1 }}
                            whileHover={{ 
                              scale: 1.1, 
                              backgroundColor: 'rgba(59, 130, 246, 0.3)',
                              borderColor: 'rgba(59, 130, 246, 0.5)',
                            }}
                          >
                            <FaCheckCircle className="inline mr-1.5 text-xs" />
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Decoración de esquina */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
