<script setup>
import { useProductsStore } from '@/stores/ProductsStore'
import HorizontalProduct from '../cards/HorizontalProduct.vue'
import { ref } from 'vue'

const productsStore = useProductsStore()
</script>

<template>
  <v-row v-for="product in productsStore.products" :key="product.name">
    <HorizontalProduct :product="product" btnAction="remove"></HorizontalProduct>
  </v-row>
</template>
