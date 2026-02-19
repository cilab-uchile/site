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

Servidor local por defecto: `http://127.0.0.1:4000/`

## Deploy en GitHub Pages

1. En GitHub, ir a **Settings -> Pages** del repositorio.
2. En **Build and deployment**, seleccionar:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (o la rama que uses para publicar), carpeta `/ (root)`.
3. Asegurarse de que el archivo `_config.yml` tenga `url` y `baseurl` correctos para el sitio publicado.
4. Hacer push de los cambios a la rama configurada para Pages.
5. Esperar a que termine el build de Pages y abrir la URL publicada.

Si quieres validar antes del deploy:

```bash
bundle exec jekyll build
```
