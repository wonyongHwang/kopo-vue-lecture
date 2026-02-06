<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>{{ message.split('').reverse().join('') }}</p>
  <p>{{ 1 + 2 * 3 }}</p>
  {{ message }}

  <div>
    <label>이름</label>
    <input v-model="name" placeholder="이름을 입력" />
    <p></p>
    <label>나이</label>
    <input v-model.number="age" type="number" placeholder="숫자만" />

    <!-- <label>검색어(.trim, .lazy)</label>
    <input v-model.trim.lazy="keyword" placeholder="공백 제거 + change 시 반영" /> -->

    <p>{{ name }} ({{ age }}) </p>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

// <script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
// </script>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const message = 'welcome to vue!'

const name = ref('')
const age = ref(0)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
