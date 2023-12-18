<template>
  <div>
    <span
      v-for="index in 5"
      :key="index"
      class="star"
      :class="{ filled: index <= rating }"
    >
      <i class="bi bi-star-fill"></i>
    </span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useProductStore } from '../store/ProductStore';

const objectId = defineProps(['objectId']);
const productStore = useProductStore();

const product = productStore.products.find((product) => product.id === objectId.objectId);

const rating = product.rating; 



</script>

<style scoped>
.star {
  color: #ccc;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 0.2rem;
}

.filled {
  color: #ffc107;
}
</style>
