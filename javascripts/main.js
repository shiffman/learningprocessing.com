$(document).ready(function(){

	var height = ($(window).height()) - 60;
	$('.lhs').css({'height': height});

	if($('.secondary-link').length != 0) {

		$('nav').addClass('level-2');

	}

});

// For mobile only. Hide stamp when scrolled

$(window).on('scroll', function() {

	if ($(this).scrollTop() > 40) {

        $('.stamp').addClass('scroll-hide');

    } else {

        $('.stamp').removeClass('scroll-hide');

    }

});