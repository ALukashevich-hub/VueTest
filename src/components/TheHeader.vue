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
      class="navigationLink"
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
  position: absolute;
  top: 20px;
  left: 20px;
}
.buttonShowMenu {
  position: absolute;
  top: 20px;
  right: 20px;
}
@media (min-width: 767px) {
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
