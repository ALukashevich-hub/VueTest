<template>
  <div
    class="home"
    @click="goMain"
  >
    <div class="logoHome">
      <Logo />
    </div>
    <h1>сайт/бренд</h1>
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
  components: {
    Logo,
  },
  methods: {
    goMain() {
      this.$router.push('main');
    },
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
  max-width: 90%;
}
p {
  font-size: 1.5rem;
}
h1 {
  font-size: 3rem;
  font-weight: normal;
}
  @media (min-width: 767px) {
  p{
  font-size: 1.7rem;
  }
  h1, p{
  max-width: 70%;
}
}
@media (min-width: 1399px) {
  h1, p{
  max-width: 50%;
  }
}
</style>
