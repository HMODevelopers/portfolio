# Carlos Lafarga · Portfolio

Sitio personal y currículum digital construido con Angular standalone, TypeScript y SCSS. El proyecto presenta una experiencia premium enfocada en reclutadores, clientes y oportunidades remotas, con secciones de hero, experiencia, stack, proyectos, fortalezas y contacto.

## Stack

- Angular 20
- Standalone Components
- Angular Signals
- TypeScript
- SCSS
- Angular Router

## Estructura principal

```text
src/
  app/
    components/layout
    core/data
    core/models
    core/services
    features/home/pages
    features/home/sections
    shared/ui
  assets/
    documents
    images
```

## Cómo ejecutar

> Nota: en este entorno no fue posible descargar dependencias desde npm por una restricción 403 del registro. En una máquina con acceso normal a npm, ejecuta los siguientes pasos.

```bash
npm install
npm start
```

La aplicación quedará disponible por defecto en `http://localhost:4200`.

## Build de producción

```bash
npm install
npm run build
```

El resultado se generará en `dist/portfolio/browser`.

## Deploy sugerido en GitHub Pages

1. Instala dependencias con `npm install`.
2. Genera el build con `npm run build -- --base-href /portfolio/`.
3. Publica el contenido de `dist/portfolio/browser` en la rama `gh-pages`.
4. Si quieres automatizarlo, puedes usar GitHub Actions para desplegar esa carpeta después de cada push a la rama principal.

## Personalización rápida

- Actualiza contenido y textos en `src/app/core/data/portfolio.data.ts`.
- Ajusta tokens visuales globales en `src/styles.scss`.
- Reemplaza el CV descargable en `src/assets/documents/carlos-lafarga-cv.pdf`.
- Cambia branding e imágenes en `src/assets/images/`.
