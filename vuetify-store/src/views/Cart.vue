<script setup>
import ProductList from '@/components/cart/ProductList.vue'
import CheckoutBox from '@/components/cart/CheckoutBox.vue'
</script>

<template>
  <v-container>
    <v-row>
      <v-col sm="8" md="5" offse-md="2" lg="4" offset-lg="3">
        <ProductList />
      </v-col>

      <v-col order="first" order-sm="last" sm="4" md="3">
        <CheckoutBox />
      </v-col>
    </v-row>
  </v-container>
</template>
