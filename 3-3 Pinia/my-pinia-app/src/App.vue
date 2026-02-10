<template>
  <main class="page">
    <h1>Pinia 기본 예제: Counter Store</h1>

    <section class="card">
      <h2>전역 상태: count</h2>
      <p class="value">
        count: <strong>{{ count }}</strong>
      </p>
      <p>doubleCount (getter): <strong>{{ doubleCount }}</strong></p>

      <div class="buttons">
        <button type="button" @click="decrement">-1</button>
        <button type="button" @click="increment">+1</button>
        <button type="button" @click="reset">Reset</button>
      </div>
    </section>

    <section class="card">
      <h2>다른 컴포넌트에서도 같은 Store 사용 가능</h2>
      <p>아래 숫자도 동일한 Pinia store에서 가져온 값입니다.</p>
      <p class="value secondary">
        공유된 count: <strong>{{ count }}</strong>
      </p>
      <p>이렇게 여러 컴포넌트가 하나의 중앙 상태를 공유할 수 있습니다.</p>
    </section>
  </main>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from './stores/counter'

// 1) store 인스턴스 가져오기
const counter = useCounterStore()

// 2) state / getters 를 반응형으로 꺼내 쓰기
const { count, doubleCount } = storeToRefs(counter)

// 3) actions 는 그대로 구조 분해 (함수)
const { increment, decrement, reset } = counter
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

.value {
  font-size: 1.4rem;
  margin: 0.5rem 0;
}

.value.secondary {
  color: #555;
}

.buttons {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

button {
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  border: 1px solid #42b883;
  cursor: pointer;
  background: white;
  transition: background 0.15s ease;
}

button:hover {
  background: #e8fff5;
}
</style>
