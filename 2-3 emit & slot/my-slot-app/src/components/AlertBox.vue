<template>
    <div class="alert-box">
      <strong>이것은 데모용 에러입니다.</strong>
      <!-- 부모가 AlertBox 태그 사이에 적은 내용이 여기로 들어온다 -->
      <slot />
    </div>
</template>
  
<script setup>
// 기본 슬롯만 사용하는 간단 예제라 script 로직은 없음
</script>
  
<style scoped>
    .alert-box {
    padding: 0.75rem 1rem;
    border: 1px solid #f5a5a5;
    background-color: #fff5f5;
    border-radius: 4px;
    margin: 1rem 0;
    }
    strong {
    display: block;
    margin-bottom: 0.25rem;
    }
</style>
  