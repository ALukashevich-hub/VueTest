<template>
  <div class="categoryWrapper">
    <router-link to="/">
      <canvas></canvas>
      <h2>{{category}}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: 'hello',
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Caveat&display=swap&subset=cyrillic');
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
  display: inline-block;
  color: white;
}
h2 {
  text-transform: uppercase;
  // font-family: 'Caveat1', cursive;
  font-family: 'Caveat', cursive;
}
@media (min-width: 767px) {
  .categoryWrapper {
    width: 30%;
    margin: 50px auto 0 auto;
  }
}
</style>
