$(document).ready(function () {
	$('.burger-button').on('click', function (e) {
		e.preventDefault()
		$('body').toggleClass('burger-active');
	})
});


$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		// adaptiveHeight: true,
	});
});
