// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 7-4: Using a function that returns a value, distance

function setup() {
  createCanvas(480, 270);
}

function draw() {
  background(255);
  stroke(0);

  var d = distance(width/2, height/2, mouseX, mouseY);
  fill(d*3, d*2, d);
  ellipseMode(CENTER);
  ellipse(width/2, height/2, 100, 100);
}

function distance(x1, x2, y1, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var d = sqrt(dx*dx + dy*dy);
  return d;
}