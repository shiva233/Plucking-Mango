
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy, boyIMG

function preload()
{
	
	boyIMG = loadImage("sprites/boy.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree1 = new Tree(700,350);

	ground1 = new Ground(width/2,600);

	stone1 = new Stone(230,400,100);

	//boy = createSprite(300,400,20,20);
	//boy.addImage(boyIMG);

	mango1 = new mango(630,290,50);
	mango2 = new mango(690,220,50);
	mango3 = new mango(700,290,50);
	mango4 = new mango(790,290,50);
	
	sling1 = new Slingshot(stone1.body,{x:238,y:330})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
	tree1.display();

	ground1.display();

	

	image(boyIMG, 200, 200, 200, 500);

	stone1.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();

	sling1.display();

	detectCollision(stone1,mango1);
	detectCollision(stone1,mango2);
	detectCollision(stone1,mango3);
	detectCollision(stone1,mango4);




  drawSprites();
  text(mouseX +"," + mouseY,mouseX,mouseY);
}


function mouseDragged(){

    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

    sling1.fly();

}

function detectCollision(mango,stone){

	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone.r)
	{
		Matter.Body.setStatic(mango.body,false);
	}



}