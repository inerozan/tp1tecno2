
let obra;

function setup() {
    createCanvas(windowWidth, windowHeight); 
    obra = new Obra();

  }
  
  function draw() {
    background(255);
    obra.dibujar();
    obra.cuadrado.calcularTodo(mouseX,mouseY);
  }