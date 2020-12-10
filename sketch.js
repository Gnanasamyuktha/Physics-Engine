const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground;

function setup() {
  var canvas = createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options = {
    isStatic : true
  }
  ground=Bodies.rectangle(200,390,50,50,ground_options);
  World.add(world,object);
  console.log(ground.position.x);
  console.log(ground.position.y);
  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  drawSprites();
}