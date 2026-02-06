<template>
    <button @click="handleLike">
        {{ likes }} Like
    </button>
</template>

<script setup>
import { ref } from 'vue'

const likes = ref(0)

function handleLike(){
    likes.value += 1
}
</script>

<style scoped>
button {
    font-size: 20px;
    border: 1px solid #ccc;
}
button:hover {
    background: #f5f5f5;
}
</style>