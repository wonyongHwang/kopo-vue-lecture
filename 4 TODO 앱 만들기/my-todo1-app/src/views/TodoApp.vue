<template>
    <main class="page">
      <h1>TODO 리스트</h1>
  
      <TodoInput @add-todo="addTodo" />
  
      <TodoList
        :todos="todos"
        @toggle-done="toggleDone"
        @delete-todo="deleteTodo"
      />
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import TodoInput from '../components/TodoInput.vue'
  import TodoList from '../components/TodoList.vue'
  
  const todos = ref([])
  
  function saveLocal() {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }
  
  function loadLocal() {
    const data = localStorage.getItem('todos')
    if (data) todos.value = JSON.parse(data)
  }
  
  onMounted(() => {
    loadLocal()
  })
  
  watch(todos, () => {
    saveLocal()
  }, { deep: true })
  
  function addTodo(text) {
    todos.value.push({
      id: Date.now(),
      text,
      done: false
    })
  }
  
  function toggleDone(id) {
    const t = todos.value.find(v => v.id === id)
    if (t) t.done = !t.done
  }
  
  function deleteTodo(id) {
    todos.value = todos.value.filter(v => v.id !== id)
  }
  </script>
  
  <style scoped>
  .page {
    max-width: 600px;
    margin: 2rem auto;
    font-family: system-ui;
  }
  </style>
  