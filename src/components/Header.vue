<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
});
</script>

<template>
  <h1 class="title">{{ msg }}</h1>
</template>

<style scoped>
.title {
  color: #888;
}
</style>
