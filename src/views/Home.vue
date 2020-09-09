<template>
  <main
    class="home"
    @mousemove="mouseHandler"
  >
    <div class="wrap" :style="Transform">
      <div class="logoHome">
        <BaseLogo />
      </div>
      <h1 class="logoName">сайт/бренд</h1>
      <p class="logoDesc">
        Приветствую, здесь вы найдете примеры
        декоративных изделий из металла, их описание
        и примерную стоимость конечного продукта
      </p>
      <router-link to="/product"
      class="productLink"><span class="linkLabel">Продукция</span>
      </router-link>
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
    width: 90%;
    max-width: 500px;
}
.logoHome {
    width: 200px;
    height: 200px;
    margin-bottom: 1rem;
}
.logoName{
  margin: 0 0 1rem 0;
  font-size: var(--font-size-xl);
}
.logoDesc{
  margin: 0 0 1rem 0;
  font-size: var(--font-size-xs);
}
.productLink {
  width: 100%;
  max-width: 400px;
  height: 2.5rem;
  display: flex;
  text-decoration: none;
  font-size: var(--font-size-xs);
  box-sizing: border-box;
  background: transparent;
  color: #ffffff;
  box-shadow: none;
  border: 2px green outset;
  box-shadow: 0px 0px 20px 5px green;
  outline: none;
  &:hover {
    box-shadow: 0px 0px 20px 5px rgb(137, 182, 13);
  }
  &:active {
    background-color: rgb(137, 182, 13);
    border-style: inset;
  }
  .linkLabel {
    margin: auto;
  }
}
@media (min-width: 767px) {
  .wrap{
    max-width: none;
    width: 70%;
  }
  .logoDesc{
    font-size: var(--font-size-sm);
  }
  .productLink {
    max-width: none;
    width: 40%;
  }
}
@media (min-width: 1023px) {
  .home{
    position: initial;
  }
}
@media (min-width: 1439px) {
  .wrap{
    max-width: 50%;
  }
}
</style>
