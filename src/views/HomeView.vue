<script setup lang="ts">
import useCity from '@/composables/useCity'
import CityList from '@/components/CityList.vue'

const {
  searchText,
  mapboxSearchResults,
  searchError,
  getSearchResults,
  makeRoute,
  resetSearchResults
} = useCity()
resetSearchResults()
</script>

<template>
  <div class="mb-4">
    <v-text-field
      @input="getSearchResults"
      v-model="searchText"
      variant="outlined"
      clearable
      density="comfortable"
      hide-details
    ></v-text-field>

    <v-list v-if="mapboxSearchResults" class="mt-0 pa-0 bg-transparent" nav>
      <v-alert class="pa-4 ma-4" v-if="searchError" type="error"
        >Desculpe, ocorreu algo indesejado. Por favor tente novamente</v-alert
      >
      <v-alert
        class="pa-4 ma-4"
        v-if="!searchError && mapboxSearchResults.length === 0"
        type="warning"
        >Sem resultados. Por favor tente novamente</v-alert
      >
      <template v-else>
        <v-list-item
          density="compact"
          variant="plain"
          :to="makeRoute(item)"
          nav
          v-for="item in mapboxSearchResults"
          :key="item.id"
          >{{ item.place_name }}</v-list-item
        >
      </template>
    </v-list>
  </div>
  <div>
    <Suspense>
      <CityList />
      <template #fallback>Loading...</template>
    </Suspense>
  </div>
</template>

<style scoped></style>
