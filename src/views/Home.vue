<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <background/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import background from '@/components/background.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    background,
  },
};
</script>
