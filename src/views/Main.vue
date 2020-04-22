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
      <CategoryCard :nameCategory="this.$store.state.allProduct.gardenSphere.name"
                category="Уличные очаги">
        <template #svgContainer>
          <TheSphere></TheSphere>
        </template>
      </CategoryCard>
      <CategoryCard :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Мангалы">
        <template #svgContainer>
          <TheGrill></TheGrill>
        </template>
      </CategoryCard>
      <CategoryCard :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Решетки">
        <template #svgContainer>
          <TheReshetka></TheReshetka>
        </template>
      </CategoryCard>
      <CategoryCard :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Перила">
        <template #svgContainer>
          <ThePerila></ThePerila>
        </template>
      </CategoryCard>
      <CategoryCard :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Ворота">
        <template #svgContainer>
          <TheGate></TheGate>
        </template>
      </CategoryCard>
      <CategoryCard :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Калитки">
        <template #svgContainer>
          <TheSmallGate></TheSmallGate>
        </template>
      </CategoryCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryCard from '@/components/CategoryCard.vue';
import TheSphere from '@/components/TheSphere.vue';
import TheGrill from '@/components/TheGrill.vue';
import TheReshetka from '@/components/TheReshetka.vue';
import ThePerila from '@/components/ThePerila.vue';
import TheGate from '@/components/TheGate.vue';
import TheSmallGate from '@/components/TheSmallGate.vue';

export default {
  name: 'MainView',
  components: {
    CategoryCard,
    TheSphere,
    TheGrill,
    TheReshetka,
    ThePerila,
    TheGate,
    TheSmallGate,
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
  color: var(--main-text-color);
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
}
h1::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 50px;
    height: 2px;
    background: var(--hover-color);
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
