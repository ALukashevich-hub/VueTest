<template>
  <div class="main">
      <div class="middleText">
        <h1>Наша продукция</h1>
        <p>
          Название сайта/бренда - это ремесленническая мастерская,
          специализированная на изготовлении декоративных изделий
          из металла
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
h1::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 50px;
    height: 2px;
    background: #e44a03;
}
p{
  font-size: 1.7rem;
}
</style>
