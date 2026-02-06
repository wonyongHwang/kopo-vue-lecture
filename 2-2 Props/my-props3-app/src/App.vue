<template>
  <main style="text-align:center; margin-top:1.5rem;">
    <h1>Props 선언 비교 데모</h1>

    <MyCard title="Vue 강의" :count="3" is-active />
    <MyCard :count="0" :is-active="false" />

  </main>
</template>

<script setup>
import MyCard from './components/MyCard.vue'
</script>

<style scoped>
main { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif; }
</style>
