<template>
  <div
    class="home"
    @click="goMain"
  >
    <div class="logoHome">
      <BaseLogo />
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
import BaseLogo from '@/components/BaseLogo.vue';

export default {
  name: 'Home',
  components: {
    BaseLogo,
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
    color: var(--main-text-color);
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
