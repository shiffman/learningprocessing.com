
// Declare an array
var points = []; 

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('sketch-container'); 

  // can also set in-line style this way 
  // canvas.position(0,0);
  // canvas.style('z-index:','-99');

}

function draw() {
  clear();
  // New location
  var point = {
    x: mouseX,
    y: mouseY
  }
  points.push(point); // Update the last spot in the array with the mouse location.

  if (points.length > 50) {
    points.splice(0,1);
  }
  
  // Draw everything
  for (var i = 0; i < points.length; i++) {
     // Draw an ellipse for each element in the arrays. 
     // Color and size are tied to the loop's counter: i.
    noStroke();
    fill(255-i*5);
    ellipse(points[i].x,points[i].y,i,i);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
