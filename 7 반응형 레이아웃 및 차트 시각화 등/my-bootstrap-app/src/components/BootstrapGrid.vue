<template>
  <div class="container my-4">
    <h3 class="mb-4">Bootstrap 반응형 카드 그리드</h3>

    <div class="row g-3">
      <div
        class="col-12 col-md-6 col-lg-3"
        v-for="n in 8"
        :key="n"
      >
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <h5 class="card-title">Bootstrap 카드 {{ n }}</h5>
            <p class="card-text">
              화면 크기에 따라 한 줄에 보이는 카드 개수가 달라집니다.
            </p>
            <button class="btn btn-primary btn-sm">자세히...</button>
            <p></p>
            <button class="btn btn-primary btn-sm btn-success">자세히...</button>
            <p></p>
            <button class="btn btn-primary btn-sm btn-warning">자세히...</button>

              
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.card-title {
  margin-bottom: 0.75rem;
}
</style>