class Obra {
    constructor(img) {
        this.x =  random (200, 600);
        this.y = random (200, 400);
        this.ancho = 50;
        this.alto = 120;
        this.img = imagenes;
        this.cant = int ( random (0, 21));
        this.over = false;
    }

    dibujar() {
        this.chequearHover();
        if (this.over) {
            this.mov();
        }
        imageMode(CENTER);
        image(this.img[this.cant], this.x, this.y, this.ancho, this.alto);
    }

    chequearHover(){
        if (
            mouseX > this.x - this.ancho / 2 &&
            mouseX < this.x + this.ancho / 2 &&
            mouseY > this.y - this.alto / 2 &&
            mouseY < this.y + this.alto / 2) {
            this.over = true;
          } else {
            this.over = false;
          }
    }
    
    mov(){
        this.x = mouseX;
        this.y = mouseY;
    }
}