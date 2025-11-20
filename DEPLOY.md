# 🚀 Guía de Despliegue en Vercel

## Opción 1: Despliegue desde GitHub (Recomendado)

### Paso 1: Subir a GitHub

1. Si no tienes un repositorio Git, inicialízalo:
```bash
git init
git add .
git commit -m "Initial commit - Hoja de vida virtual"
```

2. Crea un repositorio en GitHub (ve a github.com y crea uno nuevo)

3. Conecta tu repositorio local con GitHub:
```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

### Paso 2: Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "Add New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente que es un proyecto Vite
6. Haz clic en "Deploy"
7. ¡Listo! Tu hoja de vida estará online en unos minutos

## Opción 2: Despliegue desde la Terminal

### Instalar Vercel CLI

```bash
npm install -g vercel
```

### Desplegar

```bash
vercel
```

Sigue las instrucciones en la terminal:
- ¿Set up and deploy? **Y**
- ¿Which scope? (Selecciona tu cuenta)
- ¿Link to existing project? **N**
- ¿What's your project's name? (nombre del proyecto)
- ¿In which directory is your code located? **./**
- ¿Want to override the settings? **N**

### Para producción

```bash
vercel --prod
```

## Configuración Automática

El proyecto ya incluye `vercel.json` con la configuración correcta:
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Rewrites configurados para SPA

## Variables de Entorno (si las necesitas)

Si en el futuro necesitas variables de entorno:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las variables necesarias

## Dominio Personalizado

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio personalizado

---

**¡Tu hoja de vida estará online en minutos!** 🎉

