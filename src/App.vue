<template>
  <v-app>
    <v-container fluid class="pa-0">
      <v-app-bar flat color="grey-lighten-3" class="mb-8">
        <v-row no-gutters class="w-100" style="gap: 24px;">
          <v-col
            v-for="option in menuOptions"
            :key="option"
            cols="12"
            md="3"
            class="pa-0"
            style="flex: 1 1 0; min-width: 100px;"
          >
            <v-btn
              block
              large
              :color="selectedMenu === option ? 'primary' : 'white'"
              :class="selectedMenu === option ? 'text-white' : 'text-grey-darken-3'"
              elevation="4"
              @click="selectedMenu = option"
              class="menu-btn menu-btn-bordered"
            >
              {{ option }}
            </v-btn>
          </v-col>
        </v-row>
      </v-app-bar>
      <v-main>
        <div v-if="selectedMenu === 'Inicio'">
          <Header msg="Inicio" />
          <BarChart :chart-data="municiosBarChartData" />
          <PieChart :chart-data="municiosPieChartData" />
        </div>
        <div v-if="selectedMenu === 'Municipios'">
          <Header msg="Municipios" />
          <StateMap />
        </div>
        <div v-else-if="selectedMenu === 'Centralizados'">
          <Header msg="Centralizados" />
          <p>Contenido para Centralizados.</p>
        </div>
        <div v-else-if="selectedMenu === 'Descentralizados'">
          <Header msg="Descentralizados" />
          <p>Contenido para Descentralizados.</p>
        </div>
      </v-main>
    </v-container>
  </v-app>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Header from './components/Header.vue'
import StateMap from './components/StateMap.vue'
import BarChart from './components/BarChart.vue'
import PieChart from './components/PieChart.vue'

const menuOptions = ['Inicio', 'Municipios', 'Centralizados', 'Descentralizados']
const selectedMenu = ref('Inicio')

const municiosBarChartData = reactive({
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

const municiosPieChartData = reactive({
  labels: ['Municipios', 'Centralizados', 'Descentralizados'],
  datasets: [
    {
      label: 'Población',
      backgroundColor: ['#f87171', '#bfdbfe', '#34d399'],
      data: [45, 30, 40]
    }
  ]
});

</script>

<style>
.menu-row {
  gap: 24px !important; /* Increase space between buttons */
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.menu-btn {
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 0 !important;
  padding: 2px;
}
.menu-btn-bordered {
  border: 2px solid #c8ced4 !important;
  border-radius: 4px !important;
  transition: border-color 0.2s;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
