<template>
  <div id="back">
    <canvas ref="stage"></canvas>
  </div>
</template>
<script>
import * as PIXI from 'pixi.js';
import * as particles from 'pixi-particles';
import pathRain from '@/assets/HardRain.png';

export default {
  name: 'Background',
  data() {
    return {
      config: {
        alpha: {
          start: 1,
          end: 0,
        },
        scale: {
          start: 0.25,
          end: 0.1,
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
          x: 40,
          y: 10,
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
          min: 5,
          max: 10,
        },
        blendMode: 'add',
        frequency: 0.07,
        emitterLifetime: -1,
        maxParticles: 600,
        pos: {
          x: 0,
          y: 0,
        },
        addAtBack: false,
        spawnType: 'rect',
        spawnRect: {
          x: -1000,
          y: 500,
          w: 1800,
          h: 60,
        },
      },
    };
  },
  mounted() {
    const canvas = this.$refs.stage;
    // Basic PIXI Setup
    const rendererOptions = {
      view: canvas,
    };
    const stage = new PIXI.Container();
    const renderer = new PIXI.Renderer(rendererOptions);
    const emitter = new particles.Emitter(

      // The PIXI.Container to put the emitter in
      // if using blend modes, it's important to put this
      // on top of a bitmap, and not use the root stage Container
      stage,

      // The collection of particle images to use
      [PIXI.Texture.from(pathRain)],

      // Emitter configuration, edit this to change the look
      // of the emitter
      this.config,

    );
    let elapsed = Date.now();

    // Update function every frame
    const update = () => {
    // Update the next frame
      requestAnimationFrame(update);

      const now = Date.now();

      // The emitter requires the elapsed
      // number of seconds since the last update
      emitter.update((now - elapsed) * 0.001);
      elapsed = now;

      // Should re-render the PIXI Stage
      renderer.render(stage);
    };

    // Start emitting
    emitter.emit = true;

    // Start the update
    update();
  },
};
</script>

<style scoped lang="scss">
#back {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background-color: black;
  width: 100%;
  height: 100%;
  z-index: -1;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
