
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 30;
	var posX = width/2;
	var posY = height/4 + 200;
	//Create the Bodies Here.

	roof = new Roof(270,20,270,20);

	bob1 = new Bob(310,300,30);
	rope1 = new Rope(bob1.body,roof.body,bobDiameter*0.1,100);

	bob2 = new Bob(330,300,30);
	rope2 = new Rope(bob2.body,roof.body,bobDiameter*2,100);

	bob3 = new Bob(390,300,30);
	rope3 = new Rope(bob3.body,roof.body,bobDiameter*3.8,100);
	
	bob4 = new Bob(450,300,30);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*5.7,100);

	bob5 = new Bob(505,300,30);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*7.7,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
 
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:-150})
	}  
 }

