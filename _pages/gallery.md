---
layout: page
title: Galería
title_en: Gallery
permalink: /gallery/
nav: true
nav_order: 7
nav_key: nav.gallery
lang: es
---

{% include t.liquid key="gallery.intro" %}

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
{% for photo in site.data.gallery %}
  <div class="col">
    <a href="#" role="button" data-toggle="modal" data-target="#gallery-modal-{{ forloop.index }}">
      <img
        class="gallery-thumb"
        src="{{ '/assets/img/gallery/' | append: photo.filename | relative_url }}"
        alt="{% if photo.caption %}{{ photo.caption }}{% else %}{% include t.liquid key='gallery.photo_alt' plain=true %} {{ forloop.index }}{% endif %}"
      >
    </a>
  </div>
{% endfor %}
</div>

{% for photo in site.data.gallery %}
  <div class="modal fade" id="gallery-modal-{{ forloop.index }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content bg-transparent border-0">
        <button type="button" class="btn-close btn-close-white gallery-modal-close" data-dismiss="modal" aria-label="Close"></button>
        <img class="img-fluid rounded" src="{{ '/assets/img/gallery/' | append: photo.filename | relative_url }}" alt="{% include t.liquid key='gallery.photo_alt' plain=true %} {{ forloop.index }}">
        {% if photo.caption %}
          <p class="gallery-modal-caption text-center mt-2">{{ photo.caption }}</p>
        {% endif %}
      </div>
    </div>
  </div>
{% endfor %}
