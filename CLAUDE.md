# CLAUDE.md

Guía de trabajo para Claude Code en este proyecto.

## Sobre el proyecto

Este es el sitio web del laboratorio de Inteligencia Computacional. Se despliega en
**GitHub Pages**. El objetivo es modernizarlo y dejarlo mucho más limpio, moderno,
responsive y **bilingüe (español/inglés con un selector de idioma)**.

### Stack real (importante — no es un sitio HTML plano)

A pesar de que a primera vista parece un sitio estático a mano, **NO lo es**. Este
repo es un sitio **Jekyll** (generador de sitios estáticos basado en Ruby) construido
sobre el theme académico **al-folio**:

- **No existe un `index.html` que se pueda abrir directamente.** Las páginas son
  archivos **Markdown + Liquid** que se _compilan_ a HTML en un paso de build.
- Jekyll separa **contenido** (archivos Markdown con algo de metadata "front matter")
  de **presentación** (plantillas reutilizables: `_layouts` e `_includes`).
- Las carpetas con guion bajo (`_layouts`, `_includes`, `_data`, `_sass`, `_pages`,
  `_projects`) **nunca las visita el navegador directamente** — un `jekyll build` las
  convierte en una carpeta `_site/` de HTML plano, que es lo que se despliega.
- **GitHub Actions** corre el build (`bundle exec jekyll build`) en cada push a `main`
  y publica el resultado. En runtime el sitio es 100% estático; Jekyll es solo una
  herramienta de _build-time_.

**Dónde vive lo que realmente vamos a tocar:**

- `_pages/*.md` → las 7 páginas del sitio (about=home, people, projects, publications,
  visit, impacts, 404). Aquí está el 95% del trabajo.
- `_projects/*.md` → colección de proyectos (uno por archivo, se listan solos).
- `_data/*.yml` y CSVs → contenido estructurado usado vía `{{ site.data.xxx }}`.
- `_sass/` + `assets/css/` → estilos en SCSS que se compilan a CSS.
- La navegación es **automática**: el navbar se genera recorriendo las páginas con
  `nav: true` en su front matter, ordenadas por `nav_order`. No se edita un menú a mano.

**Tecnologías involucradas:** Jekyll 4.4 + Liquid (plantillas) + theme al-folio +
Sass/SCSS (compilado a CSS) + Bootstrap 5 / MDB / Font Awesome (vía CDN) + jQuery +
Chart.js (solo en home). Deploy vía GitHub Actions → GitHub Pages.

## Contexto sobre mí (el dueño del proyecto)

- Tengo conocimiento **cercano a cero** de desarrollo web, y **cero** de Jekyll/Liquid.
- Trabajo a diario con Python, machine learning y computer vision, así que manejo bien
  la lógica de programación en general — lo que me falta es el vocabulario y las
  convenciones específicas de la web y de Jekyll.
- Explícame las cosas asumiendo que soy un ingeniero competente pero nuevo en web.

## Modo de comunicación: educativo

Trabaja en **modo educativo**. Mientras haces los cambios, apréndeme algo de desarrollo
web y de Jekyll en el camino:

- Cuando toques un archivo o uses un concepto nuevo (ej. front matter, un `include` de
  Liquid, un selector CSS, cómo funciona una colección de Jekyll), explica brevemente
  qué es y por qué lo usas.
- Prefiere explicaciones cortas e integradas al flujo, no lecciones largas que
  interrumpan el trabajo.
- Si hay varias formas de hacer algo, menciona por qué elegiste una.

## Regla de oro: una tarea a la vez (one task at a time)

- Trabaja **una sola tarea a la vez**. No agrupes múltiples cambios no relacionados en
  una misma iteración.
- Antes de empezar una tarea, dime brevemente qué vas a hacer y espera si es un cambio
  grande o estructural.
- Termina y verifica una tarea antes de pasar a la siguiente.

## Decisiones de stack e infraestructura: caso a caso

La estructura de plantillas de Jekyll (layouts/includes/data) es sólida e idiomática —
**no la rearquitectures.** No introduzcas frameworks ni herramientas nuevas por defecto.

- Si crees que alguna herramienta o cambio estructural mejoraría mucho el proyecto,
  **propónmelo primero y decidimos juntos** — no lo agregues sin confirmar.
- No conviertas esto en un setup backend/frontend. No hace falta.

## Estructura de archivos

La estructura de Jekyll es correcta y se respeta, pero hay **basura que limpiar**
(assets del theme sin usar, archivos duplicados sueltos en la raíz del repo).

- Puedes reorganizar y limpiar, pero explícame el antes y el después, y **lista los
  archivos exactos antes de borrar cualquier cosa.**
- Avísame de cualquier ruta que pueda romperse (links, `src` de imágenes, rutas
  relativas), sobre todo porque se despliega en GitHub Pages.

## Internacionalización (i18n): sitio bilingüe

El sitio debe estar en **español e inglés**, con posibilidad de **cambiar de idioma**
desde la interfaz.

- **Ojo (hallazgo del audit):** casi todo el texto visible está como prosa en español
  _hardcodeada_ directamente en el Markdown/Liquid, no como datos separables. Un
  selector de idioma no puede solo cambiar un archivo de datos; hay que envolver
  prácticamente cada frase del sitio. Este es el mayor driver de esfuerzo del objetivo
  bilingüe.
- Por eso, **decide y propón el mecanismo de i18n ANTES de tocar el contenido de las
  páginas** (ej. keys `data-i18n` + diccionarios JSON, vs. archivos `_i18n` nativos de
  Jekyll + un include `t`). Preséntame las opciones; no elijas por defecto.
- Todo texto nuevo debe agregarse en ambos idiomas.
- Que el idioma elegido se recuerde entre páginas/visitas (ej. `localStorage`, igual
  que ya hace el toggle de dark mode existente).

## Objetivo de diseño: limpio y moderno

- Meta general: dejar el sitio mucho más **clean**, moderno y ordenado.
- Las páginas ya usan la grilla responsive de Bootstrap 5, así que la base móvil existe:
  **necesita pulido, no una reconstrucción.**
- Prioriza legibilidad, buen uso de espacios en blanco, tipografía consistente y buen
  comportamiento responsive (móvil y escritorio).
- Cuando propongas cambios visuales, descríbeme la intención del diseño.

---

## Calidad de código: linting con Prettier (solo GitHub Actions)

Para mantener el código consistente y limpio usamos **Prettier** como formatter,
verificado automáticamente en **GitHub Actions** (equivalente web de lo que ruff/black
hacen para Python).

### Modelo elegido: solo CI, sin tocar el flujo local (Opción A)

- La verificación corre **únicamente en GitHub Actions** en cada push/PR (archivo
  `.github/workflows/lint.yml`).
- **No hay hooks de pre-commit ni npm en el flujo local del día a día.** El commit y el
  push locales nunca se bloquean.
- Si el formato no cumple, el check de GitHub sale en **rojo**, y se arregla corriendo
  el comando de formateo (`npx prettier --write .`) y volviendo a pushear.
- El auto-formateo por hook local (Husky + lint-staged) queda como **mejora opcional a
  futuro**, NO activa por ahora. No la implementes salvo que yo lo pida explícitamente.

### Alcance de herramientas: mínimo razonable

- **Prettier** + **prettier-plugin-liquid**, y nada más al inicio.
- Prettier cubre HTML, CSS/SCSS, JS, Markdown y YAML — todos los tipos de archivo del
  proyecto con una sola herramienta.
- El plugin de Liquid evita que Prettier rompa las plantillas de Jekyll (`{% %}`,
  `{{ }}`).
- **stylelint y ESLint quedan fuera por ahora** (son linters, no formatters, y agregan
  ruido para un sitio de theme donde escribo poco CSS/JS propio). Se pueden sumar más
  adelante si el CSS/JS custom crece — propónmelo si lo ves necesario.
- Añade un `.prettierignore` para excluir lo generado y lo que no debe tocarse (ej.
  `_site/`, `assets/` de vendor/theme, `node_modules/`).

---

## Git y commits (REGLAS ESTRICTAS)

### Sugerir mensaje, NO commitear ni pushear automáticamente

- Cuando termines una tarea, **sugiéreme el mensaje de commit** siguiendo el formato de
  abajo.
- **NO hagas `git commit` por tu cuenta** a menos que yo lo pida explícitamente.
- **NUNCA hagas `git push`.** Bajo ninguna circunstancia. El push siempre lo hago yo.

### Formato del mensaje de commit

Cada mensaje de commit consiste en un **header**. El header tiene un formato especial
que incluye un **tipo** y un **subject**:

```
<type>: <subject>
```

Ejemplo:

```
feat: Add new button to remove ingredients in the ingredients comparison.
```

**El header no puede tener más de 100 caracteres.** Esto hace que el mensaje sea más
fácil de leer en GitHub y en las distintas herramientas de git.

### Type

Debe ser uno de los siguientes:

- **feat**: Una nueva funcionalidad (feature).
- **fix**: Una corrección de un bug.
- **docs**: Cambios que no afectan el significado del código (documentación, comentarios).
- **style**: Cambios de formato/estilo que no afectan la lógica (espacios, indentación).
- **refactor**: Un cambio de código que no corrige un bug ni agrega una funcionalidad.
- **perf**: Un cambio de código que mejora el rendimiento.
- **test**: Agregar tests faltantes o corregir tests existentes.
- **chore**: Cambios al proceso de build o a herramientas y librerías auxiliares, como
  la generación de documentación.

### Subject

El subject contiene una descripción concisa del cambio. Reglas:

- Usa el **imperativo, presente**: "change" no "changed" ni "changes".
- Empieza con **letra mayúscula**.
- Usa un **punto al final**.

**Ejemplo completo:**

```
feat: Add new button to remove ingredients in the ingredients comparison dashboard.
```
