<script setup lang="ts">
// import axios from 'axios'
import { useRoute } from 'vue-router'
import useWeatter from '@/composables/useWeather'
const route = useRoute()
const { getWeatherData } = useWeatter()
const weatherData = await getWeatherData(route)
</script>

<template>
  <div class="d-flex flex-column align-center justify-center">
    <h1 class="text-h4">{{ route.params.city }}</h1>
    <h2 class="text-body-1">
      {{
        new Date(weatherData.currentTime).toLocaleDateString('pt-br', {
          dateStyle: 'long'
        })
      }}
      -
      {{
        new Date(weatherData.currentTime).toLocaleTimeString('pt-br', {
          timeStyle: 'short'
        })
      }}
    </h2>
    <h1 class="text-h1">{{ Math.round(weatherData.current.temp) }}&deg;</h1>
    <p>
      Sensação Térmica de {{ Math.round(weatherData.current.feels_like) }}&deg;
    </p>
    <p class="text-capitalize">
      {{ weatherData.current.weather[0].description }}
    </p>
    <v-img
      :src="`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`"
      width="150"
    />
  </div>
</template>
