import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Commerce Moderno',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'App de Gestión de Tareas',
    description: 'Aplicación web para gestión de proyectos con colaboración en tiempo real y notificaciones push.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    technologies: ['Vue.js', 'Firebase', 'WebSockets'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Dashboard Analítico',
    description: 'Dashboard interactivo con visualizaciones de datos en tiempo real y reportes personalizables.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Red Social Creativa',
    description: 'Plataforma social para compartir contenido creativo con sistema de likes, comentarios y seguimiento.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    technologies: ['Next.js', 'GraphQL', 'AWS', 'Redis'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gradient">Proyectos</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass rounded-2xl overflow-hidden group"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-blue-500/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      <span>Código</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-purple-500/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

