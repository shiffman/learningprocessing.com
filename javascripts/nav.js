
$('document').ready(function(){

	var windowHeight = $(window).height();

	$('.links-level-2').css({'max-height': windowHeight - 350}).addClass('scroll-borders');

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

$('.chapter-header').click(function(){

	var chapter = $(this).attr('data-chapter');
	
	$('.chapter-header').removeClass('new-chapter');
	$(this).addClass('new-chapter');
	$('li.chapter-'+chapter).toggleClass('hide');
	$('li.chapter-'+chapter).last().css({'margin-bottom': '15px'});

	localStorage["chapter"] = chapter;

});