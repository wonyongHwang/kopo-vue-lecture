<template>
  <main class="page">
    <h1>반응형 데이터 위에서 computed / watch 활용하기</h1>

    <!-- 1. computed + watch 기본 예제: 카운터 -->
    <section class="card">
      <h2>1) 카운터: computed & watch</h2>
      <p class="count-display">count: {{ count }}</p>
      <p>doubleCount (computed): {{ doubleCount }}</p>

      <div class="btn-row">
        <button type="button" @click="count--">-1</button>
        <button type="button" @click="count++">+1</button>
      </div>

      <p class="log">
        마지막 변경 로그: <br />
        <span>{{ lastLog }}</span>
      </p>
    </section>

    <!-- 2. reactive + computed + watch: 금액 계산 -->
    <section class="card">
      <h2>2) 금액 계산: reactive + computed + watch</h2>

      <div class="form-row">
        <label>
          가격:
          <input type="number" v-model.number="form.price" />
        </label>

      <label>
          수량:
          <input type="number" v-model.number="form.quantity" min="1" />
        </label>
      </div>

      <p>
        총액 (price × quantity):
        <strong>{{ total.toLocaleString() }}</strong> 원
      </p>

      <p v-if="isExpensive" class="warning">
        지출이 큰 편입니다. 신중하게 결정하세요!
      </p>
      <p v-else class="ok">
        아직은 부담되지 않는 수준입니다 🙂
      </p>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

/** 1) ref 예제: 카운터 (ref는 이미 배웠다는 전제, 여기서는 computed/watch 데모용) */
const count = ref(0)

// 계산된 값: count의 두 배
const doubleCount = computed(() => count.value * 2)

// watch: count가 바뀔 때마다 로그 업데이트
const lastLog = ref('아직 변경 없음')

watch(count, (newVal, oldVal) => {
  lastLog.value = `카운트가 ${oldVal} → ${newVal} 로 변경되었습니다.`
})

/** 2) reactive + computed + watch 예제: 금액 계산 */
const form = reactive({
  price: 10000,
  quantity: 1,
})

// 총액 계산 (computed)
const total = computed(() => form.price * form.quantity)

// 총액이 일정 수준을 넘으면 경고 플래그를 켠다
const isExpensive = ref(false)

watch(total, (newTotal, oldVal) => {
  console.log("new ",newTotal)
  console.log("oldVal ",oldVal)
  isExpensive.value = newTotal >= 100000
})
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

.count-display {
  font-size: 1.4rem;
  font-weight: bold;
}

.btn-row {
  display: flex;
  gap: 0.5rem;
  margin: 0.75rem 0 1rem;
}

button {
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: white;
  transition: background 0.15s ease;
}

button:hover {
  background: #f0f0f0;
}

.log span {
  color: #555;
}

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.9rem;
  gap: 0.25rem;
}

input[type='number'] {
  width: 120px;
  padding: 0.3rem 0.4rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.warning {
  color: #c0392b;
  font-weight: 600;
}

.ok {
  color: #2c3e50;
}
</style>
