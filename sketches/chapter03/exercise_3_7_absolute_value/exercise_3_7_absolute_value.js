function setup() {
  var canvas = createCanvas(200, 200);
  canvas.parent('sketch-container');
  background(255);
}

function draw() {
  stroke(0);
  //strokeWeight(abs(pmouseX - mouseX));
  line(pmouseX, pmouseY, mouseX, mouseY);
}
