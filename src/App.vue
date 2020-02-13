<template>
  <main id="app">
    <Navigation/>
    <!-- <div id="nav">
          <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
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

body,
html,
#app {
  width: 100%;
  height: 100%;
}

</style>
