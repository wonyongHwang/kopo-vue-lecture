<template>
  <main style="text-align:center; margin-top:1.5rem;">
    <h1>Props + Emit 데모</h1>


    <!-- <MyCard title="Vue 강의" :count="3" is-active />
    <MyCard :count="0" :is-active="false" /> -->
    <MyCard
      title="Vue 강의"
      :count="3"
      is-active
      @send-message="handleSendMessage"
    />

    <MyCard
      :count="0"
      :is-active="false"
      @send-message="handleSendMessage"
    />

    <!-- 부모가 받은 마지막 메시지 화면에 표시 -->
    <p>부모가 받은 마지막 메시지:</p>
    <p style="font-weight:bold;">{{ lastMessage }}</p>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import MyCard from './components/MyCard.vue'

// 자식에게서 넘어온 메시지를 저장할 상태
const lastMessage = ref('(아직 받은 메시지가 없습니다)')

// 자식에서 emit('send-message', payload) 했을 때 호출될 함수
const handleSendMessage = (payload) => {
  console.log('부모가 받은 메시지:', payload)
  lastMessage.value = payload
}

</script>

<style scoped>
main { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif; }
</style>
