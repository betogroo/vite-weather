<script setup lang="ts">
import useCity from '@/composables/useCity'
import CityCard from '@/views/CityCard.vue'
import { useRouter } from 'vue-router'
const { savedCities, getCities } = useCity()
const router = useRouter()
await getCities()
const goToCityView = (city) => {
  router.push({
    name: 'CityView',
    params: {
      state: city.state,
      city: city.city
    },
    query: {
      lat: city.coords.lat,
      lng: city.coords.lng
    }
  })
}
</script>

<template>
  <div v-for="item in savedCities" :key="item.id">
    <CityCard @click="goToCityView(item)" :city="item" />
  </div>
  <v-alert v-if="savedCities.length === 0" type="info"
    >Ainda não há cidades favoritadas</v-alert
  >
</template>
