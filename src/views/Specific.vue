<template>
  <div class="wrap">
    <div class="left">
      <vue-flux :options="options" :images="images" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader />
        </template>

        <template v-slot:controls >
          <flux-controls />
        </template>
           <template v-slot:pagination>
      <flux-pagination />
   </template>
      <template v-slot:index>
      <flux-index />
   </template>
      </vue-flux>
    </div>
    <div class="right">
      <h1 class="title">TEST</h1>
      <p>
        Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Itaque placeat possimus dolo
        remque consectetur nihil sapiente
      </p>
      <p>
        Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Itaque placeat possimus dolo
      </p>
      <p>
        Lorem ipsum dolor sit amet
        consectetur adipisicing elit
      </p>
    </div>
  </div>
</template>

<script>
import pathTexture1 from '@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg';
import pathTexture2 from '@/assets/1558886217_nedovolnoe-kote-s-sigaretoy-art2.jpg';
import pathTexture3 from '@/assets/mlechnyi-put-zvezdy-noch-gory-peizazh-krasota.jpg';
import {
  VueFlux,
  FluxIndex,
  FluxControls,
  FluxPagination,
  FluxPreloader,
} from 'vue-flux';

export default {
  name: 'Specific',
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
    images: [pathTexture1, pathTexture2, pathTexture3],
    transitions: [
      'book',
    ],
  }),
  components: {
    VueFlux,
    FluxIndex,
    FluxControls,
    FluxPagination,
    FluxPreloader,
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
}
.right {
  border: 1px solid red;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
}
p {
  margin: 1rem;
  font-size: 1.5rem;
}
.title {
  margin: 5rem 1rem 1rem 1rem;
}
@media (min-width: 767px) {
  p {
    font-size: 1.5rem;
    max-width: 90%;
  }
  .wrap {
    flex-flow: row nowrap;
  }
  .right {
    justify-content: center;
  }
  .title {
    margin: 1rem;
  }
}
@media (min-width: 1023px) {
  p {
    font-size: 1.7rem;
    max-width: 80%;
  }
}
</style>
