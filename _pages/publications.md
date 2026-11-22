---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<p class="publication-source">Publications from my <a href="https://orcid.org/{{ site.data.socials.orcid_id }}">ORCID record</a>, grouped by year. Where a paper also has a preprint, both links appear in the same entry.</p>

{% include bib_search.liquid %}

<div class="publications publication-index">
  {% bibliography %}
</div>
