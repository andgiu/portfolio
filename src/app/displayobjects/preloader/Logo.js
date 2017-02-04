import * as PIXI from 'pixi.js';
import sGraphics from '../sGraphics';
//import filters from 'pixi-filters';
import { LIGHTGRAY, RED } from '../../config/Colors';
import { TweenLite } from 'gsap';


const width = 208;
const height = 86;
export default class Preloader extends sGraphics {

  constructor(...args) {
    super(...args);
    this.pivot = new PIXI.Point(width / 2, height / 2);
  }

  draw() {

    let pointsArray = [
      70,44
      ,89,55
      ,0,78
      ,46,0
      ,159,65
      ,180,30
      ,138,41
      ,119,30
      ,211,6
      ,164,86
      ,51,21,
      32,55
    ];

    let polygon = new PIXI.Polygon(pointsArray);

    this.beginFill(RED);
    this.drawPolygon(polygon);
    this.endFill();


    /*
    let rbgFilter = new filters.RGBSplitFilter();
    rbgFilter.red = [-5,0];
    rbgFilter.green = [5,0];

    let asciiFilter = new filters.AsciiFilter();
    asciiFilter.size = 2.5;

    let tiltShiftFilter = new filters.TiltShiftFilter();
    tiltShiftFilter.blur = 40;

    this.filters = [rbgFilter];
    */

  }


  center(renderer) {

    super.center(renderer);
  }
}
