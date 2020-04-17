<template>
  <div class="mainView" @mousemove="mouseHandler">
    <div class="middleText" :style="Transform">
      <h1>Наша продукция</h1>
      <p>
        Название сайта/бренда - это ремесленническая мастерская,
        специализированная на изготовлении декоративных изделий
        из металла
      </p>
    </div>
    <div class="middle" :style="Transform">
      <CategoryCard :nameCategory="this.$store.state.allProduct.gardenSphere.name"
                category="Уличные очаги">
        <template #svgContainer>
          <TheSphere></TheSphere>
        </template>
      </CategoryCard>
      <CategoryCard :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Мангалы">
        <template #svgContainer>
          <TheSphere></TheSphere>
        </template>
      </CategoryCard>
      <CategoryCard :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Решетки" />
      <CategoryCard :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Перила" />
      <CategoryCard :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Ворота" />
      <CategoryCard :nameCategory="this.$store.state.allProduct.barbecues.name"
                category="Калитки" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryCard from '@/components/CategoryCard.vue';
import throttle from 'lodash.throttle';
import TheSphere from '@/components/TheSphere.vue';

export default {
  name: 'MainView',
  components: {
    CategoryCard,
    TheSphere,
  },
  data() {
    return {
      mouseMoveThorttle: throttle(this.mouseLogic, 40),
      gain: 4,
      addX: 0,
      addY: 0,
      maxX: window.innerWidth,
      maxY: window.innerHeight,
    };
  },
  methods: {
    /*
      До перехода по ссылке необходимо:
      Показать дисплей загрузки, пока выполняются следующие действия.
      Запросить необходимые данные из Firestore, поместить в store,
      проверить что нет ошибок, перейти по ссылке и отобразить содержимое.
      */
    mouseLogic(event) {
    // conver value -1 to +1
      this.addY = event.clientY / this.maxY * 2 - 1;
      this.addX = event.clientX / this.maxX * 2 - 1;
    },
    mouseHandler(event) {
      this.mouseMoveThorttle(event);
    },
  },
  computed: {
    Transform() {
      return {
        transform: `translate3d(${this.addX * this.gain}px,${this.addY * this.gain}px, 0px)`,
      };
    },
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
