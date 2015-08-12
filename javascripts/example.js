$('document').ready(function(){

	var JSfile 	= $('#js-files').val();
	var PDEfile = $('#pde-files').val();

		populateCodeWindow(PDEfile);
		createCodeNav(PDEfile);
		initiateCode(JSfile);

});

function populateCodeWindow(file) {

	if(file.indexOf(',') === -1) {

	  	$.get(file).done(function(data){

			$('.code-container pre').html(data);

		});

	} else {

		var firstFile = file.split(',');
		$.get(firstFile[0]).done(function(data){

			$('.code-container pre').html(data);

		});

	}
	

}

function initiateCode(file) {

	setTimeout(function(){

		$('#defaultCanvas').appendTo("#sketch-container");

	}, 1);

}

function createCodeNav(PDE) {

	var array = PDE.split(',');

	if(array.length > 1) {

		for(i = 0; i < array.length; i++) {
			
			var link = array[i].substr(array[i].lastIndexOf('/') + 1);
				link = link.replace('example_','');

			$('.code-tab').append('<a href="'+array[i]+'" class="code-tab-link">'+link+'</a>');

		}

	} else {

		var link = PDE.substr(PDE.lastIndexOf('/') + 1);
			link = link.replace('example_','');

		$('.code-tab').append('<a href="'+PDE+'" class="code-tab-link">'+link+'</a>');

	}

	// Prevent default click and run code population functions
	$('.code-tab-link').click(function(e){

		e.preventDefault();

		var PDEfile = $(this).attr('href');
		populateCodeWindow(PDEfile);

	});

}