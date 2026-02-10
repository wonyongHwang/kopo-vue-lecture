<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/user/1">User 1</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/mypage">My Page</RouterLink>
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
main {
  padding: 1.5rem;
}
</style>
