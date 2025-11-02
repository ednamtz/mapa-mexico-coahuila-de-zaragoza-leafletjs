<template>
  <v-app>
    <v-app-bar color="secondary" dark flat>
      <v-toolbar-title class="text-h5"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="item in menuItems" :key="item.text" :to="item.to" router text class="mx-2 text-lg" exact>
        {{ item.text }}
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
const menuItems = [
  { text: 'Inicio', to: '/' },
  { text: 'Municipios', to: '/municipios' },
  { text: 'Centralizados', to: '/centralizados' },
  { text: 'Descentralizados', to: '/descentralizados' },
  { text: 'Autonomos', to: '/autonomos' },
  { text: 'Paramunicipales', to: '/paramunicipales' },
  { text: 'Judicial', to: '/judicial' },
  { text: 'Universidades', to: '/universidades' }
]
</script>