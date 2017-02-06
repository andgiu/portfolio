import * as PIXI from 'pixi.js';
import AnimationStore from '../../stores/AnimationStore';
import ContainerState from '../../statemanager/ContainerState';
import Logo from './Logo';
import sText from '../sText';
import sSprite from '../sSprite';
import sContainer from '../sContainer';
import { TweenMax, Expo } from 'gsap';


let _logo;
let _headphones_copy;
let _headphones;
let _headphones_holder;
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

    _headphones_holder = new sContainer;
    // Create Logo
    _logo = new Logo();
    _logo.scale = Global.point.PT_HALF;
    _logo.alpha = 0;

    // Create Copy
    _headphones_copy = new sText(
      Global.copy.INTRO_HEADPHONE.toUpperCase(),
      {fontFamily:Global.font.FONT_DEFAULT,fill: Global.color.LIGHTGRAY,fontSize: 22,letterSpacing: 1}
    );

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


    _headphones_holder.addChild(_headphones_copy,_headphones);
    _headphones_copy.position.set(_headphones.width * 1.35,5);
    _headphones_holder.pivot = new PIXI.Point(_headphones_holder.width * .5,_headphones_holder.height * .5);

    this.addChild(_logo,_headphones_holder);
    this.componentDidMount();
  }

  componentDidMount(e) {
    super.componentDidMount();
  }

  doTransitionIn() {
    super.doTransitionIn();

    AnimationManager
    .fadeIn([_headphones_copy,_headphones],.312,.435,this.onTransitionInComplete.bind(this))
    .playSound('intro');

    TweenMax.to(_headphones_holder,1.5,{alpha:0,delay:2.5});
    TweenMax.to(_headphones_holder.scale,6,{x:1.15,y:1.15,delay:.415});
  }

  onTransitionInComplete() {


    _dispSprite = new sSprite(_resources['displacement'].texture);
    _dispSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    _dispFilter = new PIXI.filters.NoiseFilter();
    _dispFilter.noise = .1;

    //this.filters = [_dispFilter];
    AnimationStore.addChangeListener(this.animate.bind(this));
  }

  resizeHandler(renderer) {
    super.resizeHandler(renderer);

    //_headphones_holder.pivot.set(renderer.stageCenter);
    this.position = renderer.stageCenter;
    //this.position.x = renderer.
    //_logo.center(renderer);
    //_headphones_holder.position = renderer.stageCenter;
  }

  animate() {

    let currentDate = new Date();
    let currentTime = currentDate.getTime();

    //this.filters = [_dispFilter];
    //_dispSprite.x += 10;
    //_dispFilter.baseTexture.texture.update();
    //_dispFilter.scale.set(Math.sin(currentTime * 0.001) * 100);

  }

}
