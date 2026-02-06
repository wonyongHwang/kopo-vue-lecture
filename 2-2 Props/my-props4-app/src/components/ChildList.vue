<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <ul>
        <li v-for="(item, idx) in items" :key="idx">
          {{ idx + 1 }}. {{ item }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: { type: String, default: '항목 리스트' },
    items: { type: Array, default: () => [] },
  })
  
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
    width: 300px;
    margin: 10px auto;
  }
  </style>
  