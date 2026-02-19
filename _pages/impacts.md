---
layout: page
title: Impacto
permalink: /impacts/
nav: true
nav_order: 6
---

Mas alla de papers: formacion de estudiantes, transferencia y comunidad cientifica.

## Formacion de capital humano

<div class="card mb-3"><div class="card-body">El laboratorio integra docencia e investigacion a traves de tesis de magister/doctorado y memorias de ingenieria en IA aplicada. En el periodo {{ site.data.lab.thesis_snapshot.period }} se registran {{ site.data.lab.thesis_snapshot.total_magister_theses }} tesis de Magister con guia del laboratorio.</div></div>

## Aplicaciones interdisciplinarias

<div class="card mb-3"><div class="card-body">Se desarrollan soluciones en astroinformatica y salud digital, incluyendo clasificacion de curvas de luz y supernovas, deteccion de novedades astronomicas, analisis de EEG del sueno/epilepsia, segmentacion en imagenes medicas y modelamiento con atencion/transformers.</div></div>

## Ecosistema abierto

<div class="card mb-3"><div class="card-body">El sitio se construyo para facilitar extraccion estructurada por agentes AI y actualizacion colaborativa de contenidos.</div></div>

## Tesis recientes con guia del laboratorio

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

## Compromiso

<div class="card"><div class="card-body">Promovemos colaboracion entre estudiantes, investigadores y academicos de distintas areas para fortalecer la investigacion de frontera en inteligencia computacional.</div></div>
