<template>
  <div id="back"></div>
</template>
<script>
export default {
  name: 'Background',
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
</style>
