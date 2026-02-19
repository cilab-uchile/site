---
layout: page
title: Proyectos
permalink: /projects/
nav: true
nav_order: 2
---

Este apartado resume cada proyecto con un formato estilo paper: contexto, metodo, resultados y cita. Se puede usar como plantilla para futuros trabajos del laboratorio.

{% assign sorted_projects = site.projects | sort: 'year' | reverse %}
<div class="row row-cols-1 row-cols-lg-2 g-3">
{% for project in sorted_projects %}
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title mb-1"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h5>
        <p class="text-muted mb-2"><small>{{ project.year }} · {{ project.area }}</small></p>
        <p class="card-text">{{ project.summary }}</p>
        <a href="{{ project.url | relative_url }}">Ver resumen completo</a>
      </div>
    </div>
  </div>
{% endfor %}
</div>
