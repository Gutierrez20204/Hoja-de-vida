import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUser, FaPhone, FaBriefcase, FaBuilding } from 'react-icons/fa'
import { references } from '../data/cv-data'

const References = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="references" className="relative py-20 section-bg">
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
              Referencias
            </h2>
            <div className="accent-line mx-auto" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-1 gap-6">
              {references.map((ref, index) => (
                <motion.div
                  key={index}
                  className="card-elegant p-8"
                  initial={{ y: 50, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <FaUser className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-white">{ref.name}</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-300">
                          <FaBriefcase className="text-blue-400" />
                          <span className="font-medium">{ref.position}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <FaBuilding className="text-blue-400" />
                          <span>{ref.company}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <FaPhone className="text-blue-400" />
                          <a href={`tel:${ref.phone}`} className="hover:text-blue-400 transition-colors">
                            {ref.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default References
