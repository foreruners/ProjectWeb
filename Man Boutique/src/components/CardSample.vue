<script>
export default {
    props: {
        product: {
            type: Object,
            default: () => ({})
        }
    }
};
</script>

<template>
        <div class="card-container ">
            <img class="card-img-top" :src="product.image" />
            <p class="product-name">{{ product.name }}</p>
        </div>
</template>
  
<style scoped>

.card-container {
  position: relative;
  width: 300px;
  height: 400px;
}

.card-img-top {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.product-name {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(9, 3, 39, 0.6); 
  color: white;
  padding: 5px;
  margin: 0;
}

</style>
  