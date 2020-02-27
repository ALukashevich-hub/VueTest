<template>
  <div class="categoryWrapper">
    <router-link @mouseover.native="mouseOver" @mouseleave.native="mouseLeave"  to="/Specific">
      <canvas></canvas>
      <h2 :class="{onFocus: hasFocus}">{{category}}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
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
  props: {
    category: {
      type: String,
      default: 'hello',
    },
  },
};
</script>

<style lang="scss" scoped>
//@import url('https://fonts.googleapis.com/css?family=Caveat&display=swap&subset=cyrillic');
// @import url('~@/assets/scss/main.scss');
.categoryWrapper {
  // border: 1px solid white;
  display: flex;
  width: 50%;
  margin: 10px auto 0 auto;
}
canvas {
  width: 140px;
  height: 140px;
  margin: auto;
  border: 1px solid green;
}
a {
  text-decoration: none;
  text-align: center;
  margin: auto;
  display: block;
  color: white;
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
