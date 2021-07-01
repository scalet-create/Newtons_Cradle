const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var rope1; 
var rope2;
var rope3; 
var rope4; 
var rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob1_options={
		restitution:0.8
	}

	var bob2_options={
		restitution:0.8
	}

	var bob3_options={
		restitution:0.8
	}

	var bob4_options={
		restitution:0.8
	}

	var bob5_options={
		restitution:0.8
	}
	bob5=Bodies.circle(487,500,10,bob5_options);
	World.add(world,bob5);
	bob4=Bodies.circle(443,500,10,bob4_options);
	World.add(world,bob4);
	bob3=Bodies.circle(399,500,10,bob3_options);
	World.add(world,bob3);
	bob2=Bodies.circle(355,500,10,bob2_options);
	World.add(world,bob2);
	bob1=Bodies.circle(310,500,10,bob1_options);
	World.add(world,bob1);
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  

  //create ellipse shape for multiple bobs here
	ellipse(bob1.position.x,bob1.position.y,45);
	ellipse(bob2.position.x,bob2.position.y,45);
	ellipse(bob3.position.x,bob3.position.y,45);
	ellipse(bob4.position.x,bob4.position.y,45);
	ellipse(bob5.position.x,bob5.position.y,45);

	rope1=new rope1(bob1,roof,-80,0);
	rope2=new rope2(bob2,roof,-70,0);
	rope3=new rope3(bob3,roof,-60,0);
	rope4=new rope4(bob4,roof,-50,0);
	rope5=new rope5(bob5,roof,-40,0);
    display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);
		line (roof.position.x,roof.position.y,bob1.position.x,bob1.position.y);
     	line (roof.position.x,roof.position.y,bob2.position.x,bob2.position.y);
		line (roof.position.x,roof.position.y,bob3.position.x,bob3.position.y);
		line (roof.position.x,roof.position.y,bob4.position.x,bob4.position.y);
		line (roof.posiiotn.x,roof.position.y,bob5.position.x,bob5.position.y);
	}

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
  if(keyCode==RIGHT_ARROW){
    Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.9,y:0})
  }
}