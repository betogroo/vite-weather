<script setup lang="ts">
import { ref } from 'vue'
import AboutDialog from './components/AboutDialog.vue'

const dialogActive = ref(false)
const toggleDialog = () => {
  dialogActive.value = !dialogActive.value
}
</script>

<template>
  <v-app class="bg-primary">
    <AppBar @toggle-dialog="toggleDialog" />
    <AboutDialog :dialogActive="dialogActive" />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
