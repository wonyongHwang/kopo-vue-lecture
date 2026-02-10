import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 👇 mock 설정 import
import { setupMock } from './api/mock'

// 개발 단계에서만 호출한다고 가정
if (import.meta.env.DEV) {
  setupMock()
}

createApp(App).mount('#app')
