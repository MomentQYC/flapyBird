function Sky(info) {
  this.image = info.image;
  this.canvas = info.canvas;
  this.context = info.context;
  this.x = info.x;
  this.speed = 2;
}
Sky.prototype = {
  constructor: Sky,
  draw: function () {
    this.x -= this.speed;
    if (this.x <= -this.canvas.width) {
      this.x = this.canvas.width;
    }
    this.context.drawImage(this.image, this.x, 0, this.image.width, this.image.height);
  }
}