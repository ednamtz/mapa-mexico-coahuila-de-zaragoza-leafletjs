<template>
  <div>
    <Header msg="Inicio" />
    <BarChart :chart-data="municiosBarChartData" />
    <PieChart :chart-data="municiosPieChartData" />
  </div>
</template>

<script>
export default {
  name: "Inicio"
};
</script>

<script setup>
import Header from '../components/Header.vue'
import BarChart from '../components/BarChart.vue'
import PieChart from '../components/PieChart.vue'

const municiosBarChartData = {
  labels: ['Municipios', 'Centralizados', 'Descentralizados'],
  datasets: [
    {
      label: 'SI',
      backgroundColor: '#f87171',
      data: [20, 30, 22]
    },
    {
      label: 'NO',
      backgroundColor: '#bfdbfe',
      data: [25, 15, 18]
    }
  ]
};

const municiosPieChartData = {
  labels: ['Municipios', 'Centralizados', 'Descentralizados'],
  datasets: [
    {
      label: 'Población',
      backgroundColor: ['#f87171', '#bfdbfe', '#34d399'],
      data: [45, 30, 40]
    }
  ]
};
</script>
