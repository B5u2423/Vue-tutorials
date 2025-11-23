<script setup>
import { ref } from 'vue'

const street = ref('')
const state = ref('')
const zip = ref('')
</script>
<template>
  <v-text-field v-model="street" label="Street Address" />

  <v-text-field v-model="state" label="State" />

  <v-text-field v-model="zip" label="Zip" />
</template>
