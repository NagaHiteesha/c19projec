var bullet, wall, speed, weight,thickness;

function setup() {
  createCanvas(1600,400);
  
  thickness= random (22,83);
  
  speed = random(223,);
  weight = random(30,52);
  

  wall = createSprite(1200,200,thickness,100);
  bullet = createSprite(50, 200, 50, 10);
  
  bullet.velocityX = speed;


  
}

function draw() {
  background("black");  

  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
      bullet.velocityX = 0;

      var deformation = 0.5 * weight * speed * speed/22500;
      if(deformation > 180){
      bullet.shapeColor = "white";
      
    }
    if(deformation < 180 && deformation > 100){
      bullet.shapeColor = "white";
    
    }
    if(deformation < 100){
      bullet.shapeColor = "white";
      
    }
  }
if(hascollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)

if(damage>10){
  wall.shapeColor="red"
}
if(damage<10){
  wall.shapeColor="green"
}

}

  drawSprites();
}

function hascollided(bullet1,wall1){
bulletRightEdge = bullet1.x+bullet1.width;
wallLeftEdge = wall1.x;
if(bulletRightEdge>=wallLeftEdge){
return true
}
return false
}