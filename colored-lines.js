function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}

function draw() {
  background(255);

  for (var x = 10; x < width-5; x += 15) {
    //x = 10 for Start in 50 pixels on left side
    // x < width-5 for stop in 5 pixels on right side
    // x += 15 means 15 pixels between each two points. This will affect the number of lines
    stroke(random(0, 300), 60, 200);
    line(x, height/2, mouseX, mouseY);
  }
}
