---
layout: page
title: All GoDaddy Promo Codes
---
{% include godaddy-codes/header.md %}

# All codes #

These are all of the codes that have been tested in an effort to expand this site's database.  Many of them don't work, and possibly never have.

You'll notice that there are two alphabetized sections.  The first contains codes that were known to work at some point; the second contains codes that have never worked during our testing.

<ul>
	{% assign codes1 = site.data.godaddy | sort: 'code' | map: 'code' | join: '`' %}
	{% assign codes2 = site.data.godaddydead | join: '`' %}
	{% capture codes %}{{ codes1 }}`{{ codes2 }}{% endcapture %}
	{% assign codes = codes | split: '`' %}

	{% for code in codes %}
		<li><code>{{ code | xml_escape }}</code></li>
	{% endfor %}
</ul>
