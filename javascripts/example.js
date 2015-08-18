$('document').ready(function(){

	var JSfile 	= $('.js-files');
	var PDEfile = $('.pde-files');

	populateCodeWindow(PDEfile);
	createCodeNav(PDEfile);

});

function populateCodeWindow(file) {

	var url = file.first().val();

	$.get(url).done(function(data){

		$('.code-container pre code').html(data);

	});

}

window.onload = function() {

  	var canvas = document.getElementById('defaultCanvas');

	if( canvas == null ) {

		// NO SKETCH AVAILABLE
		$('#sketch-container').append('<div id="defaultCanvas" style="display: block"><h4>NO SKETCH AVAILABLE</h4></div>');
		$('.background-explainer').hide();
		

	} else {

  		$(canvas).appendTo("#sketch-container").fadeIn(300);
		
	}
	
};

function createCodeNav() {

	$('.pde-files').each(function(index, el) {

		var url  	= $(this).val();
		var label 	= $(this).attr('data-label');
		var link 	= url.substr(url.lastIndexOf('/') + 1);
			link 	= link.replace('exercise_','');

		$('.code-tab').append('<a href="'+url+'" data-js="'+label+'" class="code-tab-link">'+link+'</a>');

	});

	// Prevent default click and run code population functions
	$('.code-tab-link').click(function(e){

		e.preventDefault();

		var PDEfile = $(this).attr('href');
		populateCodeWindow(PDEfile);

	});

}