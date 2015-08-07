$('document').ready(function(){

	var JSfile 	= $('#js-files').val();
	var PDEfile = $('#pde-files').val();

		initiateCode(JSfile);
		populateCodeWindow(PDEfile);
		createCodeNav(PDEfile);

});

function populateCodeWindow(file) {

	// Grab contents of JS / PDE file and populate the code window
	// Need to do some logic for multiple files.

	if(file.indexOf(',') === -1) {

	  	$.get('/'+file).done(function(data){

			$('.code-container pre').html(data);

		});

	} else {

		var firstFile = file.split(',');
		$.get('/'+firstFile[0]).done(function(data){

			$('.code-container pre').html(data);

		});

	}
	

}

function initiateCode(file) {

	// Need to run the code from the .js sketch here and assign into $('#sketch-container');
	// For the moment I've just copied and paste excercise code into here.
	function setup() {
	  var canvas = createCanvas(200, 200);
	  canvas.id = 'sketch-container';
	  background(255);
	}

	function draw() {
	  stroke(0);
	  strokeWeight(abs(pmouseX - mouseX));
	  line(pmouseX, pmouseY, mouseX, mouseY);
	}

}

function createCodeNav(PDE) {

	var array = PDE.split(',');

	if(array.length > 1) {

		console.log('Multiple Links');
		for(i = 0; i < array.length; i++) {
			console.log(array[i]);
			$('.code-tab').append('<a href="" class="'+array[i]+'">'+array[i]+'</a>');

		}

	} else {

		console.log('Just One Link');

	}
	//if()

}