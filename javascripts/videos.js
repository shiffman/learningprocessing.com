$('document').ready(function(){

	 initiateAnnotation();

});

var video = Popcorn.HTMLVimeoVideoElement( "#video" );
	video.src = $('#video-url').val();

var popcorn = Popcorn(video);
	popcorn.on('loadeddata', function(){

		// Fit Vids makes videos responsive among devices
		$('.video-container').fitVids();

	});

function initiateAnnotation() {

	$('.annotation-panel').each(function(index, value){

		var pop = $(this);
		console.log(pop.attr('data-start'));

		popcorn.code({ 

			start: 1,
			end: 5, 
			onStart: function(pop) { revealAnnotation(pop) },
			onEnd: function(pop) { hideAnnotation(pop) },
			onFrame: function() { console.log('On Frame') }

		})

	});
	
}

function revealAnnotation(target) {
	console.log(target);
	target.addClass('in');

}

function hideAnnotation(target) {

	console.log('Un Welcome');
	target.removeClass('in');

}

$('.annotation-panel').click(function(){

	var cueTime = $(this).attr('data-start');
	popcorn.currentTime(cueTime);

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