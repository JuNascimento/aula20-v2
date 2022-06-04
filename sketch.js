const Engine = Matter.Engine  
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

let motor, mundo

let bola, chao

function setup() {
  createCanvas(400, 400)

  ellipseMode(RADIUS)
  rectMode(CENTER)

  motor = Engine.create()
  mundo = motor.world

  var opcoesBola = {
    restitution: 1.5
  }

  bola = Bodies.circle(200, 200, 25, opcoesBola)
  World.add(mundo, bola)

  var opcoesChao = {
    isStatic: true
  }
  
  chao = Bodies.rectangle(200, 395, 400, 10, opcoesChao)
  World.add(mundo, chao)
}

function draw() {
  background('black')

  Engine.update(motor)

  fill('blue')
  ellipse(bola.position.x, bola.position.y, 25 ,25)

  fill('red')
  rect(chao.position.x, chao.position.y, 400, 10)
}
