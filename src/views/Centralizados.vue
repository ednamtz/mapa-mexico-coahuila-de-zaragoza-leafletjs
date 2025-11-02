<template>
 <Header msg="Centralizados" />
  <v-container>
    <v-row cols="3">
      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'SC' }">
          <CardWithImage
            image="sedu.png"
            title="Secretaría de Cultura"
          />
        </router-link>
      </v-sheet>

      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'SDR' }">
          <CardWithImage
            image="sedu.png"
            title="Secretaría de Desarrollo Rural"
          />
        </router-link>
      </v-sheet>

      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'SEc' }">
          <CardWithImage
            image="sedu.png"
            title="Secretaría de Economía"
          />
        </router-link>
      </v-sheet>

      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'SEd' }">
          <CardWithImage
            image="sedu.png"
            title="Secretaría de Eduación"
          />
        </router-link>
      </v-sheet>

      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'SEFIRC' }">
          <CardWithImage
            image="sedu.png"
            title="SEFIRC"
          />
        </router-link>
      </v-sheet>

      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'SEVOT' }">
          <CardWithImage
            image="sedu.png"
            title="SEVOT"
          />
        </router-link>
      </v-sheet>

      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'SF' }">
          <CardWithImage
            image="sedu.png"
            title="SF"
          />
        </router-link>
      </v-sheet>

      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'SG' }">
          <CardWithImage
            image="sedu.png"
            title="SG"
          />
        </router-link>
      </v-sheet>

      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'SIDS' }">
          <CardWithImage
            image="sedu.png"
            title="SIDS"
          />
        </router-link>
      </v-sheet>
      
      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'AdministracionFiscal' }">
          <CardWithImage
            image="sedu.png"
            title="Administración Fiscal"
          />
        </router-link>
      </v-sheet>

      
      <v-sheet class="ma-2 pa-2">
        <router-link :to="{ name: 'CJYEM' }">
          <CardWithImage
            image="ss.png"
            title="CYJEM"
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
