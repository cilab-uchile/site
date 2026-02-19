---
layout: page
title: Publicaciones
permalink: /publications/
nav: true
nav_order: 3
---

Curaduria inicial basada en el perfil de Google Scholar del profesor Pablo A. Estevez. No todas las publicaciones del perfil corresponden al laboratorio; aqui se priorizan temas alineados a inteligencia computacional, astroinformatica y aprendizaje de maquina.

## Publicaciones destacadas

<div class="row row-cols-1 g-3">
{% for pub in site.data.publications %}
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ pub.title }}</h5>
        <p class="mb-1"><em>{{ pub.authors }}</em></p>
        <p class="text-muted mb-2"><small>{{ pub.venue }}, {{ pub.year }} · {{ pub.cites }} citas</small></p>
        <p class="mb-2">{{ pub.note }}</p>
        <a href="{{ pub.link }}" target="_blank" rel="noopener noreferrer">Ver registro</a>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## Tesis de Magister (apartado especial)

Listado curado desde Repositorio Academico U. de Chile para tesis de Magister donde Pablo Estevez aparece como profesor guia.

<div class="row row-cols-1 g-3">
{% assign tesis_magister_sorted = site.data.tesis_magister_profesor_guia_estevez | sort: "anio_publicacion" | reverse %}
{% for thesis in tesis_magister_sorted %}
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h6 class="card-title mb-1">{{ thesis.nombre_tesis }}</h6>
        <p class="text-muted mb-1"><small>{{ thesis.nombre_alumno }} · {{ thesis.anio_publicacion }}</small></p>
        <p class="mb-2"><strong>Guia:</strong> {{ thesis.guia }}</p>
        {% if thesis.coguia_comision and thesis.coguia_comision != '' %}
        <p class="mb-2"><strong>Co-guia / comision:</strong> {{ thesis.coguia_comision }}</p>
        {% endif %}
        <a href="{{ thesis.link_repositorio }}" target="_blank" rel="noopener noreferrer">Ver tesis en repositorio</a>
      </div>
    </div>
  </div>
{% endfor %}
</div>
