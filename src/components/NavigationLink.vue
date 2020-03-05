<template>
  <transition name="fadeTest">
    <nav class="navLinkContainer" v-show="showMenu">
      <ButtonHome
        class="buttonHome"
        @click.native="$emit('hideMenu')"
      />
      <ButtonHideMenu
        class="buttonHideMenu"
        @click.native="$emit('hideMenu')"
      />
      <router-link
        class="navLink"
        :class="{onFocus: FocusId === 1}"
        to="/main"
        @mouseover.native="mouseOver(1)"
        @mouseleave.native="mouseLeave"
        @click.native="$emit('hideMenu')">Продукция
      </router-link>
      <router-link
        class="navLink"
        :class="{onFocus: FocusId === 2}"
        to="/contacts"
        @mouseover.native="mouseOver(2)"
        @mouseleave.native="mouseLeave"
        @click.native="$emit('hideMenu')">Контакты
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
  data() {
    return {
      FocusId: 0,
    };
  },
  methods: {
    mouseOver(number) {
      this.FocusId = number;
    },
    mouseLeave() {
      this.FocusId = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.navLinkContainer {
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
.navLink{
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 20px;
  font-size: 3rem;
  position: relative;
}
.router-link-active {
  color: white;
}
.navLink::after, .navLink::before {
  content: '';
  position: absolute;
  width: 0%;
  top: 60%;
  height: 2px;
  background: #e44a03;
  transition: all 150ms ease-out;
  }
.navLink::after {
  left: 100%;
  margin-left: 20px;
}
.navLink::before {
  right: 100%;
  margin-right: 20px;
}
.onFocus::after, .onFocus::before{
  width: 50px;
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
