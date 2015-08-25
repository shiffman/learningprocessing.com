var video = Popcorn.vimeo( "#video", $('#video-url').val());
//var popcorn = Popcorn(video);

$('document').ready(function(){

	video.src = $('#video-url').val();
	initiateAnnotation();
	// video.on('loadeddata', function(){

	// 	// Fit Vids makes videos responsive among devices
	// 	$('.video-container').fitVids();

	// });

});

function initiateAnnotation() {

	$('.annotation-panel').each(function(index, value){

		var pop 		= $(this);
		var start 		= Popcorn.util.toSeconds(pop.attr('data-start'));
		var end 		= pop.attr('data-end');

		video.code({ 

			start: start,
			end: end, 
			onStart: function() { revealAnnotation(value) },
			onEnd: function() { hideAnnotation(value) }

		})

	});
	
}

function revealAnnotation(target) {
	
	$(target).addClass('in');

}

function hideAnnotation(target) {

	$(target).removeClass('in');

}

$('.annotation-panel').click(function(){

	var cueTime = Popcorn.util.toSeconds($(this).attr('data-start'));
	video.currentTime(cueTime);

});

$('.annotation-panel a').click(function(e){	

	var	url 		= $(this).attr('href');
	var	displayCode = $(this).attr('data-displaycode');

	if( displayCode == "true" ) {

		e.preventDefault();
		$('.code-window').slideUp(200);

		$.get(url).done(function(data) {

			$('.code-window pre code').html(data);
			Prism.highlightAll();
			$('.code-window').slideDown(300);

		})

		.error(function(){

			$('.code-window pre code').html('Sorry could not retrieve code.');
			$('.code-window').slideDown(300);

		});

	}

});