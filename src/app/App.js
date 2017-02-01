import * as PIXI from 'pixi.js';
import {STAGE_WIDTH, STAGE_HEIGHT} from './config/Config';
import RendererStore from './stores/RendererStore';
import sContainer from './displayobjects/sContainer';


export default class App extends sContainer {

  constructor(...args) {
    
    super(...args);
    this.init();

  }

  init() {

  }

  resizeHandler(resizeOBJ) {

    super.resizeHandler(resizeOBJ);

  }

}
