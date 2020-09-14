<template>
  <main class="wrap">
    <div class="linkContainer">
        <router-link class="link" to="/catalog">Каталог</router-link> /
        <router-link class="link"
        :to="{ name: 'ListProduct',
        params: { nameCategory: this.$route.params.nameCategory}}">
        {{this.$store.state[this.$route.params.nameCategory].name}}
        </router-link>
    </div>
    <div class="pageLink">
        <router-link
          :to="{ name: 'SpecificPage',
                params: { nameCategory: this.$route.params.nameCategory,
                idProduct: prevPage() }}"
          v-if="idProduct > 1"
          class="previousView">Предыдущий
        </router-link>
        <router-link
          :to="{ name: 'SpecificPage',
                params: { nameCategory: this.$route.params.nameCategory,
                idProduct: nextPage() }}"
          v-if="idProduct < maxCountProduct"
          class="nextView">Следующий
        </router-link>
    </div>
    <div class="left">
        <vue-flux :options="options" :images="images" :transitions="transitions">
          <template v-slot:preloader>
            <flux-preloader />
          </template>
          <template v-slot:index>
            <flux-index />
          </template>
          <template v-slot:pagination>
            <flux-pagination />
          </template>
        </vue-flux>
    </div>
    <div class="right">
      <h1 class="title">
        {{title}}
      </h1>
      <p class="descProduct"
         v-for="(item, index) in description" :key="index">
        {{item.description}}
      </p>
    </div>
  </main>
</template>

<script>
import {
  VueFlux, FluxIndex, FluxPagination, FluxPreloader,
} from 'vue-flux';

export default {
  name: 'Specific',
  components: {
    VueFlux,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
  },
  data: () => ({
    options: {
      allowFullscreen: true,
      allowToSkipTransition: true,
      autohideTime: 0,
      autoplay: false,
      bindKeys: true,
      delay: 5000,
      enableGestures: true,
      infinite: true,
      lazyLoad: true,
      lazyLoadAfter: 3,
    },
    images: [],
    transitions: ['swipe'],
  }),
  computed: {
    description() {
      return this.$store.state[this.$route.params.nameCategory]
        .info[this.idProduct - 1].descriptions;
    },
    title() {
      return this.$store.state[this.$route.params.nameCategory]
        .info[this.idProduct - 1].TitleSpec;
    },
    idProduct() {
      return this.$route.params.idProduct;
    },
    maxCountProduct() {
      return this.$store.state[this.$route.params.nameCategory]
        .info.length;
    },
    imgArray() {
      return this.$store.state[this.$route.params.nameCategory]
        .info[this.idProduct - 1].img;
    },
  },
  methods: {
    nextPage() {
      return Number(this.$route.params.idProduct) + 1;
    },
    prevPage() {
      return Number(this.$route.params.idProduct) - 1;
    },
    updadeImg() {
      this.images = this.imgArray;
    },
  },
  watch: {
    // при изменениях маршрута обновляем массив изображений
    $route: 'updadeImg',
  },
  // beforeRouteUpdate(to, from, next) {
  //   console.log(`to: ${to.params.idProduct} type ${typeof to.params.idProduct}`);
  //   console.log(`from: ${from.params.idProduct}`);
  //   // if (to.params.idProduct > from.params.idProduct) {
  //   //   this.$store.commit('nextProduct', this.$route.params.nameCategory);
  //   // } else {
  //   //   this.$store.commit('previousProduct', this.$route.params.nameCategory);
  //   // }
  //   this.images = this.imgArray;
  //   next();
  // },
  created() {
    this.images = this.imgArray;
  },
};
</script>

<style lang="scss" scoped>
.link, .previousView, .nextView {
  text-decoration-color: var(--hover-color);
}
.linkContainer, .previousView, .nextView, .link {
  color: var(--main-text-color);
  font-size: var(--font-size-xs);
  font-family: 'Caveat', cursive;
}
.fadeTransition2-enter-active {
  transition: opacity 0.7s;
}
.fadeTransition2-leave-active {
  transition: opacity 0.3s;
}
.fadeTransition2-enter, .fadeTransition2-leave-to {
  opacity: 0;
}
.pageLink{
  display: flex;
}
.previousView{
  margin: 0 auto 1rem 1rem;
}
.nextView{
  margin: 0 1rem 1rem auto;
}
.linkContainer {
  position: absolute;
  top: 80px;
  left: 20px;
}
.wrap {
  width: 100%;
  display: flex;
  flex-flow: column-reverse nowrap;
  color: var(--main-text-color);
}
.left {
  flex: 1.5;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  overflow: hidden;
}
.right {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
}
.vue-flux .flux-index {
  margin-top: auto;
}
.vue-flux {
  z-index: 1;
  margin: 1rem;
}
.descProduct {
  margin: 0 1rem 1rem 1rem;
  font-size: var(--font-size-xs);
}
.title {
  margin: 8rem 1rem 1rem 1rem;
  font-size: var(--font-size-md);
}
@media (min-width: 767px) {
  .title {
    margin: 10rem 3rem 1rem 3rem;
    font-size: var(--font-size-lg);
  }
  .descProduct {
    margin: 0 3rem 1rem 3rem;
  }
  .vue-flux {
  margin:1rem 3rem;
  }
  .previousView{
    margin: 0 auto 1rem 3rem;
  }
  .nextView{
    margin: 0 3rem 1rem auto;
  }
  .linkContainer {
    top: 110px;
    left: 50px;
  }
}
@media (min-width: 1023px) {
  .wrap {
    flex-flow: row nowrap;
    height: 100%;
  }
  .right {
    justify-content: center;
  }
  .title {
    margin: 0 3rem 1rem 3rem;
  }
  .link, .previousView, .nextView {
    font-size: var(--font-size-sm);
  }
  .pageLink{
    position: absolute;
    width: 100%;
    bottom: 100px;
    justify-content: center;
  }
  .previousView{
    margin: 0 2rem 0 0;
  }
  .nextView{
    margin: 0 0 0 2rem;
  }
}
</style>
