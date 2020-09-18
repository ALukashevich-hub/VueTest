<template>
  <div :class="$style.background"></div>
</template>

<script>
export default {
  name: 'Black',
};
</script>

<style scss module>
.background {
  width: 100%;
  height: 100%;
  z-index: -2;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--background-color);
}
</style>
