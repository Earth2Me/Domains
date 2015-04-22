{% include godaddy-codes/header.md %}

# Working promo codes #

These GoDaddy promo codes are known to be working recently, though many have restrictions.

## Color codes ##

Colored rows have been identified as likely having certaing characteristics.  These are automatically determined and not definitive.  In order of precedence:

Color                              | Meaning
---------------------------------- | -------
<span class="new-only">Gray</span> | New customers or new product types only
<span class="renewal">Green</span> | Works with renewals
<span class="non-com">Blue</span>  | Specificaly for a TLD other than .com
<span>Black</span>                 | Other; typically for new registrations, sometimes transfers and bulk

Additionally, the $1.99 codes appear to be restricted to the United States.

## Codes ##

Click a code to view its details.  Click a column header to change the sorting.  `Index` notes the approximate order in which codes were added to this site, with lower numbers being older, and is the default sorting method.

<table class="sortable">
	<thead>
		<tr>
			{% for column in site.data.config.godaddy.columns %}
				{% if not column[1].hidden %}
					<th>
						<span class="column-title">{{ column[1].title | xml_escape }}</span>
	
						{% if column[1].help %}
							<sup class="help" title="{{ column[1].help | xml_escape }}">?</sup>
						{% endif %}
					</th>
				{% endif %}
			{% endfor %}
		</tr>
	</thead>
	<tbody>
		{% assign codes = site.data.godaddy %}{% comment %}where filter doesn't seem to work here{% endcomment %}
		{% if include.sort != 'index' %}
			{% assign codes = codes | sort: include.sort %}
		{% endif %}

		{% if include.reversed %}
			{% for code in codes reversed %}
				{% include godaddy-codes/table.row.html index=forloop.rindex code=code %}
			{% endfor %}
		{% else %}
			{% for code in codes %}
				{% include godaddy-codes/table.row.html index=forloop.rindex code=code %}
			{% endfor %}
		{% endif %}
	</tbody>
</table>
