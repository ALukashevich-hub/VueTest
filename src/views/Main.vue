<template>
  <div class="mainView">
    <div class="middleText">
      <h1>Наша продукция</h1>
      <p>
        Название сайта/бренда - это ремесленническая мастерская,
        специализированная на изготовлении декоративных изделий
        из металла
      </p>
    </div>
    <div class="middle">
      <Catalog :nameCategory="this.$store.state.allProduct.gardenSphere.name"
                category="Уличные очаги">
        <template v-slot:svgContainer>
            <symbol id="my-symbol" viewBox="-45 -45 600 600">
              <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/>
              <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/>
            </symbol>
            <use xlink:href="#my-symbol"/>
        </template>
      </Catalog>
      <Catalog :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Мангалы" />
      <Catalog :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Решетки" />
      <Catalog :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Перила" />
      <Catalog :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Ворота" />
      <Catalog :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Калитки" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog from '@/components/CategoryCard.vue';

export default {
  name: 'MainView',
  components: {
    Catalog,
  },
  methods: {
    /*
      До перехода по ссылке необходимо:
      Показать дисплей загрузки, пока выполняются следующие действия.
      Запросить необходимые данные из Firestore, поместить в store,
      проверить что нет ошибок, перейти по ссылке и отобразить содержимое.
      */
  },
};
</script>

<style lang="scss" scoped>
.mainView {
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
  font-weight: normal;
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
  font-size: 1.5rem;
}
  @media (min-width: 767px) {
  p{
  font-size: 1.7rem;
  }
}
</style>
