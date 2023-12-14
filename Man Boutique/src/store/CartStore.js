import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cartStore',
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product) {
      const existingProduct = this.cart.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }

      console.log(this.cart);
    },

    removeFromCart(productId) {
      const index = this.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },

    decrementQuantity(productId) {
      const existingProduct = this.cart.find(item => item.id === productId);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        this.removeFromCart(productId);
      }
    },

    clearCart() {
      this.cart = [];
    },
  },
});
