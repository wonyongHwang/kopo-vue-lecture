<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/user/1">User 1</RouterLink>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
</script>

<style scoped>
header {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f5f5f5;
}
a {
  text-decoration: none;
}
</style>
