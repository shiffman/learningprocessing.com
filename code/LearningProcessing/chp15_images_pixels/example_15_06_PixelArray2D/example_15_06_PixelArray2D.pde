// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-6: Setting pixels according to their 2D location

size(200, 200);
loadPixels();

// Two loops allow us to visit every column (x) and every row (y).

// Loop through every pixel column
for (int x = 0; x < width; x++ ) {
  // Loop through every pixel row
  for (int y = 0; y < height; y++ ) {

    // Use the formula to find the 1D location
    int loc = x + y * width; 

    // If even column
    if (x % 2 == 0) { 
      pixels[loc] = color(255);
      // If odd column
    } else { 
      pixels[loc] = color(0);
    }
  }
}

  updatePixels();