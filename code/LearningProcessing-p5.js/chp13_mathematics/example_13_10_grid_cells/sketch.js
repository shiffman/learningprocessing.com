// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 13-10: Two-dimensional array of objects

// 2D Array of objects
var grid; 

// Number of columns and rows in the grid
var cols = 32;
var rows = 18;

function setup() {
  createCanvas(320, 180);
  grid = [];

  // The counter variables i and j are also the column and row numbers
  // In this example, they are used as arguments to the constructor for each object in the grid.
  for (var i = 0; i < cols; i++) {
    grid[i] = [];
    for (var j = 0; j < rows; j++) {
      // Initialize each object
      grid[i][j] = new Cell(i*10, j*10, 10, 10, i + j);
    }
  }
}

function draw() {
  background(0);
  for (var i = 0; i < cols; i++) {     
    for (var j = 0; j < rows; j++) {
      // Oscillate and display each object
      grid[i][j].oscillate();
      grid[i][j].display();
    }
  }
}

