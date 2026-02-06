<template>
  <main style="text-align:center; margin-top:1.5rem;">
    <h1>Slot 데모</h1>

    <!-- 1) AlertBox 기본 slot 예제 -->
    <AlertBox>
      나쁜 일이 일어났습니다.
    </AlertBox>

    <!-- 2) HelloWorld: props + slot 동시 사용 예제 -->
    <HelloWorld msg="하하하하" :number="123">
      <!-- 이 엘리먼트가 HelloWorld의 <slot> 위치에 렌더링됨 -->
      <h1>엘리먼트</h1>
    </HelloWorld>
  </main>
</template>

<script setup>
import AlertBox from './components/AlertBox.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>
