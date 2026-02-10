<template>
  <div>
    <!-- 전역 로딩 바 -->
    <div
      v-if="globalLoading"
      class="global-loading-bar"
    >
      전역 로딩 중...
    </div>

    <main>
      <UserListWithMitt />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import bus from './eventBus'
import UserListWithMitt from './components/UserListWithMitt.vue'

const globalLoading = ref(false)

function handleLoading(isLoading) {
  globalLoading.value = isLoading
}

onMounted(() => {
  bus.on('loading', handleLoading)
})

onBeforeUnmount(() => {
  bus.off('loading', handleLoading)
})
</script>



<style scoped>
.global-loading-bar {
  background: #333;
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
}
main {
  padding: 1rem;
}
</style>
