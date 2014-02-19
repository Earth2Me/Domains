---
layout: page
title: List of Inactive GoDaddy Promo Codes
---
{% include godaddy-codes/header.md %}

# Future codes #

These codes aren't valid yet, but will be at some point.

<ul class="dead-codes">
	{% assign any = false %}
	{% assign codes = site.data.godaddy | sort: 'starts' %}
	{% for code in codes reversed %}
		{% if code.starts > site.time %}
			{% assign any = true %}
			<li><code>{{ code.code | xml_escape }}</code> starts {{ code.starts | date: site.data.config.date_format }}</li>
		{% endif %}
	{% endfor %}
	{% if any == false %}
		<li><em>None</em></li>
	{% endif %}
</ul>

# Expired codes #

These codes were active at one point, but have since expired.

<ul class="dead-codes">
	{% assign any = false %}
	{% assign codes = site.data.godaddy | sort: 'expires' %}
	{% for code in codes reversed %}
		{% if code.expires <= site.time %}
			{% assign any = true %}
			<li><code>{{ code.code | xml_escape }}</code> expired {{ code.expires | date: site.data.config.date_format }}</li>
		{% endif %}
	{% endfor %}
	{% if any == false %}
		<li><em>None</em></li>
	{% endif %}
</ul>

# Unusuable codes #

These codes are disabled for whatever reason.

<ul class="dead-codes">
	{% assign any = false %}
	{% assign codes = site.data.godaddy | sort: 'expires' %}
	{% for code in codes reversed %}
		{% if code.active == false or code.usable == false %}
			{% assign any = true %}
			<li><code>{{ code.code | xml_escape }}</code></li>
		{% endif %}
	{% endfor %}
	{% if any == false %}
		<li><em>None</em></li>
	{% endif %}
</ul>
