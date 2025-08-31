<template>
 <Header msg="Centralizados" />
  <v-container>
    <v-row cols="3">
      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'Administracion Fiscal' }">
          <CardWithImage
            image="saltillo.svg"
            title="Administración Fiscal"
          />
        </router-link>
      </v-sheet>
      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'CY' }">
          <CardWithImage
            image="torreon.svg"
            title="Torreón"
          />
        </router-link>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Centralizados"
};
</script>

<script setup>
import Header from '../components/Header.vue'
import CardWithImage from '../components/CardWithImage.vue'
</script>
