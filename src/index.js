"use strict";
import './sass/style.scss';

import * as PIXI from 'pixi.js';
import WebFont from 'webfontloader';

import RendererStore from './app/stores/RendererStore';
import Renderer from './app/renderer/Renderer';
import App from './app/App';


import { Globals } from './app/config/All';
import AnimationManager from './app/animation/AnimationManager';
import SoundManager from './app/sound/SoundManager';

window.Global = Globals;
window.AnimationManager = new AnimationManager();
window.SoundManager = new SoundManager();



function initalizeApp() {

  // Google Font Loader
  WebFont.load({

      custom: {
          families: [Global.font.FONT_DEFAULT],
          url: ['.src/fonts/fonts.css']
      },

      active: function() {

        sessionStorage.fonts = true;

        let resolution = window.devicePixelRatio || 1;
        let renderer = new Renderer(Global.config.STAGE_WIDTH,Global.config.STAGE_HEIGHT,{
          resolution: resolution,
          antialias: true,
          autoResize: false,
          transparent: true,
          roundPixels: resolution == 1
        });

        console.log(renderer);

        let stage = new App(Global.config.STAGE_WIDTH,Global.config.STAGE_HEIGHT);
        renderer.addRenderable(stage);

        document.getElementById('app').appendChild(renderer.view);

      }

  });

}

// define audio
let introSound = window.SoundManager.add(Global.sound.INTRO);
introSound.once('load',initalizeApp);
