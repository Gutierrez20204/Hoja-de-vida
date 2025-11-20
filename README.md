# 🚀 Hoja de Vida Virtual Innovadora

Una hoja de vida virtual completamente innovadora y llamativa, construida con las últimas tecnologías web modernas.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz atractiva con gradientes, animaciones y efectos visuales
- 🎭 **Animaciones Suaves**: Implementadas con Framer Motion
- ✨ **Partículas Interactivas**: Fondo animado con partículas interactivas
- 📱 **Totalmente Responsive**: Se adapta perfectamente a todos los dispositivos
- 🎯 **Navegación Suave**: Scroll suave entre secciones
- 🌈 **Efectos Visuales**: Gradientes, glassmorphism y efectos 3D
- ⚡ **Rendimiento Optimizado**: Carga rápida y experiencia fluida

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultra rápido
- **Framer Motion** - Animaciones avanzadas
- **Tailwind CSS** - Estilos modernos
- **React Particles** - Efectos de partículas
- **React Icons** - Iconos modernos
- **React Typed** - Texto animado

## 🚀 Instalación

1. Clona o descarga este repositorio
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:3000`

## 📝 Personalización

### Cambiar Información Personal

Edita los siguientes archivos para personalizar tu hoja de vida:

- **Hero Section**: `src/components/Hero.tsx`
  - Cambia el nombre, título y descripción
  - Actualiza los enlaces de redes sociales

- **About Section**: `src/components/About.tsx`
  - Modifica la descripción sobre ti
  - Ajusta las características destacadas

- **Skills**: `src/components/Skills.tsx`
  - Agrega o modifica tus habilidades
  - Ajusta los niveles de competencia

- **Experience**: `src/components/Experience.tsx`
  - Actualiza tu experiencia laboral
  - Modifica fechas, empresas y descripciones

- **Projects**: `src/components/Projects.tsx`
  - Agrega tus proyectos destacados
  - Actualiza imágenes, descripciones y enlaces

- **Contact**: `src/components/Contact.tsx`
  - Cambia información de contacto
  - Actualiza enlaces de redes sociales

### Cambiar Colores

Edita `tailwind.config.js` para personalizar la paleta de colores:

```javascript
colors: {
  primary: {
    // Tus colores personalizados
  }
}
```

## 🎨 Secciones

1. **Hero** - Presentación principal con animaciones
2. **Sobre Mí** - Información personal y características
3. **Habilidades** - Tecnologías y competencias
4. **Experiencia** - Historial laboral con timeline
5. **Proyectos** - Portfolio de proyectos destacados
6. **Contacto** - Formulario y información de contacto

## 📦 Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 🌐 Despliegue en Vercel

### Método Rápido (Recomendado)

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

2. **Despliega en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con GitHub
   - Haz clic en "Add New Project"
   - Importa tu repositorio
   - Vercel detectará automáticamente Vite
   - Haz clic en "Deploy"
   - ¡Listo! Tu hoja de vida estará online

### Método con CLI

```bash
npm install -g vercel
vercel
vercel --prod
```

**El proyecto ya incluye `vercel.json` configurado correctamente.**

### Otras opciones de despliegue

- **Netlify** - Arrastra la carpeta `dist` después de `npm run build`
- **GitHub Pages** - Usa GitHub Actions
- **Firebase Hosting** - `firebase deploy`

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🙏 Créditos

Diseñado y desarrollado con ❤️ para crear una experiencia única e impresionante.

---

**¡Haz que tu hoja de vida destaque!** 🚀✨

