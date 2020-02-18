<template>
  <div class="navigation">
    <ButtonHome class="buttonHome" />
    <ButtonShowMenu @changeShowMenu="changeShowMenu" class="buttonShowMenu" />
    <NavigationLink :showMenu="showMenu" class="navigationLink"/>
  </div>
</template>

<script>
import ButtonHome from '@/components/ButtonHome.vue';
import ButtonShowMenu from '@/components/ButtonShowMenu.vue';
import NavigationLink from '@/components/NavigationLink.vue';

export default {
  name: 'Navigation',
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    changeShowMenu() {
      this.showMenu = !this.showMenu;
    },
  },
  components: {
    ButtonHome,
    ButtonShowMenu,
    NavigationLink,
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
