$('document').ready(function(){

	var JSfile 	= $('#js-files').val();
	var PDEfile = $('#pde-files').val();

	populateCodeWindow(PDEfile);
	createCodeNav(PDEfile);

});

function populateCodeWindow(file) {

	if(file.indexOf(',') === -1) {

	  	$.get(file).done(function(data){

			$('.code-container pre code').html(data);
			Prism.highlightAll();
			
		});

	} else {

		var firstFile = file.split(',');
		$.get(firstFile[0]).done(function(data){

			$('.code-container pre code').html(data);
			Prism.highlightAll();

		});

	}
	

}

window.onload = function() {

  	var canvas = document.getElementById('defaultCanvas');

  	console.log(canvas);
	if( canvas == null ) {

		// NO SKETCH AVAILABLE
		$('#sketch-container').append('<div id="defaultCanvas" style="display: block"><h4>NO SKETCH AVAILABLE</h4></div>');
		$('.background-explainer').hide();
		

	} else {

  		$("#defaultCanvas").appendTo("#sketch-container").fadeIn(300);
		
	}


	
};

function createCodeNav(PDE) {

	var array = PDE.split(',');

	if(array.length > 1) {

		for(i = 0; i < array.length; i++) {
			
			var link = array[i].substr(array[i].lastIndexOf('/') + 1); // Get string after last hash
				link = link.replace('example_',''); // Remove Example 
				link = link.replace(/_/g, ' '); // Remove Underscores
				link = link.substring(5); // Remove Chapter Number

			$('.code-tab').append('<a href="'+array[i]+'" class="code-tab-link">'+link+'</a>');

		}

	} else {

		var link = PDE.substr(PDE.lastIndexOf('/') + 1);
			link = link.replace('example_','');
			link = link.replace(/_/g, ' ');
			link = link.substring(5);

		$('.code-tab').append('<a href="'+PDE+'" class="code-tab-link">'+link+'</a>');

	}

	// Prevent default click and run code population functions
	$('.code-tab-link').click(function(e){

		e.preventDefault();

		var PDEfile = $(this).attr('href');
		populateCodeWindow(PDEfile);

	});

}