
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,base,box1
var box2,ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,695,800,100)
base=new Dustbin(650,655,200,20)
box1=new Dustbin2(550,600,20,100)
box2=new Dustbin2(750,600,20,100)
ball=new Paper(50,550,40)
ball.X=50
ball.Y=550
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  base.display()
  box1.display()
  box2.display()
  
  ball.display()
 
  drawSprites();
 
}

  




