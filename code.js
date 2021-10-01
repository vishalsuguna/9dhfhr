var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7317235f-2ddd-4a51-aab0-6d2b07d70103","1e48fe09-3ff7-4a9e-90d4-8737fc004071","f06ce2a7-0b26-4b2d-a8d5-faedf5b146bc","7c3c3fb6-7b12-4b9d-8418-2824365bc4fa","13379419-35fc-419e-8c45-00d1396158f6","2e777c43-a982-4eb6-9cab-709f8cafdcdb","e46df3a7-53ab-44ae-8436-67b4d52fe828","03438c2a-de7f-44f9-9eae-61327af75300","2d22a5ca-da57-4062-8a44-fb5176047d23"],"propsByKey":{"7317235f-2ddd-4a51-aab0-6d2b07d70103":{"name":"puck_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png","frameSize":{"x":393,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png"},"1e48fe09-3ff7-4a9e-90d4-8737fc004071":{"name":"huir 1","sourceUrl":"assets/api/v1/animation-library/gamelab/6vdPBjuQA1qiusB.UAeJqiz3VmdS9JVy/category_video_games/sword1.png","frameSize":{"x":278,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"6vdPBjuQA1qiusB.UAeJqiz3VmdS9JVy","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6vdPBjuQA1qiusB.UAeJqiz3VmdS9JVy/category_video_games/sword1.png"},"f06ce2a7-0b26-4b2d-a8d5-faedf5b146bc":{"name":"word_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PcUUrB8GsrN5vA93zZIOuA8ed_9zCB4T/category_video_games/gameplayobject_sword_01.png","frameSize":{"x":306,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"PcUUrB8GsrN5vA93zZIOuA8ed_9zCB4T","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PcUUrB8GsrN5vA93zZIOuA8ed_9zCB4T/category_video_games/gameplayobject_sword_01.png"},"7c3c3fb6-7b12-4b9d-8418-2824365bc4fa":{"name":"sword_03_","sourceUrl":"assets/api/v1/animation-library/gamelab/6xBlLV4TLpF1LqlpPDG1e.UAwjoVHYCv/category_video_games/gameplayobject_sword_03.png","frameSize":{"x":270,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"6xBlLV4TLpF1LqlpPDG1e.UAwjoVHYCv","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":270,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6xBlLV4TLpF1LqlpPDG1e.UAwjoVHYCv/category_video_games/gameplayobject_sword_03.png"},"13379419-35fc-419e-8c45-00d1396158f6":{"name":"gameplayobject_sword_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PcUUrB8GsrN5vA93zZIOuA8ed_9zCB4T/category_video_games/gameplayobject_sword_01.png","frameSize":{"x":306,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"PcUUrB8GsrN5vA93zZIOuA8ed_9zCB4T","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PcUUrB8GsrN5vA93zZIOuA8ed_9zCB4T/category_video_games/gameplayobject_sword_01.png"},"2e777c43-a982-4eb6-9cab-709f8cafdcdb":{"name":"tem_02_","sourceUrl":"assets/api/v1/animation-library/gamelab/O9uAMYqe0KUJeBPN45TFf9K2tDdk2uLF/category_video_games/gameplayobject_item_02.png","frameSize":{"x":384,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"O9uAMYqe0KUJeBPN45TFf9K2tDdk2uLF","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/O9uAMYqe0KUJeBPN45TFf9K2tDdk2uLF/category_video_games/gameplayobject_item_02.png"},"e46df3a7-53ab-44ae-8436-67b4d52fe828":{"name":"bg1","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"03438c2a-de7f-44f9-9eae-61327af75300":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"},"2d22a5ca-da57-4062-8a44-fb5176047d23":{"name":"textGetReady_1","sourceUrl":"assets/api/v1/animation-library/gamelab/plOmgtOBGPyQ.xCGlkLSCQ8RzDoTR3LI/category_video_games/textGetReady.png","frameSize":{"x":400,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"plOmgtOBGPyQ.xCGlkLSCQ8RzDoTR3LI","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/plOmgtOBGPyQ.xCGlkLSCQ8RzDoTR3LI/category_video_games/textGetReady.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var playerMallet;

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");

//variable to store different state of game
var gameState = "serve";

// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";



// creating objects and giving them colours
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";
striker.setAnimation("tem_02_")
striker.scale=0.1

var playerMallet = createSprite(200,60,50,10);
playerMallet.shapeColor = "black";
playerMallet.setAnimation("word_01_1")
playerMallet.scale= 0.2



var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";
computerMallet.setAnimation("sword_03_")
computerMallet.scale= 0.2


//score variables
var playerScore=0;
var compScore=0;

function draw() {
  //clear the screen
  background("red");

if (striker.isTouching(computerMallet)|| striker .isTouching(playerMallet)) 
{
  playSound("win3.mp3")
}













  
  if(gameState=="serve")
  {
         //display text
      textSize(18);
      fill ("green");
      //Add the text “Press Space to Strike” 
      text("press ENTER to striker",120,180);
      
      //serve the striker when space is pressed
      if (keyDown(ENTER)) 
      {
    
         serve();
         gameState="play";
      }
      
     
  }
  
  
 
  
  //display scores
  textSize(18);
  fill("green");
  text(compScore, 25,225);
  text(playerScore,25,185);
  
  // Score
  
     if(striker.isTouching(goal1))
      { 
        compScore = compScore + 5;
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
      
      if(striker.isTouching(goal2))
      {
        playerScore = playerScore + 5;
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
   
      if(playerScore==5|| compScore==5)
      {
        fill("green");
        textSize(18);
        text("Game Over!",170,160);
      }
 
 
  
  //make the player paddle move with the Arrow keys
  
   playerMallet.x=World.mouseX 
  
  //AI for the computer paddle
  //make it move with the striker's y position
  computerMallet.x = striker.x;

  
  //draw line at the centre
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //create edge boundaries
  //make the striker bounce with the top and the bottom edges
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);

  
  
 
  drawSprites();
}



























function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}


 
 
  


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
