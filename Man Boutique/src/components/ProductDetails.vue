<!-- ProductDetails.vue -->
<template>
    <div class="container px-4 px-lg-5 mt-5" v-if="product">
      <div class="row">
        <div class="col-md-6">
          <img class="card-img-top mb-5 mb-md-0" :src="product.image" alt="Product Image">
        </div>
        <div class="col-md-6">
          <h2>{{ product.name }} Details</h2>
          <p>{{ product.description }}</p>
          <p>Price: €{{ product.price }}</p>
          <p>Quantity: {{ product.quantity }}</p>
          <p>Rating: {{ product.rating }}</p>
          <!-- Add more details as needed -->
        </div>
      </div>
    </div>
    <div v-else>
      <!-- Handle the case where the product is not found -->
      Product not found
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useProductStore } from '../store/ProductStore';
  
  export default defineComponent({
    name: 'ProductDetails',
    setup() {
      const productStore = useProductStore();
      const route = useRoute();
      const productId = route.params.id;
  
      // Create a reactive reference for the product
      const product = ref(null);
  
      onMounted(() => {
        // Find the product with the specified ID in the store
        product.value = productStore.getProductById(productId);
        
      });
  
      return { product };
    },
  });
  </script>
  
  <style scoped>
  .card-img-top {
    max-width: 100%;
    height: auto;
  }
  </style>
  