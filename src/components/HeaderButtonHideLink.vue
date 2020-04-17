<template>
  <div
    class="buttonMenuClose"
    :class="{onFocusButtonClose: hasFocus}"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  />
</template>

<script>
export default {
  name: 'HeaderHideLinkButton',
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

<style lang="scss">

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
    background : var(--main-text-color);
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
