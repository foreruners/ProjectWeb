<!-- 


<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  async created() {
    try {
        
      console.log('Fetching products...');
      const response = await this.$axios.get('http://127.0.0.1:3333/products');
      this.products = response.data;
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      this.loading = false;
    }
  },
};
</script>


<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Product Image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        <p>Quantity: {{ product.quantity }}</p>
        <p>Rating: {{ product.rating }}</p>
      </li>
    </ul>
  </div>
</template> -->




<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '../store/ProductStore';


console.log('2');


  
    const productStore = useProductStore();
    

    onMounted(() => {
      console.log('1');
      productStore.fetchProducts();
      console.log(productStore.products);

    });

    const productList = ref([]);



</script>

<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="productItem in productStore.products" :key="productItem.id">
        <img :src="productItem.image" alt="Product Image" />
        <h3>{{ productItem.name }}</h3>
        <p>{{ productItem.description }}</p>
        <p>Price: ${{ productItem.price }}</p>
        <p>Quantity: {{ productItem.quantity }}</p>
        <p>Rating: {{ productItem.rating }}</p>
      </li>
    </ul>
  </div>
</template>































