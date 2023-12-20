import { defineStore } from 'pinia';
import { useProductStore } from './ProductStore';

function findProductInStore(productStore, productId) {
  return productStore.products.find(p => p.id === productId);
}

let products;
let cart;
try {
  products = JSON.parse(localStorage.getItem('products')) || [];
  cart = JSON.parse(localStorage.getItem('cart')) || [];
} catch (error) {
  console.error('Failed to parse products from localStorage:', error);
  products = [];
  cart = [];
}

export const useCartStore = defineStore({
  id: "cartStore",
  state: () => ({
    cart: cart,
    products: products,
  }),
  getters: {
    totalQuantity() {

      return this.cart.reduce((total, product) => total + product.quantity, 0);
    },
  },
  actions: {
    addToCart(product) {

      const existingProduct = this.cart.find((item) => item.id === product.id);
      const productStore = useProductStore();
      let success = false;


      if (!existingProduct) {
        const productInStore = productStore.products.find(
          (p) => p.id === product.id
        );

        if (!productInStore) {
          console.error("Product not found in the store:", product.id);
          this.saveCartToLocalStorage();

          return;
        }


        const availableStock = productInStore.quantity;

        if (availableStock > 0) {

          this.cart.push({ ...productInStore, quantity: 1 });
          //alert("Product added to cart.");s

        } else {

          alert("Not enough stock available.");
        }
      } else {

        const productInStore = productStore.products.find(
          (p) => p.id === product.id
        );
        const availableStock =
          productInStore.quantity - existingProduct.quantity;

        if (availableStock > 0) {
          existingProduct.quantity += 1;
         // alert("Product added to cart.");

        } else {
          alert("Not enough stock available.");
        }
      }
      this.saveCartToLocalStorage();



    },

    saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    saveProductsToLocalStorage() {
      localStorage.setItem('products', JSON.stringify(this.products));
    },

    loadCartFromLocalStorage() {
      const cart = localStorage.getItem('cart');
      if (cart) {
        this.cart = JSON.parse(cart);
      }
    },

    loadProductsFromLocalStorage() {
      const products = localStorage.getItem('products');
      if (products) {
        this.products = JSON.parse(products);
      }
    },


    removeFromCart(productId) {
      const index = this.cart.findIndex(item => item.id === productId);


      let productsInStore;
      try {
        productsInStore = JSON.parse(localStorage.getItem('products'));
      } catch (error) {
        console.error('Failed to parse products from localStorage:', error);
      }

      const productInStore = productsInStore ? productsInStore.find(p => p.id === productId) : null;

      if (index !== -1) {
        if (productInStore) {
          productInStore.quantity += 1;
        }
        this.cart.splice(index, 1);
        this.saveCartToLocalStorage();
      }


      localStorage.setItem('products', JSON.stringify(productsInStore));
    },

    decrementQuantity(productId) {
      const existingProduct = this.cart.find(item => item.id === productId);


      let productsInStore;
      try {
        productsInStore = JSON.parse(localStorage.getItem('products'));
      } catch (error) {
        console.error('Failed to parse products from localStorage:', error);
      }

      const productInStore = productsInStore ? productsInStore.find(p => p.id === productId) : null;

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;

      } else {
        this.removeFromCart(productId);
      }

      this.saveCartToLocalStorage();


      localStorage.setItem('products', JSON.stringify(productsInStore));
    },

    clearCart() {
      this.cart = [];
      this.saveCartToLocalStorage();
      location.reload();


    },

    incrementQuantity(productId) {
      const existingProduct = this.cart.find(item => item.id === productId);


      let productsInStore;
      try {
        productsInStore = JSON.parse(localStorage.getItem('products'));
      } catch (error) {
        console.error('Failed to parse products from localStorage:', error);
      }

      const productInStore = productsInStore ? productsInStore.find(p => p.id === productId) : null;
      const availableStock = productInStore ? productInStore.quantity - existingProduct.quantity : 0;


      if (existingProduct && availableStock > 0) {
        existingProduct.quantity += 1;

      } else {
        alert('Empty stock.');
      }

      this.saveCartToLocalStorage();



    },





  },
});
