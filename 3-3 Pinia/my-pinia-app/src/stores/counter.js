// src/stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // 1) state: 실제 데이터
  state: () => ({
    count: 0,
  }),

  // 2) getters: 계산된 값 (computed 느낌)
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
  },

  // 3) actions: 상태를 변경하는 함수
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
  },
})
