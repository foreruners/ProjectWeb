import { defineStore } from 'pinia';
import axios from 'axios';

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
        const response = await axios.get('http://127.0.0.1:3333/products');

        const getProducts = response.data.map(product => ({
          ...product,
        }));

        this.products = getProducts;
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
