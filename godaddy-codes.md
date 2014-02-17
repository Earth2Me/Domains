---
layout: page
title: GoDaddy Promo Code List
---
{% include namepros-credit-godaddy.md %}

# Working Codes #

These promo codes are known to be working recently.  See the [GoDaddy Promo Code Details page]({{ site.baseurl }}/godaddy-codes-details.html) for more specific information about each code.

Codes are ordered by the date they became effective in descending order: newer codes are on top.

<table>
	<thead>
		<tr>
			<th>Code</th>
			<th>Expires</th>
			<th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		{% assign codes = site.data.godaddy | sort: 'starts' %}
		{% for code in codes reversed %}
			{% if site.time < code.expires and site.time >= code.starts %}
				<tr>
					<td><a href="{{ site.baseurl }}/godaddy-codes-details.html#code-{{ code.code | url_escape }}"><code>{{ code.code | xml_escape }}</code></a></td>
					<td>{{ code.expires | date: site.data.config.date_format }}</td>
					<td>{% if code.affiliate %}Affiliate{% else %}{{ code.type | xml_escape }}{% endif %}</td>
					<td>{{ code.description | xml_escape }}</td>
				</tr>
			{% endif %}
		{% endfor %}
	</tbody>
</table>