<template>
  <Header msg="Descentralizados" />
  <v-container>
    <v-row cols="3">
      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'Saltillo' }">
          <CardWithImage
            image="saltillo.svg"
            title="Saltillo"
          />
        </router-link>
      </v-sheet>
      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'Torreon' }">
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
  name: "Descentralizados"
};
</script>

<script setup>
import Header from '../components/Header.vue'
import CardWithImage from '../components/CardWithImage.vue'
</script>
