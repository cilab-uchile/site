---
layout: page
title: Inicio
title_en: Home
permalink: /
nav: false
nav_key: nav.about
lang: es
---

{% include td.liquid obj=site.data.lab key="tagline" %}.

{% include td.liquid obj=site.data.lab key="about" %}

## {% include t.liquid key="about.active_lines_heading" %}

<div class="row row-cols-1 row-cols-md-2 g-3 mb-4">
{% for area in site.data.lab.focus_areas %}
  {% assign area_en = site.data.lab.focus_areas_en[forloop.index0] %}
  {% assign area_display = area %}
  {% if page.lang == "en" and area_en and area_en != empty %}
    {% assign area_display = area_en %}
  {% endif %}
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <p class="card-text mb-0"><span data-i18n-field data-es="{{ area | escape }}" data-en="{{ area_en | escape }}">{{- area_display -}}</span></p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## {% include t.liquid key="about.thesis_synthesis_heading" %}

<div class="card mb-3">
  <div class="card-body">
    <p class="mb-2">{% include t.liquid key="about.thesis_intro_prefix" %}{{ site.data.lab.thesis_snapshot.period }}{% include t.liquid key="about.thesis_intro_middle" %}<strong>{{ site.data.lab.thesis_snapshot.total_magister_theses }}{% include t.liquid key="about.thesis_intro_bold_suffix" %}</strong>{% include t.liquid key="about.thesis_intro_suffix" %}</p>
    <p class="mb-0"><small class="text-muted">{% include td.liquid obj=site.data.lab.thesis_snapshot key="note" %}</small></p>
  </div>
</div>

<div class="card mb-4">
  <div class="card-body">
    <h6 class="card-title mb-3">{% include t.liquid key="about.thesis_chart_title" %}</h6>
    <canvas id="tesis-por-anio-chart" height="120" aria-label="Grafico de tesis por anio" role="img"></canvas>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js"></script>
<script>
  (function () {
    const canvas = document.getElementById("tesis-por-anio-chart");
    if (!canvas || typeof Chart === "undefined") return;
    const hexToRgba = (hex, alpha) => {
      const value = hex.replace("#", "");
      const r = parseInt(value.substring(0, 2), 16);
      const g = parseInt(value.substring(2, 4), 16);
      const b = parseInt(value.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    const css = getComputedStyle(document.documentElement);
    const themeColor = (css.getPropertyValue("--global-theme-color") || "#1d3557").trim();
    const accentColor = (css.getPropertyValue("--global-hover-color") || "#0f6b66").trim();
    const isDark = () => document.documentElement.getAttribute("data-theme") === "dark";
    const palette = () => {
      if (isDark()) {
        return {
          line: themeColor,
          fill: hexToRgba(themeColor, 0.18),
          point: accentColor,
          pointBorder: "#111111"
        };
      }
      return {
        line: themeColor,
        fill: hexToRgba(themeColor, 0.12),
        point: accentColor,
        pointBorder: "#ffffff"
      };
    };
    const colors = palette();

    const chart = new Chart(canvas, {
      type: "line",
      data: {
        labels: ["2021", "2022", "2023", "2024"],
        datasets: [{
          label: "{% include t.liquid key='about.chart_series_label' plain=true %}",
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
            title: { display: true, text: "{% include t.liquid key='about.chart_y_axis_label' plain=true %}" }
          },
          x: {
            title: { display: true, text: "{% include t.liquid key='about.chart_x_axis_label' plain=true %}" }
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

## {% include t.liquid key="about.projects_capacity_heading" %}

### {% include t.liquid key="about.base_equipment_heading" %}

<div class="card mb-3">
  <div class="card-body">
    <ul class="mb-0">
    {% for item in site.data.lab.equipment %}
      <li>{{ item }}</li>
    {% endfor %}
    </ul>
  </div>
</div>

### {% include t.liquid key="about.reference_projects_heading" %}

<div class="card mb-3">
  <div class="card-body">
    <ul class="mb-0">
    {% for item in site.data.lab.projects %}
      <li>{{ item }}</li>
    {% endfor %}
    </ul>
  </div>
</div>

### {% include t.liquid key="about.academic_lead_heading" %}

<div class="card mb-4">
  <div class="card-body">
    <div class="row g-3 align-items-start">
      <div class="col-12 col-lg-4">
        <img class="img-fluid rounded" src="{{ '/assets/img/labinteligencia-2070241131.jpg' | relative_url }}" alt="Profesor Pablo Estevez en el laboratorio">
      </div>
      <div class="col-12 col-lg-8">
        <p class="mb-1"><strong>{{ site.data.lab.responsible.name }}</strong></p>
        <p class="mb-1">{% include td.liquid obj=site.data.lab.responsible key="role" %}</p>
        <p class="mb-1">{{ site.data.lab.responsible.degree }}</p>
        <p class="mb-1">{% include t.liquid key="common.email_label" %} <a href="mailto:{{ site.data.lab.responsible.email }}">{{ site.data.lab.responsible.email }}</a></p>
        <p class="mb-0"><a href="{{ site.data.lab.responsible.scholar }}" target="_blank" rel="noopener noreferrer">{% include t.liquid key="common.google_scholar_profile" %}</a></p>
      </div>
    </div>
  </div>
</div>

## {% include t.liquid key="about.project_blog_heading" %}

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

## {% include t.liquid key="about.news_heading" %}

<div class="card mb-4">
  <div class="card-body">
    <ul class="mb-0">
    {% for item in site.data.news %}
      <li><strong>{{ item.date }}</strong> · {% include td.liquid obj=item key="text" %}</li>
    {% endfor %}
    </ul>
  </div>
</div>

## {% include t.liquid key="about.professor_metrics_heading" %}

<div class="row row-cols-2 row-cols-lg-4 g-2 mb-2">
  <div class="col"><div class="card"><div class="card-body text-center"><strong>8305</strong><br><small>{% include t.liquid key="about.total_citations" %}</small></div></div></div>
  <div class="col"><div class="card"><div class="card-body text-center"><strong>40</strong><br><small>{% include t.liquid key="about.h_index" %}</small></div></div></div>
  <div class="col"><div class="card"><div class="card-body text-center"><strong>96</strong><br><small>{% include t.liquid key="about.i10_index" %}</small></div></div></div>
  <div class="col"><div class="card"><div class="card-body text-center"><strong>4366</strong><br><small>{% include t.liquid key="about.citations_since_2021" %}</small></div></div></div>
</div>

_{% include t.liquid key="about.scholar_source_note" %}_
