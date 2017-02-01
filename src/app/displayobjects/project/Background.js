import * as PIXI from 'pixi.js';
import RendererStore from '../../stores/RendererStore';
import sSprite from '../sSprite';


let ratio = 1;

export default class Background extends sSprite {

  constructor(...args) {
    super(...args);

    this.anchor = new PIXI.Point(.5,.5);
    ratio = this.width / this.height;
    RendererStore.addChangeListener(this.resizeHandler.bind(this));
  }

  resizeHandler(e) {

    this.width = e.width;
    this.height = this.width / ratio;

    if(this.height < e.height) {
      this.height = e.height;
      this.width = this.height * ratio;
    }

    this.position.x = e.width / 2;
    this.position.y = e.height / 2;

  }


}
