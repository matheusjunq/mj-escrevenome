function setup() {
  createCanvas(600, 600);
  background("black");
}


function draw() {
  stroke("rgb(26,231,162)");
  fill("rgb(21,103,223)");
  
  if (mouseIsPressed){
    rect(mouseX, mouseY, 20, 30); 
  }
  
}
