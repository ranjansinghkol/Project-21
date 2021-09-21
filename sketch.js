const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ground, binLeft, binRight, ball;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ground = new Wall(width / 2, 350, width, 20);

	binLeft = new Wall(600, 315, 10, 75);
	binRight = new Wall(725, 315, 10, 75);

	ball = Bodies.circle(125, 100, 20, ball_options);
	World.add(world, ball);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);

	push();
	fill(255, 0, 0);
	text("Click to Apply Force", 20, 20);
	pop();

	ground.show();
	binLeft.show();
	binRight.show();

	push();
	fill(255);
	noStroke();
	ellipse(ball.position.x, ball.position.y, 20, 20);
	pop();

	drawSprites();
}

function mouseClicked() {
	Matter.Body.applyForce(ball, {x: ball.position.x, y: ball.position.y}, {x: 105, y: 118});
}
