<!-- ProductCard.vue -->
<template>
  <div>
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <img :src="product.image" alt="Product Image" />
    <p>Price: €{{ product.price }}</p>
    <p>Quantity: {{ product.quantity }}</p>
    <p>Rating: {{ product.rating }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['product']);
</script>
