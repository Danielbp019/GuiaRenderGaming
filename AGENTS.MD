# Agents

# Guía de Opciones Gráficas en Videojuegos

Esta guía proporciona un desglose detallado de todas las opciones gráficas más comunes en los videojuegos, explicando cómo afectan al rendimiento del juego y a la calidad visual. Además, proporciona recomendaciones sobre qué configuraciones usar según las especificaciones del hardware de cada jugador.

## Tecnologías Usadas

- **Frontend**: HTML, CSS, JavaScript.
- **Frameworks**: Astro.js, DaisyUI.
- **Librerías**: bootstrap-icons

# Sección General: Opciones Gráficas Comunes en Videojuegos ubicado en src/pages/general/

## Prompt para Generar Información General:

Explícame de forma fácil de entender qué es [TECNOLOGÍA] en videojuegos, solo enfocado en opciones que el jugador puede activar o desactivar en el menú gráfico.

## Formato de la Respuesta:

1. **Descripción Simple**: Explicación breve y fácil de entender de lo que hace la tecnología en videojuegos, específicamente en términos de opciones activables en el menú gráfico.

2. **Variantes Generales**: Lista de las implementaciones más comunes de esa tecnología. Explicar cómo se diferencian las implementaciones en cuanto a calidad y rendimiento, sin mencionar marcas específicas. Ejemplo: "Antialiasing (AA) tiene varias versiones como FXAA, MSAA, y TAA."

3. **Coste en Rendimiento**: Explicar cómo esta opción impacta el rendimiento. ¿Es más exigente para la CPU o la GPU? ¿Cuánto puede afectar a los FPS, y cómo cambia según la resolución (1080p, 1440p, 4K)? Ejemplo: "El impacto de activar MSAA puede ser bastante alto, especialmente a 4K, donde el rendimiento puede caer de 80 FPS a 50 FPS."

4. **Notas de Tecnologías Propietarias**: Si alguna variante de esta opción gráfica es exclusiva de un fabricante (NVIDIA, AMD, Intel), se debe incluir como una nota. Ejemplo: "NVIDIA HBAO+ es una variante propietaria de HBAO con mejoras de calidad y rendimiento."

5. **Cuándo Conviene Activarlo**: Consejos sobre cuándo es ideal activar o desactivar la opción dependiendo de la máquina del jugador. ¿Debe activarlo con una tarjeta gráfica de gama alta o baja? ¿Qué calidad es la más recomendable? Ejemplo: "Conviene activar TAA si tienes una GPU potente, ya que mejora significativamente la suavidad de los bordes sin un gran impacto en el rendimiento."

---

## Ejemplo de Uso para una Opción Gráfica:

**Tecnología: Antialiasing (AA)**

1. **Descripción Simple**: El antialiasing es una técnica para suavizar los bordes de los objetos, eliminando el efecto de bordes "dentados" o pixelados que se ve en la mayoría de los videojuegos.
2. **Variantes Generales**:

   - **FXAA**: Una opción más rápida, menos demandante en términos de recursos, pero con menor calidad visual.
   - **MSAA**: Mejor calidad visual comparado con FXAA, pero también más exigente en términos de rendimiento.
   - **TAA**: Mejor calidad visual que MSAA, ideal para juegos con muchos movimientos rápidos, pero también puede ser más exigente en rendimiento.

3. **Coste en Rendimiento**:

   - **FXAA**: Bajo impacto en el rendimiento, ideal para máquinas de gama baja.
   - **MSAA**: Medio a alto impacto, depende de la resolución y la carga de la GPU.
   - **TAA**: Alto impacto, especialmente en resoluciones más altas como 1440p y 4K.

4. **Notas de Tecnologías Propietarias**:

   - **NVIDIA**: DLSS puede mejorar el rendimiento manteniendo la calidad de imagen al activar TAA.
   - **AMD**: FSR también puede mejorar la relación calidad/rendimiento en juegos que utilizan TAA.

5. **Cuándo Conviene Activarlo**:
   - **FXAA**: Activarlo si buscas un rendimiento rápido sin importar mucho la calidad visual (baja GPU).
   - **MSAA**: Activarlo para obtener un balance entre calidad y rendimiento en resoluciones más bajas como 1080p.
   - **TAA**: Activarlo en PCs con buena GPU (alta gama) y cuando busques una calidad de imagen superior, pero con un rendimiento aceptable.

---

# Sección Específica: Tecnologías Gráficas Propietarias, ubicado en src/pages/nvidia, amd, intel, apis:

## Prompt para Generar Información Específica:

Explícame de forma fácil de entender qué es [TECNOLOGÍA] en videojuegos, solo enfocado en opciones que el jugador puede activar o desactivar en el menú gráfico.

## Formato de la Respuesta:

1. **Descripción Simple**: Explicación breve y fácil de entender sobre la tecnología, enfocada en las opciones disponibles para el jugador.

2. **Descripción de las Diferentes Versiones de la Tecnología**: Qué variaciones existen de esta tecnología entre distintas versiones o generaciones y qué mejoras se han implementado en cada una. Ejemplo: "DLSS 2.0 mejora el rendimiento con un incremento significativo en la calidad visual comparado con la versión anterior."

3. **Modos de Funcionamiento**: Descripción de los diferentes modos en los que la tecnología puede funcionar (si aplica) y una breve explicación de cada uno. Ejemplo: "DLSS tiene 3 modos: Calidad, Balance y Rendimiento. El modo de calidad prioriza la fidelidad visual, mientras que el de rendimiento mejora los FPS a costa de la calidad."

4. **Coste en Rendimiento**: Explicar cómo cada versión o modo impacta en los FPS, especificando cómo varía dependiendo de la resolución (1080p, 1440p, 4K), y si depende más de la CPU o la GPU. Ejemplo: "DLSS 2.0 en modo rendimiento puede aumentar los FPS de 30 a 60 en una RTX 3080 en resolución 4K."

5. **Cuándo Conviene Activarlo**: En qué circunstancias conviene activar la opción, en qué calidad, o si es mejor desactivarlo. Ejemplo: "Actívalo en juegos con alta demanda gráfica para obtener un aumento significativo en los FPS sin perder calidad visual."

---

## Ejemplo de Uso para una Tecnología Propietaria:

**Tecnología: DLSS (Deep Learning Super Sampling) – NVIDIA**

1. **Descripción Simple**: DLSS es una tecnología de NVIDIA que mejora el rendimiento de los juegos al renderizarlos a una resolución más baja y luego escalarlos a una resolución más alta mediante IA, lo que reduce la carga en la GPU sin sacrificar calidad visual.

2. **Descripción de las Diferentes Versiones de la Tecnología**:

   - **DLSS 1.0**: Primera versión, con algunos artefactos visuales y menor calidad de imagen en comparación con versiones posteriores.
   - **DLSS 2.0**: Mejora la calidad visual significativamente, con menos artefactos y mejor rendimiento.
   - **DLSS 3.0**: Agrega "Frame Generation" para mejorar aún más los FPS, especialmente útil en títulos con altas tasas de cuadros por segundo.

3. **Modos de Funcionamiento**:

   - **Calidad**: Maximiza la calidad visual a costa de un menor aumento en los FPS.
   - **Balance**: Ofrece un equilibrio entre calidad visual y rendimiento.
   - **Rendimiento**: Maximiza el rendimiento, sacrificando algo de calidad visual.

4. **Coste en Rendimiento**:

   - **1080p**: Aumenta los FPS de forma significativa con un impacto mínimo en la calidad visual.
   - **1440p**: Aumento en FPS moderado, manteniendo una buena calidad visual.
   - **4K**: En 4K, DLSS 2.0 puede duplicar los FPS en comparación con el renderizado tradicional.

5. **Cuándo Conviene Activarlo**: Actívalo en juegos con alta demanda gráfica, como títulos AAA, para obtener un aumento de rendimiento sin perder calidad visual. Es especialmente útil a 4K.

---

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
