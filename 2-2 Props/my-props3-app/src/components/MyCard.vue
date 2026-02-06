<template>
  <h2>{{ title }}</h2>
  <p>좋아요 수: {{ count }}</p>
  <p>활성 상태: {{ isActive ? 'ON' : 'OFF' }}</p>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '기본 제목' },
  count: { type: Number, default: 0 },
  isActive: { type: Boolean, default: false },
})
</script>
