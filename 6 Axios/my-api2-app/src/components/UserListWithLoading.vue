<template>
  <section>
    <h2>2. 비동기 데이터 처리와 로딩 UI</h2>

    <button @click="fetchUsers">다시 불러오기</button>

    <!-- 로딩 상태 -->
    <p v-if="isLoading">로딩 중입니다...</p>

    <!-- 에러 상태 -->
    <p v-else-if="errorMessage" style="color: red">
      {{ errorMessage }}
    </p>

    <!-- 정상 데이터 -->
    <ul v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const fetchUsers = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    // ⏳ 3초 대기
    await wait(3000)

    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    users.value = response.data
  } catch (error) {
    console.error(error)
    errorMessage.value = '유저 목록을 불러오는 데 실패했습니다.'
  } finally {
    isLoading.value = false
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
button {
  margin-bottom: 0.5rem;
}
</style>
