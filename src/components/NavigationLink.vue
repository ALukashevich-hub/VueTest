<template>
  <nav v-show="showMenu">
    <ButtonHome  @click.native="hideMenu" class="buttonHome" />
    <ButtonHideMenu @hideMenu="hideMenu" class="buttonHideMenu" />
    <router-link @click.native="hideMenu" to="/">Home</router-link>
    <router-link  @click.native="hideMenu" to="/main">Main</router-link>
    <router-link  @click.native="hideMenu" to="/contacts">About</router-link>
  </nav>
</template>

<script>
import ButtonHome from '@/components/ButtonHome.vue';
import ButtonHideMenu from '@/components/ButtonHideMenu.vue';

export default {
  methods: {
    hideMenu() {
      this.$parent.showMenu = false;
    },
  },
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ButtonHome,
    ButtonHideMenu,
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
}
a{
  text-decoration: none;
  color: white;
  margin-top: 20px;
  font-size: 3rem;
  font-family: 'Caveat', cursive;
}
.buttonHome {
  position: absolute;
  top: 20px;
  left: 20px;
}
.buttonHideMenu {
  position: absolute;
  top: 20px;
  right: 20px;
}
@media (min-width: 767px) {
  .buttonHome {
    top: 50px;
    left: 50px;
  }
  .buttonHideMenu {
    top: 50px;
    right: 50px;
  }
}
</style>
