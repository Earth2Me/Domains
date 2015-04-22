---
layout: page
title: All GoDaddy Promo Codes
---
{% include godaddy-codes/header.md %}

# All codes #

These are all of the codes that have been tested in an effort to expand this site's database.  Many of them don't work, and possibly never have.

You'll notice that there are two sections.  The first contains codes that were known to work at some point; the second contains codes that have never worked during our testing.

## Codes have been valid ##
{% assign codes = site.data.godaddy | sort: 'code' | map: 'code' %}
<ul>
	{% for code in codes %}
		<li><code>{{ code | xml_escape }}</code></li>
	{% endfor %}
</ul>

## Codes that were never valid ##
{% assign codes = site.data.godaddydead %}
<ul>
	{% for code in codes %}
		<li><code>{{ code | xml_escape }}</code></li>
	{% endfor %}
</ul>
