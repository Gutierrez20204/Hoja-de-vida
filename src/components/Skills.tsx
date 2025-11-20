import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaUserFriends,
  FaComments,
  FaPuzzlePiece,
  FaSync,
  FaHandshake,
  FaTruck,
  FaBoxes,
  FaHeadset,
  FaCrown,
  FaRocket,
  FaCode,
  FaChartBar,
  FaServer,
  FaGoogle,
} from 'react-icons/fa'
import { skills as skillsData } from '../data/cv-data'

// Mapeo de iconos para las habilidades
const skillIcons: { [key: string]: React.ReactNode } = {
  'Atención al Cliente': <FaHeadset />,
  'Trabajo en Equipo': <FaUserFriends />,
  'Comunicación Efectiva': <FaComments />,
  'Resolución de Problemas': <FaPuzzlePiece />,
  'Adaptabilidad': <FaSync />,
  'Asesoría Comercial': <FaHandshake />,
  'Logística': <FaTruck />,
  'Manejo de Inventario': <FaBoxes />,
  'Servicio al Cliente': <FaHeadset />,
  'Liderazgo': <FaCrown />,
  'Proactividad': <FaRocket />,
  'JavaScript': <FaCode />,
  'Power BI': <FaChartBar />,
  'PHP': <FaServer />,
  'Google Apps': <FaGoogle />,
}

const colors = [
  { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-300' },
  { gradient: 'from-blue-400 to-blue-500', bg: 'bg-blue-500/20', border: 'border-blue-400/30', text: 'text-blue-300' },
  { gradient: 'from-blue-600 to-purple-600', bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-300' },
  { gradient: 'from-purple-500 to-purple-600', bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-300' },
  { gradient: 'from-blue-500 to-purple-500', bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-300' },
  { gradient: 'from-cyan-400 to-blue-500', bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-300' },
  { gradient: 'from-blue-600 to-indigo-600', bg: 'bg-indigo-500/20', border: 'border-indigo-500/30', text: 'text-indigo-300' },
  { gradient: 'from-purple-400 to-purple-500', bg: 'bg-purple-500/20', border: 'border-purple-400/30', text: 'text-purple-300' },
]

const skills = skillsData.map((skill, index) => ({
  ...skill,
  icon: skillIcons[skill.name] || <FaRocket />,
  color: colors[index % colors.length],
}))

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="relative py-20 section-bg">
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
              Habilidades
            </h2>
            <div className="accent-line mx-auto" />
            <p className="text-gray-400 mt-4 text-lg">Competencias y conocimientos profesionales</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="card-elegant p-6 text-center group relative overflow-hidden"
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                {/* Efecto de brillo en hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Borde animado */}
                <div className={`absolute inset-0 rounded-2xl border-2 ${skill.color.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Icono con efecto */}
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${skill.color.gradient} flex items-center justify-center text-white shadow-lg relative z-10`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: `0 0 20px ${skill.color.text}`,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-2xl">
                    {skill.icon}
                  </div>
                  {/* Efecto de resplandor */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.color.gradient} blur-xl opacity-0 group-hover:opacity-50`}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Nombre de la habilidad */}
                <h3 className="text-base font-semibold mb-4 text-white relative z-10 min-h-[2.5rem] flex items-center justify-center">
                  {skill.name}
                </h3>

                {/* Barra de progreso mejorada */}
                <div className="relative z-10">
                  <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-gray-700/50">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color.gradient} rounded-full relative overflow-hidden`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: index * 0.05 + 0.3, duration: 1.5, ease: "easeOut" }}
                    >
                      {/* Efecto de brillo animado en la barra */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Porcentaje con animación */}
                  <motion.div
                    className="flex items-center justify-between mt-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.05 + 1 }}
                  >
                    <span className="text-xs text-gray-500">Nivel</span>
                    <motion.span
                      className={`text-sm font-bold ${skill.color.text}`}
                      animate={inView ? { 
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{ 
                        delay: index * 0.05 + 1.2,
                        duration: 0.5,
                      }}
                    >
                      {skill.level}%
                    </motion.span>
                  </motion.div>
                </div>

                {/* Indicador de nivel visual */}
                <div className="mt-3 flex justify-center gap-1 relative z-10">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i < Math.floor(skill.level / 20)
                          ? `bg-gradient-to-r ${skill.color.gradient}`
                          : 'bg-gray-700'
                      }`}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.05 + 0.5 + i * 0.1 }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Estadísticas generales */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <div className="card-elegant p-6 text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 1, type: 'spring' }}
              >
                {skills.length}
              </motion.div>
              <p className="text-gray-400 text-sm">Habilidades</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 1.1, type: 'spring' }}
              >
                {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%
              </motion.div>
              <p className="text-gray-400 text-sm">Promedio</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 1.2, type: 'spring' }}
              >
                {skills.filter(s => s.level >= 90).length}
              </motion.div>
              <p className="text-gray-400 text-sm">Expertas</p>
            </div>
            <div className="card-elegant p-6 text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 1.3, type: 'spring' }}
              >
                {skills.filter(s => s.level >= 80 && s.level < 90).length}
              </motion.div>
              <p className="text-gray-400 text-sm">Avanzadas</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
