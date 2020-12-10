var car1,car2,car3
var wall1;
var speed,speed1,speed2;
var weight,weight1,weight2;
function setup() {
  createCanvas(1600,500);

  weight=random(400,1500);
  weight1=random(800,2000);
  weight2=random(300,1200);

  speed=random(15,30);
  speed1=random(15,30);
  speed2=random(15,30);

  car1=createSprite(50, 130, 25, 25);
  car1.velocityX=speed;
  car1.weight=weight;

  car2=createSprite(50, 250, 25, 25);
  car2.velocityX=speed1;
  car2.weight1=weight1;

  car3=createSprite(50, 370, 25, 25);
  car3.velocityX=speed2;
  car3.weight2=weight2;

  wall=createSprite(1550,250,15,400);
  wall.shapeColor=('silver');
}

function draw() {
  background('red');

  fill('yellow');
  rect(0,310,1550,4);
  rect(0,200,1550,4);
  rect(0,415,1550,4);
  rect(0,90,1550,4);

  fill('white');
  textSize(20);
  text('Platinex',100,190);
  text('Trossard',100,405);
  text('Sylvia',100,300);

  textSize(40);
  text('Car Reliability Test',100,55);

  if (wall.x-car1.x < (car1.width+wall.width)/2){
    var deformation=0.5 * weight * speed * speed/22509;
    car1.velocityX=0;
    
    if (deformation>40){
      car1.shapeColour = color('pink');
    }
  
    if (deformation<40 && deformation>15){
      car1.shapeColor=color('darkblue');
    }
  
    if (deformation<15){
     car1.shapeColor=color('yellow');
    }
    }

    if (wall.x-car2.x < (car2.width+wall.width)/2){
      var deformation1=0.5 * weight1 * speed1 * speed1/22509;
      car2.velocityX=0;
      
      if (deformation1>40){
        car2.shapeColour = color('pink');
      }
    
      if (deformation1<40 && deformation1>15){
        car2.shapeColor=color('darkblue');
      }
    
      if (deformation1<15){
       car2.shapeColor=color('yellow');
      }
      }

      if (wall.x-car3.x < (car3.width+wall.width)/2){
        var deformation2=0.5 * weight2 * speed2 * speed2/22509;
        car3.velocityX=0;
        
        if (deformation2>40){
          car3.shapeColour = color('pink');
        }
      
        if (deformation2<40 && deformation2>15){
          car3.shapeColor=color('darkblue');
        }
      
        if (deformation2<15){
         car3.shapeColor=color('yellow');
        }
      
        }

  drawSprites();
}