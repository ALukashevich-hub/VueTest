<template>
  <div id="app">
    <TheHeader />
    <transition name="fadeTransition" mode="out-in" appear >
    <router-view />
    </transition>
    <TheBackground />
  </div>
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
@import '~normalize.css';
h1, h2, p, a {
  font-family: 'Caveat', cursive;
  font-weight: normal;
}
body,
html,
#app {
  width: 100%;
  /*overflow: hidden;*/
}
.fadeTransition-enter-active {
  transition: opacity 0.7s;
}
.fadeTransition-leave-active {
  transition: opacity 0.3s;
}
.fadeTransition-enter, .fadeTransition-leave-to {
  opacity: 0;
}
@media (min-width: 1023px) {
  body,
  html,
  #app {
    height: 100%;
  }
}
</style>
