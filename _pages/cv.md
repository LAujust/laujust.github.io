---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 5
---

{% assign cv = site.data.resume %}
<p class="cv-summary">{{ cv.basics.summary | escape }}</p>

<section class="cv-section" aria-labelledby="cv-education">
  <h2 id="cv-education">Education</h2>
  <ul class="cv-list">
    {% for entry in cv.education %}
      <li class="cv-entry">
        <strong>{{ entry.studyType | escape }} · {{ entry.area | escape }}</strong>
        <span class="cv-date">{% if entry.expectedEndDate %}Expected {{ entry.expectedEndDate | escape }}{% else %}{{ entry.endDate | escape }}{% endif %}</span>
        <p>{{ entry.institution | escape }}</p>
      </li>
    {% endfor %}
  </ul>
</section>

<section class="cv-section" aria-labelledby="cv-experience">
  <h2 id="cv-experience">Research experience</h2>
  <ul class="cv-list">
    {% for entry in cv.work %}
      <li class="cv-entry">
        <strong>{{ entry.position | escape }}</strong>
        <span class="cv-date">{{ entry.endDate | escape }}</span>
        <p>{{ entry.name | escape }}</p>
      </li>
    {% endfor %}
  </ul>
</section>

<p class="cv-languages"><strong>Languages</strong> · {{ cv.languages | map: 'language' | join: ', ' | escape }}</p>
