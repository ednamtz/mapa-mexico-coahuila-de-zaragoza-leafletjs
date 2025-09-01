<template>
  <v-card class="mx-auto" min-width="200" max-width="500">
    <v-img
      :src="image"
      height="200px"
      cover
    ></v-img>
    <v-card-title class="justify-center">
      {{ title }}
    </v-card-title>
  </v-card>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>
