import { Howl } from 'howler';

const _baseAudioPath = "audio/";
let _sounds = [];

export default class SoundManager {

    constructor(){

    }

    add(key, soundName, autoplay = false, loop = false, volume = 0.5, sprite: {}) {

      _sounds[key] = new Howl({
        src: [_baseAudioPath + soundName + '.mp3', _baseAudioPath + soundName + '.webm'],
        format: ['mp3','webm'],
        sprite: sprite,
        autoplay: autoplay,
        loop: loop,
        volume: volume
      });

      return _sounds[key];

    }

    play(key, label = null) {
      if(!label) _sounds[key].play();
      else _sounds[key].play(label);
    }
}
