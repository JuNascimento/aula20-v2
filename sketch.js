const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

let engine, world

let ball1
let ground

function setup() {
  createCanvas(400, 400)

  engine = Engine.create()
  world = engine.world

  rectMode(CENTER)
  ellipseMode(RADIUS)

  let ball1Options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  ball1 = Bodies.circle(100, 74, 20, ball1Options)
  World.add(world, ball1)

  let groundOptions = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 390, 400, 20, groundOptions)
  World.add(world, ground)
}

function draw() {
  background('black')

  Engine.update(engine)

  ellipse(ball1.position.x, ball1.position.y, 20, 20)

  fill('red')
  rect(ground.position.x, ground.position.y, 400, 20)
}
