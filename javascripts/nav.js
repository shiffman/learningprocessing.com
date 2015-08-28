
$('document').ready(function(){

	// SET HEIGHT OF NAV
	var windowHeight = $(window).height();

	$('.links-level-2').css({'max-height': windowHeight - 350}).addClass('scroll-borders');
	$('nav').fadeIn(500);


	// HIDE BUTTON IF ON HOMEPAGE
	
	if($(".home-flag").length > 0){

	    $('.nav-cta').hide();
	
	}

	// SCROLL TO CHAPTER IS SELECTED
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

$('.chapter-header').click(function(e){

	e.stopPropagation();
	
	var chapter = $(this).attr('data-chapter');
	
	$('.chapter-header').removeClass('new-chapter');
	$(this).addClass('new-chapter');

	$('.post-link').slideUp(200);

	$('li.chapter-'+chapter).slideDown(200);

});

$('.secondary-link, .page-contents a').click(function() {

	var chapter = $(this).attr('data-chapter');

	localStorage["chapter"] = chapter;

});

function scrollToChapter() {

	var container 	= $('.links-level-2')
	var scrollTo 	= $('.chapter-'+localStorage["chapter"]+':first');

	if(container.length != 0) {

		$(container).animate({

		    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 30
		
		}, 10);
		
	}

}











