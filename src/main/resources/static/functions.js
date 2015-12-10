$(document).ready(function() {
	registerSearch();
	registerTemplate();
});

function registerSearch() {
	console.log("ASDF");
	console.log($("#c").val());
	$("#search").submit(function(ev){
		event.preventDefault();
		$.get($(this).attr('action'), {q: $("#q").val(), c: $("#c").val()}, function(data) {
			$("#resultsBlock").html(Mustache.render(template, data));
		});
	});
}

function registerTemplate() {
	template = $("#template").html();
	Mustache.parse(template);
}
