<template>
    <div>
      <h1>User 페이지</h1>
      <p>현재 유저 ID: <strong>{{ userId }}</strong></p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const userId = route.params.id
  </script>
  
  <style scoped>
  strong {
    color: #42b883;
  }
  </style>
  