function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)
 //it will make the ellipse follow the mouse moveing.
  for (var i = 0; i < x.length; i = i + 10) {
     //if i = i + x so change x will affect the radius of each circle
    rectMode(CENTER)
    //Align the center of each square
    square(x[i], y[i], 1 + (x.length - i));
    //5 + (x.length - i) is the Side length of the square
  }

  x = x.slice(-90); // keep the last 90 x values
  y = y.slice(-90); // keep the last 90 y values
}
