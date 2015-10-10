
class Square {
  constructor(posX, posY, width, height, color) {
    this.posY = posY;
    this.posX = posX;
    this.width = width;
    this.height = height;
    this.color = color;
    this.numRight = 0;
  }

  draw() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = this.color;
    ctx.fillRect(this.posY, this.posX, this.width, this.height);
  }

  moveRight() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(this.posY, this.posX, this.width, this.height);

    ctx.fillStyle = this.color;
    this.posY = this.posY + 40;
    this.numRight += 1;
    ctx.fillRect(this.posY, this.posX, this.width, this.height);
  }

  deleteSquare() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(this.posY, this.posX, this.width, this.height);
    this.posY = this.posY - (40 * this.numRight);
  }

}

export default Square;
