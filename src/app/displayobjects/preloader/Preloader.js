import * as PIXI from 'pixi.js';
import AnimationStore from '../../stores/AnimationStore';
import ContainerState from '../../statemanager/ContainerState';
import Logo from './Logo';
import sText from '../sText';
import sSprite from '../sSprite';
import { TweenMax, Expo } from 'gsap';


let _logo;
let _headphones_copy;
let _headphones;
let _resources;
let _dispSprite;
let _dispFilter;
let _trianglifyBg;

export default class Preloader extends ContainerState {

  constructor(...args) {
    super(...args);

  }

  componentWillMount() {

    super.componentWillMount();

    // Create Logo
    _logo = new Logo();
    _logo.scale = Global.point.PT_HALF;
    _logo.alpha = 0;

    // Create Copy
    _headphones_copy = new sText(Global.copy.INTRO_HEADPHONE.toUpperCase(),
    {fontFamily:Global.font.FONT_DEFAULT,fill: Global.color.LIGHTGRAY,fontSize: 22,letterSpacing: 1});
    _headphones_copy.alpha = 0;


    let loader = new PIXI.loaders.Loader();
    loader
    .add('headphones','img/headphones.svg')
    .add('displacement','img/noise_displacement.png')
    .once('complete',this.setupScene.bind(this))
    .load();

  }

  setupScene(e) {

    _resources = e.resources;
    // Create headphones SVG and Setup the scene
    _headphones = new sSprite(_resources['headphones'].texture);
    _headphones.alpha = 0;
    _headphones.width = _headphones.height = 26;

    this.addChild(_logo,_headphones_copy,_headphones);
    this.componentDidMount();
  }

  componentDidMount(e) {
    super.componentDidMount();
  }

  doTransitionIn() {
    super.doTransitionIn();

    AnimationManager
    .fadeIn([_headphones_copy,_headphones],.12,.435,this.onTransitionInComplete.bind(this))
    .playSound('intro');

  }

  onTransitionInComplete() {


    _dispSprite = new sSprite(_resources['displacement'].texture);
    _dispSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    _dispFilter = new PIXI.filters.NoiseFilter();
    _dispFilter.noise = .1;

    this.filters = [_dispFilter];
    AnimationStore.addChangeListener(this.animate.bind(this));
  }

  resizeHandler(renderer) {

    super.resizeHandler(renderer);

    _logo.center(renderer);
    _headphones_copy.center(renderer,_headphones.width / 2);
    _headphones.center(renderer, -((_headphones_copy.width / 2) + (_headphones.width) - _headphones.width / 2), -3);

  }

  animate() {

    let currentDate = new Date();
    let currentTime = currentDate.getTime();

    this.filters = [_dispFilter];
    _dispSprite.x += 10;
    //_dispFilter.baseTexture.texture.update();
    //_dispFilter.scale.set(Math.sin(currentTime * 0.001) * 100);

  }

}
