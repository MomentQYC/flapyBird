function Bird(info) {
  this.x = info.x;
  this.y = info.y;
  this.image = info.image;
  this.canvas = info.canvas;
  this.context = info.context;
  this.index = 0;
  this.v = 0;
  this.a = 0.0006;
  this.s = 0;
  this.starTime = new Date();
  this.initClick();
  this.maxV = 1;
  this.maxRadian = 45;
}
Bird.prototype = {
  constructor: Bird,
  draw: function () {

    this.context.save();

    var now = new Date();
    var dt = now - this.starTime;
    this.s = this.v * dt + this.a * dt * dt / 2;
    this.v = this.v + this.a * dt;
    this.starTime = now;
    this.y += this.s;
    var imageX;
    imageX = this.image.width / 3 * (this.index % 3);

    var radian = (this.v / this.maxV * this.maxRadian / 180 * Math.PI);
    this.context.translate(this.x, this.y);
    this.context.rotate(radian);

    this.context.drawImage(this.image, imageX, 0, this.image.width / 3, this.image.height, -this.image.width / 3 / 2, -this.image.height / 2, this.image.width / 3, this.image.height);
    this.index++;

    // if (this.y >= this.canvas.height - landImage.height) {
    //   flag = true;
    // }

    this.context.restore();
  },
  initClick: function () {
    var that = this;
    this.canvas.onclick = function () {
      that.v = -0.2;
    }
  }

}