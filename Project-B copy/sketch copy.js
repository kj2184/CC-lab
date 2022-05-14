let buttons = [];
let sounds = [];

function preload() {
  sounds[0] = loadSound("rainy.mp3");
  sounds[1] = loadSound("nature.mp3");
  sounds[2] = loadSound("nature.mp3");
  sounds[3] = loadSound("rainy.mp3");
  sounds[4] = loadSound("nature.mp3");
  sounds[5] = loadSound("nature.mp3");
  sounds[6] = loadSound("nature.mp3");
  sounds[7] = loadSound("rainy.mp3");
  sounds[8] = loadSound("rainy.mp3");
  sounds[9] = loadSound("nature.mp3");
  sounds[10] = loadSound("rainy.mp3");
  sounds[11] = loadSound("rainy.mp3");
  sounds[12] = loadSound("nature.mp3");
  sounds[13] = loadSound("nature.mp3");
  sounds[14] = loadSound("nature.mp3");
  sounds[15] = loadSound("rainy.mp3");
}

function setup() {
  let canvas=createCanvas(400, 400);
  canvas.parent("my-container");
  background(50);

  let gridSize = 100;
  let btnSize = 25;
  let sndIndex = 0;
  for (let y = 40; y < height; y += gridSize) {
    for (let x = 40; x < width; x += gridSize) {
      buttons.push(new Button(x, y, btnSize, sounds[sndIndex]));
      sndIndex++;
    }
  }
}

function draw() {
  background(	255, 180, 204);

  for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.checkMouse();
    btn.display();
    if (btn.selection == true) {
      //console.log("index: " + i);
      //console.log("X: " + buttons[i].x);
      //console.log("Y: " + buttons[i].y);
    }
  }
}

class Button {
  constructor(x, y, rad, sndRef) {
    // position
    this.x = x;
    this.y = y;
    this.rad = rad;

    // color
    this.r = 255;
    this.g = 255;
    this.b = 255;
    
    // sound
    this.sound = sndRef;
    
    //
    this.selection = false;
  }
  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.rad) {
      // mouse is in the area
      this.r = 255;
      this.g = 255;
      this.b = 0;
      if (mouseIsPressed) {
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        
        // trigger sound!
        if (this.sound.isPlaying() == false) {
          this.sound.play();  
        }
        
        this.selection = true;
      }
    } else {
      // mouse is out of the area
      this.r = 255;
      this.g = 255;
      this.b = 255;
      this.selection = false;
    }
  }
  display() {
    push();

    noStroke();
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.rad*2);

    pop();
  }
}
