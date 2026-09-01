# Agents

# Guía de Opciones Gráficas en Videojuegos

Esta guía proporciona un desglose detallado de todas las opciones gráficas más comunes en los videojuegos, explicando cómo afectan al rendimiento del juego y a la calidad visual. Además, proporciona recomendaciones sobre qué configuraciones usar según las especificaciones del hardware de cada jugador.

## Tecnologías Usadas

- **Frontend**: HTML, CSS, JavaScript.
- **Frameworks**: Astro.js, DaisyUI.
- **Librerías**: bootstrap-icons.

## Reglas

- Toma tiempo para pensar.
- Usar el mcp context7 para buscar documentación.
- La IA siempre debe escribir en español.
- Los párrafos `p` se estilan automáticamente con `antialiased` vía el plugin `@tailwindcss/typography` y la clase `prose-glass`. No añadir `class="antialiased"` manualmente en MDX.
- Todas las etiquetas `h1` a `h6` deben contener un `aria-label` o `aria-labelledby` según corresponda.
- Agrega accesibilidad al código si se puede.
- Al usar componentes de DaisyUI, nunca se usan códigos legacy.
- **Gestor de paquetes**: este proyecto usa **pnpm** por defecto. No usar `npm`, `yarn` ni `npx`. Usar siempre `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm preview` y `pnpm astro ...` / `pnpm exec ...`. El campo `packageManager` en `package.json` fija la versión de pnpm y no debe generarse ni commitearse `package-lock.json`.
- **Tipografía (Prose centralizado)**: la escala tipográfica se define en `src/assets/app.css` mediante `@tailwindcss/typography` + `.prose-glass`. No añadir `class="text-*"` en headings o párrafos dentro de MDX; el estilo se aplica automáticamente.

### Escala tipográfica (Prose)

- **Page/Hero** (`ArticleLayout`, fuera de `.glass`):
  - h1: `text-5xl font-bold mb-6` + `aria-label` (único por página)
  - h2: `text-4xl font-semibold mb-5`
- **Card/Content** (dentro de `.prose-glass` — slot MDX):
  - h2: `text-2xl md:text-3xl font-semibold mb-3 mt-8` (prose-h2)
  - h3: `text-xl md:text-2xl font-semibold mb-3 mt-6` (prose-h3)
  - p: `antialiased leading-relaxed` (prose-p)
  - ul: `list-disc list-inside space-y-2` (prose-ul)
  - li > p: `inline m-0` (evita que `<p>` dentro de `<li>` desplace la viñeta)

Regla: el nivel semántico (`h1→h2→h3`) sigue la estructura del documento; el tamaño visual lo define CSS vía `prose-glass`. Mantener `h1 > h2 > h3` visualmente siempre (≥20% diferencia entre niveles).

## Instalación

### Comandos comunes

> **Nota:** este proyecto usa **pnpm** exclusivamente. No ejecutar comandos `npm`/`npx`/`yarn`.

| Comando                | Acción                                                               |
| :--------------------- | :------------------------------------------------------------------- |
| `pnpm install`         | Instala las dependencias del proyecto                                |
| `pnpm dev`             | Inicia el servidor local de desarrollo en `localhost:4321`           |
| `pnpm build`           | Genera la versión de producción en la carpeta `./dist/`              |
| `pnpm preview`         | Permite previsualizar la versión de producción antes de desplegarla  |
| `pnpm astro ...`       | Ejecuta comandos de la CLI de Astro, como `astro add`, `astro check` |
| `pnpm astro -- --help` | Muestra la ayuda de la CLI de Astro                                  |
| `pnpm exec ...`        | Ejecuta binarios del proyecto (equivalente a `npx`)                  |

## Exclusiones

Al trabajar con este proyecto, se deben ignorar las siguientes carpetas:

- `node_modules/`
- Cualquier carpeta que comience con un punto (`.`), como `.git/`, `.vscode/`, etc.
- Al recrear el Arbol de archivos, se debe ignorar el contenido de las carpetas `img`.
- Al recrear el Arbol de archivos, se debe nombrar la carpeta principal de fuentes e ignorar el contenido de la carpeta.
