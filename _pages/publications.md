---
layout: page
title: Publicaciones
permalink: /publications/
nav: true
nav_order: 3
nav_key: nav.publications
lang: es
---

{% include t.liquid key="publications.intro" %}

## {% include t.liquid key="publications.featured_heading" %}

<div class="row row-cols-1 g-3">
{% for pub in site.data.publications %}
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ pub.title }}</h5>
        <p class="mb-1"><em>{{ pub.authors }}</em></p>
        <p class="text-muted mb-2"><small>{{ pub.venue }}, {{ pub.year }} · {{ pub.cites }} {% include t.liquid key="common.citations_suffix" %}</small></p>
        <p class="mb-2">{{ pub.note }}</p>
        <a href="{{ pub.link }}" target="_blank" rel="noopener noreferrer">{% include t.liquid key="common.view_record" %}</a>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## {% include t.liquid key="publications.masters_heading" %}

{% include t.liquid key="publications.masters_intro" %}

<div class="row row-cols-1 g-3">
{% assign tesis_magister_sorted = site.data.tesis_magister_profesor_guia_estevez | sort: "anio_publicacion" | reverse %}
{% for thesis in tesis_magister_sorted %}
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h6 class="card-title mb-1">{{ thesis.nombre_tesis }}</h6>
        <p class="text-muted mb-1"><small>{{ thesis.nombre_alumno }} · {{ thesis.anio_publicacion }}</small></p>
        <p class="mb-2"><strong>{% include t.liquid key="common.guide_label" %}</strong> {{ thesis.guia }}</p>
        {% if thesis.coguia_comision and thesis.coguia_comision != '' %}
        <p class="mb-2"><strong>{% include t.liquid key="common.co_guide_label" %}</strong> {{ thesis.coguia_comision }}</p>
        {% endif %}
        <a href="{{ thesis.link_repositorio }}" target="_blank" rel="noopener noreferrer">{% include t.liquid key="common.view_thesis_repo" %}</a>
      </div>
    </div>
  </div>
{% endfor %}
</div>
