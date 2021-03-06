import * as PIXI from 'pixi.js';
import StateManager from './StateManager';
import sContainer from '../displayobjects/sContainer';
import RendererStore from '../stores/RendererStore';

let _stateManager = new StateManager();

export default class ContainerState extends sContainer {

  constructor(...args) {
    super(...args);

    this._ready = false;
    this._active = false;
    _stateManager.add(this);

    this._ready = 3;
    this.componentWillMount();
  }

  onStateChangeHandler(prop,value,old) {
    console.log(prop,value,old);
  }

  componentWillMount() {

  }

  componentDidMount() {
    this._ready = true;
    this.doTransitionIn();
    RendererStore.emitChange();
  }

  doTransitionIn() {

  }

  doTransitionOut() {

  }

}
