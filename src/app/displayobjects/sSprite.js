import * as PIXI from 'pixi.js';


/**
 * sSprite
 *
 * A DisplayObjectSprite which extends the default PIXI.Sprite
 *
 * @extends Container
 * @exports sSprite
 */

export default class sSprite extends PIXI.Sprite {

  constructor(...args){
    super(...args);
  }

  center(renderer, xOffset = 0, yOffset = 0) {
    this.position.x = ((renderer.width - this.width) * .5) + xOffset;
    this.position.y = ((renderer.height - this.height) * .5) + yOffset;
  }


}
