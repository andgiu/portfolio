import * as PIXI from 'pixi.js';
import { PT_HALF } from './config/Points';
import RendererStore from './stores/RendererStore';
import sContainer from './displayobjects/sContainer';
import Logo from './displayobjects/preloader/Logo';
import Project from './displayobjects/project/Project';

let logo;

export default class App extends sContainer {

  constructor(...args) {

    super(...args);
    RendererStore.addChangeListener(this.resizeHandler.bind(this));

    this.initPreloader();
  }

  initPreloader() {


    logo = new Logo();
    this.addChild(logo);


    logo.draw();
    logo.scale = PT_HALF;

  }

  resizeHandler(renderer) {

    if(logo) logo.center(renderer);

  }

}
