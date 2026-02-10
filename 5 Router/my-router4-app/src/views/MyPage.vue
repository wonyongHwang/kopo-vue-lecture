<template>
    <div class="page">
      <h1>My Page</h1>
      <p>로그인한 사용자만 볼 수 있는 페이지입니다.</p>
  
      <p>현재 로그인 상태: <strong>ON</strong></p>
  
      <button @click="logout">로그아웃</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  function logout() {
    localStorage.removeItem('loggedIn')
    router.push('/login')
  }
  </script>
  
  <style scoped>
  .page {
    padding: 1.5rem;
  }
  strong {
    color: #42b883;
  }
  button {
    margin-top: 0.75rem;
    padding: 0.4rem 1rem;
  }
  </style>
  