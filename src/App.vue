<template>
  <main id="app">
    <Navigation/>
    <router-view />
    <Background/>
  </main>
</template>

<script>
import Background from '@/components/Background.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Background,
    Navigation,
  },
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Caveat&display=swap&subset=cyrillic');
h1, h2, p, a {
  font-family: 'Caveat', cursive;
}
body,
html,
#app {
  width: 100%;
  height: 100%;
}
</style>
