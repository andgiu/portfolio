import * as PIXI from 'pixi.js';
import RendererStore from '../stores/RendererStore';

let renderables = new Set();

export default class Renderer extends PIXI.WebGLRenderer {

  constructor(...args) {

    super(...args);
    window.addEventListener('resize',this.resizeHandler.bind(this));

    RendererStore.set('renderer', this);
    RendererStore.set('resolution', this.resolution);
    RendererStore.set('stageWidth', args[0]);
    RendererStore.set('stageHeight', args[1]);
    RendererStore.set('stageCenter', new PIXI.Point(args[0] / 2, args[1] / 2));

    this.resizeHandler();
    this.start();

  }

  /**
   * Set the stores width and height on resize
   */
  setStore() {
    RendererStore.set('width', this.getWindowSize()[0]);
    RendererStore.set('height', this.getWindowSize()[1]);
  }

  /**
   * Start the animation loop
   * @return {null}
   */
  start() {
    this.active = true;
    window.requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * Stop the animation loop
   * @return {null}
   */
  stop() {
    this.active = false;
  }

  /**
   * Main animation loop, updates animation store
   * @return {null}
   */
  animate() {
    this.renderRenderables();

    if(this.active) {
      window.requestAnimationFrame(this.animate.bind(this));
      //AnimationStore.emitChange();
    }
  }

  /**
   * Sets's store and emits Change
   * @return {null}
   */
  resizeHandler() {
    this.resize(...this.getWindowSize());
    this.setStore();
    RendererStore.emitChange();
  }

  /**
   * Get the current window size
   * @return {null}
   */
  getWindowSize() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    return [width, height];
  }

  /**
   * Add a renderable object to the animation loop
   * @param {renderable} renderable object
   * @returns {renderable}
   */
  addRenderable(renderable) {
    return renderables.add(renderable);
  }

  /**
   * Remove a renderable object from the animation loop
   * @param {renderable} renderable object
   * @returns {renderable}
   */
  removeRenderable(renderable) {

    let hasRenderable = renderables.has(renderable);

    if(hasRenderable)
      renderables.delete(renderable);

    return hasRenderable;
  }

  /**
   * Loop over renderables and call the render function on them
   * @return {null}
   */
  renderRenderables() {
    for (let entry of renderables) {
      this.render(entry);
    }
  }

}
