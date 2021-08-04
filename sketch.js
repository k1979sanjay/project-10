var seaimage,shipimage1;
var sea;
var ship;
function preload(){
seaimage=loadImage("sea.png")
shipimage1=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
   sea=createSprite(400,200)
   sea.addImage(seaimage)
   sea.scale=0.3
sea.velocityX=-3
   ship=createSprite(150,200,40,40)
   ship.addAnimation("moving",shipimage1)
   ship.scale=0.3
}

function draw() {
  background("blue");
  if(sea.x<0){
sea.x=400

  }
 drawSprites()
}
