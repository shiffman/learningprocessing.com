
$('document').ready(function(){

	var windowHeight = $(window).height();

	$('.links-level-2').css({'max-height': windowHeight - 350}).addClass('scroll-borders');

	$('nav').fadeIn(500);

	scrollToChapter();

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

	$('.post-link').slideUp(200);

	$('li.chapter-'+chapter).slideDown(200);

});

$('.secondary-link').click(function() {

	var chapter = $(this).attr('data-chapter');

	localStorage["chapter"] = chapter;

});

function scrollToChapter() {

	console.log($('.chapter-'+localStorage["chapter"]+':first-of-type').offset().top);
	var container 	= $('.links-level-2')
	var scrollTo 	= $('.chapter-'+localStorage["chapter"]+':first-of-type');

	$(container).animate({

	    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 30
	
	}, 1000);

}











