// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-1: "Hello World" images

// Declaring a variable of type PImage, a class available to us from the Processing core library.
var img; 

function setup() {
  createCanvas(320, 240);
  loadImage("/code/assets/runde_bird_cliffs.jpg",loaded);  
}

function loaded(data) {
  img = data;
}

function draw() {
  background(0);
  if (img) {
    image(img, 0, 0);
  }
}
