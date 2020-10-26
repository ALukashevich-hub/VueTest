<template>
  <canvas
    :class=$style.borderLogo
    ref="logo"
  />
</template>

<script>
import * as PIXI from 'pixi.js';
import * as particles from 'pixi-particles';
import pathTexture2 from '@/assets/Fire.png';
import pathTexture3 from '@/assets/particle.png';
import pathTexture4 from '@/assets/FrontSphere.svg';
import pathTexture5 from '@/assets/BackSphere.svg';

export default {
  name: 'BaseLogo',
  props: {
    freq: Number,
  },
  data() {
    return {
      config: {
        alpha: {
          start: 0.7,
          end: 0,
        },
        scale: {
          start: 0.05,
          end: 0.6,
          minimumScaleMultiplier: 1.5,
        },
        color: {
          start: '#5d5a00',
          end: '#d64a04',
        },
        speed: {
          start: 10,
          end: 300,
          minimumSpeedMultiplier: 1,
        },
        acceleration: {
          x: 0,
          y: -100,
        },
        maxSpeed: 0,
        startRotation: {
          min: 240,
          max: 290,
        },
        noRotation: false,
        rotationSpeed: {
          min: 10,
          max: 30,
        },
        lifetime: {
          min: 0.2,
          max: 1.5,
        },
        blendMode: 'add',
        frequency: 0.002,
        emitterLifetime: -1,
        maxParticles: 600,
        pos: {
          x: 150,
          y: 230,
        },
        addAtBack: false,
        spawnType: 'circle',
        spawnCircle: {
          x: 0,
          y: 0,
          r: 8,
        },
      },
      ticker: null,
    };
  },
  mounted() {
    const canvas = this.$refs.logo;
    this.config.frequency = this.freq;
    const rendererOptions = {
      transparent: true,
      view: canvas,
      height: 300,
      width: 300,
    };
    const stage = new PIXI.Container();
    const renderer = new PIXI.Renderer(rendererOptions);
    this.ticker = new PIXI.Ticker();
    const emitter = new particles.Emitter(
      stage,
      [PIXI.Texture.from(pathTexture2), PIXI.Texture.from(pathTexture3)],
      this.config,
    );
    const backTexture = PIXI.Texture.from(pathTexture5);
    const frontTexture = PIXI.Texture.from(pathTexture4);
    const backSphere = new PIXI.Sprite(backTexture);
    const frontSphere = new PIXI.Sprite(frontTexture);
    backSphere.x = renderer.width / 6;
    backSphere.y = renderer.height / 10;
    frontSphere.x = renderer.width / 6;
    frontSphere.y = renderer.height / 10;
    frontSphere.zIndex = 1;
    stage.sortableChildren = true;
    stage.addChild(backSphere);
    stage.addChild(frontSphere);
    renderer.plugins.interaction.autoPreventDefault = false;
    const update = () => {
      // console.log(emitter.particleCount);
      emitter.update(this.ticker.elapsedMS * 0.001);
      renderer.render(stage);
    };
    emitter.emit = true;
    this.ticker.add(update);
    this.ticker.start();
  },
  destroyed() {
    this.ticker.destroy();
  },
};
</script>

<style lang="scss" module>
.borderLogo {
  width: inherit;
  height: inherit;
}
</style>
