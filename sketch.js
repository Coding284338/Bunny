var garden,rabbit;
var gardenImg,rabbitImg;
var appleImage;
var appleSprite;
var L1;
var L2;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  L1 = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  createApples();
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  drawSprites();
  createLeaves();
}
function createApples()
{
if(World.frameCount%60 == 0)
  {
    var appleSprite = createSprite(400,0,20,20);
    appleSprite.lifetime = 200
    appleSprite.velocityY = 5;
    appleSprite.x = random(50,300);
    appleSprite.scale = 0.07  ;
    appleSprite.addAnimation("apples",appleImage);
  }
}
function createLeaves()
{
  if(World.frameCount%60 == 0)
  {
    var L2 = createSprite(400,0,20,20);
    L2.velocityY = 5;
    L2.x = random(50,300);
    L2.scale = 0.07  ;
    L2.addAnimation("apple",L1);
  }
}