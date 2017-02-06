import * as PIXI from 'pixi.js';

export default class sGraphics extends PIXI.Graphics {

  constructor(...args) {
    super(...args);
    this.anchor = Global.point.PT_HALF;
  }

}
