function setup() {
  createCanvas(200, 200);
  background(255);
}

function draw() {
  stroke(0);
  strokeWeight(abs(pmouseX - mouseX));
  line(pmouseX, pmouseY, mouseX, mouseY);
}
