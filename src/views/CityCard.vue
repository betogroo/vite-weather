<script setup lang="ts">
interface Props {
  city: any
}
defineProps<Props>()
</script>
<template>
  <v-sheet
    :to="{ name: 'HomeView' }"
    rounded
    class="ma-1 pa-2 bg-secondary click"
  >
    <div class="d-flex align-center pointer">
      <div>
        <h1 class="text-h5">{{ city.city }}</h1>
        <h1 class="text-caption">{{ city.state }}</h1>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex flex-column align-center">
        <div class="d-flex align-center justify-center">
          <h1 class="text-h5">{{ Math.round(city.weather.main.temp) }}&deg;</h1>
          <div>
            <v-img
              width="50"
              :src="`http://openweathermap.org/img/wn/${city.weather.weather[0].icon}@2x.png`"
            />
          </div>
        </div>
        <div class="d-flex">
          <v-icon color="blue">mdi-arrow-down</v-icon>
          <p>{{ Math.round(city.weather.main.temp_min) }}&deg;</p>
          <v-icon color="red">mdi-arrow-up</v-icon>
          <p>{{ Math.round(city.weather.main.temp_max) }}&deg;</p>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<style scoped>
.click {
  cursor: pointer;
}
</style>
