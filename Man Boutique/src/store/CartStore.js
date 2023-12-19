
import { defineStore } from 'pinia';
import { useProductStore } from './ProductStore';

function findProductInStore(productStore, productId) {
  return productStore.products.find(p => p.id === productId);
}

let products;
try {
  products = JSON.parse(localStorage.getItem('products')) || initialProducts;
} catch (error) {
  console.error('Failed to parse products from localStorage:', error);
  products = initialProducts;
}

export const useCartStore = defineStore({
  id: "cartStore",
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    products: products,
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
      const productInStore = findProductInStore(productStore, product.id);
                                                                                                                      //console.log('productId:', product.id);
                                                                                                                      //console.log('products:', productStore.products);
                                                                                                                      //console.log('cart:', this.cart);
                                                                                                                    
                                                                                                                      //console.log('Product:', product);
                                                                                                                      //console.log('Existing Product:', existingProduct);
                                                                                                                      //console.log('Product Store:', productStore);


    
      if (!existingProduct) {
        
                                                                                                                      //console.log('productId:', product.id);
                                                                                                                      //console.log('products:', productStore.products);
                                                                                                                      //console.log('cart:', this.cart);                                                                          //console.log('Product in store:', productInStore);
          if (!productInStore) {
          console.error('Product not found in the store:', product.id);
          this.saveCartToLocalStorage();
          
          return;
        }

        //verifica se tem stock disponível
        const availableStock = productInStore.quantity;
        
        if (availableStock > 0) {
          //se tiver stock adiciona ao carrinho
          this.cart.push({ ...productInStore, quantity: 1 });
          productInStore.quantity -= 1; 
                                                                                        //console.log('Cart:', this.cart);
        } else {
          //console.log('Not enough stock available.');
          alert("Not enough stock available.");
        }
      } else {
        
        const availableStock = productInStore.quantity;
    
        if (availableStock > 0) {
          existingProduct.quantity += 1;
          productInStore.quantity -= 1; 
                                                                                     // console.log('Cart:', this.cart);
        } else {
                                                                                     //console.log('Not enough stock available.');
          alert('Not enough stock available.');
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
        if (productInStore) {
          productInStore.quantity += 1; 
        }
      } else {
        this.removeFromCart(productId);
      }
    
      this.saveCartToLocalStorage();
      
    
      localStorage.setItem('products', JSON.stringify(productsInStore));
    },

    clearCart() {
      this.cart = [];
      this.saveCartToLocalStorage();
      
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
      const availableStock = productInStore ? productInStore.quantity  : 0;
    
      if (existingProduct && availableStock > 0) {
        existingProduct.quantity += 1;
        if (productInStore) {
          productInStore.quantity -= 1;
        }
      } else {
        alert('Empty stock.'); 
      }
    
      this.saveCartToLocalStorage();
      
      
      localStorage.setItem('products', JSON.stringify(productsInStore));
    },

    ApplyCheckout() {
      
    },

    

    //init() {
    //  const savedCart = localStorage.getItem('cart');
    //  if (savedCart) {
    //    this.cart = JSON.parse(savedCart);
    //  }
    //
    //  const savedProducts = localStorage.getItem('products');
    //  if (savedProducts) {
    //    this.products = JSON.parse(savedProducts);
    //  } else {
    //    
    //    this.products = getInitialProducts(); 
    //  }
    //},

  },
});
