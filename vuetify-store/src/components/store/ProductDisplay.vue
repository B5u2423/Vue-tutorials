<script setup>
import { useProductsStore } from '@/stores/ProductsStore'
import VerticalProduct from '../cards/VerticalProduct.vue'
// methods
function addToCart(index, quantity = 1) {
  productsStore.addItemToCart({ itemId: index, quantity: quantity })
  productsStore.updateSnackBar({ show: true })
}
const productsStore = useProductsStore()
</script>

<template>
  <h3>Display</h3>
  <v-row>
    <v-col sm="6" md="4" v-for="product in productsStore.products" :key="product.name">
      <VerticalProduct :product="product" :addToCart="addToCart"></VerticalProduct>
    </v-col>
  </v-row>
</template>
