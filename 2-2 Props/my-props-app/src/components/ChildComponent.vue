<!-- ✅ ChildComponent.vue (자식 컴포넌트) -->
<template>
    <section class="card">
    <h2>{{ props.title }}</h2>
    </section>
</template>

<script setup>
const props = defineProps({
title: {
type: String,
required: true
}
})
</script>

<style scoped>
.card {
padding: 1rem;
margin: 1rem auto;
width: 300px;
border: 1px solid #ccc;
border-radius: 8px;
box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
</style>