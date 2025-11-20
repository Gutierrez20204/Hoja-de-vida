import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'
import { personalInfo } from '../data/cv-data'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    alert('¡Mensaje enviado! (Esta es una demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    { icon: <FaEnvelope />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FaPhone />, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <FaMapMarkerAlt />, text: personalInfo.location, href: '#' },
  ]

  return (
    <section id="contact" className="relative py-20 section-bg">
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
              Contacto
            </h2>
            <div className="accent-line mx-auto" />
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <motion.div
              className="space-y-8"
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="card-elegant p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Hablemos</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  ¿Tienes un proyecto en mente? Me encantaría escucharlo.
                  Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        {info.icon}
                      </div>
                      <span className="text-lg">{info.text}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="card-elegant p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white transition-all"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white transition-all"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 text-white resize-none transition-all"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-lg text-white hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/50"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-16 text-gray-400"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <p>© 2024 {personalInfo.name}. Todos los derechos reservados.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
