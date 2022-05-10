let bubbles = [];
let sound;
let amp;

let n = 0;
let d = 1;

function preload() {
  sound = loadSound("song2.mp3");
}
function setup() {
  let canvas=createCanvas(600, 600);
  canvas.parent("my-container");
  background(100);

  amp = new p5.Amplitude();
  angleMode(DEGREES);
}

function draw() {
  background(176, 245, 236,15);
  
  let level = amp.getLevel();
  let dia = map(level, 0.0, 1.0, 30, 700); // ***

  push();
  translate(width / 2, height / 2);
  rotate(frameCount);
  stroke(128, 102, 255);
  strokeWeight(2);
  noFill();
  
  let nSpeed = ((level * 100) ** 3) * 0.000005; // ***
  n += 0.001; //nSpeed; //0.01; // ***
  
  beginShape();
  for (let i = 0; i < 360; i++) {
    let k = i * d;
    let r = sin(n * k) * dia; //200 ***
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
  
  // BUBBLES
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].enlarge();
    bubbles[i].display();
  }
  while (bubbles.length > 100) {
    bubbles.splice(0, 1);
  }
}

function mousePressed() {
  bubbles.push( new Bubbles(mouseX, mouseY) );
  if (sound.isPlaying() == false) {
    sound.loop();
  } else {
    //sound.pause();
  }
}

class Bubbles {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dia = random(5, 10);
    this.vel = random(0.01, 0.03);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  move() {
    let xSpd = (width / 2 - this.x) * this.vel;
    let ySpd = (height / 2 - this.y) * this.vel;
    this.x += xSpd;
    this.y += ySpd;
  }
  enlarge() {
    this.dia *= 1.01;
    if (this.dia > 20) {
      this.dia = 20;
    }
  }
  display() {
    fill(this.r, this.g, this.b);
    noStroke();
    ellipse(this.x, this.y, this.dia, this.dia);
  }
}
