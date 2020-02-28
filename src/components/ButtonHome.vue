<template>
  <router-link
    class="logoNav"
    to="/"
  >
    <Logo />
  </router-link>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  name: 'ButtonHome',
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.logoNav {
  width: 50px;
  height: 50px;
}
</style>
