$(function() {

	// Табы
	$('.tabs__nav-item').click(function(e) {
		e.preventDefault();

		$(this)
			.addClass('tabs__nav-item--active')
			.siblings()
			.removeClass('tabs__nav-item--active')

		var destination = $(this).find('.tabs__link').attr('href');
		
		$('.tabs__tab').fadeOut(0);

		$('.tabs__tab' + destination).fadeIn(400);
	});
	

});