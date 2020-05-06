<template>
  <div id="back">
    <canvas ref="background" />
  </div>
</template>
<script>
import * as PIXI from 'pixi.js';
import * as particles from 'pixi-particles';
import pathRain from '@/assets/HardRain.png';

export default {
  name: 'TheBackground',
  data() {
    return {
      config: {
        alpha: {
          start: 1,
          end: 0,
        },
        scale: {
          start: 0.2,
          end: 0.05,
          minimumScaleMultiplier: 1,
        },
        color: {
          start: '#d45d22',
          end: '#f50a0a',
        },
        speed: {
          start: 400,
          end: 200,
          minimumSpeedMultiplier: 1,
        },
        acceleration: {
          x: 80,
          y: 20,
        },
        maxSpeed: 800,
        startRotation: {
          min: -140,
          max: -50,
        },
        noRotation: false,
        rotationSpeed: {
          min: 0,
          max: 0,
        },
        lifetime: {
          min: 3,
          max: 7,
        },
        blendMode: 'normal',
        frequency: 0.1,
        emitterLifetime: -1,
        maxParticles: 600,
        pos: {
          x: 0,
          y: 0,
        },
        addAtBack: false,
        spawnType: 'rect',
        spawnRect: {
          x: 0,
          y: 1000,
          w: 1800,
          h: 60,
        },
      },
    };
  },
  mounted() {
    const canvas = this.$refs.background;
    let wBG = window.innerWidth;
    let hBG = window.innerHeight;
    this.config.spawnRect.w = window.innerWidth;
    this.config.spawnRect.y = window.innerHeight;
    // Basic PIXI Setup
    const rendererOptions = {
      transparent: true,
      view: canvas,
      height: hBG,
      width: wBG,
    };
    const stage = new PIXI.Container();
    const renderer = new PIXI.Renderer(rendererOptions);
    const ticker = new PIXI.Ticker();
    const emitter = new particles.Emitter(
      stage,
      // The collection of particle images to use
      [PIXI.Texture.from(pathRain)],
      this.config,
    );
    // const ticker = new PIXI.Ticker();
    const update = () => {
      emitter.update(0.015);
      renderer.render(stage);
    };
    emitter.emit = true;
    ticker.add(update);
    ticker.start();
    window.addEventListener('resize', () => {
      wBG = window.innerWidth;
      hBG = window.innerHeight;
      renderer.resize(wBG, hBG);
    });
  },
};
</script>

<style scoped lang="scss">
#back {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  background-color: var(--background-color);
  width: 100%;
  height: 100%;
  z-index: -1;
}
canvas {
  width: inherit;
  height: inherit;
}
</style>
