import {createRouter, createWebHistory} from 'vue-router'
import Home from '../Pages/Home.vue'
import ProductDetails from '../components/ProductDetails.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: () => import('../Pages/About.vue') },
    { path: '/contact', component: () => import('../Pages/Contact.vue') },
    { path: '/shop', component: () => import('../Pages/Shop.vue') },
    { path: '/cart', component: () => import('../Pages/Cart.vue') }, 
    { path: '/product/:id', name: 'productDetails', component: ProductDetails },

]
    


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


