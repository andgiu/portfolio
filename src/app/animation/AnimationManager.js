import { TweenMax, Expo, TimelineMax } from 'gsap';
let _cache = [];

export default class AnimationManager {

  fadeIn(el, duration = .65, delay = 0, callback) {
    let _tween = new TweenMax(el,duration,{alpha:1,delay:delay,ease:Expo.easeOut, onComplete:callback});
    _cache.push(_tween);

    return this;
  }

  fadeOut(el, duration = .65, delay: 0, callback) {
    let _tween = new TweenMax(el,duration,{delay:delay, alpha:0,ease:Expo.easeOut, onComplete:callback});
    _cache.push(_tween);

    return this;
  }

  playSound(key) {
    SoundManager.play(key);
    return this;
  }

}
