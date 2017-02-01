import * as PIXI from 'pixi.js';
import RendererStore from '../stores/RendererStore';
import { RESIZE } from '../actions/ActionTypes';
/**
 * sContainer
 *
 * A DisplayObjectContainer which extends the default PIXI.Container
 *
 * @extends Container
 * @exports sContainer
 */

export default class sContainer extends PIXI.Container {

  constructor(...args){
    super(...args);
    RendererStore.addChangeListener(this.resizeHandler.bind(this));
  }

  resizeHandler(resizeOBJ) {

  }

}
