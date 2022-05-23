var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var StartBlock
var gameState = "play"
var lives, gameOver

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

doorsGroup = new Group();
climbersGroup = new Group();
invisibleBlockGroup = new Group();

ghost = createSprite (300,550);
ghost.addImage("ghost", ghostImg);
ghost.scale = 0.25

StartBlock = createSprite (300,590);
StartBlock.height = 3;
StartBlock.width = 5;
StartBlock.visible = false

lives = 1
}

function draw() {
  background(200);
  drawSprites()
textSize (20);

if(gameState == "play"){

  if(keyDown(UP_ARROW)){
StartBlock.destroy();
  }

  if(ghost.isTouching(invisibleBlockGroup)|| ghost.y > 600 || ghost.y < 0) {
  gameState = "END";
  }


  if(keyDown(UP_ARROW)&& ghost.y >= 100) {
    ghost.velocityY = -13;
  }
  
  if(keyDown(RIGHT_ARROW)){
  ghost.x = ghost.x + 3
  }
  
  if(keyDown(LEFT_ARROW)){
    ghost.x = ghost.x + -3
  }
  
    //gravidade
  ghost.velocityY = ghost.velocityY + 0.5

  ghost.collide(StartBlock)


  Door();
  if(tower.y > 400){
   tower.y = 300
 }
}

else if(gameState = "END"){
  fill("red");
  stroke("red");
  text("FIM DO JOGO",300,300)
  noFill();
  noStroke();

 ghost.setLifetimeEach(-1);
 climbersGroup.setLifetimeEach(-1);
 doorsGroup.setLifetimeEach(-1);
 invisibleBlockGroup.setLifetimeEach(-1);

 tower.velocityY = 0
 ghost.velocityY = 0
 climbersGroup.setVelocityYEach (0)
 doorsGroup.setVelocityYEach (0)
 invisibleBlockGroup.setVelocityYEach (0)
}
}
function Door(){

if (frameCount % 200 == 0){

door = createSprite(Math.round(random(150,450)),-50);
door.addImage("door",doorImg);
door.velocityY = 2;
doorsGroup.add(door);
climber = createSprite(door.x,0);
climber.addImage("climber",climberImg);
climber.velocityY = 2;
climbersGroup.add(climber);
invisibleBlock = createSprite(door.x,5,climber.width,2);
invisibleBlock.velocityY = 2;
invisibleBlock.visible = false
invisibleBlockGroup.add(invisibleBlock);

door.depth = ghost.depth;
climber.depth = ghost.depth;
ghost.depth = ghost.depth + 1;

door.debug = true;
climber.debug = true;
invisibleBlock.debug = true;
}
}

//FEITO adicionar imagem das portas e do cliber, 
//dar chão invisivel propriedade,
//arrumamr profundidade da porta e ghost (trex),
//FEITO Adicinar tempo de vida
//Adicinar cada um em seu proprio grupo
//FEITO declarar var para StrarBlock
//FEITO(draw) adicinar if else - if stado do jogo = play - abre chave - tudo dentro do play
//FEITO textinho game over
//FEITO movimentação do fantasma, setas 
//FEITO space button para pular
//ACREDITO QUE FEITO fazer gravidade
//FEITO morred se tocar bloco invisivel ou sumir da tela, ghost morre
//FEITO criar apoio de bloco para ghost
