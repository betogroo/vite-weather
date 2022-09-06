<script setup lang="ts">
// import axios from 'axios'
import { useRoute } from 'vue-router'
import useWeatter from '@/composables/useWeather'
import useCity from '@/composables/useCity'
const route = useRoute()
const { getWeatherData } = useWeatter()
const { removeCity } = useCity()
const weatherData = await getWeatherData(route)
</script>

<template>
  <v-alert v-if="route.query.preview" type="warning" class="ma-4"
    >Você está vendo esta cidade. Clique no "+" para rastreá-la</v-alert
  >
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
    <p>
      {{
        `O Sol nasceu às ${new Date(
          weatherData.current.sunrise * 1000
        ).toLocaleTimeString('pt-br', {
          timeStyle: 'short'
        })} e vai se por às ${new Date(
          weatherData.current.sunset * 1000
        ).toLocaleTimeString('pt-br', {
          timeStyle: 'short'
        })} .`
      }}
    </p>
  </div>
  <v-divider class="my-8" color="white"></v-divider>
  <div class="d-flex flex-column align-center justify-center mt-4">
    <h1 class="text-h5 text-start">Previsão Hora a Hora</h1>
    <div class="d-flex overflow-x-auto w-100">
      <div
        class="text-center mx-1 pa-1"
        v-for="item in weatherData.hourly"
        :key="item.currentTime"
      >
        <p class="text-body-1">
          {{
            new Date(item.currentTime).toLocaleTimeString('pt-br', {
              hour: '2-digit'
            })
          }}h
        </p>
        <v-img
          width="50"
          :src="`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
        ></v-img>
      </div>
    </div>
  </div>
  <v-divider class="my-8" color="white"></v-divider>
  <div class="d-flex flex-column align-center justify-center mt-4">
    <h1 class="text-h5 text-left">Previsão Semanal</h1>
    <div
      class="d-flex w-100 align-center"
      v-for="item in weatherData.daily"
      :key="item.dt"
    >
      <p class="d-flex mr-auto align-center">
        {{
          new Date(item.dt * 1000).toLocaleDateString('pt-br', {
            weekday: 'long'
          })
        }}
      </p>
      <v-img
        max-width="50px"
        :src="`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
      ></v-img>
      <div class="d-flex">
        <div class="d-flex">
          <v-icon color="blue">mdi-arrow-down</v-icon>
          <p>{{ Math.round(item.temp.min) }}&deg;</p>
        </div>
        <div class="d-flex">
          <v-icon color="red">mdi-arrow-up</v-icon>
          <p>{{ Math.round(item.temp.max) }}&deg;</p>
        </div>
      </div>
    </div>
  </div>
  <v-btn
    v-if="!route.query.preview"
    prepend-icon="mdi-delete"
    @click="removeCity"
    block
    color="error"
    >Excluir</v-btn
  >
</template>
