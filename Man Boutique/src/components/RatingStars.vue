<template>
  <div>
    <span
      v-for="index in 5"
      :key="index"
      class="star"
      :class="{ filled: index <= rating }"
      @click="setRating(index)"
    >
      <i class="bi bi-star-fill"></i>
    </span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRatingStore } from '../store/RatingStore';

const ratingStore = useRatingStore();
const objectId = defineProps(['objectId']);



const rating = ratingStore.calculateAverageRating(objectId.objectId) || 0;



const setRating = (value) => {
  ratingStore.setRating(objectId.objectId, value);
};





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
