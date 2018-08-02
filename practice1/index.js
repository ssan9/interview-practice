$(function() {
	let count = 0;
	$('.js-count').text(count);
	$('.js-query').click(function(event) {
		count++;
		$('.js-count').text(count);
	});
});