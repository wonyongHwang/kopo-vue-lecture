<template>
  <main class="page">
    <h1>Homework 정답 예시</h1>

    <section class="card">
      <h2>1) 부가세 포함 총액 계산하기</h2>

      <label>
        총액:
        <input type="number" v-model.number="total" />
      </label>

      <p>최종 결제 금액(부가세 10% 포함): <strong>{{ finalPrice }}</strong> 원</p>
    </section>

    <section class="card">
      <h2>2) 빈 장바구니 알림 띄우기</h2>

      <label>
        총액:
        <input type="number" v-model.number="cartTotal" />
      </label>

      <p v-if="showEmptyMessage" class="warning">
        장바구니가 비었습니다!
      </p>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

/** 1) 부가세 포함 총액 계산하기 */
const total = ref(0)

// finalPrice = total × 1.1
const finalPrice = computed(() => (total.value * 1.1).toFixed(2))

/** 2) 빈 장바구니 알림 띄우기 */
const cartTotal = ref(0)
const showEmptyMessage = ref(false)

watch(cartTotal, (newVal) => {
  if (newVal === 0) {
    showEmptyMessage.value = true
  } else {
    showEmptyMessage.value = false
  }
})
</script>

<style scoped>
.page {
  max-width: 600px;
  margin: 2rem auto;
  font-family: system-ui, sans-serif;
}

.card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  background: #fafafa;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.3rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-left: 0.3rem;
}

.warning {
  color: #c0392b;
  font-weight: bold;
}
</style>
