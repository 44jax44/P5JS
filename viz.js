function setup() {
  createCanvas(1920,1080);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255,0,0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
