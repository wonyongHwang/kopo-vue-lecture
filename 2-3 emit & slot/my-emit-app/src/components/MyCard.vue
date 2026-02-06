<template>
  <div class="mycard-wrapper">
      <h2>{{ title }}</h2>
      <p>좋아요 수: {{ count }}</p>
      <p>활성 상태: {{ isActive ? 'ON' : 'OFF' }}</p>

      <!-- emit 실습용 버튼 -->
      <button class="mycard-wrapper" type="button" @click="notifyParent">
          부모에게 메시지 보내기
      </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '기본 제목' },
  count: { type: Number, default: 0 },
  isActive: { type: Boolean, default: false },
})

// 1) 자식 → 부모로 이벤트 보내기 위한 emit 선언
//    이벤트 이름은 'send-message' 로 사용 (kebab-case)
const emit = defineEmits(['send-message'])

// 2) 버튼 클릭 시 부모에게 메시지 전송
const notifyParent = () => {
  const message = `자식 카드: "${props.title}", 좋아요 수는 ${props.count}개 입니다.`
  emit('send-message', message)
}
</script>
<style scoped>
.mycard-wrapper {
  border: 2px solid #4a90e2;  /* 파란 테두리 */
  padding: 1rem;
  border-radius: 12px;
  background: #fafafa;
}
</style>