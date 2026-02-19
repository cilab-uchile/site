---
layout: page
title: Inicio
permalink: /
nav: false
---

{{ site.data.lab.tagline }}.

{{ site.data.lab.about }}

## Lineas activas

<div class="row row-cols-1 row-cols-md-2 g-3 mb-4">
{% for area in site.data.lab.focus_areas %}
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <p class="card-text mb-0">{{ area }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## Sintesis reciente desde tesis de Magister

<div class="card mb-3">
  <div class="card-body">
    <p class="mb-2">Entre {{ site.data.lab.thesis_snapshot.period }} se registran <strong>{{ site.data.lab.thesis_snapshot.total_magister_theses }} tesis de Magister</strong> con guia del laboratorio. Las tesis muestran crecimiento sostenido y consolidacion de lineas en astroinformatica, IA biomedica y modelos modernos de aprendizaje.</p>
    <p class="mb-0"><small class="text-muted">{{ site.data.lab.thesis_snapshot.note }}</small></p>
  </div>
</div>

<div class="card mb-4">
  <div class="card-body">
    <h6 class="card-title mb-3">Tesis de Magister por Año (2021-2024)</h6>
    <canvas id="tesis-por-anio-chart" height="120" aria-label="Grafico de tesis por anio" role="img"></canvas>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js"></script>
<script>
  (function () {
    const canvas = document.getElementById("tesis-por-anio-chart");
    if (!canvas || typeof Chart === "undefined") return;
    const css = getComputedStyle(document.documentElement);
    const cyan = (css.getPropertyValue("--global-theme-color") || "#2698ba").trim();
    const pink = "#f92080";
    const isDark = () => document.documentElement.getAttribute("data-theme") === "dark";
    const palette = () => {
      if (isDark()) {
        return {
          line: cyan,
          fill: "rgba(38, 152, 186, 0.18)",
          point: pink,
          pointBorder: "#111111"
        };
      }
      return {
        line: pink,
        fill: "rgba(249, 32, 128, 0.15)",
        point: cyan,
        pointBorder: "#ffffff"
      };
    };
    const colors = palette();

    const chart = new Chart(canvas, {
      type: "line",
      data: {
        labels: ["2021", "2022", "2023", "2024"],
        datasets: [{
          label: "Tesis de Magister por Año",
          data: [
            {{ site.data.lab.thesis_snapshot.yearly_counts["2021"] }},
            {{ site.data.lab.thesis_snapshot.yearly_counts["2022"] }},
            {{ site.data.lab.thesis_snapshot.yearly_counts["2023"] }},
            {{ site.data.lab.thesis_snapshot.yearly_counts["2024"] }}
          ],
          borderColor: colors.line,
          backgroundColor: colors.fill,
          borderWidth: 3,
          tension: 0.25,
          fill: true,
          pointStyle: "circle",
          pointRadius: 5,
          pointHoverRadius: 6,
          pointBackgroundColor: colors.point,
          pointBorderColor: colors.pointBorder,
          pointBorderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { precision: 0, stepSize: 1 },
            title: { display: true, text: "Cantidad de tesis" }
          },
          x: {
            title: { display: true, text: "Año" }
          }
        }
      }
    });

    const observer = new MutationObserver(() => {
      const c = palette();
      chart.data.datasets[0].borderColor = c.line;
      chart.data.datasets[0].backgroundColor = c.fill;
      chart.data.datasets[0].pointBackgroundColor = c.point;
      chart.data.datasets[0].pointBorderColor = c.pointBorder;
      chart.update();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  })();
</script>

## Proyectos y capacidad tecnica

### Equipamiento base
<div class="card mb-3">
  <div class="card-body">
    <ul class="mb-0">
    {% for item in site.data.lab.equipment %}
      <li>{{ item }}</li>
    {% endfor %}
    </ul>
  </div>
</div>

### Proyectos de referencia
<div class="card mb-3">
  <div class="card-body">
    <ul class="mb-0">
    {% for item in site.data.lab.projects %}
      <li>{{ item }}</li>
    {% endfor %}
    </ul>
  </div>
</div>

### Responsable academico
<div class="card mb-4">
  <div class="card-body">
    <div class="row g-3 align-items-start">
      <div class="col-12 col-lg-4">
        <img class="img-fluid rounded" src="{{ '/labinteligencia-2070241131.jpg' | relative_url }}" alt="Profesor Pablo Estevez en el laboratorio">
      </div>
      <div class="col-12 col-lg-8">
        <p class="mb-1"><strong>{{ site.data.lab.responsible.name }}</strong></p>
        <p class="mb-1">{{ site.data.lab.responsible.role }}</p>
        <p class="mb-1">{{ site.data.lab.responsible.degree }}</p>
        <p class="mb-1">Email: <a href="mailto:{{ site.data.lab.responsible.email }}">{{ site.data.lab.responsible.email }}</a></p>
        <p class="mb-0"><a href="{{ site.data.lab.responsible.scholar }}" target="_blank" rel="noopener noreferrer">Perfil en Google Scholar</a></p>
      </div>
    </div>
  </div>
</div>

## Blog de proyectos

{% assign recent_projects = site.projects | sort: 'year' | reverse %}
<div class="row row-cols-1 row-cols-lg-2 g-3 mb-4">
{% for project in recent_projects limit:2 %}
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title mb-1"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h5>
        <p class="text-muted mb-2"><small>{{ project.year }} · {{ project.area }}</small></p>
        <p class="card-text mb-0">{{ project.summary }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## Noticias

<div class="card mb-4">
  <div class="card-body">
    <ul class="mb-0">
    {% for item in site.data.news %}
      <li><strong>{{ item.date }}</strong> · {{ item.text }}</li>
    {% endfor %}
    </ul>
  </div>
</div>

## Metricas del perfil del profesor

<div class="row row-cols-2 row-cols-lg-4 g-2 mb-2">
  <div class="col"><div class="card"><div class="card-body text-center"><strong>8305</strong><br><small>citas totales</small></div></div></div>
  <div class="col"><div class="card"><div class="card-body text-center"><strong>40</strong><br><small>indice h</small></div></div></div>
  <div class="col"><div class="card"><div class="card-body text-center"><strong>96</strong><br><small>indice i10</small></div></div></div>
  <div class="col"><div class="card"><div class="card-body text-center"><strong>4366</strong><br><small>citas desde 2021</small></div></div></div>
</div>

_Fuente: perfil publico de Google Scholar de Pablo A. Estevez (captura consultada en febrero 2026)._
