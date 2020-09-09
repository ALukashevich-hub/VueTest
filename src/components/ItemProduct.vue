<template>
    <router-link :class="$style.cell"
        :to="{ name: 'SpecificPage',
        params: { nameCategory: this.$route.params.nameCategory, idProduct: propID}}">
        <flux-image
          color="#333333"
          :image=propImage
          :size="{ width: 300, height: 168.7 }"
        />
        <h2 :class="$style.caption">{{title}}</h2>
    </router-link>
</template>

<script>
import {
  FluxImage,
} from 'vue-flux';

export default {
  name: 'ItemProduct',
  components: {
    FluxImage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    propImage: {
      required: true,
    },
    propID: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    image: null,
  }),
};
</script>

<style lang="scss" module>
.cell {
  text-align: center;
  text-decoration: none;
  color: var(--main-text-color);
}
.caption {
  margin: 0;
  position: relative;
  display: inline;
  font-size: var(--font-size-sm);
}
@media (min-width: 767px) {

}
@media (min-width: 1023px) {

}
</style>
