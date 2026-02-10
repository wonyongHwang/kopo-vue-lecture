<template>
  <div>
    <h1 class="text-center my-4">Vue.js 레이아웃 &amp; 차트 &amp; Vuetify 데모</h1>

    <section class="mb-5">
      <h2 class="text-center mb-3">Chapter 1 - CSS Grid 레이아웃</h2>
      <ResponsiveGrid />
    </section>

    <section class="mb-5">
      <h2 class="text-center mb-3">Chapter 1 - Bootstrap Grid 레이아웃</h2>
      <BootstrapGrid />
    </section>

  </div>
</template>

<script setup>
import ResponsiveGrid from './components/ResponsiveGrid.vue'
import BootstrapGrid from './components/BootstrapGrid.vue'

</script>

<style>
</style>