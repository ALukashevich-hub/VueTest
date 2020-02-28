<template>
  <div class="wrap">
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
      <h1 class="title">{{testMessage}}</h1>
      <p>
        Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet
        consectetur adipisicing elit
      </p>
    </div>
  </div>
</template>

<script>
// import pathTexture1 from '@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg';
import pathTexture2 from '@/assets/1558886217_nedovolnoe-kote-s-sigaretoy-art2.jpg';
import pathTexture3 from '@/assets/mlechnyi-put-zvezdy-noch-gory-peizazh-krasota.jpg';
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
    images: [
      require('@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg'),
      pathTexture2,
      pathTexture3,
    ],
    transitions: ['book'],
  }),
  props: {
    testMessage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column-reverse nowrap;
  color: white;
}
.left {
  border: 1px solid orange;
  flex: 1;
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
p {
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
  p {
    margin: 1rem 3rem;
  }
}
@media (min-width: 1023px) {
  p {
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
    margin: 0 1rem 0 3rem;
  }
}
</style>
