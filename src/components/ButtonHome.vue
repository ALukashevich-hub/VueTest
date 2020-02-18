<template>
  <router-link to="/">
    <canvas id="HomeImg"></canvas>
  </router-link>
</template>

<script>
export default {
  name: 'ButtonHome',
};
</script>

<style lang="scss" scoped>
#HomeImg {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}
</style>
