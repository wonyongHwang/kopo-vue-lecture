<template>
    <div class="item">
      <input type="checkbox" v-model="localDone" @change="toggle" />
      <span :class="{ done: localDone }">{{ todo.text }}</span>
      <button @click="remove">삭제</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    todo: Object
  })
  
  const emit = defineEmits(['toggle-done', 'delete-todo'])
  
  const localDone = ref(props.todo.done)
  
  function toggle() {
    emit('toggle-done', props.todo.id)
  }
  
  function remove() {
    emit('delete-todo', props.todo.id)
  }
  </script>
  
  <style scoped>
  .item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .done {
    text-decoration: line-through;
    color: gray;
  }
  button {
    margin-left: auto;
  }
  </style>
  