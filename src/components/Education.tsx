import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCalendarAlt, FaSchool, FaCertificate, FaCheckCircle, FaSpinner } from 'react-icons/fa'
import { education, diplomas } from '../data/cv-data'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="relative py-20 section-bg">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Formación
            </h2>
            <div className="accent-line mx-auto" />
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Estudios Formales */}
            <div>
              <motion.h3
                className="text-2xl font-bold mb-8 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                Estudios Formales
              </motion.h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="card-elegant p-6"
                    initial={{ x: -30, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                        {index === 0 ? <FaGraduationCap /> : <FaSchool />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-white">{edu.degree}</h3>
                        <p className="text-lg text-blue-400 mb-2 font-semibold">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                          <FaCalendarAlt className="text-blue-400" />
                          <span>{edu.period}</span>
                        </div>
                        {edu.description && (
                          <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Diplomados */}
            <div>
              <motion.h3
                className="text-2xl font-bold mb-8 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                Diplomados
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                {diplomas.map((diploma, index) => (
                  <motion.div
                    key={index}
                    className="card-elegant p-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                        <FaCertificate />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-white">{diploma.title}</h3>
                          {diploma.status === 'completed' ? (
                            <FaCheckCircle className="text-blue-400" />
                          ) : (
                            <FaSpinner className="text-blue-400 animate-spin" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm mb-3">
                          <FaCalendarAlt className="text-purple-400" />
                          <span>{diploma.period}</span>
                        </div>
                        {diploma.description && (
                          <p className="text-gray-300 text-sm leading-relaxed mb-3">{diploma.description}</p>
                        )}
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            diploma.status === 'completed'
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                              : 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                          }`}
                        >
                          {diploma.status === 'completed' ? 'Completado' : 'En Curso'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
