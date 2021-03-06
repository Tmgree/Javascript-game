function Blob(texture) {
  PIXI.Sprite.call(this, texture);
}

Blob.constructor = Blob;
Blob.prototype = Object.create(PIXI.Sprite.prototype);

Blob.prototype.move = function() {
  this.y += this.vy;
  var blobHitsWall = contain(this, {x: 28, y: 10, width: 488, height: 480});
  if (blobHitsWall === "top" || blobHitsWall === "bottom") {
    this.vy *= -1;
  }
};
