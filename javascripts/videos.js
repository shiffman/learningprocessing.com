$('document').ready(function(){

	 initiateAnnotation();

});

var video = Popcorn.vimeo('.video-container', $('#video-url').val());

function initiateAnnotation() {

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

	$(target).addClass('in');

}

function hideAnnotation(target) {

	$(target).removeClass('in');

}

$('.view-all').click(function() {

	$('.annotation-panel').toggleClass('force-show');

});

$('.annotation-panel').click(function(){

	var cueTime = $(this).attr('data-start');
	video.currentTime(cueTime);

});

$('.annotation-panel a').click(function(e){	

	e.preventDefault();

	var container 	= $(this).closest('.annotation-panel');
		url 		= container.attr('data-code');

	if( url != "" || url != undefined ) {

		$.get(url).done(function(data) {

			$('.code-window pre code').html(data);
			Prism.highlightAll();
			$('.code-window').slideDown(300);

		});

	} else {

		window.location = url;

	}

});