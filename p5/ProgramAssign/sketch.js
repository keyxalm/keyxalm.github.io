let squareX, squareY;

function setup() {
 // put setup code here
  createCanvas(900,900);

  squareX = width / 2;
  squareY = height / 2; 
  
}

function draw() {
  // put drawing code here
  background('blue');
  rectMode(CENTER);
  fill(100,150,255);
  rect(squareX, squareY,100,100);
}

  function keyPressed() {
    if(key ==='k' || key === 'K') {
  squareX = random(50, width - 50);
  squarY = random(50, height - 50);

}


  }


  
  