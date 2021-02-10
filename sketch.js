
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;

var engine, world;

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;
	

  
  ground = new Ground(400,650,4000,25);

  paperObject  = new Paper(100,200,25);

  
	box1 = new Box(1520,588,100,PI);
	box2 = new Box(1580,628,100,PI/2);
	box3 = new Box(1640,588,100,PI);


//	Engine.run(engine);
  
}


function draw() {
  background(200);

  Engine.update(engine);


  paperObject.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();


  text(mouseX + "," + mouseY, mouseX,mouseY)

  keyPressed();

}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:5,y:-5});
  }
}


