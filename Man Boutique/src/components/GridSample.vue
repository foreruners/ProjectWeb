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
    <div class="mySampleCard row row-cols-1 row-cols-md-3 g-4">
      <div class="col d-flex p-3" v-for="productItem in currentProducts" :key="productItem.id">
        <div class="card-sample">
          <div class="card-content">
            <CardSample :product="productItem" class="flex-fill"></CardSample>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-sample {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(9, 3, 39, 0.8);
}

.card-content {
  display: flex;
  flex-direction: column;
}
</style>