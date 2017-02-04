"use strict";

import * as PIXI from 'pixi.js';
import WebFont from 'webfontloader';
import { FONT_DEFAULT } from './app/config/Fonts';
import {STAGE_WIDTH, STAGE_HEIGHT} from './app/config/Config';
import RendererStore from './app/stores/RendererStore';
import Renderer from './app/renderer/Renderer';
import App from './app/App';

import './sass/style.scss';

// Google Font Loader



WebFont.load({

    custom: {
        families: [FONT_DEFAULT],
        url: ['.src/fonts/fonts.css']
    },

    active: function() {

      sessionStorage.fonts = true;

      let renderer = new Renderer(STAGE_WIDTH,STAGE_HEIGHT,{
        resolution: window.devicePixelRatio || 1,
        antialias: true,
        autoResize: true,
        transparent: false
      });

      let stage = new App(STAGE_WIDTH,STAGE_HEIGHT);
      renderer.addRenderable(stage);

      document.getElementById('app').appendChild(renderer.view);
      RendererStore.emitChange();

    }

});
