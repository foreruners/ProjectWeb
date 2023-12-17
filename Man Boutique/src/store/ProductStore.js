import { defineStore } from 'pinia';
import axios from 'axios';
import { useRatingStore } from './RatingStore';

export const useProductStore = defineStore({
  id: 'productStore',
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProducts() {
      
      this.loading = true;
      
      try {
        const ratingStore = useRatingStore(); 
        const response = await axios.get('http://127.0.0.1:3333/products');

        const productsWithRatings = response.data.map(product => {
        const existingRating = ratingStore.getRating(product.id);
        const randomRating = existingRating || Math.floor(Math.random() * 5) + 1;
          
        ratingStore.setRating(product.id, randomRating);
          
          return {
            ...product,
            rating: randomRating,
          };
        });

        this.products = productsWithRatings;
        this.error = null;
      } catch (error) {
        console.error('Error fetching products:', error);
        this.error = 'Error fetching products. Please try again later.';
      } finally {
        this.loading = false;
      }
    },
  },
});