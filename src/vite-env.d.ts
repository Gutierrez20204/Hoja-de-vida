/// <reference types="vite/client" />

declare module 'react-typed' {
  import { Component } from 'react'
  
  interface ReactTypedProps {
    strings: string[]
    typeSpeed?: number
    backSpeed?: number
    loop?: boolean
    className?: string
  }
  
  export default class ReactTyped extends Component<ReactTypedProps> {}
}

