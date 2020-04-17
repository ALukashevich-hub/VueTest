<template>
  <main id="app">
    <TheHeader />
    <router-view />
    <TheBackground />
  </main>
</template>

<script>
import TheBackground from '@/components/TheBackground.vue';
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: {
    TheBackground,
    TheHeader,
  },
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Caveat&display=swap&subset=cyrillic');
@import '@/assets/scss/variables.scss';
h1, h2, p, a {
  font-family: 'Caveat', cursive;
  font-weight: normal;
}
body,
html,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
