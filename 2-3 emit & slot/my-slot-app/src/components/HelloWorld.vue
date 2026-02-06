<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <h2>{{ props.number }}</h2>

    <!-- 부모가 HelloWorld 태그 안에 넣은 내용이 들어오는 자리 -->
    <slot></slot>

    <p>KOPO</p>
  </div>
</template>
<script setup>
  const props = defineProps({
    msg: { type: String, default: '기본 메시지' },
    number: { type: Number, default: 0 },
  })
</script>

<style scoped>
.hello {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  background-color: #fafafa;
}
</style>
