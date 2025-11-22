<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify/lib/composables/display'

const { name } = useDisplay()
const sheetHeight = computed(() => {
  switch (name.value) {
    case 'xs':
      return '200px'
    case 'sm':
      return '300px'
    case 'md':
      return '300px'
    case 'lg':
      return '300px'
    case 'xl':
      return '350px'
    default:
      return '300px'
  }
})
</script>

<template>
  <v-sheet :height="sheetHeight" class="bg-grey justify-center align-center text-center d-flex">
    <h1 class="text-center text-h3 d-none d-sm-block">Welcome to Awesome Shop!</h1>
    <h1 class="text-center text-h5 d-sm-none">Welcome to Awesome Shop!</h1>
  </v-sheet>
</template>
