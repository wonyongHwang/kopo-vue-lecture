<template>
    <div class="chart-wrapper">
      <Bar :data="chartData" :options="chartOptions" />
      <button @click="updateData">데이터 업데이트</button>
    </div>
   
</template>
<script setup>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const chartData = ref({
  labels: ['1분기', '2분기', '3분기', '4분기'],
  datasets: [
    {
      label: '매출(억 원)',
      backgroundColor: '#4caf50',
      data: [10, 20, 30, 25]
    }
  ]
})
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

const updateData = () => {
    // chartData.value.datasets[0].data = chartData.value.datasets[0].data.map(
    //     (v) => v + Math.round(Math.random() * 100)
    // )

    /*
    [10, 20, 30, 25]
        → [42, 97, 65, 88]

    */
   /*
   chartData.value.datasets[0].data =
        chartData.value.datasets[0].data.map((v, i) => {
        const random = Math.round(Math.random() * 100)
        const next = v + random

        console.log(
        `[index ${i}]`,
        '원래 값:', v,
        '증가값:', random,
        '변경 후:', next
        )

        return next
    })
    */
    const old = chartData.value

    const newDataset = {
        ...old.datasets[0],
        data: old.datasets[0].data.map(
            (v) => v + Math.round(Math.random() * 100)
        )
    }

    chartData.value = {
        ...old,
        datasets: [newDataset]
    }

}
</script>
<style>
.chart-wrapper {
  width: 100%;
  max-width: 600px;
  height: 300px;
  margin: 0 auto;
}
</style>