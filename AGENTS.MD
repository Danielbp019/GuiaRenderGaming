# Agents

# Guía de Opciones Gráficas en Videojuegos

Esta guía proporciona un desglose detallado de todas las opciones gráficas más comunes en los videojuegos, explicando cómo afectan al rendimiento del juego y a la calidad visual. Además, proporciona recomendaciones sobre qué configuraciones usar según las especificaciones del hardware de cada jugador.

## Tecnologías Usadas

- **Frontend**: HTML, CSS, JavaScript.
- **Frameworks**: Astro.js (5.14.5), DaisyUI (5.1.18).
- **Librerías**: bootstrap-icons (1.13.1)

## Instalación

### Comandos comunes

| Comando                   | Acción                                                               |
| :------------------------ | :------------------------------------------------------------------- |
| `npm install`             | Instala las dependencias del proyecto                                |
| `npm run dev`             | Inicia el servidor local de desarrollo en `localhost:4321`           |
| `npm run build`           | Genera la versión de producción en la carpeta `./dist/`              |
| `npm run preview`         | Permite previsualizar la versión de producción antes de desplegarla  |
| `npm run astro ...`       | Ejecuta comandos de la CLI de Astro, como `astro add`, `astro check` |
| `npm run astro -- --help` | Muestra la ayuda de la CLI de Astro                                  |

## Exclusiones

Al trabajar con este proyecto, se deben ignorar las siguientes carpetas:

- `node_modules/`
- Cualquier carpeta que comience con un punto (`.`), como `.git/`, `.vscode/`, etc.
- Al recrear el Arbol de archivos, se debe ignorar el contenido de las carpetas `img`.
- Al recrear el Arbol de archivos, se debe nombrar la carpeta principal de fuentes e ignorar el contenido de la carpeta.

## Arbol de archivos

```text
├── .gitattributes
├── .gitignore
├── .prettierrc
├── AGENTS.MD
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
├── robots.txt
├── tsconfig.json
│
├── ImgReadme/
│   └── portada.png
├── public/
│   ├── apple-touch-icon.png
│   ├── favicon.png
│   ├── fonts/
│   ├── img/
│   └── video/
│       └── libro1284x719.mp4
└── src/
    ├── assets/
    │   ├── app.css
    │   └── img/
    ├── components/
    │   ├── ImageDiff.astro
    │   ├── ImageSolo.astro
    │   └── Indice.astro
    ├── data/
    │   └── indiceItems.ts
    ├── layouts/
    │   └── DashboardLayout.astro
    └── pages/
        ├── index.astro
        ├── temas.astro
        ├── amd/
        │   ├── anti-lag.astro
        │   ├── fidelityfx-suite.astro
        │   ├── fsr.astro
        │   ├── ris.astro
        │   ├── rsr.astro
        │   └── tressfx-hair.astro
        ├── apis/
        │   ├── directx.astro
        │   ├── metal.astro
        │   ├── opengl.astro
        │   └── vulkan.astro
        ├── extra/
        │   ├── amd-intel-nvidia.astro
        │   ├── display.astro
        │   ├── fans-guide.astro
        │   └── references.astro
        ├── general/
        │   ├── ambient-occlusion.astro
        │   ├── anti-aliasing.astro
        │   ├── bloom.astro
        │   ├── chromatic-aberration.astro
        │   ├── depth-of-field.astro
        │   ├── film-grain.astro
        │   ├── hdr-tone-mapping.astro
        │   ├── lens-flares.astro
        │   ├── lod.astro
        │   ├── motion-blur.astro
        │   ├── particles.astro
        │   ├── post-procesamiento.astro
        │   ├── reflections.astro
        │   ├── shadows.astro
        │   ├── tessellation.astro
        │   ├── texture-filtering.astro
        │   ├── texture-quality.astro
        │   ├── upscaling.astro
        │   ├── vignette.astro
        │   ├── volumetric-effects.astro
        │   └── vsync.astro
        ├── intel/
        │   ├── integer-scaling.astro
        │   ├── low-latency-mode.astro
        │   ├── xe-adaptive-sharpening.astro
        │   ├── xess-fg.astro
        │   └── xess.astro
        └── nvidia/
            ├── dlaa.astro
            ├── dlss.astro
            ├── faceworks.astro
            ├── freestyle.astro
            ├── hairworks.astro
            ├── nis.astro
            ├── physx.astro
            └── reflex.astro
```
