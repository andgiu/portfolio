import * as PIXI from 'pixi.js';
import { PT_HALF } from './config/Points';
import RendererStore from './stores/RendererStore';
import sContainer from './displayobjects/sContainer';
import Preloader from './displayobjects/preloader/Preloader';


let _preloader;

export default class App extends PIXI.Container {

  constructor(...args) {

    super(...args);


    this.initPreloader();
  }

  initPreloader() {


    _preloader = new Preloader();
    this.addChild(_preloader);


  }

  resizeHandler(renderer) {

    //if(logo) logo.center(renderer);

  }

}
