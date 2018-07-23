var cols, rows;
var scl = 15;
var w = 1800;
var h = 800;

var flying = 0;
var flyingSpeed = 0.01;

var terrain = [];

var cols = w / scl;
var rows = h / scl;

function setup() {
  createCanvas(1200, 800, WEBGL);

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];

    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }

  background(0);
}

function draw() {
  background(0);
  strokeWeight(1);
  fill(0)

  rotateX(PI/3);
  translate(-w/2, -h/2, -200);

  flying -= flyingSpeed;
  var yoff = flying;

  for (var y = 0; y < rows; y++) {
    var c = map(y, 0, rows, 20, 50)
    stroke(c, c);

    var xoff = 0;

    noFill();
    beginShape();

    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -150, 150);

      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, y*scl, terrain[x][y]);

      xoff += 0.1;
    }
    yoff += 0.1;
    endShape();
  }
}
