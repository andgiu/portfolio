'use strict';
import * as PIXI from 'pixi.js';
import {STAGE_WIDTH, STAGE_HEIGHT} from './app/config/Config';
import RendererStore from './app/stores/RendererStore';
import Renderer from './app/renderer/Renderer';
import App from './app/App';

import './sass/style.scss';

let renderer = new Renderer(STAGE_WIDTH,STAGE_HEIGHT,{
  resolution: window.devicePixelRatio || 1,
  antialias: false,
  autoResize: true
});

let stage = new App(STAGE_WIDTH,STAGE_HEIGHT);
renderer.addRenderable(stage);

document.getElementById('app').appendChild(renderer.view);
RendererStore.emitChange();
