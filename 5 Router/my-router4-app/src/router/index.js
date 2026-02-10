import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import MyPage from '../views/MyPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user/:id', component: User },

  // 로그인 페이지
  { path: '/login', component: Login },

  // 보호된 페이지: 로그인 필요
  {
    path: '/mypage',
    component: MyPage,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ✅ 전역 네비게이션 가드
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true'

  if (to.meta.requiresAuth && !isLoggedIn) {
    // 로그인 안 된 상태에서 보호된 페이지로 가려 하면 /login 으로 리다이렉트
    return next('/login')
  }

  // 그 외에는 그대로 진행
  next()
})

export default router
