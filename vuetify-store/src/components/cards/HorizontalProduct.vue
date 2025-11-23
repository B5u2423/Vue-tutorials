<script setup>
const props = defineProps({
  product: Object,
  updateCart: Function,
  btnAction: String,
  i: Number,
})
</script>

<template>
  <v-card variant="outlined" min-width="100%" class="my-3 pa-4">
    <div class="d-flex">
      <div>
        <v-img cover :src="product.image" width="120px" height="120px"></v-img>
      </div>
      <div class="d-flex flex-column justify-center">
        <v-card-title class="pt-0">{{ product.name }}</v-card-title>
        <v-card-subtitle>${{ product.price }}</v-card-subtitle>
        <v-btn
          class="ml-4"
          size="small"
          color="error"
          variant="outlined"
          text="Remove from cart"
          prepend-icon="mdi-minus"
        ></v-btn>
      </div>
    </div>
  </v-card>
</template>
