<script setup lang="ts">
import { ref, watch } from 'vue'
interface Props {
  dialogActive: boolean
}
const props = withDefaults(defineProps<Props>(), {
  dialogActive: false
})
const dialogActive = ref(false)
watch(
  () => props.dialogActive,
  () => {
    dialogActive.value = !dialogActive.value
  }
)
</script>

<template>
  <v-dialog v-model="dialogActive">
    <v-card>
      <v-card-title>About</v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-title>How to Works</v-card-title>
      <v-card-text>
        <ol>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing illum excepturi
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing illum excepturi
            inci
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing illum excepturi
            incidunt
          </li>
          <li>Lorem ipsum dolor sit amet consectetur a incidunt quas sint</li>
        </ol>
      </v-card-text>
      <v-card-title>About</v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialogActive = false"
          >Close Dialog</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
