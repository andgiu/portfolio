import * as PIXI from 'pixi.js';
import RendererStore from '../../stores/RendererStore';
import sContainer from '../sContainer';
import Background from './Background';

export default class Project extends sContainer {

  constructor(...args) {
    super(...args);


    this.init();
    RendererStore.addChangeListener(this.resizeHandler.bind(this));
    RendererStore.emitChange();
  }

  init() {

    let loader = new PIXI.loaders.Loader('',4);
    loader
    .add('bg','./img/fendi-bg@2x.jpg')
    .once('complete',this.onFileLoaded.bind(this))
    .load();

  }

  onFileLoaded(e) {

    let background = new Background(e.resources['bg'].texture);
    this.addChild(background);

    RendererStore.emitChange();

  }

  resizeHandler(e) {

    const center = new PIXI.Point(e.width / 2, e.height / 2);
    this.pivot = this.position = center;

  }


}
