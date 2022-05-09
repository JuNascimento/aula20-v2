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

  let bolaOpcoes = {
    restitution: 0.95
  }

  bola = Bodies.circle(100, 200, 25, bolaOpcoes)
  World.add(mundo, bola)
  console.log("essa é a bola", bola)

  let opcoesChao = {
    isStatic: true
  }

  chao = Bodies.rectangle(200, 395, 400, 10, opcoesChao)
  World.add(mundo, chao)
}

function draw() {
  background('black')

  Engine.update(motor)

  fill('red')
  ellipse(bola.position.x, bola.position.y, 25, 25)

  fill('green')
  rect(chao.position.x, chao.position.y, 400, 10)
}
