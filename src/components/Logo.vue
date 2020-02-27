<template>
<canvas ref="logo" id="logo"></canvas>
</template>

<script>
import * as PIXI from 'pixi.js';
import pathTexture from '@/assets/bunny.png';

export default {
  name: 'Logo',
  // data() {
  //   return {
  //     app: null,
  //     bunny: null,
  //     texture: null,
  //   };
  // },
  // mounted() {
  //   this.app = new PIXI.Application({
  //     transparent: true,
  //     view: this.$refs.logo,
  //   });
  //   this.texture = PIXI.Texture.from(pathTexture);
  //   this.bunny = new PIXI.Sprite(this.texture);
  //   this.bunny.x = this.app.renderer.width / 2;
  //   this.bunny.y = this.app.renderer.height / 2;
  //   this.app.stage.addChild(this.bunny);
  //   this.RunPixi();
  // },
  mounted() {
    const app = new PIXI.Application({
      transparent: true,
      view: this.$refs.logo,
      height: 100,
      width: 100,
    });
    const texture = PIXI.Texture.from(pathTexture);
    const bunny = new PIXI.Sprite(texture);
    app.renderer.plugins.interaction.autoPreventDefault = false;
    bunny.anchor.set(0.5);
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;
    app.stage.addChild(bunny);
    app.ticker.add(() => {
    // just for fun, let's rotate mr rabbit a little
      bunny.rotation += 0.1;
    });
  },

};
</script>

<style lang="scss" scoped>
#logo {
  width: inherit;
  height: inherit;
  border: 1px solid green;
}
</style>
