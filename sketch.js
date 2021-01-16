var fixedRect, movingRect;
var go1,go2,go3,go4;
var r1,r2
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,50,80)
  r1=createSprite(100,0,50,50)
  r2=createSprite(100,400,50,50)
  r1.shapeColor="green"
r2.shapeColor="pink"
  r1.velocityY = 3;
  r2.velocityY = -3;
  fixedRect.shapeColor = "blue";
movingRect.shapeColor = "blue"

go1=createSprite(100,100,50,50)
go2=createSprite(200,100,50,50)
go3=createSprite(300,100,50,50)
go4=createSprite(400,100,50,50)
go1.shapeColor="orange"
go2.shapeColor="orange"
go3.shapeColor="orange"
go4.shapeColor="orange"
}

function draw() {
  background(0);
  edges = createEdgeSprites();
  r1.bounceOff(edges);
  r2.bounceOff(edges);
  movingRect.x = mouseX;
  movingRect.y=mouseY;
console.log(movingRect.x-fixedRect.x)

if(isTouching(go1,movingRect)){
  go1.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else{
  go1.shapeColor = "orange";
  movingRect.shapeColor = "blue"
}

if(isTouching(fixedRect,movingRect)){
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else{
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue"
}
 
bounceOf();
  drawSprites();
}

function isTouching(o1,o2){

  if(o1.x - o2.x < o2.width/2 + o1.width/2 &&
    o2.x - o1.x < o2.width/2 + o1.width/2 &&
    o1.y - o2.y < o2.height/2 + o1.height/2 &&
    o2.y - o1.y < o2.height/2 + o1.height/2){
    return true;
  }
  else{
    return false;
  }
}



