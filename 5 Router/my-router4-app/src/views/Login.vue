<template>
    <div class="page">
      <h1>Login 페이지</h1>
      <p>이 버튼은 실제 인증이 아니라, 연습을 위한 가짜 로그인입니다.</p>
  
      <button @click="login">로그인하기</button>
  
      <p v-if="message" class="msg">{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const message = ref('')
  
  function login() {
    // 실제 서비스에서는 여기서 서버에 인증 요청
    localStorage.setItem('loggedIn', 'true')
    message.value = '로그인 되었습니다. 마이페이지로 이동합니다...'
  
    // 잠깐 메시지를 보여주고 이동 (연습용)
    setTimeout(() => {
      router.push('/mypage')
    }, 500)
  }
  </script>
  
  <style scoped>
  .page {
    padding: 1.5rem;
  }
  button {
    padding: 0.4rem 1rem;
    margin-top: 0.5rem;
  }
  .msg {
    margin-top: 0.75rem;
    color: #42b883;
  }
  </style>
  