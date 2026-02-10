<template>
  <section>
    <h2>1. Axios로 외부 데이터 불러오기</h2>
    <p>JSONPlaceholder에서 유저 목록을 가져오는 예제입니다.</p>

    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 1) 가져온 유저 데이터를 저장할 상태
const users = ref([])

// 2) 컴포넌트가 화면에 처음 나타날 때 API 호출
onMounted(async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  users.value = response.data
})
</script>
<style scoped>
h2 {
  margin-bottom: 0.5rem;
}
ul {
  margin-top: 0.75rem;
}
</style>
