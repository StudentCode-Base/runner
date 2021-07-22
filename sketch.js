var path,pathImg
var runner,runnerAnm
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  runnerAnm=loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg)
runner=createSprite(200,360)
runner.addAnimation("runner",runnerAnm)
runner.scale=0.08
path.velocityY=8

}

function draw() {
  background(0);
  if (path.y>400){
    path.y=height/2

  }
  runner.x=mouseX
drawSprites()
}
