<template>
      <div class="buttonMenuClose"
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
        :class="{onFocusButtonClose: hasFocus}">
      </div>
</template>

<script>
export default {
  name: 'ButtonHideMenu',
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

.buttonMenuClose{
  // border: 1px solid yellow;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

  .buttonMenuClose::before,
  .buttonMenuClose::after{
    content    : '';
    width      : 100%;
    height     : 2px;
    background : white;
    position   : absolute;
    top        : 48%;
    transform: rotate(45deg);
    transition: all 400ms ease-out;
  }
  .buttonMenuClose::after{
    transform: rotate(-45deg);
  }
  .onFocusButtonClose::before, .onFocusButtonClose::after {
    transform: rotate(180deg);
  }
</style>
