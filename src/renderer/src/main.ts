import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/css/main.css'
import router from './route'
import { GlobalComponents } from './components'

const pinia = createPinia().use(piniaPluginPersistedstate)
const app = createApp(App).use(pinia).use(router)
GlobalComponents(app)
app.mount('#app')
