---
layout: page
title: Personas
permalink: /people/
nav: true
nav_order: 4
---

Pagina semilla para organizar miembros del laboratorio, colaboradores y postulaciones.

## Liderazgo

<div class="row row-cols-1 g-3 mb-4">
{% for person in site.data.people.leadership %}
  <div class="col">
    <div class="card">
      <div class="card-body">
        <div class="row g-3 align-items-start">
          <div class="col-12 col-lg-4">
            <img class="img-fluid rounded" src="{{ '/labinteligencia-2070241131.jpg' | relative_url }}" alt="Profesor Pablo Estevez en el laboratorio">
          </div>
          <div class="col-12 col-lg-8">
            <h5 class="card-title mb-1">{{ person.name }}</h5>
            <p class="text-muted mb-2"><small>{{ person.role }}</small></p>
            <p class="mb-2">{{ person.focus }}</p>
            <a href="{{ person.profile }}" target="_blank" rel="noopener noreferrer">Perfil institucional</a> ·
            <a href="{{ person.scholar }}" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## Academicos colaboradores de la linea

<div class="row row-cols-1 row-cols-lg-2 g-3 mb-4">
{% for person in site.data.people.line_collaborators %}
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h6 class="card-title mb-1">{{ person.name }}</h6>
        <p class="text-muted mb-2"><small>{{ person.role }}</small></p>
        <p class="mb-2">{{ person.focus }}</p>
        <a href="{{ person.profile }}" target="_blank" rel="noopener noreferrer">Perfil</a>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## Alumnos Tesistas

<p class="text-muted"><small>Listado preliminar de alumnos activos. Se evita repetir personas que ya aparecen en Antiguos Tesistas, excepto Jhon Intriago segun indicacion.</small></p>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
{% for student in site.data.students.active_students %}
  <div class="col">
    <div class="card h-100">
      <img class="card-img-top" src="{{ student.image | relative_url }}" alt="Foto de {{ student.name }}">
      <div class="card-body">
        <h6 class="card-title mb-1">{{ student.name }}</h6>
        <p class="text-muted mb-0"><small>{{ student.program }}</small></p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## Antiguos Tesistas

<p class="text-muted"><small>Mockup de foto en <code>assets/img/people/</code>. Reemplazar por foto real cuando exista.</small></p>

{% assign students_sorted = site.data.tesis_magister_profesor_guia_estevez | sort: "anio_publicacion" | reverse %}
{% assign students_grouped = students_sorted | group_by: "nombre_alumno" %}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
{% for student in students_grouped %}
  {% assign thesis = student.items | first %}
  <div class="col">
    <div class="card h-100">
      <img class="card-img-top" src="{{ '/assets/img/people/mockup-estudiante.jpg' | relative_url }}" alt="Foto mockup de estudiante">
      <div class="card-body">
        <h6 class="card-title mb-1">{{ student.name }}</h6>
        <p class="text-muted mb-2"><small>Tesis de Magister · {{ thesis.anio_publicacion }}</small></p>
        <p class="card-text mb-2">{{ thesis.nombre_tesis }}</p>
        <a href="{{ thesis.link_repositorio }}" target="_blank" rel="noopener noreferrer">Ver tesis</a>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## Exalumnos y colaboradores frecuentes

<div class="card mb-4">
  <div class="card-body">
    <ul class="mb-0">
    {% for name in site.data.people.alumni_mentions %}
      <li>{{ name }}</li>
    {% endfor %}
    </ul>
  </div>
</div>

## Quieres integrarte?

Estamos abriendo esta version del sitio para recibir informacion de estudiantes de pregrado, magister y doctorado. Si te interesa trabajar en IA aplicada, series de tiempo o teoria de aprendizaje, escribenos con tu CV y tema de interes.

**Contacto:** [{{ site.data.lab.responsible.email }}](mailto:{{ site.data.lab.responsible.email }})
