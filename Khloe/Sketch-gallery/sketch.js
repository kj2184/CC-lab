let x,y,dia
function setup() {

  let canvas=createCanvas(400, 400);
  canvas.parent("my-container");
background(0)
rectMode(CORNER)
  
   
}


function draw() {
   x=frameCount
  y=frameCount
{
  push();
  translate(150, 100);
  rotate(radians(frameCount*10));
  
  
stroke(255,255,50,150)
  noFill()
 circle(x, y, 30)
  pop();
  }
}
  

  // YOUR CODE HERE
  // .. variables that accumulate values
  // .. loops
  // .. transformations
  // .. conditionals
  // .. randomness
  
  //saveCanvas('yourname', 'png');
