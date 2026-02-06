<!-- ChildWrong.vue -->
<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(item, idx) in localItems" :key="idx">
        {{ idx + 1 }}. {{ item }}
      </li>
    </ul>
    <button @click="addItem">추가</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, default: '항목 리스트' },
  // ❌ 일부러 잘못 선언
  items: { type: Array, default: [] },
})

// ⚠️ props.items “그 자체”를 참조 (복사 X)
const localItems = ref(props.items)

function addItem() {
  localItems.value.push('🍉 새 항목')
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>
