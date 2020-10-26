<template>
  <main
    class="home"
    @mousemove="mouseHandler"
  >
    <div class="wrap" :style="Transform">
      <div class="logoHome">
        <BaseLogo :freq=0.002></BaseLogo>
      </div>
      <h1 class="logoName">Steelcraft</h1>
      <p class="logoDesc">
        Создайте уникальный стиль и атмосферу в своём доме,
         а также на прилегающей территории,
         с помощью фантазии и наших изделий
      </p>
      <router-link to="/catalog"
      class="productLink"><span class="linkLabel">Каталог</span>
      </router-link>
    </div>
    <Black></Black>
  </main>
</template>

<script>
// @ is an alias to /src
import BaseLogo from '@/components/BaseLogo.vue';
import Black from '@/components/Black.vue';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

export default {
  name: 'Home',
  components: {
    BaseLogo, Black,
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
    mouseHandler: throttle(function mouseH(event) {
      this.addY = event.clientY / this.maxY * 2 - 1;
      this.addX = event.clientX / this.maxX * 2 - 1;
    }, 40),
    resizeDebounce: debounce(function resizeD() {
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
  background-color: var(--button-color);
  color: var(--background-color);
  box-shadow: none;
  border: 2px var(--button-color) outset;
  box-shadow: 0px 0px 20px 5px var(--button-color);
  outline: none;
  &:hover, &:active, &:focus {
    box-shadow: 0px 0px 20px 5px var(--button-color-hover);
    background-color: var(--button-color-hover);
  }
  &:active {
    border-style: inset;
  }
  .linkLabel {
    margin: auto;
  }
}
@media (max-height: 550px) {
  .logoHome {
    width: 170px;
    height: 170px;
    margin-bottom: 0.7rem;
  }
  .logoName{
    margin: 0 0 0.7rem 0;
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
  .logoDesc{
    margin-bottom: 2rem;
  }
}
@media (min-width: 1439px) {
  .wrap{
    max-width: 50%;
  }
}
</style>
