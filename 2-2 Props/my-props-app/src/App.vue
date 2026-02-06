<template>
<main style="text-align:center; margin-top:2rem;">
<h1>💡 Props 실습: 부모 → 자식 데이터 전달</h1>
<p>아래는 title 속성을 props로 전달하는 예시입니다.</p>


<!-- 자식 컴포넌트 호출 -->
<ChildComponent title="Hello Props" />
<ChildComponent title="Vue.js 재밌다!" />
</main>
</template>

<script setup>
import ChildComponent from './components/ChildComponent.vue'
</script>


<style scoped>
main {
font-family: 'Noto Sans KR', sans-serif;
}
</style>