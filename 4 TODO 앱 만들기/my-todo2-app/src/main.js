import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Pinia 생성
const pinia = createPinia()

// Vue 앱 생성
const app = createApp(App)

// Pinia 사용
app.use(pinia)

// 앱 마운트
app.mount('#app')
