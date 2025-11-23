<script setup>
import { ref } from 'vue'

const checkoutForm = ref(null)
const nameRules = ref([])
const emailRules = ref([])
const name = ref('')
const email = ref('')

function goToCheckout() {
  console.log('checked out')
  // this.$router.push({ name: 'checkout' })
}
</script>

<template>
  <v-card variant="outlined">
    <v-card-title>Payment Details</v-card-title>

    <v-card-text>
      <v-text-field label="name"></v-text-field>
      <v-text-field label="email"></v-text-field>

      <p>Total: $999</p>
      <v-btn class="mt-2" color="primary" @click="goToCheckout" text="Checkout"></v-btn>
    </v-card-text>
  </v-card>
</template>
