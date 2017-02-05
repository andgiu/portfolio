import * as PIXI from 'pixi.js';


export default class sText extends PIXI.Text {

  constructor(...args){
    super(...args);
  }

  center(renderer, xOffset = 0, yOffset = 0) {

    this.position.x = ((renderer.width - this.width) * .5) + xOffset;
    this.position.y = ((renderer.height - this.height) * .5) + yOffset;
  }

}
