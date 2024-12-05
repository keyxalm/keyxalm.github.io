var ellipseX = 200;
var ellipseY = 100;

function setup() {
 // put setup code here
  createCanvas(displayWidth,displayHeight);
  background('purple');
}

function draw() {
  // put drawing code here
  
  if(mouseIsPresssed){
    rect(mouseX, mouseY,200,75);
  }
  else {
    ellipse(mouseX,mouseY,100,100);

  }
}
