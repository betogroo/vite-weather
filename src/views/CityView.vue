<script setup lang="ts">
import AsyncCity from '@/components/AsyncCity.vue'
</script>

<template>
  <Suspense>
    <AsyncCity />
    <template #fallback> Loading... </template>
  </Suspense>
</template>
