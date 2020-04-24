<template>
  <div class="navigation">
    <HeaderButtonHome
      v-if="VisibleButtonHome"
      class="buttonHome"
    />
    <HeaderButtonShowLink
      class="buttonShowMenu"
      @changeShowMenu="changeShowMenu"
    />
    <TheHeaderLink
      :show-menu="showMenu"
      @hideMenu="Hide"
    />
  </div>
</template>

<script>
import HeaderButtonHome from '@/components/HeaderButtonHome.vue';
import HeaderButtonShowLink from '@/components/HeaderButtonShowLink.vue';
import TheHeaderLink from '@/components/TheHeaderLink.vue';

export default {
  name: 'TheHeader',
  components: {
    HeaderButtonHome,
    HeaderButtonShowLink,
    TheHeaderLink,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    VisibleButtonHome() {
      return this.$route.name !== 'HomePage';
    },
  },
  methods: {
    changeShowMenu() {
      this.showMenu = !this.showMenu;
    },
    Hide() {
      this.showMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.buttonHome {
  position: fixed;
  top: 20px;
  left: 20px;
}
.buttonShowMenu {
  position: fixed;
  top: 30px;
  right: 20px;
}
.navigation{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: hsla(0, 0%, 0%, 0.8);
  z-index: 3;
}
@media (min-width: 767px) {

}
@media (min-width: 1023px) {
  .navigation{
    position: initial;
    height: 0;
  }
  .buttonHome {
    top: 50px;
    left: 50px;
  }
  .buttonShowMenu {
    top: 50px;
    right: 50px;
  }
}
</style>
