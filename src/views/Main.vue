<template>
  <div class="main">
      <div class="middleText">
        <h1>H1 header</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Architecto aperiam iure tenetur veniam esse amet
          doloribus maiores ipsum? Atque, voluptates. Quibusdam
          sapiente sed sunt optio.
        </p>
      </div>
      <div class="middle">
        <Catalog category="test1"/>
        <Catalog category="test2"/>
        <Catalog category="test3"/>
        <Catalog />
        <Catalog />
        <Catalog />
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Catalog from '@/components/CategoryCard.vue';

export default {
  name: 'main',
  components: {
    Catalog,
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #8c9299;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.middle {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-flow: row wrap;
}
h1,
p {
  max-width: 600px;
  font-family: 'Caveat', cursive;
}
p{
  font-size: 1.4rem;
}
</style>
