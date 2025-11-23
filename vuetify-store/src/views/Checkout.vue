<script setup>
import ContactInfo from '@/components/checkout/ContactInfo.vue'
import ShippingInfo from '@/components/checkout/ShippingInfo.vue'
import Review from '@/components/checkout/Review.vue'
import { ref } from 'vue'

const steps = ref(['Step 1', 'Step 2', 'Step 3'])
const checkoutForm = ref(false)
const email = ref('')
const name = ref('')
const phone = ref('')
const street = ref('')
const state = ref('')
const zip = ref('')

function submitOrder() {
  router.push({ name: 'thankyou' })
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-stepper :items="steps">
          <template v-slot:item.1>
            <ContactInfo></ContactInfo>
          </template>

          <template v-slot:item.2>
            <ShippingInfo></ShippingInfo>
          </template>

          <template v-slot:item.3>
            <Review></Review>
          </template>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>
