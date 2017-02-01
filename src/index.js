'use strict';
import * as PIXI from 'pixi.js';
import Renderer from './app/renderer/Renderer';
import RendererStore from './app/stores/RendererStore';

import './sass/style.scss';

const renderer = new Renderer(1280,720,{
  resolution: window.devicePixelRatio || 1
});

document.getElementById('app').appendChild(renderer.view);
