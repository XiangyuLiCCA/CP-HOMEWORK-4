function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var x = 50; x < width-50; x= x + 10) {
    //x = 50 for Start in 50 pixels on left side
    // x < width-50 for stop in 50 pixels on right side
    // x= x + 10 means 10 pixels between each two points.
    line(x, height/2, mouseX, mouseY);
  }
}
