import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Pinia 생성 후 앱에 등록
const pinia = createPinia()
app.use(pinia)

app.mount('#app')