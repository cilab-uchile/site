# Laboratorio de Inteligencia Computacional - Sitio web

Sitio del laboratorio basado en la plantilla **al-folio** (Jekyll), adaptado para el
Departamento de Ingenieria Electrica de la Universidad de Chile.

## Rutas principales

- `/` Inicio
- `/projects/` Proyectos
- `/publications/` Publicaciones
- `/people/` Personas
- `/visit/` Visitanos
- `/impacts/` Impacto

## Desarrollo local

```bash
bundle install
bundle exec jekyll serve
```

Servidor local por defecto: `http://127.0.0.1:4000/site/`

Para servir en local sin `baseurl`:

```bash
bundle exec jekyll serve --baseurl ""
```

URL local sin baseurl: `http://127.0.0.1:4000/`

## Deploy en GitHub Pages

1. En GitHub, ir a **Settings -> Pages** del repositorio.
2. En **Build and deployment**, seleccionar:
   - **Source**: `GitHub Actions`
3. Verificar que existe el workflow `.github/workflows/pages.yml`.
4. Hacer push de tus cambios.
5. Abrir la pestaña **Actions** y esperar que termine el workflow `Deploy Jekyll to Pages`.
6. URL esperada de publicacion: `https://cilab-uchile.github.io/site/`.

Si quieres validar antes del deploy:

```bash
bundle exec jekyll build
```
