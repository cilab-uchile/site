---
layout: page
title: Proyectos
permalink: /projects/
nav: true
nav_order: 2
nav_key: nav.projects
lang: es
---

{% include t.liquid key="projects.intro" %}

{% assign sorted_projects = site.projects | sort: 'year' | reverse %}
<div class="row row-cols-1 row-cols-lg-2 g-3">
{% for project in sorted_projects %}
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title mb-1"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h5>
        <p class="text-muted mb-2"><small>{{ project.year }} · {{ project.area }}</small></p>
        <p class="card-text">{{ project.summary }}</p>
        <a href="{{ project.url | relative_url }}">{% include t.liquid key="common.view_full_summary" %}</a>
      </div>
    </div>
  </div>
{% endfor %}
</div>
