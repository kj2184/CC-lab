let x,y,dia
function setup() {
  let canvas=createCanvas(400, 400);
  canvas.parent("my-container");
background(232, 177, 219)
rectMode(CORNER)
  
   
}


function draw() {
   x=frameCount
  y=frameCount
{
  push();
  translate(100, 100);
  rotate(radians(frameCount*20));
  
  
stroke(255)
  noFill()
 circle(x, y, 20)
  pop();
  }
}
  

 
