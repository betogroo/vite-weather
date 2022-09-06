<script setup lang="ts">
import { ref } from 'vue'
const overlay = ref(true)
</script>

<template>
  <v-overlay
    v-model="overlay"
    class="d-flex flex-row align-center justify-center"
  >
    <v-progress-circular
      :size="70"
      :width="7"
      color="white"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>
