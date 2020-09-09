<template>
  <div class="categoryWrapper">
      <router-link @mouseover.native="mouseOver"
                   @mouseleave.native="mouseLeave"
                   class="wrapTouch"
                   :to="{ name: 'ListProduct',
                    params: { nameCategory: nameCategory}}">
          <slot name="svgContainer">
            <svg class="svgContainer" width="140" height="140" viewBox="0 0 140 140">
            </svg>
          </slot>
        <h2 :class="{onFocus: hasFocus}">
          {{ category }}
        </h2>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    category: {
      type: String,
      required: true,
    },
    nameCategory: {
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
  // computed: {
  //   idProduct() {
  //     return this.$store.state.allProduct[this.nameCategory].idProduct;
  //   },
  // },
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
  text-decoration: none;
  color: var(--main-text-color);
}
.svgContainer {
  margin: auto;
  border: 1px dashed var(--main-text-color);
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
  background: var(--hover-color);
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
@media (min-width: 1023px) {

}
</style>
