<template>
  <main style="text-align:center; margin-top:1.5rem;">
    <h1>Props 선언 비교 데모</h1>

    <!-- 문자열/숫자/불리언 전달 -->
    <ChildComponent title="Hello Props" :likes="4" is-published />

    <!-- 바인딩으로 다른 값 전달 -->
    <ChildComponent title="Second Card" :likes="0" :is-published="false" />
  </main>
</template>

<script setup>
import ChildComponent from './components/ChildComponent.vue'
</script>

<style scoped>
main { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif; }
</style>
