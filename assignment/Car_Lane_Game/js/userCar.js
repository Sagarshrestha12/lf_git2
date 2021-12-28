class myCar {
  constructor(x, y, ctx, image) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.image = image;
  }
  //130
  draw() {
    this.ctx.drawImage(this.image, this.x, this.y);
  }
  
  move=() =>{

  }
}
