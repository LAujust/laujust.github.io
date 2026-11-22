---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<p class="publication-source">My journal articles and preprints, grouped by year. Journal and arXiv versions share a single entry. See also my <a href="https://orcid.org/{{ site.data.socials.orcid_id }}">ORCID record</a>.</p>

{% include bib_search.liquid %}

<div class="publications publication-index">
  {% bibliography %}
</div>
