
class Square {
  constructor(posX, posY, width, height, color) {
    this.posY = posY;
    this.posX = posX;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = this.color;
    ctx.fillRect(this.posY, this.posX, this.width, this.height);
  }

  moveRight() {

  }

  deleteSquare() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(10,10,50,50);
  }

}

export default Square;
