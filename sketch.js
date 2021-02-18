function setup() {
  createCanvas(800,400);
  abc=createSprite (400, 200, 50, 50);
  cba=createSprite (350,150,50,50);
  abc.shapeColor="red"
  cba.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  abc.x=mouseX
  abc.y=mouseY
  if(abc.x-cba.x<cba.width/2+abc.width/2
   && cba.x-abc.x<cba.width/2+abc.width/2 ){
     abc.shapeColor="green"
     cba.shapeColor="black"
   }
   else{
abc.shapeColor="red"
cba.shapeColor="blue"
   }
}