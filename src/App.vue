<script setup lang="ts">
import { ref } from 'vue'
import AboutDialog from './components/AboutDialog.vue'

const dialogActive = ref(false)
const toggleDialog = () => {
  dialogActive.value = !dialogActive.value
}
</script>

<template>
  <v-app class="bg-indigo-lighten-4">
    <AppBar @toggle-dialog="toggleDialog" />
    <AboutDialog :dialogActive="dialogActive" />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
