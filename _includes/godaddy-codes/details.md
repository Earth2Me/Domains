{% assign currencies = 'USD, AED, ARS, AUD, BRL, CAD, CHF, CLP, CNY, COP, DKK, EGP, EUR, GBP, HKD, IDR, ILS, INR, JPY, KRW, MAD, MXN, MYR, NZD, PEN, PHP, PKR, PLN, SAR, SEK, SGD, THB, TRY, TWD, UAH, UYU, VEF, VND, ZAR' %}
{% capture currencies_compare %}Currency: {{ currencies }}{% endcapture %}
{% assign codes = site.data.godaddy | sort: 'starts' %}
{% if include.affiliate == 'true' %}
	{% assign affiliate = true %}
{% else %}
	{% assign affiliate = false %}
{% endif %}

Codes are ordered by the date they became effective in descending order: newer codes are on top.

Default permitted currencies: {{ currencies }}

<ul class="code-details">
	{% for code in codes reversed %}
		{% if code.type == include.type and code.affiliate == affiliate and site.time < code.expires and site.time >= code.starts and code.usable != false and code.active != false %}
			<li id="code-{{ code.code | xml_escape }}">
				<a href="#code-{{ code.code | url_escape }}">#</a>
				<input type="text" onmouseover="this.focus();this.select();" onclick="this.select();" value="{{ code.code | xml_escape }}" readonly="readonly" />
				<dl>
					<dt>Description</dt>
					<dd>{{ code.description | xml_escape }}</dd>
					<dt>Starts</dt>
					<dd>{{ code.starts | date: site.data.config.date_format }}</dd>
					<dt>Expires</dt>
					<dd>{{ code.expires | date: site.data.config.date_format }}</dd>
					{% if code.details and code.details.size > 1 or code.details[0] != currencies_compare %}
						<dt>Details</dt>
						{% for detail in code.details %}
							{% if detail != currencies_compare %}
								<dd class="newline">{{ detail | xml_escape }}</dd>
							{% endif %}
						{% endfor %}
					{% endif %}
				</dl>
			</li>
		{% endif %}
	{% endfor %}
</ul>