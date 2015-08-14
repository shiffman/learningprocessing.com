
$('document').ready(function(){

	var windowHeight = $(window).height();

	if($('nav').height() > windowHeight) {

		$('.links-level-2').css({'max-height': windowHeight - 350}).addClass('scroll-borders');
		
	}

	$('nav').fadeIn(400);

});

//
//	Handles nav UI when user hovers over page link
//

$('nav').hover(function(){

	$('nav').addClass('in');

}, function(){

	$('nav').removeClass('in');

});