import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index.js';
import axios from 'axios';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const pinia = createPinia(); 

const app = createApp(App);
app.use(pinia); 
app.use(router).mount('#app');
app.config.globalProperties.$axios = axios;

export { pinia };
