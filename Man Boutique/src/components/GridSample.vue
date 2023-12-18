<script>
import CardSample from './CardSample.vue';
import { useProductStore } from '../store/ProductStore';

export default {
  components: {
    CardSample
  },
  computed: {
    currentProducts() {
      const productStore = useProductStore();
      return productStore.products.slice(0, 3);
    }
  },
  mounted() {
    const productStore = useProductStore();
    productStore.fetchProducts();
  }
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col d-flex" v-for="productItem in currentProducts" :key="productItem.id">
        <CardSample :product="productItem" class="flex-fill"></CardSample>
      </div>
    </div>
  </div>
</template>

<style scoped>

.card-sample {
  display: flex;
  flex-direction: column;
}

.flex-fill {
  flex: 1;
}

</style>