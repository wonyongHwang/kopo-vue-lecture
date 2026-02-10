<template>
    <div class="timer-box">
      <h2>TimerBox 컴포넌트</h2>
      <p>경과 시간: <strong>{{ seconds }}</strong>초</p>
      <p class="hint">콘솔을 열고 라이프사이클 로그를 확인해 보세요.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUpdated, onUnmounted } from 'vue'
  
  const seconds = ref(0)
  
  let intervalId = null
  
  onMounted(() => {
    console.log('TimerBox onMounted: 타이머 시작')
    intervalId = window.setInterval(() => {
      seconds.value++
    }, 1000)
  })
  
  onUpdated(() => {
    console.log(`TimerBox onUpdated: seconds = ${seconds.value}`)
  })
  
  onUnmounted(() => {
    console.log('TimerBox onUnmounted: 타이머 정리')
    if (intervalId !== null) {
      clearInterval(intervalId)
    }
  })
  </script>
  
  
  <style scoped>
  .timer-box {
    border: 2px solid #42b883;
    border-radius: 12px;
    padding: 1rem 1.25rem;
    background-color: #f5fffb;
    text-align: center;
  }
  
  .timer-box h2 {
    margin-bottom: 0.5rem;
  }
  
  .timer-box strong {
    font-size: 1.4rem;
  }
  
  .hint {
    font-size: 0.85rem;
    color: #666;
    margin-top: 0.5rem;
  }
  </style>
  