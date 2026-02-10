<template>
  <main class="page">
    <h1>Vue 라이프사이클 훅 데모</h1>

    <section class="card">
      <p>
        버튼을 눌러 <strong>TimerBox</strong> 컴포넌트를
        화면에 보이거나 숨겨 보세요.
      </p>
      <button type="button" @click="toggleTimer">
        {{ showTimer ? '타이머 숨기기' : '타이머 보이기' }}
      </button>
    </section>

    <section class="card">
      <h2>자식 컴포넌트 영역</h2>
      <p class="desc">
        아래 영역은 <code>v-if</code>로 조건부 렌더링 되고 있습니다.
        숨기면 TimerBox가 언마운트되며 onUnmounted가 실행됩니다.
      </p>

      <TimerBox v-if="showTimer" />
      <p v-else class="placeholder">타이머가 현재 비활성화되어 있습니다.</p>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import TimerBox from './components/TimerBox.vue'

const showTimer = ref(false)

const toggleTimer = () => {
  showTimer.value = !showTimer.value
}
</script>

<style scoped>
.page {
  max-width: 720px;
  margin: 2rem auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Noto Sans KR',
    sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  background: #fafafa;
}

button {
  padding: 0.45rem 1rem;
  border-radius: 8px;
  border: 1px solid #42b883;
  background: white;
  cursor: pointer;
  transition: background 0.15s ease;
}

button:hover {
  background: #e8fff5;
}

.desc {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.75rem;
}

.placeholder {
  color: #999;
  font-style: italic;
}
</style>
