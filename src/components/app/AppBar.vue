<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
defineEmits(['toggle-dialog', 'add-city'])
</script>
<template>
  <v-app-bar color="primary" elevation="16">
    <v-spacer></v-spacer>
    <h1 class="text-h6">
      <router-link
        class="text-white text-decoration-none"
        :to="{ name: 'HomeView' }"
      >
        <v-icon>mdi-white-balance-sunny</v-icon>
        O App do Tempo
      </router-link>
    </h1>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-btn v-if="route.query.preview" icon @click="$emit('add-city')">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn icon @click="$emit('toggle-dialog')">
      <v-icon>mdi-information-variant</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
