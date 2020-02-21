<template>
  <div @click="goMain" class="home">
    <div class="logoHome">
      <Logo/>
    </div>
    <h1>Здесь будет название сайта/бренда</h1>
    <p>
      Приветствую, здесь вы найдете примеры
      декоративных изделий из металла, их описание
      и примерную стоимость конечного продукта
    </p>

  </div>

</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue';

export default {
  name: 'Home',
  methods: {
    goMain() {
      this.$router.push('main');
    },
  },
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>


.home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    color: white;
    justify-content: center;
    align-items: center;
}
.logoHome {
    width: 100px;
    height: 100px;
}
h1{
  margin-bottom: 0;
}
h1, p{
  max-width: 80%;
}
@media (min-width: 1399px) {
  h1, p{
  max-width: 50%;
  }
}
</style>
