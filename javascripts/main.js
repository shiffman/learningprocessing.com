// For mobile only. Hide stamp when scrolled

$(window).on('scroll', function() {

	if ($(this).scrollTop() > 40) {

        $('.stamp').addClass('scroll-hide');

    } else {

        $('.stamp').removeClass('scroll-hide');

    }

});