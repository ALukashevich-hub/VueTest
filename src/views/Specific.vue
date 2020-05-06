<template>
  <main class="wrap">
    <router-link class="mainView" to="/product">Продукция</router-link>
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
      bindKeys: false,
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
      return this.$store.state.allProduct[this.$route.params.nameCategory]
        .info[this.idProduct - 1].descriptions;
    },
    title() {
      return this.$store.state
        .allProduct[this.$route.params.nameCategory]
        .info[this.idProduct - 1].TitleSpec;
    },
    idProduct() {
      return this.$store.state.allProduct[this.$route.params.nameCategory].idProduct;
    },
    maxCountProduct() {
      return this.$store.state
        .allProduct[this.$route.params.nameCategory]
        .info.length;
    },
    imgArray() {
      return this.$store.state.allProduct[this.$route.params.nameCategory]
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
  },
  beforeRouteUpdate(to, from, next) {
    console.log(`to: ${to.params.idProduct} type ${typeof to.params.idProduct}`);
    console.log(`from: ${from.params.idProduct}`);
    if (to.params.idProduct > from.params.idProduct) {
      this.$store.commit('nextProduct', this.$route.params.nameCategory);
    } else {
      this.$store.commit('previousProduct', this.$route.params.nameCategory);
    }
    this.images = this.imgArray;
    next();
  },
  created() {
    this.images = this.imgArray;
  },
};
</script>

<style lang="scss" scoped>
.mainView, .previousView, .nextView {
  text-decoration-color: var(--hover-color);
  color: var(--main-text-color);
  font-size: var(--font-size-xs);
  font-family: 'Caveat', cursive;
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
.mainView {
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
  margin-top: 8rem;
  text-align: center;
  font-size: var(--font-size-lg);
}
@media (min-width: 767px) {
  .title {
    margin-top: 10rem;
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
  .mainView {
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
    margin: 0 0 2rem 0;
  }
  .mainView, .previousView, .nextView {
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
