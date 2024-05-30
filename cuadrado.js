class Cuadrado {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.vel;

    }

    calcularTodo(mi_X, mi_Y) {
        this.prevPosX = this.posX;
        this.prevPosY = this.posY;
        this.posX = mi_X;
        this.posY = mi_Y;

        this.vel = dist(this.posX, this.posY, this.prevPosX, this.prevPosY);

    }

    velocidad() {
        return this.vel;
    }

    dibujar() {

        this.opacidad = map(mouseY, 0, height, 0, 255); //de arriba a abajo
        this.lineaGrosor = map(mouseX, 0, width, 0, 500); //de izq a derecha
        this.alto = this.vel;

        rectMode(CENTER);
        fill(255, 0, 0, this.opacidad);

        rect(this.x, this.y, this.lineaGrosor, this.alto + 100);

    }


}