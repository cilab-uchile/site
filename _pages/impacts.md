---
layout: page
title: Impacto
permalink: /impacts/
nav: true
nav_order: 6
nav_key: nav.impacts
lang: es
---

{% include t.liquid key="impacts.intro" %}

## {% include t.liquid key="impacts.human_capital_heading" %}

<div class="card mb-3"><div class="card-body">{% include t.liquid key="impacts.human_capital_prefix" %}{{ site.data.lab.thesis_snapshot.period }}{% include t.liquid key="impacts.human_capital_middle" %}{{ site.data.lab.thesis_snapshot.total_magister_theses }}{% include t.liquid key="impacts.human_capital_suffix" %}</div></div>

## {% include t.liquid key="impacts.interdisciplinary_heading" %}

<div class="card mb-3"><div class="card-body">{% include t.liquid key="impacts.interdisciplinary_text" %}</div></div>

## {% include t.liquid key="impacts.open_ecosystem_heading" %}

<div class="card mb-3"><div class="card-body">{% include t.liquid key="impacts.open_ecosystem_text" %}</div></div>

## {% include t.liquid key="impacts.recent_theses_heading" %}

<div class="card mb-3">
  <div class="card-body">
    <ul class="mb-0">
{% assign tesis_magister_sorted = site.data.tesis_magister_profesor_guia_estevez | sort: "anio_publicacion" | reverse %}
{% for thesis in tesis_magister_sorted limit:4 %}
  <li><strong>{{ thesis.anio_publicacion }}</strong> · {{ thesis.nombre_tesis }} ({{ thesis.nombre_alumno }})</li>
{% endfor %}
    </ul>
  </div>
</div>

## {% include t.liquid key="impacts.commitment_heading" %}

<div class="card"><div class="card-body">{% include t.liquid key="impacts.commitment_text" %}</div></div>
