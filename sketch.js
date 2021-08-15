const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground,platform;
var cat;
var slingshot;



var gameState = "start";



function preload(){
  bg1 = loadImage("images/underwater.png");
  start = loadImage("images/start.png");
  bg2 = loadImage("images/background.jpg");

}




function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  playButton = createSprite(600,300,100,50);
  playButton.addImage(start);
  playButton.scale = 0.3
  playButton.visible = false;

  ground = new Ground(600,height-1,1200,10);
  platform = new Ground(100,300,300,100);

  cat = new Cat(200,60);

  slingshot = new Slingshot(cat.body,{x : 200, y : 60 });
}

function draw() {
  background(bg1); 

  Engine.update(engine);

  if(gameState === "start"){
    push()
    textSize(45);
    fill("green");
    strokeWeight("10")
    textFont("forte") 
    text("Welcome to FISH HUNT",400,50);
    pop();
 
    push()
    textSize(25);
    fill("red");
    textFont("kristen itc");
    text("There is  a cat named Rio and he is very hungry.",100,100);
    text("After a long search he finds a pond in which there were many fishes.",100,140);
    text("He thinks that he’ll take the help of a catapult to eat the fishes ",100,180);
    text("But if he fails to eat the fish his one of his lives will be reduced!!! &" ,100,220);
    text("he will get less chances to satisfy his hunger" ,100,260);
    pop();

    playButton.visible = true;

    if(mousePressedOver(playButton)){
      gameState = "play";
      
    }
      
  }

  if (gameState === "play"){
      background(bg2)
      playButton.visible = false;
      ground.display();
      platform.display();
      cat.display();
      slingshot.display();
  }




  drawSprites();
}

function mouseDragged(){
    if(gameState === "play"){
      Matter.Body.setPosition(cat.body,{x : mouseX, y : mouseY})
    }
}

/*function mouseReleased(){
  
  //console.log("hi")
  if(gameState === "play"){
    slingshot.fly();

  }
}*/