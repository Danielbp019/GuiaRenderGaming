# Guía de Rénder Gaming

Descubre cómo las diversas opciones gráficas en los videojuegos afectan el rendimiento y tu hardware, y
analiza su impacto real en tu experiencia de juego.

## 🚀 Arbol de archivos

```text
arbol:
├── public/
│   ├── favicon.svg
│   │
│   ├── intel_icon.svg
│   ├── fonts/
│   │   ├── AlexBrush/
│   │   │   └── AlexBrush-Regular.ttf
│   │   └── Roboto/
│   │       └── Roboto-Regular.ttf
│   ├── img/
│   │   ├── fondoLibro.png
│   │   └── general/
│   │       ├── tema1/
│   │       ├── tema2/
│   │       ├── tema3/
│   │       └── ...             # una carpeta por tema mostrado
│   └── video/
│       └── intro.mp4
├── src/
│   ├── assets/
│   │   ├── app.css
│   │   └── AA.png
│   ├── components/
│   │   ├── Indice.astro
│   │   ├── ImageDiff.astro
│   │   └── ImageSolo.astro
│   ├── data/
│   │   └── indiceItems.ts
│   ├── layouts/
│   │   └── DashboardLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── temas.astro
│       ├── extra/
│       │   ├── display.astro
│       │   └── references.astro
│       ├── amd/
│       │   └── index.astro
│       ├── apis/
│       │   └── index.astro
│       ├── general/
│       │   └── index.astro
│       ├── intel/
│       │   └── index.astro
│       └── nvidia/
│           └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
