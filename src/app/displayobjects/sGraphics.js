import * as PIXI from 'pixi.js';

export default class sGraphics extends PIXI.Graphics {

  constructor(...args) {
    super(...args);
    this.anchor = Global.point.PT_HALF;
  }

  center(renderer, xOffset = 0, yOffset = 0) {
    this.position.x = ((renderer.width - this.width + this.pivot.x) * .5) + xOffset;
    this.position.y = ((renderer.height - this.height + this.pivot.y) * .5) + yOffset;
  }

}
