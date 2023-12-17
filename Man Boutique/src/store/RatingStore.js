import { defineStore } from 'pinia';
import { onMounted } from 'vue';

function generateUserId() {
    const userId = Math.random().toString(36).substr(2, 10);
    localStorage.setItem('userId', userId);
    return userId;
  }

export const useRatingStore = defineStore({
  id: 'ratingStore',
  state: () => ({
    productRatings: {}, // Estado que armazena as avaliações dos produtos
  }),
  actions: {
    setRating: async function (productId, rating) {
        // Obtain the user's unique identifier from localStorage
        const userId = localStorage.getItem('userId') || generateUserId();
        
        // Obtain the existing ratings for the product
        const storedRatings = await new Promise((resolve) => {
          const data = JSON.parse(localStorage.getItem('productRatings')) || {};
          resolve(data);
        });
        // Get or create the user's ratings for the product
        const userRatings = storedRatings[productId] || [];
        
        // Add the new rating to the user's ratings
        userRatings.push    ({ value: rating, userId });
      
        // Update the stored ratings with the user's ratings
        storedRatings[productId] = userRatings;
      
        // Save the updated ratings in localStorage
        localStorage.setItem('productRatings', JSON.stringify(storedRatings));
      
        // Update the store with the updated ratings
        this.productRatings = storedRatings;
      
        // Calculate the average rating
        this.calculateAverageRating(productId);
      },
      
    getRating(productId) {
      return this.productRatings[productId] || 0; // Retorna a avaliação do produto ou 0 se não existir
    },
    calculateAverageRating(productId) {
        const ratings = this.productRatings[productId];
      
        if (ratings && ratings.length > 0) {
          const totalRatings = ratings.length;
          const sum = ratings.reduce((acc, rating) => acc + rating.value, 0);
          const averageRating = sum / totalRatings;
      
          // Update the average rating in the store
          this.productRatings = { ...this.productRatings, [productId]: [...ratings, averageRating] };
      
          // Return the calculated average rating
          return averageRating;
        } else {
          // No ratings, set average to 0
          this.productRatings = { ...this.productRatings, [productId]: 0 };
      
          // Return 0 for cases where there are no ratings
          return 0;
        }
      },
      
  },
});


onMounted(async () => {

  
    useRatingStore.productRatings = storedProductRatings;
  
    const productIds = Object.keys(storedProductRatings);
    productIds.forEach(productId => {
      useRatingStore.calculateAverageRating(productId);
    });
  });
  
