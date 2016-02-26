// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 8-2: Two Car objects

Car myCar1;
Car myCar2; // Two objects!

void setup() {
  size(480, 270);
  // Arguments go inside the parentheses when the object is constructed.  
  myCar1 = new Car(color(51), 0, 100, 2); 
  myCar2 = new Car(color(151), 0, 200, 1);
}

void draw() {
  background(255);
  myCar1.move();
  myCar1.display();
  myCar2.move();
  myCar2.display();
}

// Even though there are multiple objects, only  one class is needed. 
// No matter how many cookies you make, only one cookie cutter is needed.
class Car { 
  color c;
  float xpos;
  float ypos;
  float xspeed;

  // The Constructor is defined with parameters.  
  Car(color tempC, float tempXpos, float tempYpos, float tempXspeed) { 
    c = tempC;
    xpos = tempXpos;
    ypos = tempYpos;
    xspeed = tempXspeed;
  }

  void display() {
    stroke(0);
    fill(c);
    rectMode(CENTER);
    rect(xpos, ypos, 20, 10);
  }

  void move() {
    xpos = xpos + xspeed;
    if (xpos > width) {
      xpos = 0;
    }
  }
}
