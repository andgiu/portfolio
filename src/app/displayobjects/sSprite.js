import * as PIXI from 'pixi.js';


/**
 * sSprite
 *
 * A DisplayObjectSprite which extends the default PIXI.Sprite
 *
 * @extends Container
 * @exports sSprite
 */

export default class sContainer extends PIXI.Sprite {

  constructor(...args){
    super(...args);

    const center = new PIXI.Point(.5,.5);
    //this.anchor = center;
    //this.position = center;
  }


}
