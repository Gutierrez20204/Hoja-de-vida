// Componente para cambiar entre diferentes estilos de fondo
import ParticlesBackground from './ParticlesBackground'
import WaveBackground from './WaveBackground'
import GridBackground from './GridBackground'
import GradientOrbs from './GradientOrbs'
import MatrixRain from './MatrixRain'

export type BackgroundType = 'particles' | 'waves' | 'grid' | 'orbs' | 'matrix'

interface BackgroundOptionsProps {
  type: BackgroundType
}

const BackgroundOptions = ({ type }: BackgroundOptionsProps) => {
  switch (type) {
    case 'particles':
      return <ParticlesBackground />
    case 'waves':
      return <WaveBackground />
    case 'grid':
      return <GridBackground />
    case 'orbs':
      return <GradientOrbs />
    case 'matrix':
      return <MatrixRain />
    default:
      return <ParticlesBackground />
  }
}

export default BackgroundOptions

