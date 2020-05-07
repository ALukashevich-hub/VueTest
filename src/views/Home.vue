<template>
  <main
    class="home"
    @mousemove="mouseHandler"
    @click="goMain"
  >
    <div class="wrap" :style="Transform">
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
  </main>
</template>

<script>
// @ is an alias to /src
import BaseLogo from '@/components/BaseLogo.vue';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

export default {
  name: 'Home',
  components: {
    BaseLogo,
  },
  data() {
    return {
      gain: 4,
      addX: 0,
      addY: 0,
      maxX: 0,
      maxY: 0,
    };
  },
  created() {
    this.maxX = window.innerWidth;
    this.maxY = window.innerHeight;
    window.addEventListener('resize', this.resizeDebounce);
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeDebounce);
  },
  methods: {
    goMain() {
      this.$router.push('product');
    },
    mouseHandler: throttle(function (event) {
      this.addY = event.clientY / this.maxY * 2 - 1;
      this.addX = event.clientX / this.maxX * 2 - 1;
    }, 40),
    resizeDebounce: debounce(function () {
      this.maxX = window.innerWidth;
      this.maxY = window.innerHeight;
    }, 200),
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
    color: var(--main-text-color);
    cursor: pointer;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}
.wrap{
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    align-items: center;
    max-width: 90%;
}
.logoHome {
    width: 200px;
    height: 200px;
}
h1{
  margin-bottom: 0;
  font-size: var(--font-size-xl);
}
p{
  font-size: var(--font-size-xs);
}
@media (min-width: 767px) {
  .wrap{
    max-width: 70%;
  }
  p{
  font-size: var(--font-size-sm);
  }
}
@media (min-width: 1023px) {
  .home{
    position: initial;
  }
}
@media (min-width: 1399px) {
  .wrap{
    max-width: 50%;
  }
}
</style>
