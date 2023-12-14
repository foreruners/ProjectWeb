<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '../store/ProductStore';
import ProductCard from '../components/ProductCard.vue'

 
    const productStore = useProductStore();
    

    onMounted(() => {
      productStore.fetchProducts();
    });

</script>

<template>
  <div class="container px-2 px-md-4 mt-5">
    <div class="row gx-2 gx-md-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
      <div v-for="productItem in productStore.products" :key="productItem.id" class="col mb-4">
        <ProductCard :product="productItem" />
      </div>
    </div>
  </div>
</template>





































































