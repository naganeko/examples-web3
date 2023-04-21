
function Wall(w = 1280) {
  var texture = PIXI.Texture.fromImage("assets/panel1_64x64.png");

  var h = 64 * 2;

  PIXI.extras.TilingSprite.call(this, texture, w, h);

  this.position.x = 0;
  this.position.y = 345 - h;
  this.tilePosition.x = 0;
  this.tilePosition.y = 0;

  this.viewportX = 0;

  this.alpha = 0.5;

}

Wall.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Wall.DELTA_X = 0.9; //0.7 ; //0.32;

Wall.prototype.setViewportX = function(newViewportX) {
  var d = newViewportX - this.viewportX;
  this.viewportX = newViewportX;
  this.tilePosition.x -= (d * Wall.DELTA_X);
}


