let sound;
let color="#ffff99"

let popArray = [];
let listOfColors = ['#FF6BC7',
                    '#CE5DDE',
                    '#BB73F5',
                    '#39ffbe',
                    '#40c05f'
                  ];

function setup() {
  let canvas=createCanvas(600, 600);
  canvas.parent("my-container");
  strokeWeight(3);
}

function preload() {
  sound = loadSound("beat.mp3");
}
function mousePressed() {
   
  sound.play();
    
  let objectSize = 10;
  let selArray = parseInt(random(5));
  let speedX = random(-3, 3);
  let speedY = random(-3, 3);

  popArray.push(new Pop(mouseX, mouseY, speedX, speedY, objectSize, listOfColors[selArray]));
}




function draw() {
  background(color);
  let volValue = map(mouseY, 0, height, 1.0, 0.0, true);
  sound.setVolume(volValue);
  
  let panValue = map(mouseX, 0, width, -1.0, 1.0, true);
  sound.pan(panValue);
  
  for (let i=0; i<popArray.length; i++){
   
    popArray[i].move();
    
    popArray[i].popCheck(popArray.slice(i));
   
    popArray[i].display();
  }
}



class Pop{
  constructor(x, y, speedX, speedY, size, col){
    
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size/4;

    this.col = col;
    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = 255;
    this.distRand = random(50, 300);
  }

 
  move(){
    
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }
  
 
  popCheck(objects) {
    objects.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis < 70) {
        let aStroke = random(0, 0.5);
        stroke(this.col);
        strokeWeight(2);
        line(this.x,this.y,element.x,element.y);
      }
    });
  }

  display(){
   
   
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, 10, 10);
     noStroke();
    fill(this.col);
    rect(this.x,this.y,10,5)
//rotateX(frameCount * 0.01);
//  rotateZ(frameCount * 0.02);
 // cone(40, 70);
  }
}