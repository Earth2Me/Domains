(function() {
	$(function() {
		$('table.sortable').tablesorter();

		$('sup.help[title]').click(function(event) {
			alert($(this).prop('title'));

			event.preventDefault();
			event.stopPropagation();
		});
	});
})();