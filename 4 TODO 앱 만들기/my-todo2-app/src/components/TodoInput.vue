<template>
    <div class="input-box">
      <input
        v-model="text"
        @keyup.enter="add"
        placeholder="할 일을 입력하세요"
      />
      <button @click="add">추가</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const emit = defineEmits(['add-todo'])
  const text = ref('')
  
  function add() {
    if (text.value.trim() === '') return
    emit('add-todo', text.value)
    text.value = ''
  }
  </script>
  
  <style scoped>
  .input-box {
    display: flex;
    gap: 0.5rem;
  }
  input {
    flex: 1;
    padding: 0.5rem;
  }
  button {
    padding: 0.5rem 1rem;
  }
  </style>
  