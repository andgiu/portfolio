import * as PIXI from 'pixi.js';


export default class sGraphics extends PIXI.Graphics {

  constructor(...args) {
    super(...args);
  }

  center(e) {

    this.position.x = (e.width - this.width) * .5;
    this.position.y = (e.height - this.height) * .5;

  }

}
