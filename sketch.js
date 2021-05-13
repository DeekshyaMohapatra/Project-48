var spaceShipImage;
var bgImage;
var spaceShip;
var alien,alienImage,alien2,alienImage2;
var laser,laserImage,laser2,laserImage2;
var earth,earthImage;
var asteroid,asteroidImage;
var buttonImage1,buttonImage2;
var button1,button2;
var laserSound1,laserSound2;
var asteroidSound;
var score=0
var des=0
var kill=0
var lives=3
var gameState="serve";
var nice,niceImage;
var good,goodImage;
var excellent,excellentImage;
var logo ,logoImage
var playButton,playButtonImage
var win,winImage;
var over,overImage;

function preload()
{
  bgImage=loadImage("SpaceBg.PNG");
  spaceShipImage=loadImage("plane.PNG");
  alienImage=loadImage("alien2.PNG");
  laserImage=loadImage("laser.PNG");
  laserImage2=loadImage("laser2.PNG");
  alienImage2=loadImage("alien1.PNG");
  earthImage=loadImage("Earth.PNG");
  asteroidImage=loadImage("asteroid.PNG");
  buttonImage1=loadImage("button1.PNG");
  buttonImage2=loadImage("button2.PNG");
  niceImage=loadImage("nice.PNG");
  goodImage=loadImage("good.PNG");
  excellentImage=loadImage("excellent.PNG");

  laserSound1=loadSound("laser.mp3")
  laserSound2=loadSound("Ast.mp3")
  asteroidSound=loadSound("laser2.mp3")
  logoImage=loadImage("logo-space.PNG")
  playButtonImage=loadImage("play.PNG");
  winImage=loadImage("you win.PNG");
  overImage=loadImage("gameOver.PNG");
}


function setup() {
  createCanvas(750, 900);

  
  
  spaceShip=createSprite(350,600,50,50)
  spaceShip.addImage(spaceShipImage);
  spaceShip.scale=0.3

  earth=createSprite(370,1250,50,50);
  earth.addImage(earthImage);
  earth.scale=1.5

  button1=createSprite(550,670,50,50);
  button1.addImage(buttonImage1);
  button1.scale=0.2;

  button2=createSprite(650,580,50,50);
  button2.addImage(buttonImage2);
  button2.scale=0.17;

  nice=createSprite(340,100,150,100);
  nice.addImage(niceImage);
  nice.scale=0.5
  nice.visible=false;

  good=createSprite(340,100,150,100);
  good.addImage(goodImage);
  good.visible=false;

  excellent=createSprite(340,100,150,100);
  excellent.addImage(excellentImage);
  excellent.scale=0.2
  excellent.visible=false;

  logo=createSprite(380,200,100,50)
  logo.addImage(logoImage)
  logo.scale=1.5

  win=createSprite(380,200,100,50)
  win.addImage(winImage);
  win.scale=1;

  over=createSprite(380,200,100,50);
  over.addImage(overImage);

  playButton=createSprite(350,750,50,50)
  playButton.addImage(playButtonImage)

  
  alienGroup = new Group();
  alienGroup2 = new Group();
  laserGroup=new Group();
  laserGroup2=new Group();
  asteroidGroup=new Group();
}

function draw() {
  background(bgImage);

  if(gameState==="serve")
  {
    textSize(25);
    fill("white")
    text("Earth is in Danger!,the aliens are planning to attack the earth!",40,400)
    text("There will be asteroids also coming towards the earth to destroy it", 7,450)
    text("You will have to save earth from this attack by killing the aliens",30,500)
    text("and by destroying the asteroids.You will have only 3 Lives",35,550)
    text("so be carefull and don't let the aliens and asteroids reach earth.",20,600)
    text("*Use Arrow Keys to move your spaceShip*",100,650)
    text("*Press on the buttons to fire*",190,700)
    textSize(30);
    fill("yellow")
    text("All The Best!",280,850)
    spaceShip.visible=false;
    earth.visible=false;
    button1.visible=false;
    button2.visible=false;
    win.visible=false;
    over.visible=false;

    if(mousePressedOver(playButton))
    {
      gameState="play"
    }
  }

  if(gameState==="play")
  {
    
    spaceShip.visible=true;
    earth.visible=true;
    button1.visible=true;
    button2.visible=true;
    logo.visible=false;
    playButton.visible=false;

    if(keyDown(LEFT_ARROW))
    {
      spaceShip.x = spaceShip.x-7;
    }
    
    if(keyDown(RIGHT_ARROW))
    {
      spaceShip.x=spaceShip.x+7;
    }
    
    if(mousePressedOver(button1))
    {
       createLaser2();
       laserSound1.play();
    }
    
    if(mousePressedOver(button2))
    {
       createLaser();
       laserSound2.play();
    }
    
    
    if(laserGroup.isTouching(alienGroup))
    {
     alienGroup.destroyEach();
     laserGroup.destroyEach();
     score=score+1;
     kill=kill+1
    }
    
    if(laserGroup.isTouching(alienGroup2))
    {
     alienGroup2.destroyEach();
     laserGroup.destroyEach();
     score=score+1;
     kill=kill+1
    }
    
    if(laserGroup.isTouching(asteroidGroup))
    {
     asteroidGroup.destroyEach();
     laserGroup.destroyEach();
     asteroidSound.play();
     score=score+1;
     des=des+1
    }
    
    if(laserGroup2.isTouching(alienGroup))
    {
     alienGroup.destroyEach();
     laserGroup2.destroyEach();
     score=score+1;
     kill=kill+1
    }
    
    if(laserGroup2.isTouching(alienGroup2))
    {
     alienGroup2.destroyEach();
     laserGroup2.destroyEach();
     score=score+1;
     kill-kill+1
    }
    
    if(laserGroup2.isTouching(asteroidGroup))
    {
     asteroidGroup.destroyEach();
     laserGroup.destroyEach();
     asteroidSound.play();
     score=score+1;
     des=des+1
    }
    

if(alienGroup.isTouching(earth))
{
  lives=lives-1;
  alienGroup.destroyEach();
}
if(alienGroup2.isTouching(earth))
{
  lives=lives-1;
  alienGroup2.destroyEach();
}
if(asteroidGroup.isTouching(earth))
{
  lives=lives-1
  asteroidGroup.destroyEach();
}


    if(score===5)
    {
     nice.visible=true;
    }
    
    if(score===6)
    {
      nice.visible=false;
    }
    
    if(score===10)
    {
      good.visible=true;
    }
    
    if(score===11)
    {
      good.visible=false;
    }
    
    if(score===15)
    {
      excellent.visible=true;
    }
    if(score===16)
    {
       excellent.visible=false;
    }

    if(score===25)
    {
      gameState="win";
    }

    if(lives===0)
    {
       gameState="over";
    }
    spawnAliens();
    spawnAliens2();
    spawnAsteroids()
    
    textSize(30);
    fill("white")
    text("Score:"+score,30,100);
    text("Asteroids Destroyed:"+ des,450,100);
    text("Aliens Killed:"+kill,550,50);
    text("lives remaining:"+lives,500,150)
  }

  if(gameState==="win")
  {
  fill("white")
  textSize(25)
  text("Well Done!,You have saved the earth from the attack of the aliens",7,450)
  text("Thank You!",250,500)
  win.visible=true;
  asteroidGroup.destroyEach();
  alienGroup.destroyEach();
  alienGroup2.destroyEach();
  spaceShip.visible=false;
  earth.visible=false;
  button1.visible=false;
  button2.visible=false;
  
  }

  if(gameState==="over")
  {
    fill("white");
    textSize(25)
    text("Ops! You lost!,you were unable to save the earth from the attack",7,550)
    textSize(35)
    text(":(",400,600)
    over.visible=true;
  spaceShip.visible=false;
  earth.visible=false;
  button1.visible=false;
  button2.visible=false;
  asteroidGroup.destroyEach();
  alienGroup.destroyEach();
  alienGroup2.destroyEach();
  }



  drawSprites();
}

function spawnAliens()
{
 if(frameCount%250===0)
 {
    alien=createSprite(350,20,60,60);
    alien.velocityY = 3.5
    alien.addImage(alienImage);
    alien.x=Math.round(random(20,600));
    alienGroup.add(alien);
 }
}
function spawnAliens2()
{
 if(frameCount%300===0)
 {
    alien2=createSprite(350,20,60,60);
    alien2.velocityY = 3 
    alien2.addImage(alienImage2);
    alien2.x=Math.round(random(20,600));
    alienGroup2.add(alien2);
 }
}

function spawnAsteroids()
{
 if(frameCount%350===0)
 {
    asteroid=createSprite(300,20,60,60);
    asteroid.scale=0.2;
    asteroid.velocityY = 2.5 
    asteroid.addImage(asteroidImage);
    asteroid.x=Math.round(random(20,600));
    asteroidGroup.add(asteroid);
 }
}

function createLaser()
{
  laser=createSprite(200, 470, 5, 50);
              laser.addImage(laserImage);
              laser.velocityY=-6;
              laser.x=spaceShip.x;
              laser.scale=0.3;
              laser.lifetime = 80;
              laserGroup.add(laser);
}

function createLaser2()
{
  laser2=createSprite(200, 470, 5, 50);
              laser2.addImage(laserImage2);
              laser2.velocityY=-6;
              laser2.x=spaceShip.x;
              laser2.scale=0.1;
              laser2.lifetime = 80;
              laserGroup2.add(laser2);
}