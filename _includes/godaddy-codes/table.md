{% include godaddy-codes/header.md %}

# Working promo codes #

These GoDaddy promo codes are known to be working recently, though many have restrictions.

## Color codes ##

Colored rows have been identified as likely having certaing characteristics.  These are automatically determined and not definitive.  In order of precedence:

Color                              | Meaning
---------------------------------- | -------
<span class="new-only">Gray</span> | New customers only
<span class="renewal">Green</span> | Works with renewals
<span class="non-com">Blue</span>  | Specificaly for a TLD other than .com
<span>Black</span>                 | Other; typically for new registrations, sometimes transfers and bulk

Additionally, the $1.99 codes appear to be restricted to the United States.

## Codes ##

Click a code to view its details.  Click a column header to change the sorting.  `Index` notes the approximate order in which codes were added to this site, with lower numbers being older, and is the default sorting method.

<table>
	<thead>
		<tr>
			{% for column in site.data.config.godaddy.columns %}
				<th>
					{% if include.sort != column %}
						<a href="{{ site.baseurl }}/godaddy-codes/by-{{ column }}.html" title="Sort by {{ column }}">{{ column | capitalize }}</a>
					{% else %}
						{{ column | capitalize }}
					{% endif %}
				</th>
			{% endfor %}
		</tr>
	</thead>
	<tbody>
		{% assign codes = site.data.godaddy %}
		{% if include.sort != 'index' %}
			{% assign codes = codes | sort: include.sort %}
		{% endif %}

		{% if include.reversed %}
			{% for code in codes reversed %}
				{% include godaddy-codes/table.row.html code=code %}
			{% endfor %}
		{% else %}
			{% for code in codes %}
				{% include godaddy-codes/table.row.html code=code %}
			{% endfor %}
		{% endif %}
	</tbody>
</table>
