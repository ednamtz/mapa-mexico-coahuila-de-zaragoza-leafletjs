<template>
  <div id="app" class="flex flex-col items-center justify-center">
    <nav class="w-full bg-gray-200 py-6 mb-8 flex justify-center">
      <div class="flex w-full max-w-5xl gap-8">
        <button
          v-for="option in menuOptions"
          :key="option"
          class="flex-1 px-8 py-6 rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold"
          :class="selectedMenu === option ? 'bg-blue-500 text-white scale-105' : 'bg-white text-gray-700 hover:bg-blue-100'"
          @click="selectedMenu = option"
        >
          {{ option }}
        </button>
      </div>
    </nav>
    <div v-if="selectedMenu === 'Inicio'">
      <Welcome msg="Inicio" />
      <Chart :chart-data="municiosChartData" />
    </div>
    <div v-if="selectedMenu === 'Municipios'">
      <Welcome msg="Municipios" />
      <Map />
    </div>
    <div v-else-if="selectedMenu === 'Centralizados'">
      <h2 class="text-2xl font-semibold mb-4">Centralizados</h2>
      <p>Contenido para Centralizados.</p>
    </div>
    <div v-else-if="selectedMenu === 'Descentralizados'">
      <h2 class="text-2xl font-semibold mb-4">Descentralizados</h2>
      <p>Contenido para Descentralizados.</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Welcome from './components/Welcome.vue'
import Map from './components/StateMap.vue'
import Chart from './components/BarChart.vue'

const menuOptions = ['Inicio', 'Municipios', 'Centralizados', 'Descentralizados']
const selectedMenu = ref('Municipios')

const municiosChartData = reactive({
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
});
</script>
