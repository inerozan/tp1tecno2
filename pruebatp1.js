let obra = [];
let imagenes = []; //carga de los trazos

function preload(){
  for(let i = 0; i<21 ; i++){
      imagenes[i] = loadImage("data/trazo"+ i +".png");
  }
}

function setup() {
    createCanvas(800, 600);
    console.log ('over:', obra.over);
    for (let r = 0; r <30; r++){
      obra.push(new Obra(imagenes));
    }
}
  
function draw() {
  background(180);
  for (let i = 0; i<obra.length; i++){
    obra[i].dibujar();
  }
  //zona donde tendrian que dibujarse los trazos
  rectMode (CENTER);
  noFill();
  rect (width/2, height/2, 300, 50);
}