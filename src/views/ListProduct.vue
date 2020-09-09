<template>
  <main
  :class="$style.outerContainer">
    <div :class="$style.innerContainer">
      <ItemProduct
      v-for="item in items"
      :key="item.idProduct"
      :propID="item.idProduct"
      :title="item.TitleSpec"
      :propImage="item.lowImg">
      </ItemProduct>
    </div>
  </main>
</template>

<script>
import ItemProduct from '@/components/ItemProduct.vue';

export default {
  name: 'ListProduct',
  components: {
    ItemProduct,
  },
  data() {
    return {
      items: 0,
      productCount: 0,
      width: 0,
      height: 0,
    };
  },
  created() {
    this.items = this.$store.state[this.$route.params.nameCategory].info;
    this.productCount = this.items.length;
  },
};
</script>

<style lang="scss" module>
.outerContainer {
  margin: 8rem 0 5rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: var(--main-text-color);
  justify-content: center;
  align-items: center;
}
.innerContainer {
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: var(--main-text-color);
  gap: 1rem;
  justify-content: center;
  align-content: center;
}
@media (min-width: 767px) {
  .outerContainer {
    width: 100%;
    height: 100%;
  }
    .innerContainer {
    gap: 2rem;
  }
}
@media (min-width: 1023px) {
  .outerContainer {
    margin: 0;
  }
}
@media (min-width: 1439px) {
  .innerContainer {
    width: 70%;
  }
}
</style>
