# Agents

# Guía de Opciones Gráficas en Videojuegos

Esta guía proporciona un desglose detallado de todas las opciones gráficas más comunes en los videojuegos, explicando cómo afectan al rendimiento del juego y a la calidad visual. Además, proporciona recomendaciones sobre qué configuraciones usar según las especificaciones del hardware de cada jugador.

## Tecnologías Usadas

- **Frontend**: HTML, CSS, JavaScript.
- **Frameworks**: Astro.js, DaisyUI.
- **Librerías**: bootstrap-icons

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

## Arbol de archivos

```text
├── AGENTS.MD
├── astro.config.mjs
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── intel_icon.svg
│   ├── fonts/
│   │   ├── AlexBrush/
│   │   │   ├── AlexBrush-Regular.ttf
│   │   │   └── OFL.txt
│   │   └── Roboto/
│   │       ├── OFL.txt
│   │       ├── README.txt
│   │       ├── Roboto-Italic-VariableFont_wdth,wght.ttf
│   │       ├── Roboto-VariableFont_wdth,wght.ttf
│   │       └── static/
│   │           ├── Roboto_Condensed-Black.ttf
│   │           ├── Roboto_Condensed-BlackItalic.ttf
│   │           ├── Roboto_Condensed-Bold.ttf
│   │           └── ...
│   ├── img/
│   │   ├── fondoLibro.png
│   │   ├── general/
│   │   │   ├── ambient-occlusion/
│   │   │   ├── anti-aliasing/
│   │   │   ├── bloom/
│   │   │   ├── chromatic-aberration/
│   │   │   ├── depth-of-field/
│   │   │   ├── film-grain/
│   │   │   ├── lens-flare.astro/
│   │   │   ├── lod/
│   │   │   ├── motion-blur/
│   │   │   ├── particles/
│   │   │   ├── reflections/
│   │   │   ├── shadows/
│   │   │   ├── tessellation/
│   │   │   ├── texture-filtering/
│   │   │   ├── texture-quality/
│   │   │   ├── vignette/
│   │   │   ├── volumetric-effects/
│   │   │   └── vsync/
│   │   ├── nvidia/
│   │   │   ├── hairworks/
│   │   │   └── physx/
│   │   └── ...
│   └── video/
│       ├── libro1284x719.mp4
│       └── libro1926x1079.mp4
├── src/
│   ├── assets/
│   │   ├── AA.png
│   │   └── app.css
│   ├── components/
│   │   ├── ImageDiff.astro
│   │   ├── ImageSolo.astro
│   │   └── Indice.astro
│   ├── data/
│   │   └── indiceItems.ts
│   ├── layouts/
│   │   └── DashboardLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── temas.astro
│       ├── amd/
│       │   ├── anti-lag.astro
│       │   ├── fidelityfx-suite.astro
│       │   ├── fsr.astro
│       │   ├── ris.astro
│       │   ├── rsr.astro
│       │   └── tressfx-hair.astro
│       ├── apis/
│       │   ├── directx.astro
│       │   ├── metal.astro
│       │   ├── opengl.astro
│       │   └── vulkan.astro
│       ├── extra/
│       │   ├── amd-intel-nvidia.astro
│       │   ├── display.astro
│       │   ├── fans-guide.astro
│       │   └── references.astro
│       ├── general/
│       │   ├── ambient-occlusion.astro
│       │   ├── anti-aliasing.astro
│       │   ├── bloom.astro
│       │   ├── chromatic-aberration.astro
│       │   ├── depth-of-field.astro
│       │   ├── film-grain.astro
│       │   ├── hdr-tone-mapping.astro
│       │   ├── lens-flares.astro
│       │   ├── lod.astro
│       │   ├── motion-blur.astro
│       │   ├── particles.astro
│       │   ├── post-procesamiento.astro
│       │   ├── reflections.astro
│       │   ├── shadows.astro
│       │   ├── tessellation.astro
│       │   ├── texture-filtering.astro
│       │   ├── texture-quality.astro
│       │   ├── upscaling.astro
│       │   ├── vignette.astro
│       │   ├── volumetric-effects.astro
│       │   └── vsync.astro
│       ├── intel/
│       │   ├── integer-scaling.astro
│       │   ├── low-latency-mode.astro
│       │   ├── xe-adaptive-sharpening.astro
│       │   ├── xess-fg.astro
│       │   └── xess.astro
│       └── nvidia/
│           ├── dlaa.astro
│           ├── dlss.astro
│           ├── faceworks.astro
│           ├── freestyle.astro
│           ├── hairworks.astro
│           ├── nis.astro
│           ├── physx.astro
│           └── reflex.astro
```
