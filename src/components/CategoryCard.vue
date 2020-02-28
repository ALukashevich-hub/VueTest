<template>
  <div class="categoryWrapper">
       <div @mouseover="mouseOver"
            @mouseleave="mouseLeave"
            class="wrapTouch">
        <canvas />
        <h2 :class="{onFocus: hasFocus}">
          {{ category }}
        </h2>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hasFocus: false,
    };
  },
  methods: {
    mouseOver() {
      this.hasFocus = true;
    },
    mouseLeave() {
      this.hasFocus = false;
    },
  },
};
</script>

<style lang="scss" scoped>
//@import url('https://fonts.googleapis.com/css?family=Caveat&display=swap&subset=cyrillic');
// @import url('~@/assets/scss/main.scss');
.categoryWrapper {
  // border: 1px solid white;
  width: 50%;
  margin: 10px auto 0 auto;
  display: block;
}
.wrapTouch {
  display: inline-block;
  cursor: pointer;
}
canvas {
  width: 140px;
  height: 140px;
  margin: auto;
  border: 1px solid green;
}
h2 {
  text-transform: uppercase;
  width: max-content;
  margin: 0 auto;
  position: relative;
}
h2::after {
  content: '';
  position: absolute;
  bottom:0;
  left: 0;
  width: 0%;
  height: 2px;
  background: #e44a03;
  transition: all 150ms ease-out;
  }
  .onFocus::after{
  width: 100%;
}
@media (min-width: 767px) {
  .categoryWrapper {
    width: 30%;
    margin: 50px auto 0 auto;
  }
}
</style>
