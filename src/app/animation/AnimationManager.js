import { TweenMax, Expo, TimelineMax } from 'gsap';
let _cache = [];

export default class AnimationManager {

  fadeIn(el, duration = .65, delay = 0, ease = Expo.easeIn) {
    let _tween = new TweenMax(el,duration,{alpha:1,delay:delay,ease:ease});
    _cache.push(_tween);
  }

  fadeOut(el, duration = .65, delay: 0, ease = Expo.easeOut) {
    let _tween = new TweenMax(el,duration,{delay:delay, alpha:0,ease:ease});
    _cache.push(_tween);
  }

}
