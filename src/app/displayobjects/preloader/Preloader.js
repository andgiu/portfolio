import * as PIXI from 'pixi.js';
import sGraphics from '../sGraphics';
import filters from 'pixi-filters';

export default class Preloader extends sGraphics {

  constructor(...args) {
    super(...args);

    this.width = 208;
    this.height = 86;
    this.anchor = new PIXI.Point(.5,.5);
  }

  draw() {

    let pointsArray = [72,46,85,55,0,78,46,0,159,65,180,30,138,41,123,33,208,10,164,86,51,21,30,58];
    let polygon = new PIXI.Polygon(pointsArray);

    this.beginFill(0xffffff);
    this.drawPolygon(polygon);
    this.endFill();

    let rbgFilter = new filters.RGBSplitFilter();
    rbgFilter.red = [-2,0];
    rbgFilter.green = [2,0];

    let asciiFilter = new filters.AsciiFilter();
    asciiFilter.size = 4;

    let tiltShiftFilter = new filters.TiltShiftFilter();
    tiltShiftFilter.blur = 200;

    //this.filters = [rbgFilter,tiltShiftFilter,asciiFilter];
  }


  center(e) {
    super.center(e);
  }
}
