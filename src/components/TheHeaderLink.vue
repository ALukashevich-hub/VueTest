<template>
  <transition name="fadeTest">
    <nav class="navLinkContainer" v-show="showMenu">
      <HeaderButtonHideLink
        class="buttonHideMenu"
        @click.native="$emit('hide-menu')"
      />
      <router-link
        class="navLink"
        :class="{onFocus: FocusId === 1}"
        to="/catalog"
        @mouseover.native="mouseOver(1)"
        @mouseleave.native="mouseLeave"
        @click.native="$emit('hide-menu')">Каталог
      </router-link>
      <router-link
        class="navLink"
        :class="{onFocus: FocusId === 2}"
        to="/contacts"
        @mouseover.native="mouseOver(2)"
        @mouseleave.native="mouseLeave"
        @click.native="$emit('hide-menu')">Контакты
      </router-link>
    </nav>
  </transition>
</template>

<script>
import HeaderButtonHideLink from '@/components/HeaderButtonHideLink.vue';

export default {
  name: 'TheHeaderLink',
  components: {
    HeaderButtonHideLink,
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
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--background-color);
  z-index: 5;
  top: 0;
  left: 0;
}
.navLink{
  text-decoration: none;
  color: var(--grey-text-color);
  margin-top: 20px;
  font-size: var(--font-size-xl);
  position: relative;
}
.router-link-active {
  color: var(--main-text-color);
}
.navLink::after, .navLink::before {
  content: '';
  position: absolute;
  width: 0%;
  top: 60%;
  height: 2px;
  background: var(--hover-color);
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
.buttonHideMenu {
  position: absolute;
  top: 20px;
  right: 20px;
}
.fadeTest-enter-active {
  transition: opacity 0.5s;
}
.fadeTest-leave-active {
  transition: opacity 0.7s ease-in;
}
.fadeTest-enter, .fadeTest-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
@media (min-width: 1023px) {
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
