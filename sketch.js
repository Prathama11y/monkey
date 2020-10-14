
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png",
                                "sprite_1.png",
                                "sprite_2.png",
                                "sprite_3.png",
                                "sprite_4.png",
                                "sprite_5.png",
                                "sprite_6.png",
                                "sprite_7.png",
                                "sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("stones.png");
 
}



function setup() 
{
createCanvas(600,200);
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  
  

  monkey.scale = 0.5;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
  

  
}


function draw() 
{
  drawSprite();

  
}






