function Pipe(info) {
  this.x = info.x;
  this.topImage = info.topImage;
  this.bottomImage = info.bottomImage;
  this.space = 120;
  this.landHeight = info.landHeight;
  this.topHeight = 0;
  this.bottomHeight = 0;
  this.canvas = info.canvas;
  this.context = info.context;
  this.speed = 2;
  this.gap = info.gap;
  this.initHeight();
}
Pipe.prototype = {
  constructor: Pipe,
  draw: function () {
    this.x -= this.speed;
    if (this.x <= -this.topImage.width) {
      this.x = this.canvas.width - this.topImage.width + this.gap;
      this.initHeight();
    }
    this.context.drawImage(this.topImage, this.x, 0, this.topImage.width, this.topHeight);
    this.context.drawImage(this.bottomImage, this.x, this.topHeight + this.space, this.bottomImage.width, this.bottomHeight);
    // this.context.beginPath();
    this.context.rect(this.x, 0, this.topImage.width, this.topHeight);
    this.context.rect(this.x, this.topHeight + this.space, this.bottomImage.width, this.bottomHeight);
    // this.context.stroke();


  },
  initHeight: function () {
    this.topHeight = Math.random() * 150 + 100;
    this.bottomHeight = this.canvas.height - this.topHeight - this.space - this.landHeight;
  }
}