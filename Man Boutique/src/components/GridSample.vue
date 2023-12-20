<script>
import { useRouter } from 'vue-router';
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
  },
  setup() {
    const router = useRouter();
    const goToShop = () => {
      router.push('/Shop');
    };
    return { goToShop };
  }
};
</script>

<template>
  <div class="container">
    <div class="mySampleCard row row-cols-1 row-cols-md-3 g-4">
      <div class="col d-flex p-3" v-for="productItem in currentProducts" :key="productItem.id">
        <div class="card-sample" @click="goToShop">
          <div class="card-content">
            <CardSample :product="productItem" class="flex-fill"></CardSample>
          </div>
          <button class="view-more-btn">View More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-sample {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid rgba(9, 3, 39, 0.8);
  transition: border 0.3s;
}

.card-content {
  display: flex;
  flex-direction: column;
  transition: filter 0.3s;
}

.card-sample:hover .card-content {
  filter: blur(2px);
}

.view-more-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  padding: 10px 20px;
  background-color: rgba(0, 0, 255, 0.5);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.card-sample:hover .view-more-btn {
  display: block;
}

.view-more-btn:hover {
  background-color: rgba(0, 0, 255, 0.7);
}
</style>