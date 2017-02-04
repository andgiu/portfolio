import * as PIXI from 'pixi.js';
import { PT_HALF } from '../config/Points';

export default class sGraphics extends PIXI.Graphics {

  constructor(...args) {
    super(...args);
    this.anchor = PT_HALF;
  }

  center(renderer) {
    this.position.x = (renderer.width - this.width + this.pivot.x) * .5;
    this.position.y = (renderer.height - this.height + this.pivot.y) * .5;
  }

}
