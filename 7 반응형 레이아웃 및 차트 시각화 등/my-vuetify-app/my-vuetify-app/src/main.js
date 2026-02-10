import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives' 

// components, directives: Vuetify 컴포넌트를 전역 등록
// theme: 라이트/다크 테마 정의
const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: { dark: false },
        dark: { dark: true }
      }
    }
  })

// createApp(App).mount('#app')
createApp(App)
  .use(vuetify)
  .mount('#app')
