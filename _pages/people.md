---
layout: page
title: Personas
title_en: People
permalink: /people/
nav: true
nav_order: 4
nav_key: nav.people
lang: es
---

{% include t.liquid key="people.intro" %}

## {% include t.liquid key="people.leadership_heading" %}

<div class="row row-cols-1 g-3 mb-4">
{% for person in site.data.people.leadership %}
  <div class="col">
    <div class="card">
      <div class="card-body">
        <div class="row g-3 align-items-start">
          <div class="col-12 col-lg-4">
            <img class="img-fluid rounded" src="{{ '/assets/img/people/pablo-estevez.jpg' | relative_url }}" alt="{{ person.name }}">
          </div>
          <div class="col-12 col-lg-8">
            <h5 class="card-title mb-1">{{ person.name }}</h5>
            <p class="text-muted mb-2"><small>{% include td.liquid obj=person key="role" %}</small></p>
            <p class="mb-2">{% include td.liquid obj=person key="focus" %}</p>
            <a href="{{ person.profile }}" target="_blank" rel="noopener noreferrer">{% include t.liquid key="common.institutional_profile" %}</a> ·
            <a href="{{ person.scholar }}" target="_blank" rel="noopener noreferrer">{% include t.liquid key="common.google_scholar" %}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## {% include t.liquid key="people.line_collaborators_heading" %}

<div class="row row-cols-1 row-cols-lg-2 g-3 mb-4">
{% for person in site.data.people.line_collaborators %}
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h6 class="card-title mb-1">{{ person.name }}</h6>
        <p class="text-muted mb-2"><small>{% include td.liquid obj=person key="role" %}</small></p>
        <p class="mb-2">{% include td.liquid obj=person key="focus" %}</p>
        <a href="{{ person.profile }}" target="_blank" rel="noopener noreferrer">{% include t.liquid key="common.profile" %}</a>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## {% include t.liquid key="people.active_students_heading" %}

<p class="text-muted"><small>{% include t.liquid key="people.active_students_note" %}</small></p>

<div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
{% for student in site.data.students.active_students %}
  <div class="col">
    <div class="card h-100">
      <img class="card-img-top" src="{{ student.image | relative_url }}" alt="Foto de {{ student.name }}">
      <div class="card-body">
        <h6 class="card-title mb-1">{{ student.name }}</h6>
        <p class="text-muted mb-0"><small>{% include td.liquid obj=student key="program" %}</small></p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## {% include t.liquid key="people.recent_graduates_heading" %}

<div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
{% for student in site.data.students.former_students %}
  <div class="col">
    <div class="card h-100">
      <img class="card-img-top" src="{{ student.image | relative_url }}" alt="Foto de {{ student.name }}">
      <div class="card-body">
        <h6 class="card-title mb-1">{{ student.name }}</h6>
        <p class="text-muted mb-0"><small>{% include td.liquid obj=student key="program" %}</small></p>
        <p class="text-muted mb-0"><small>{% include t.liquid key="people.graduated_label" %} {{ student.graduation_year }}</small></p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## {% include t.liquid key="people.former_students_heading" %}

<p class="text-muted"><small>{% include t.liquid key="people.former_students_note" %}</small></p>

{% assign students_sorted = site.data.tesis_magister_profesor_guia_estevez | sort: "anio_publicacion" | reverse %}
{% assign students_grouped = students_sorted | group_by: "nombre_alumno" %}
<div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
{% for student in students_grouped %}
  {% assign thesis = student.items | first %}
  {% assign photo_file = site.data.thesis_photos[student.name] %}
  {% if photo_file %}
    {% assign photo_path = photo_file | prepend: "/assets/img/people/" %}
  {% else %}
    {% assign photo_path = "/assets/img/people/mockup-estudiante.jpg" %}
  {% endif %}
  <div class="col">
    <div class="card h-100">
      <img class="card-img-top" src="{{ photo_path | relative_url }}" alt="Foto de {{ student.name }}">
      <div class="card-body">
        <h6 class="card-title mb-1">{{ student.name }}</h6>
        <p class="text-muted mb-2"><small>{% include t.liquid key="people.thesis_label" %} · {{ thesis.anio_publicacion }}</small></p>
        <p class="card-text mb-2">{{ thesis.nombre_tesis }}</p>
        <a href="{{ thesis.link_repositorio }}" target="_blank" rel="noopener noreferrer">{% include t.liquid key="common.view_thesis" %}</a>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## {% include t.liquid key="people.alumni_heading" %}

<div class="card mb-4">
  <div class="card-body">
    <ul class="mb-0">
    {% for name in site.data.people.alumni_mentions %}
      <li>{{ name }}</li>
    {% endfor %}
    </ul>
  </div>
</div>

## {% include t.liquid key="people.join_heading" %}

{% include t.liquid key="people.join_intro" %}

**{% include t.liquid key="people.contact_label" %}** [{{ site.data.lab.responsible.email }}](mailto:{{ site.data.lab.responsible.email }})
