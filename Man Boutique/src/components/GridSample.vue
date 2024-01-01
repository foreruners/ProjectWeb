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
    },
    aosEffects() {
      return ['fade-right', 'flip-down', 'fade-left'];
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
      <div class="col d-flex p-3" v-for="(productItem, index) in currentProducts" :key="productItem.id">
        <div class="card-sample" :data-aos="aosEffects[index % aosEffects.length]">
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
  border:2px solid #8e8e8e83;
  border-top-left-radius: 4%;
  border-bottom-left-radius: 4%;
  background-color: white;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
}

.card-content {
  display: flex;
  flex-direction: column;
}
</style>