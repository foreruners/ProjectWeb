import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index.js';
import axios from 'axios';
import { useCartStore } from './store/CartStore.js';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importar o arquivo CSS


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const pinia = createPinia(); 

const app = createApp(App);
app.use(pinia); 
app.use(router).mount('#app');
app.config.globalProperties.$axios = axios;
const cartStore = useCartStore();
// Load the cart from localStorage when the app starts
cartStore.cart = JSON.parse(localStorage.getItem('cart')) || [];

export { pinia };
AOS.init();
