void setup() {
  size(200, 200);
  background(255);
}

void draw() {
  stroke(0);
  strokeWeight(abs(pmouseX - mouseX));
  line(pmouseX, pmouseY, mouseX, mouseY);
}
