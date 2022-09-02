<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <h1 class="text-h1">CityView</h1>
  <h2 class="text-h2">{{ route.params.city }} - {{ route.params.state }}</h2>
  <h3 class="text-h3">{{ `Latitude: ${route.query.lat}` }}</h3>
  <h3 class="text-h3">{{ `lONGITUDE: ${route.query.lng}` }}</h3>
</template>
