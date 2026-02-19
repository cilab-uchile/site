---
layout: page
title: Visitanos
permalink: /visit/
nav: true
nav_order: 5
---

Informacion de contacto del Departamento de Ingenieria Electrica y del laboratorio.

## Direccion

<div class="card mb-3">
  <div class="card-body">
    <p class="mb-2">{{ site.data.lab.contact.office }}</p>
    <a href="{{ site.data.lab.contact.map }}" target="_blank" rel="noopener noreferrer">Abrir en mapa</a>
  </div>
</div>

## Contacto DIE

<div class="card mb-3">
  <div class="card-body">
    <p class="mb-1">Telefono: {{ site.data.lab.contact.dept_phone }}</p>
    <p class="mb-0">Email: <a href="mailto:{{ site.data.lab.contact.dept_email }}">{{ site.data.lab.contact.dept_email }}</a></p>
  </div>
</div>

## Contacto del laboratorio

<div class="card mb-3">
  <div class="card-body">
    <p class="mb-1">Responsable: {{ site.data.lab.responsible.name }}</p>
    <p class="mb-1">Email: <a href="mailto:{{ site.data.lab.responsible.email }}">{{ site.data.lab.responsible.email }}</a></p>
    <p class="mb-0">Telefono: {{ site.data.lab.responsible.phone }}</p>
  </div>
</div>

## Como llegar

Campus Beauchef / Av. Tupper, Santiago. Recomendamos agendar visita por correo antes de asistir para coordinar acceso a laboratorio y reuniones tecnicas.
