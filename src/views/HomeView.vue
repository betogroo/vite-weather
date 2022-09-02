<script setup lang="ts">
import useCitySearch from '@/composables/useCitySearch'

const { searchText, mapboxSearchResults, getSearchResults, makeRoute } =
  useCitySearch()
</script>

<template>
  <div>
    <v-text-field
      @input="getSearchResults"
      v-model="searchText"
      variant="outlined"
      clearable
      density="comfortable"
      hide-details
    ></v-text-field>
  </div>
  <div>
    <v-list class="mt-0 pa-0 bg-transparent" nav>
      <v-list-item
        density="compact"
        variant="plain"
        :to="makeRoute(item)"
        nav
        v-for="item in mapboxSearchResults"
        :key="item.id"
        >{{ item.place_name }}</v-list-item
      >
    </v-list>
  </div>
</template>

<style scoped></style>
