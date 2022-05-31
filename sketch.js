
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    tomImg1 = loadAnimation("images/cat1.png")
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    tomImg3 = loadAnimation("images/cat4.png")
    jerryImg = loadAnimation("images/mouse1.png")
    jerryImg1 = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryImg2 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,670)
    tom.addAnimation("tomsitting",tomImg1)
    tom.scale = 0.3
    jerry = createSprite(100,670)
    jerry.addAnimation("jerry is standing",jerryImg)
    jerry.scale = 0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x <(tom.width - jerry.width)/2){
      tom.velocityX = 0
      tom.addAnimation("tomstanding",tomImg3)
      tom.changeAnimation("tomstanding")
      tom.scale = 0.3

      jerry.addAnimation("jerrysearching",jerryImg2)
      jerry.changeAnimation("jerrysearching")
      jerry.scale = 0.2
    }






    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5
    tom.addAnimation("tomrunning",tomImg2)
    tom.changeAnimation("tomrunning")

    jerry.addAnimation("jerryteasing",jerryImg1)
    jerry.frameDelay = 25
    jerry.changeAnimation("jerryteasing")



  }

  







}
