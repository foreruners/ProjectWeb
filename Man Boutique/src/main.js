import { createApp } from 'vue'
//import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')