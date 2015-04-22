---
layout: page
title: All GoDaddy Promo Codes
---
{% include godaddy-codes/header.md %}

# All codes #

These are all of the codes that have been tested in an effort to expand this site's database.  Many of them don't work, and possibly never have.

You'll notice that there are two sections.  The first contains codes of which GoDaddy acknowledges the existence; the second contains codes which do not exist in GoDaddy's database because they have either been removed or never existed in the first place.  Just because a code exists does not mean that it will work.  For example, many codes persist long after they've expired.

## Codes that exist ##

Note that these codes aren't necessarily useful; many have expired or reached their limits.

{% assign codes = site.data.godaddy | sort: 'code' | map: 'code' %}
<ul>
	{% for code in codes %}
		<li><code>{{ code | xml_escape }}</code></li>
	{% endfor %}
</ul>

## Codes that don't exist ##

{% assign codes = site.data.godaddydead %}
<ul>
	{% for code in codes %}
		<li><code>{{ code | xml_escape }}</code></li>
	{% endfor %}
</ul>
