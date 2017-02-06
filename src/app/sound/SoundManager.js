import { Howl } from 'howler';

const _baseAudioPath = "audio/";
let _sounds = [];

export default class SoundManager {

    constructor(){

    }

    add(soundOBJ) {

      let soundName = _baseAudioPath + soundOBJ.src;

      _sounds[soundOBJ.key] = new Howl({
        src: [soundName + '.mp3', soundName + '.webm'],
        format: ['mp3','webm'],
        sprite: soundOBJ.sprite || null,
        autoplay: soundOBJ.autoplay,
        loop: soundOBJ.loop,
        volume: soundOBJ.volume
      });

      return _sounds[soundOBJ.key];

    }

    play(key, label = null) {
      if(!label) _sounds[key].play();
      else _sounds[key].play(label);
    }
}
