<template>
  <div
    class="home"
    @mousemove="mouseHandler"
    @click="goMain"
  >
    <div class="wrap" :style="Transform">
      <div class="logoHome">
        <BaseLogo />
      </div>
      <h1>сайт/бренд</h1>
      <p >
        Приветствую, здесь вы найдете примеры
        декоративных изделий из металла, их описание
        и примерную стоимость конечного продукта
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseLogo from '@/components/BaseLogo.vue';
import throttle from 'lodash.throttle';

export default {
  name: 'Home',
  components: {
    BaseLogo,
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
    goMain() {
      this.$router.push('main');
    },
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


.home{
    width: 100%;
    height: 100%;
    display: flex;
    color: var(--main-text-color);
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.wrap{
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
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
