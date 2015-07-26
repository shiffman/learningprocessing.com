var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage("../images/bg.jpg");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('sketch-container'); 
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  clear();
}

function draw() {
  var pointillize = random(smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 52);
  ellipse(x, y, pointillize, pointillize);
}
