var x = 0;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('sketch-container'); 

  // can also set in-line style this way 
  // canvas.position(0,0);
  // canvas.style('z-index:','-99');

}

function draw() {
  clear();
  rect(x, 0, 10, height);
  x += 10;
  if (x > width) {
    x = 0;
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}