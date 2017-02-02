import * as PIXI from 'pixi.js';
import RendererStore from './stores/RendererStore';
import sContainer from './displayobjects/sContainer';
import Preloader from './displayobjects/preloader/Preloader';
import Project from './displayobjects/project/Project';

let preloader;

export default class App extends sContainer {

  constructor(...args) {

    super(...args);
    RendererStore.addChangeListener(this.resizeHandler.bind(this));

    this.initPreloader();
    RendererStore.emitChange();
  }

  initPreloader() {

    preloader = new Preloader();
    this.addChild(preloader);

    preloader.scale = new PIXI.Point(.5,.5);
    preloader.draw();

  }

  resizeHandler(e) {

    if(preloader) preloader.center(e);

  }

}
