import * as PIXI from 'pixi.js';
import sContainer from './displayobjects/sContainer';
import Project from './displayobjects/project/Project';


export default class App extends sContainer {

  constructor(...args) {

    super(...args);
    this.init();

  }

  init() {

    let project = new Project();
    this.addChild(project);

  }


}
