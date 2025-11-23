<script setup>
import { ref } from 'vue'

const email = ref('')
const name = ref('')
const phone = ref('')
</script>
<template>
  <v-card>
    <v-text-field v-model="name" label="Name" />

    <v-text-field v-model="email" label="E-mail" />

    <v-text-field v-model="phone" label="Phone Number" />
  </v-card>
</template>
