<template>
  <main class="page">
    <h1>TODO 리스트 (Pinia 버전)</h1>

    <p>완료된 항목: {{ completedCount }}개</p>

    <TodoInput @add-todo="add" />
    <TodoList
      :todos="todos"
      @toggle-done="toggle"
      @delete-todo="remove"
    />
  </main>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useTodoStore } from '../stores/todoStore'
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'

const todoStore = useTodoStore()
const { todos, completedCount } = storeToRefs(todoStore)
const { add, toggle, remove, load } = todoStore

onMounted(() => {
  load()
})
</script>

<style scoped>
.page {
  max-width: 600px;
  margin: 2rem auto;
  font-family: system-ui;
}
</style>
