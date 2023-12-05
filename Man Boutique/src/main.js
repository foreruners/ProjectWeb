import { createApp } from 'vue'
//import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')