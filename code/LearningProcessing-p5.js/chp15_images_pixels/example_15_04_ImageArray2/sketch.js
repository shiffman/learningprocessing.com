// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-4: Image sequence

var maxImages = 10; // Total # of images
var imageIndex = 0; // Initial image to be displayed is the first

// Declaring an array of images.
var images = []; 

function setup() {
  createCanvas(200, 200);
  //loadImage("/code/assets/runde_bird_cliffs.jpg",loaded);  
  for (var i = 0; i < maxImages; i++) {
    loadImage("/code/assets/animals/animal" + i + ".jpg", loaded);
  }
  frameRate(5);
}

function loaded(img) {
  images.push(img);
}

function draw() {

  background(0);
  if (imageIndex < images.length) { 
    image(images[imageIndex], 0, 0);
    // increment image index by one each cycle
    // use modulo " % "to return to 0 once the end of the array is reached
    imageIndex = (imageIndex + 1) % images.length;
  }
}
