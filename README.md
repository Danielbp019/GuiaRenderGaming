# Guía de Rénder Gaming

Descubre cómo las diversas opciones gráficas en los videojuegos afectan el rendimiento y tu hardware, y
analiza su impacto real en tu experiencia de juego.

## 🚀 Arbol de archivos

```text
arbol:
├── public/
│   ├── favicon.svg
│   ├── font/
│   │   └── AlexBrush-Regular.ttf
│   ├── img/
│   │   └── fondoLibro.png
│   └── video/
│       └── intro.mp4
├── src/
│   ├── assets/
│   │   └── app.css
│   ├── components/
│   │   └── Indice.astro
│   ├── layouts/
│   │   └── DashboardLayout.astro
│   └── pages/
│       ├── index.astro
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
