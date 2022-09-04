<script setup lang="ts">
import { ref } from 'vue'
import useWeather from './composables/useWeather'
import AboutDialog from './components/AboutDialog.vue'

const { addCity } = useWeather()

const dialogActive = ref(false)
const toggleDialog = () => {
  dialogActive.value = !dialogActive.value
}
</script>

<template>
  <v-app class="bg-primary">
    <AppBar @toggle-dialog="toggleDialog" @add-city="addCity()" />
    <AboutDialog :dialogActive="dialogActive" />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
