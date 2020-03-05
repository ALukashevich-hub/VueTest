<template>
  <div class="wrap">
    <div v-if="idProduct < maxCountProduct"
         @click="nextPage" class="nextView">Следующий</div>
    <div v-if="idProduct > 1"
         @click="previousPage" class="previousView">Предыдущий</div>
    <router-link class="mainView" to="/main">Главное меню</router-link>
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
  </div>
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
    // images: [
    //   require('@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg'),
    //   pathTexture2,
    //   pathTexture3,
    // ],
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
  beforeRouteUpdate(to, from, next) {
    console.log(this.$route.params.nameCategory);
    console.log(this.$route.params.idProduct);
    console.log(`imgArray: ${this.imgArray}`);
    console.log(`images: ${this.images}`);
    this.images = this.imgArray;
    next();
  },
  created() {
    this.images = this.imgArray;
  },
  methods: {
    previousPage() {
      if (this.idProduct > 1) {
        this.$store.commit('previousProduct', this.$route.params.nameCategory);
        this.$router.push(`/Specific/${this.$route.params.nameCategory}/${this.idProduct}`);
      }
    },
    nextPage() {
      if (this.idProduct < this.maxCountProduct) {
        this.$store.commit('nextProduct', this.$route.params.nameCategory);
        this.$router.push(`/Specific/${this.$route.params.nameCategory}/${this.idProduct}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nextView, .previousView, .mainView {
  position: absolute;
  display: block;
  color: white;
  cursor: pointer;
  font-size: 1.7rem;
  font-family: 'Caveat', cursive;
}
.previousView{
  bottom: 5%;
  right: 35%;
}
.nextView {
  bottom: 5%;
  right: 5%;
}
.mainView {
  top: 120px;
  left: 50px;
  text-decoration: none;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column-reverse nowrap;
  color: white;
}
.left {
  border: 1px solid orange;
  flex: 1.5;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  overflow: hidden;
}
.right {
  border: 1px solid red;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
}
.vue-flux .flux-index {
  margin-top: auto;
}
.descProduct {
  margin: 0 1rem 1rem 1rem;
  font-size: 1.5rem;
}
.title {
  margin: 5rem 1rem 1rem 1rem;
}
@media (min-width: 767px) {
  .title {
    margin: 7rem 1rem 1rem 3rem;
  }
  .descProduct {
    margin: 0 3rem 1rem 3rem;
  }
  .vue-flux {
  margin: 0 50px;
}
}
@media (min-width: 1023px) {
  .descProduct {
    font-size: 1.7rem;
    max-width: 80%;
  }
  .wrap {
    flex-flow: row nowrap;
  }
  .right {
    justify-content: center;
  }
  .title {
    margin: 0 1rem 2rem 3rem;
  }
}
</style>
