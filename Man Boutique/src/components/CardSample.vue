<script>
import { useRouter } from 'vue-router';

export default {
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
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
  <div class="card-container">
    <div class="image-container">
      <img class="card-img-top" :src="product.image" />
    </div>
    <p class="product-name">{{ product.name }}</p>
    <button class="view-more-btn" @click="goToShop">View More</button>
  </div>
</template>
  
<style scoped>
.card-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.card-img-top {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

.image-container .card-img-top {
  transition: filter 0.3s ease, transform 0.4s ease;
}

.card-container:hover .image-container .card-img-top {
  filter: blur(2px);
  transform: scale(1.05);
}

.product-name {
  position: absolute;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(9, 3, 39, 0.9);
  color: rgb(244, 242, 242);
  padding: 5px;
  margin: 0;
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


.card-container:hover .view-more-btn {
  display: block;
}

.view-more-btn:hover {
  background-color: rgba(0, 0, 255, 0.7);
}
</style>