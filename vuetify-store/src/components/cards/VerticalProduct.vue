<script setup>
const props = defineProps({
  product: Object,
  addToCart: Function,
})
</script>

<template>
  <v-card variant="outlined">
    <!-- `cover` prop to crop the image to fill the parent size -->
    <v-img cover :src="product.image" height="200px"> </v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>${{ product.price }}</v-card-subtitle>
    <v-card-actions>
      <v-btn prepend-icon="mdi-plus" color="success" variant="outlined" @click="addToCart">
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
