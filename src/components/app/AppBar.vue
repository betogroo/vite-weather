<script setup lang="ts">
defineEmits(['toggle-dialog'])
</script>
<template>
  <v-app-bar color="primary">
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
    <v-btn icon>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn icon @click="$emit('toggle-dialog')">
      <v-icon>mdi-information-variant</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
