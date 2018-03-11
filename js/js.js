$( document ).ready(function() {
	$('.item-info img').click(function() {
		$(".check_button").css('visibility', 'hidden');
		$(this).prev(".check_button").css('visibility', 'visible');
	});	
});