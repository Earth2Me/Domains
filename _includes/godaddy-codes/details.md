{% assign codes = site.data.godaddy | sort: 'starts' %}
{% if include.affiliate == 'true' %}
	{% assign affiliate = true %}
{% else %}
	{% assign affiliate = false %}
{% endif %}

Codes are ordered by the date they became effective in descending order: newer codes are on top.

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

					<dt>Type</dt>
					<dd>{{ code.type | capitalize }}</dd>

					<dt>Is Affiliate code</dt>
					<dd>{% assign field = 'affiliate' %}{% if code[field] %}Yes{% else %}No{% endif %}</dd>

					<dt>Single use</dt>
					<dd>{% assign field = 'oneuse' %}{% if code[field] %}Yes{% else %}No{% endif %}</dd>

					<dt>Regionally restricted</dt>
					<dd>{% assign field = 'regional' %}{% if code[field] %}Yes{% else %}No{% endif %}</dd>

					<dt>Special link required</dt>
					<dd>{% assign field = 'mustfollowpath' %}{% if code[field] %}Yes{% else %}No{% endif %}</dd>

					<dt>New customers only</dt>
					<dd>{% assign field = 'newshopper' %}{% if code[field] %}Yes{% else %}No{% endif %}</dd>

					<dt>Allowed currencies</dt>
					<dd>{{ code.currencies | array_to_sentence_string | xml_escape }}</dd>

					{% if code.details and code.details.size > 0 %}
						<dt>Additional details</dt>
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