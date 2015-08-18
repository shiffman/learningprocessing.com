// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-11: Brightness threshold with filter

var img;

function loaded(data) {
  img = data;
}

function setup() {
  createCanvas(200, 200);
  devicePixelScaling(false);
  loadImage("/code/assets/sunflower.jpg", loaded);  
}

function draw() {
  if (img) {
    // Draw the image
    image(img,0,0);
    // Filter the window with a threshold effect
    // 0.5 means threshold is 50% brightness
    filter("threshold",0.5);
  }
}

