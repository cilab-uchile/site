---
layout: page
title: Visitanos
permalink: /visit/
nav: true
nav_order: 5
nav_key: nav.visit
lang: es
---

{% include t.liquid key="visit.intro" %}

## {% include t.liquid key="visit.address_heading" %}

<div class="card mb-3">
  <div class="card-body">
    <p class="mb-2">{{ site.data.lab.contact.office }}</p>
    <a href="{{ site.data.lab.contact.map }}" target="_blank" rel="noopener noreferrer">{% include t.liquid key="common.open_in_map" %}</a>
  </div>
</div>

## {% include t.liquid key="visit.die_contact_heading" %}

<div class="card mb-3">
  <div class="card-body">
    <p class="mb-1">{% include t.liquid key="common.phone_label" %} {{ site.data.lab.contact.dept_phone }}</p>
    <p class="mb-0">{% include t.liquid key="common.email_label" %} <a href="mailto:{{ site.data.lab.contact.dept_email }}">{{ site.data.lab.contact.dept_email }}</a></p>
  </div>
</div>

## {% include t.liquid key="visit.lab_contact_heading" %}

<div class="card mb-3">
  <div class="card-body">
    <p class="mb-1">{% include t.liquid key="visit.responsible_label" %} {{ site.data.lab.responsible.name }}</p>
    <p class="mb-1">{% include t.liquid key="common.email_label" %} <a href="mailto:{{ site.data.lab.responsible.email }}">{{ site.data.lab.responsible.email }}</a></p>
    <p class="mb-0">{% include t.liquid key="common.phone_label" %} {{ site.data.lab.responsible.phone }}</p>
  </div>
</div>

## {% include t.liquid key="visit.how_to_get_heading" %}

{% include t.liquid key="visit.how_to_get_text" %}
