import { defineStore } from 'pinia';
import { useProductStore } from './ProductStore';

export const useCartStore = defineStore({
  id: 'cartStore',
  state: () => ({
    cart: [],
  }),
  getters: {
    totalQuantity() {
      return this.cart.reduce((total, product) => total + product.quantity, 0);
    },
  },
  actions: {
    addToCart(product) {
      const existingProduct = this.cart.find(item => item.id === product.id);
      const productStore = useProductStore();

      console.log('Product:', product);
      console.log('Existing Product:', existingProduct);
      console.log('Product Store:', productStore);
    
      if (!existingProduct) {
        const productInStore = productStore.products.find(p => p.id === product.id);
                                                                                      console.log('Product in store:', productInStore);
          if (!productInStore) {
          console.error('Product not found in the store:', product.id);
          return;
        }
    
        const availableStock = productInStore.quantity;
                                                                                      console.log('Available stock:', availableStock);    
                                                                                      console.log('Product in store:', productInStore.quantity);
    
        if (availableStock > 0) {
          this.cart.push({ ...productInStore, quantity: 1 });
          console.log('Cart:', this.cart);
        } else {
                                                                                      console.log('Not enough stock available.');
          alert('Not enough stock available2.');
        }
      } else {
        const productInStore = productStore.products.find(p => p.id === product.id);
        const availableStock = productInStore.quantity - existingProduct.quantity;
    
        if (availableStock > 0) {
          existingProduct.quantity += 1;
                                                                                      console.log('Cart:', this.cart);
        } else {
          console.log('Not enough stock available.');
          alert('Not enough stock available.');
        }
      }
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
