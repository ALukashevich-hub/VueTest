<template>
  <transition name="fadeTest">
    <nav v-show="showMenu">
      <ButtonHome
        class="buttonHome"
        @click.native="$emit('hideMenu')"
      />
      <ButtonHideMenu
        class="buttonHideMenu"
        @click.native="$emit('hideMenu')"
      />
      <router-link
        class="linktest"
        to="/main"
        @click.native="$emit('hideMenu')"
      >
        Продукция
      </router-link>
      <router-link
        class="linktest"
        to="/contacts"
        @click.native="$emit('hideMenu')"
      >
        Контакты
      </router-link>
    </nav>
  </transition>
</template>

<script>
import ButtonHome from '@/components/ButtonHome.vue';
import ButtonHideMenu from '@/components/ButtonHideMenu.vue';

export default {
  components: {
    ButtonHome,
    ButtonHideMenu,
  },
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
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
  z-index: 50;
}
.linktest{
  text-decoration: none;
  color: white;
  margin-top: 20px;
  font-size: 3rem;
  //font-family: 'Caveat', cursive;
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
.fadeTest-enter-active, .fadeTest-leave-active {
  transition: opacity .5s;
}
.fadeTest-enter, .fadeTest-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
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
