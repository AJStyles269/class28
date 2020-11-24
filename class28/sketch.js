const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2,pig1;
var bg;

function preload(){
    bg=loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

ground=new Ground(600,390,1200,20);
platform=new Ground(150,300,300,200);
    box1=new Box(700,320,70,70);
    box2 =new Box(920,320,70,70);
    box3 =new Box(700,240,70,70);
    box4 =new Box(920,240,70,70);
    box5 =new Box(810,160,70,70);
   pig1=new Pig(810,380);
   pig2=new Pig(810,220);
   log1=new Log(810,260,300,PI/2);
   log2=new Log(810,180,300,PI/2);
   log3=new Log(760,120,150,PI/7)
   log4=new Log(870,120,150,-PI/7) 
  // log5=new Log(70,100,50,PI/2) 
   bird=new Bird(200,200);
   slingshot=new Slingshot(bird.body,{x:200,y:100})
   console.log(ground);
}

function draw(){
    background(bg);
    Engine.update(engine);
   
   box1.display();
   box2.display();
   ground.display();
   platform.display();
   pig1.display();
   log1.display();
   box3.display();
   box4.display();
   pig2.display();
   log2.display();
   box5.display();  
   log3.display();
   log4.display();
   //log5.display();
   bird.display();
   slingshot.display();
}
function mouseDragged (){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot.fly()
}

