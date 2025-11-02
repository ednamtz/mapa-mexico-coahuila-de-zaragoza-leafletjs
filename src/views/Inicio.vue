<template>
  <div>
    <Header msg="Inicio" />
    <BarChart :chart-data="municipiosBarChartData" />
    <PieChart :chart-data="municipiosPieChartData" />
    <BarChart :chart-data="universidadesBarChartData" />
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

const municipiosBarChartData = {
  labels: ['Paramunicipales','Municipios', 'Centralizados', 'Descentralizados', 'Autónomos', 'Judicial','Universidades' ],
  datasets: [
    {
      label: 'SI',
      backgroundColor: '#f87171',
      data: [1, 17, 6, 12, 3, 1, 8]
    },
    {
      label: 'NO',
      backgroundColor: '#bfdbfe',
      data: [0, 7, 12, 5, 4, 0, 2]
    }
  ]
};



const municipiosPieChartData = {
  labels: ['SI', 'NO' ],
  datasets: [
    {
      label: 'Instituciones que evalúan los Mecanismos de Participación Ciudadana',
      backgroundColor: ['#f87171', '#bfdbfe', '#34d399'],
      data: [36, 42]
    },

  ]
};

const universidadesBarChartData = {
  labels: ['Anual', 'Semestral', 'Trimestral', 'Continua', 'Por demanda', 'N/A' ],
  datasets: [
    {
      label: 'Frecuencia de Evaluación de Mecanismos de Participación Ciudadana',
      backgroundColor: '#f87171',
      data: [11, 2, 13, 28, 22, 2]
    },
    
   
  ]
};
</script>
