<template>
  <div class="navigation">
    <HeaderButtonHome
      v-if="VisibleButtonHome"
      @click.native="Hide"
      class="buttonHome"
    />
    <HeaderButtonShowLink
      class="buttonShowMenu"
      @changeShowMenu="changeShowMenu"
    />
    <TheHeaderLink
      :show-menu="showMenu"
      @hide-menu="Hide"
    />
    <div v-if="VisibleButtonHome" class="headerPhone">
      <p class="phone">МТС +375 (25) 777-21-20</p>
    </div>
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
  z-index: 10;
  top: 20px;
  left: 20px;
}
.headerPhone {
  position: fixed;
  top: 35px;
  right: 100px;
  color: var(--main-text-color);
  font-size: 1rem;
  color: var(--hover-color);
}
.phone {
  margin: 0;
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
@media (min-width: 374px) {
  .headerPhone {
    font-size: 1.2rem;
    right: 120px;
  }
}
@media (min-width: 767px) {
  .headerPhone {
    right: 170px;
  }
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
  .headerPhone {
    top: 55px;
    right: 200px;
  }
}
</style>
