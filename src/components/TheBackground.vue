<template>
  <div id="back">
    <canvas ref="background" />
  </div>
</template>
<script>
import * as PIXI from 'pixi.js';
import * as particles from 'pixi-particles';
import debounce from 'lodash.debounce';
import pathRain from '@/assets/HardRain.png';
import pathParticle from '@/assets/particle.png';

export default {
  name: 'TheBackground',
  data() {
    return {
      config: {
        alpha: {
          start: 1,
          end: 0.5,
        },
        scale: {
          start: 0.15,
          end: 0.05,
          minimumScaleMultiplier: 1,
        },
        color: {
          start: '#f29218',
          end: '#e40a0a',
        },
        speed: {
          start: 400,
          end: 10,
          minimumSpeedMultiplier: 1,
        },
        acceleration: {
          x: 40,
          y: 40,
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
          min: 2,
          max: 7,
        },
        blendMode: 'normal',
        frequency: 0.03,
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
          h: 50,
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
      [PIXI.Texture.from(pathRain),
        PIXI.Texture.from(pathParticle)],
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
    window.addEventListener('resize', debounce(() => {
      wBG = window.innerWidth;
      hBG = window.innerHeight;
      this.config.spawnRect.w = window.innerWidth;
      this.config.spawnRect.y = window.innerHeight;
      emitter.parseSpawnType(this.config);
      renderer.resize(wBG, hBG);
    }, 200));
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
