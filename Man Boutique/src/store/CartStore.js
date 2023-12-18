import { defineStore } from "pinia";
import { useProductStore } from "./ProductStore";

export const useCartStore = defineStore({
  id: "cartStore",
  state: () => ({
    cart: [],
  }),
  getters: {
    totalQuantity() {
      //return this.cart.length
      return this.cart.reduce((total, product) => total + product.quantity, 0);
    },
  },
  actions: {
    addToCart(product) {
      //verifica se produto já existe no carrinho
      const existingProduct = this.cart.find((item) => item.id === product.id);
      const productStore = useProductStore();
      let success = false;

      //se não existir, adiciona ao carrinho
      if (!existingProduct) {
        const productInStore = productStore.products.find(
          (p) => p.id === product.id
        );
        //se não existir na productStore, cancela
        if (!productInStore) {
          console.error("Product not found in the store:", product.id);
          this.saveCartToLocalStorage();
          return;
        }

        //verifica se tem stock disponível
        const availableStock = productInStore.quantity;
        
        if (availableStock > 0) {
          //se tiver stock adiciona ao carrinho
          this.cart.push({ ...productInStore, quantity: 1 });
          success = true;
        } else {
          //console.log('Not enough stock available.');
          alert("Not enough stock available.");
        }
      } else {
        //se já existir, incrementa quantidade
        const productInStore = productStore.products.find(
          (p) => p.id === product.id
        );
        const availableStock =
          productInStore.quantity - existingProduct.quantity;

        if (availableStock > 0) {
          existingProduct.quantity += 1;
          success = true;
        } else {
          alert("Not enough stock available.");
        }
      }
      this.saveCartToLocalStorage();


      return success;
    },

    saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    removeFromCart(productId) {
      const index = this.cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },

    decrementQuantity(productId) {
      const existingProduct = this.cart.find((item) => item.id === productId);

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
