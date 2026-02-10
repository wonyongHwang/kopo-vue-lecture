<template>
    <div>
      <h1>Home 페이지</h1>
      <p>환영합니다!</p>
  
      <button @click="goAbout">About으로 가기</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  function goAbout() {
    router.push('/about')
  }
  </script>
  
  <style scoped>
  button {
    padding: 0.4rem 1rem;
  }
  </style>
  