$(document).ready(function(){

	setDimensions();

	$('window').resize(function(){

		setDimensions();

	});

	if($('.secondary-link').length != 0) {

		$('nav').addClass('level-2');

	}

	$('#menu-btn').click(function(e){

		e.stopPropagation();
		$('nav').addClass('open');

	});

	$('html').click(function(){

		$('nav').removeClass('open');

	});

});

// For mobile only. Hide stamp when scrolled

$(window).on('scroll', function() {

	if ($(this).scrollTop() > 40) {

        $('.stamp').addClass('scroll-hide');

    } else {

        $('.stamp').removeClass('scroll-hide');

    }

});

// Close mobile nav off click

function setDimensions() {

	var height = $(window).height();
	$('.lhs').css({'height': '100%', 'min-height': height});

}