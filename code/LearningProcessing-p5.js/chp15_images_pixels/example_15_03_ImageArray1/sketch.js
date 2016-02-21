// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-3: Swapping images

var maxImages = 10; // Total # of images
var imageIndex = 0; // Initial image to be displayed is the first

// Declaring an array of images.
var images = [];

// function preload() {
//   // Loading the images into the array
//   // Don't forget to put the JPG files in the data folder!
//   for (var i = 0; i < images.length; i ++ ) {
//     images[i] = loadImage("data/animal" + i + ".jpg" );
//   }
// }

function setup() {
  createCanvas(200, 200);
  //loadImage("/code/assets/runde_bird_cliffs.jpg",loaded);  
  for (var i = 0; i < maxImages; i++) {
    loadImage("/code/assets/animals/animal" + i + ".jpg", loaded);
  }
}

function loaded(img) {
  images.push(img);
}

function draw() {
  // Displaying one image
  if (imageIndex < images.length) { 
    image(images[imageIndex], 0, 0);
  }
}

function mousePressed() {
  // A new image is picked randomly when the mouse is clicked
  // Note the index to the array must be an integer!
  imageIndex = int(random(images.length));
}
