<template>
  <Header msg="Descentralizados" />
  <v-container>
    <v-row cols="3">
      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'Auditoria' }">
          <CardWithImage
            image="sefirc.png"
            title="Auditoría"
          />
        </router-link>
      </v-sheet>
      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'Secretaria' }">
          <CardWithImage
            image="sevot.png"
            title="Secretaría"
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
