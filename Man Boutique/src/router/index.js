import {createRouter, createWebHistory} from 'vue-router'
import Home from '../Pages/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: () => import('../Pages/About.vue') },
    { path: '/contact', component: () => import('../Pages/Contact.vue') },
    { path: '/shop', component: () => import('../Pages/Shop.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router