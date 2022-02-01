import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import './main.scss'
import { registerSW } from 'virtual:pwa-register'
registerSW()

createApp(App).use(store).use(router).mount('#app')
