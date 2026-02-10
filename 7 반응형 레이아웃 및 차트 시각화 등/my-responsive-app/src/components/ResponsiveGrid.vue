<template>
  <div class="grid-container">
    <div class="card" v-for="n in 8" :key="n">
      CSS Grid 카드 {{ n }}
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 20px;
}

/* 태블릿 */
@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 모바일 */
@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.1rem;
}
</style>