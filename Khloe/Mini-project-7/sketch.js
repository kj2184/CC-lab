
let points = []; // empty
let img;
let font1;

function preload() {
  song = loadSound("Michael-Jackson-You-Are-Not-Alon.mp3");
  img = loadImage("s.jpg");
  font1 = loadFont("PermanentMarker-Regular.ttf");
}
function setup() {
  let canvas=createCanvas(800, 800);
  canvas.parent("my-container");


  song.play();

  // construct the points!
  for (let i = 0; i < 50; i++) {
    let p = new KhPoint(width / 2, height / 2, random(TWO_PI), random(365 / 2));
    points.push(p);
    // points.push(new KhPoint(mouseX, mouseY))
  }
}

function draw() {
  background(0);

  // generate points
  let p = new KhPoint(width / 2, height / 2, random(TWO_PI), random(365 / 2));
  points.push(p);

  // the Earth
  image(img, 0, 0);
  fill(111, 220, 255);
  circle(width / 2, height / 2, 370);
 
  // cloud
  drawLand(width / 2, height / 2);
  drawEyes(width / 2, height / 2);

 

  
  // update and display the points!
  noFill();
  stroke(255);
  // strokeWeight(2)
  beginShape(LINES);
  for (let i = 0; i < points.length; i++) {
    let p = points[i]; // each
    p.move();
    p.display();
   if (mouseIsPressed == true) {
 
 
      vertex(p.x, p.y);
    }
  
  }
  endShape();

  // limit the number of objects
  while (points.length > 200) {
    points.splice(0, 1);
  }
  fill(255);
  textFont(font1);
  textSize(30);
  stroke("SaddleBrown");
  text("~ WE ARE TOGETHER ~", 300, 40);
}
function mouseClicked() {
  points.push(new point(mouseX, mouseY));
}

function drawLand(x, y) {
  push();
  translate(x, y);
  fill(118, 215, 91);
  noStroke();
  ellipse(0, -133, 200, 100);
  ellipse(90, -105, 100, 70);
  ellipse(-20, -155, 90, 55);
  pop();
  fill(118, 215, 91);

  push();
  translate(x, y);
  rotate(75 * 0.03); // 0.1 will change the speed of rotation
  noStroke();
  fill(118, 215, 91);
  ellipse(147, 0, 70, 200);
  pop();

  noStroke();
  //ellipse(250, 442, 50, 140);
  ellipse(390, 550, 90, 70);
}

function drawEyes(x, y) {
  fill(255);
  arc(350, 379, 80, 80, PI, TWO_PI, CHORD);
  arc(450, 379, 80, 80, PI, TWO_PI, CHORD);
  fill(0);
  circle(370, 365, 30);
  circle(430, 365, 30);

  push();
  translate(412, 437);
  rotate(105 * 0.03);
  noFill();
  stroke(53, 122, 23);
  strokeWeight(4);
  arc(0, 0, 100, 100, PI, TWO_PI, OPEN);
  pop();

  fill(53, 122, 23);
  ellipse(409, 408, 14, 30);
  

}



function mousePressed() {
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    p.changeColor(random(255), random(255), random(255));
  }
}

class KhPoint {
  constructor(centerX, centerY, angle, radDist) {
    this.x = centerY + cos(angle) * radDist;
    this.y = centerX + sin(angle) * radDist;
    this.xSpd = random(-0.5, 0.5);
    this.ySpd = random(-0.5, 0.5);
    this.dia = random(2, 5);

    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  changeColor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  display() {
    push();
    stroke(this.r, this.g, this.b);
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.dia);
    pop();
  }
}
