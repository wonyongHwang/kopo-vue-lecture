<template>
  <main style="text-align:center;">
    <h2>배열 Props 전달 예시</h2>

    <!-- (1) 문자열로 전달 — 배열처럼 보이지만 실제로는 문자열 -->
    <ChildList title="문자열 props" items="['사과', '배', '포도']" />

    <!-- (2) 콜론(:)을 붙여 실제 배열로 전달 -->
    <ChildList title="배열 props" :items="['사과', '배', '포도']" />

    <!-- (3) 변수로 전달 -->
    <ChildList title="변수 전달" :items="fruits" />

    <h3>❌ default: [] (공유됨)</h3>
    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
      <WrongChildList title="A 리스트 (Wrong)" />
      <WrongChildList title="B 리스트 (Wrong)" />
    </div>
  </main>
</template>

<script setup>
import ChildList from './components/ChildList.vue'
import WrongChildList from './components/WrongChildList.vue'


const fruits = ['복숭아', '수박', '자두']
</script>
