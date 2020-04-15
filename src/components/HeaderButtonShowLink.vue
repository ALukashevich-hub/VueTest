<template>
  <div
    class="buttonMenuOpen"
    @click="$emit('changeShowMenu')"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  >
    <span
      class="sFirst"
      :class="{onFocusButton: hasFocus}"
    />
    <span
      class="sSecond"
      :class="{onFocusButton: hasFocus}"
    />
    <span
      class="sThird"
      :class="{onFocusButton: hasFocus}"
    />
    <span
      class="sFourth"
      :class="{onFocusButton: hasFocus}"
    />
  </div>
</template>

<script>
export default {
  name: 'HeaderButtonShowLink',
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
.buttonMenuOpen {
  // border: 1px solid red;
  width: 70px;
  height: 35px;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
}
span {
  height: 1px;
  background: var(--main-text-color);
  margin: auto 0 auto auto;
  transition: all 200ms ease-out;
}
/deep/ .sFirst {
  width: 100%;
}
/deep/ .sSecond {
  width: 50%;
}
/deep/ .sThird {
  width: 90%;
}
/deep/ .sFourth {
  width: 70%;
}
.onFocusButton {
  width: 70%;
}
</style>
