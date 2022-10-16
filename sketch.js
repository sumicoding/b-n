var apple,bg,box,coin,spike2,ground,spike,invisibleGround,score;
var appleImg,spike2Img,bgImg,boxImg,coinImg,groundImg,spikeImg;

function preload(){
appleImg = loadImage("apple.png");
  bgImg = loadImage("bg.jpg");
  boxImg = loadImage("box.png");
  coinImg = loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png","coin7.png","coin8.png","coin9.png","coin10.png");
  groundImg = loadImage("ground.jpg");
  spikeImg = loadImage("spike.png");
  spike2Img = loadImage("spike2.png");
 

}


function setup() {
  createCanvas(1280,600);

 

  bg=createSprite(630,300,1280,600)
  bg.addImage(bgImg)
  bg.scale=2.3

  box=createSprite(90, 355, 50, 50);
  box.addImage(boxImg);
  box.scale=0.6

  ground=createSprite(840,927,1380,300)
  ground.addImage(groundImg)
  ground.scale=3

  invisibleGround=createSprite(640,537,1380,300)
  box.debug=true
  

 box.setCollider("rectangle",-45,0,100,100)
  
}

function draw() {
  background("lightGrey");  

if(keyDown("space")){
  box.velocityY = box.velocityY - 2
  coin.velocityX=-7
 
}

box.velocityY = box.velocityY + 0.4;
box.collide(invisibleGround)
box.depth=box.depth+1

spike();
coin()




  drawSprites();
}

function spike() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var spike = createSprite(1280,40,50,50);
    spike.y = Math.round(random(340,340));
    spike.addImage(spikeImg);
    spike.scale = 0.2;
    spike.velocityX = -7;
    spike.lifeTime=100
  }
}

function coin(){
  if (frameCount % 200 === 0) {
    var coin = createSprite(1280,40,50,50);
    coin.y = Math.round(random(340,340));
    coin.addAnimation(coinImg)
    coin.scale = 0.4;
    coin.velocityX = -7;
    coin.lifeTime=100
  }
}




