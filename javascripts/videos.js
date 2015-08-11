$('document').ready(function(){

	 initiateAnnotation();

});

function initiateAnnotation() {

	var video = Popcorn.vimeo('.video-container', $('#video-url').val());

	$('.annotation-panel').each(function(index, value){

		var pop = $(this);
		video.code({ 
			start: pop.attr('data-start'),
			end: pop.attr('data-end'), 
			onStart: function() { revealAnnotation( value ); },
			onEnd: function() { hideAnnotation(value); }

		})

	});
}

function revealAnnotation(target) {

	$(target).fadeIn(200);

}

function hideAnnotation(target) {

	$(target).fadeOut(200);

}

$('.view-all').click(function() {

	$('.annotation-panel').toggleClass('force-show');

});