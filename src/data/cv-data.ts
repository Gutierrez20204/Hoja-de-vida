// Archivo de datos del CV - Información de Samuel Gutiérrez Bedoya

export interface PersonalInfo {
  name: string
  title: string
  description: string
  email: string
  phone: string
  location: string
  birthDate?: string
  github?: string
  linkedin?: string
  twitter?: string
  website?: string
}

export interface Skill {
  name: string
  level: number // 0-100
  icon?: React.ReactNode
  color?: string
}

export interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
}

export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  description?: string
  type?: 'formal' | 'diploma' | 'course'
}

export interface Diploma {
  title: string
  institution?: string
  period: string
  description?: string
  status: 'completed' | 'in-progress'
}

// Información personal de Samuel Gutiérrez Bedoya
export const personalInfo: PersonalInfo = {
  name: 'SAMUEL GUTIÉRREZ BEDOYA',
  title: 'Tecnólogo en Análisis y Desarrollo de Software',
  description: 'Con experiencia en atención al cliente, logística y servicio. Actualmente trabajando y realizando prácticas en el sector de análisis y desarrollo de software',
  email: 'Samuelgb48@gmail.com',
  phone: '300-685-9960',
  location: 'Cll 66 #57-61 Medellín Itagui',
  birthDate: '5 de abril de 2002',
  github: undefined,
  linkedin: undefined,
  twitter: undefined,
}

export const aboutText = {
  main: 'Bachiller académico completado, joven con capacidades de liderazgo y trabajo en equipo, facilidad de adaptación al cambio y proactividad.',
  secondary: 'Excelente manejo de relaciones interpersonales, comunicación y alto sentido de responsabilidad y pertenencia por fuera y dentro del área laboral. Con experiencia en atención al cliente, logística y servicio. Actualmente trabajando y realizando prácticas en el sector de análisis y desarrollo de software.',
}

export const skills: Skill[] = [
  { name: 'Atención al Cliente', level: 95 },
  { name: 'Trabajo en Equipo', level: 95 },
  { name: 'Comunicación Efectiva', level: 90 },
  { name: 'Resolución de Problemas', level: 90 },
  { name: 'Adaptabilidad', level: 95 },
  { name: 'Asesoría Comercial', level: 85 },
  { name: 'Logística', level: 85 },
  { name: 'Manejo de Inventario', level: 80 },
  { name: 'Servicio al Cliente', level: 95 },
  { name: 'Liderazgo', level: 85 },
  { name: 'Proactividad', level: 90 },
  { name: 'JavaScript', level: 75 },
  { name: 'Power BI', level: 70 },
  { name: 'PHP', level: 65 },
  { name: 'Google Apps', level: 70 },
]

export const experiences: Experience[] = [
  {
    title: 'Recepcionista, Mesero y Barista',
    company: 'Hotel Maidy Luxury',
    location: 'Poblado, Medellín',
    period: 'Mar 2024 - Feb 2025',
    description: 'Atención integral al cliente en recepción, servicio de mesero y preparación de bebidas como barista. Manejo de reservas, check-in/check-out y servicio personalizado.',
    technologies: ['Atención al Cliente', 'Servicio', 'Hospitalidad'],
  },
  {
    title: 'Mesero Bartender',
    company: 'ENOTECA MERCADO DEL RIO',
    location: 'Industriales, Medellín',
    period: 'Mar 2024',
    description: 'Preparación y mezcla de cócteles personalizados según las preferencias del cliente. Implementación de estrategias de ventas para aumentar la clientela en el establecimiento.',
    technologies: ['Mixología', 'Ventas', 'Atención al Cliente'],
  },
  {
    title: 'Mesero',
    company: 'Barbacoa Burger & Beer',
    location: 'Envigado, Medellín',
    period: 'Ene 2024 - Feb 2024',
    description: 'Manejo de caja y cobro efectivo de las cuentas de los clientes. Servicio de mesero con atención personalizada.',
    technologies: ['Atención al Cliente', 'Manejo de Caja', 'Servicio'],
  },
  {
    title: 'Operador Cinemark VIP',
    company: 'CINEMARK',
    location: 'Poblado, Medellín',
    period: 'Nov 2022 - Ago 2023',
    description: 'Funciones como mesero, cajero, barra, arreglar salas, asegurar inicios de funciones, verificación de boletas, toma de pedidos en Tablet como en la caja, inventario, surtido y realización de conteo de caja con manejo de datafono y efectivo. Siempre prestando el servicio con la mejor actitud, disposición, responsabilidad, claridad, amabilidad y respeto con el cliente. Todo en el área VIP.',
    technologies: ['Servicio VIP', 'Manejo de Caja', 'Inventario', 'Atención al Cliente'],
  },
  {
    title: 'Call Center - Servicio al Cliente',
    company: 'Monarca Family Club, Suramericana',
    location: 'Medellín',
    period: 'Mar 2022 - Nov 2022',
    description: 'Atención al cliente en sector turismo. Manejo de consultas, reservas y soporte telefónico.',
    technologies: ['Atención Telefónica', 'Servicio al Cliente', 'Turismo'],
  },
  {
    title: 'Driver Comercial (Asesor Comercial)',
    company: 'Gr Temporales KOAJ-Florida',
    location: 'Medellín',
    period: 'Dic 2021 - Feb 2022',
    description: 'Asesoría comercial y manejo de rutas comerciales. Atención directa al cliente.',
    technologies: ['Asesoría Comercial', 'Ventas', 'Atención al Cliente'],
  },
  {
    title: 'Operador Logístico',
    company: 'Supermercados la 80, Campo Verde',
    location: 'Medellín',
    period: 'Oct 2021 - Nov 2021',
    description: 'Operaciones logísticas, manejo de inventario y organización de productos.',
    technologies: ['Logística', 'Manejo de Inventario', 'Organización'],
  },
]

export const projects: Project[] = [
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
]

export const education: Education[] = [
  {
    degree: 'Tecnología en Análisis y Desarrollo de Software',
    institution: 'Institución de Educación Superior',
    period: 'Oct 2023 - Actualmente',
    description: 'Estudiante activo en programa de tecnología enfocado en análisis y desarrollo de software',
    type: 'formal',
  },
  {
    degree: 'Bachiller Académico',
    institution: 'I.E Ferrini Calasanz',
    period: 'Estudios Secundarios',
    description: 'Bachiller académico completado',
    type: 'formal',
  },
  {
    degree: 'Estudios Primarios',
    institution: 'I.E Eduardo Santos',
    period: 'Estudios Primarios',
    description: 'Educación básica primaria',
    type: 'formal',
  },
]

export const diplomas: Diploma[] = [
  {
    title: 'Programador en JavaScript',
    period: 'Completado',
    description: 'Diplomado en programación con JavaScript',
    status: 'completed',
  },
  {
    title: 'Power BI para el Análisis y la Visualización de Datos',
    period: 'Completado',
    description: 'Diplomado en análisis de datos y visualización con Power BI',
    status: 'completed',
  },
  {
    title: 'Programación en PHP',
    period: 'En Curso',
    description: 'Diplomado en desarrollo web con PHP',
    status: 'in-progress',
  },
  {
    title: 'Aplicaciones de Google',
    period: 'En Curso',
    description: 'Diplomado en aplicaciones y herramientas de Google',
    status: 'in-progress',
  },
]

export interface Reference {
  name: string
  position: string
  company: string
  phone: string
}

export const references: Reference[] = [
  {
    name: 'Albany Bedoya Perez',
    position: 'Gestora de archivos',
    company: 'Itagui',
    phone: '3167532244',
  },
]

