<template>
    <section>
      <h2>4. mitt로 컴포넌트 간 통신</h2>
      <button @click="fetchUsers">유저 다시 불러오기</button>
  
      <p v-if="errorMessage" style="color:red">{{ errorMessage }}</p>
  
      <ul v-else>
        <li
          v-for="user in users"
          :key="user.id"
        >
          {{ user.name }} ({{ user.email }})
        </li>
      </ul>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import bus from '../eventBus'
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const users = ref([])
const errorMessage = ref('')

async function fetchUsers() {
  errorMessage.value = ''
  // 전역 로딩 시작 이벤트
  bus.emit('loading', true)

  try {
    // ⏳ 3초 대기
    await wait(3000)
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    users.value = res.data
  } catch (e) {
    console.error(e)
    errorMessage.value = '유저 목록을 불러오는 데 실패했습니다.'
  } finally {
    // 전역 로딩 종료 이벤트
    bus.emit('loading', false)
  }
}

onMounted(() => {
  fetchUsers()
})
</script>



<style scoped>
section {
  margin-top: 2rem;
}
</style>
