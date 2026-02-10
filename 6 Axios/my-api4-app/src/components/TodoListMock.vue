<template>
    <section>
      <h2>3. Axios Mock Adapter로 테스트 환경 구성</h2>
  
      <button @click="fetchTodos">다시 불러오기</button>
  
      <p v-if="isLoading">로딩 중...</p>
      <p v-else-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  
      <div v-else>
        <ul>
          <li
            v-for="todo in todos"
            :key="todo.id"
          >
            <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">
              {{ todo.title }}
            </span>
          </li>
        </ul>
  
        <div style="margin-top: 1rem">
          <input
            v-model="newTitle"
            placeholder="새 할 일 입력"
          />
          <button @click="addTodo">추가</button>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../api/axiosInstance'

const todos = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const newTitle = ref('')

async function fetchTodos() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const res = await api.get('/api/todos')
    todos.value = res.data
  } catch (e) {
    console.error(e)
    errorMessage.value = 'TODO 목록을 불러오는 데 실패했습니다.'
  } finally {
    isLoading.value = false
  }
}

async function addTodo() {
  if (!newTitle.value.trim()) return

  try {
    const res = await api.post('/api/todos', { title: newTitle.value, done: false })
    todos.value.push(res.data)
    newTitle.value = ''
  } catch (e) {
    console.error(e)
    alert('TODO 추가에 실패했습니다.')
  }
}

onMounted(() => {
  fetchTodos()
})
</script>


