import * as PIXI from 'pixi.js';
import { LIGHTGRAY } from '../../config/Colors';
import { FONT_DEFAULT } from '../../config/Fonts';
import { INTRO_HEADPHONE } from '../../config/Copy';
import { PT_HALF } from '../../config/Points';
import ContainerState from '../../statemanager/ContainerState';
import Logo from './Logo';
import sText from '../sText';


let _logo;
let _headphones_copy;

export default class Preloader extends ContainerState {

  constructor(...args) {
    super(...args);
  }

  componentWillMount() {

    super.componentWillMount();

    _logo = new Logo();
    _logo.scale = PT_HALF;


    _headphones_copy = new sText(INTRO_HEADPHONE.toUpperCase(),{

      fontFamily:FONT_DEFAULT,
      fill: LIGHTGRAY,
      fontSize: 21.5

    });

    this.addChild(_logo,_headphones_copy);
    this.componentDidMount();

  }

  resizeHandler(renderer) {
    _logo.center(renderer);
    _headphones_copy.center(renderer,0,_logo.height);
  }

}
