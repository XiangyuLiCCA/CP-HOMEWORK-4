function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  for (var x = random(width); x < width; x += 1600)
    for (var y = random(height); y < height; y += 1600) {

      stroke(x, y, 100);
      point(x, y);
    }
}
