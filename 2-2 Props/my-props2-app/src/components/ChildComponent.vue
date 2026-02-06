<template>
    <section class="card">
      <h2>{{ props.title }}</h2>
      <p>likes: {{ props.likes }}</p>
      <p>published: {{ props.isPublished ? 'YES' : 'NO' }}</p>
    </section>
  </template>
  
  <script setup>
  const props = defineProps({
    title: { type: String, required: true },
    likes: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false }
  })
  </script>
  
  <style scoped>
  .card { padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; }
  </style>
  