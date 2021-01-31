var Balloon;
var database,height,bg;

function preload() {

bgimg=loadImage("Hot Air Ballon-01.png")
balloonimg=loadAnimation("Hot Air Ballon-02.png")
balloonimg2=loadAnimation("Hot Air Ballon-03.png","Hot Air Ballon-04.png ")

}


function setup() {
  createCanvas(1000,1200);
 database=firebase.database();

  Balloon=createSprite(200, 930, 50, 50);
  Balloon.addAnimation("moveballoon",balloonimg)
  var locob=database.ref('balloon/position');
    locob.on("value",readop,showerror)
  
}

function draw() {
  background(bgimg);  
  text("USE ARROWS TO MOVE",10,200)

  if(keyDown(LEFT_ARROW)){

        Balloon.x=Balloon.x-10;
    }
     else if(keyDown(RIGHT_ARROW)){
       // Balloon.x=Balloon.x+10;
       writePosition(5,0);
     }
     else if(keyDown(UP_ARROW)){
     // Balloon.y=Balloon.y-10;
        writePosition(5,-10);
        Balloon.changeAnimation("moveballoon",balloonimg2);
        Balloon.scale=Balloon.scale-0.010
     }
     else if(keyDown(DOWN_ARROW)){
        Balloon.y=Balloon.y+10;
        Balloon.changeAnimation("moveballoon",balloonimg2);
        Balloon.scale=Balloon.scale+0.010
     }













  drawSprites();
}
function writePosition(x,y){
     database.ref('balloon/position').set(
         {'x':height.x+x,
            'y':height.y+y}
         )
    // Balloon.x = ball.x + x;
    // Balloon.y = ball.y + y;
 }
 function readop(data){
     height=data.val()
     console.log(height.x);
    // Balloon.x=height.x
    // Balloon.y=height.y
 }
 function showerror(){
 console.log("error")
 
 
 }