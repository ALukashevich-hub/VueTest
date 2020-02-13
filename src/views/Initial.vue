<template>
  <div @click="goMain" class="initial">
    <h1>Hello, I am andrey and this is my first SPA</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Harum odit deserunt eveniet nam hic voluptatibus, veritatis
      autem exercitationem nostrum pariatur repudiandae accusantium
      doloremque assumenda tempore sint nemo in culpa. Autem!
    </p>

  </div>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'initial',
  // components: {

  // },
  methods: {
    goMain() {
      this.$router.push('main');
    },
  },
};
</script>

<style lang="scss" scoped>


.initial{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    color: white;
    justify-content: center;
    align-items: center;
}
h1{
  margin-bottom: 2rem;
}
h1, p{
  max-width: 70%;
}
@media (min-width: 1399px) {
  h1, p{
  max-width: 50%;
  }
}
</style>
