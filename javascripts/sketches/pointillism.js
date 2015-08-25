var img;
var smallPoint, largePoint;

var colors = [];
var index = 0;

var angle = 0;

// function preload() {
//   img = loadImage("../images/bg.jpg");

// }
var alph = 10;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('sketch-container'); 
  colors.push(color(255, 200, 0, 6));
  colors.push(color(237, 70, 47, 1));
  //colors.push(color(123, 123, 98, alph));
  // colors.push(color(64, 64, 64, alph));  
  smallPoint = 20;
  largePoint = 60;
  imageMode(CENTER);
  noStroke();
  clear();
  angleMode(RADIANS);
}

function draw() {

  for (var i = 0; i < 15; i++) {
    var v = p5.Vector.random2D();

    var wave = map(sin(angle), -1, 1, 0, 4);

    v.mult(random(1, 20*wave));
    var pointillize = random(smallPoint, largePoint);
    var x = mouseX + v.x;//floor(random(img.width));
    var y = mouseY + v.y;//floor(random(img.height));
    //var pix = img.get(x, y);
    //fill(pix[0],pix[1], pix[2], 52);
    fill(colors[index]);
    ellipse(x, y, pointillize, pointillize);
  }

  if (random(1) < 0.01) {
    index = (index + 1) % colors.length;
  }

  angle += 0.02;
}
