<!-- ProductCard.vue -->
<template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <img :src="product.image" alt="Product Image">
    <p>Price: ${{ product.price }}</p>
    <!-- Other product details -->
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
