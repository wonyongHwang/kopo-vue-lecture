<template>
    <div class="list">
      <TodoItem
        v-for="item in todos"
        :key="item.id"
        :todo="item"
        @toggle-done="toggle"
        @delete-todo="remove"
      />
    </div>
  </template>
  
  <script setup>
  import TodoItem from './TodoItem.vue'
  
  const props = defineProps({
    todos: Array
  })
  
  const emit = defineEmits(['toggle-done', 'delete-todo'])
  
  function toggle(id) {
    emit('toggle-done', id)
  }
  
  function remove(id) {
    emit('delete-todo', id)
  }
  </script>
  
  <style scoped>
  .list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  </style>
  