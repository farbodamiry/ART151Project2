let offset = 0;
const step = 0.03;
const scl = 0.2;
const w = 600;
const h = 700;
const cellSize = 16;
const bigsize = 25;
const gridW = w / cellSize;
const gridH = h / cellSize;
const radius = cellSize;
let color1;
let color2;
let color3;
let color4;
function setup() {
  createCanvas(w, h);
  noCursor();
  noStroke();
  color1 = color(0, 0, 255);
  color2 = color(255, 0, 0);

}

function draw() {
  //background with transparancy
  background(0,0,35,25);

  //blinking stars
  var galaxy = {
  locationX : random(width),
  locationY : random(height),
  size : random(1,6)
  }
  for (let x = 1; x < gridW; x++) {
    for (let y = 1; y < gridH; y++) {
      const val = noise(x * scl, y * scl - offset);
      const r = map(val, 0, 1, 0, radius);
      const c = lerpColor(color1, color2, val);
      ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
      ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
      if(mouseIsPressed){
        color3 = color(random(255),random(255),random(255));
        color4 = color(random(255), random(255), random(255));
        const f = lerpColor(color3, color4, val);
        fill(f);
        ellipse(x* mouseX, y* mouseY, r *x , r*y);
        color1 = color(random(255),random(255),random(255));
        color2 = color(random(255),random(255),random(255));
      }
      else{
        fill(c);
        ellipse(x * cellSize, y * cellSize, r, r);
          }
    }
  }
    offset += step;
}
