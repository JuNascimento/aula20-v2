const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

let motorFisico, mundo

let bola1, bola2
let chao

function setup() {
  createCanvas(400, 400)

  motorFisico = Engine.create()
  mundo = motorFisico.world

  rectMode(CENTER)
  ellipseMode(RADIUS)

  bola1 = Bodies.circle(100, 74, 20)
  World.add(mundo, bola1)

  bola2 = Bodies.circle(100, 300, 50)
  World.add(mundo, bola2)

  let opcoes = {
    isStatic: true
  }

  chao = Bodies.rectangle(200, 390, 400, 20, opcoes)
  World.add(mundo, chao)
}

function draw() {
  background('black')

  Engine.update(motorFisico)

  ellipse(bola1.position.x, bola1.position.y, 20, 20)
  ellipse(bola2.position.x, bola2.position.y, 50, 50)

  fill('red')
  rect(chao.position.x, chao.position.y, 400, 20)
}
