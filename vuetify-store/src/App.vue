<script setup>
import TopNav from '@/components/TopNav.vue'
import { useProductsStore } from './stores/ProductsStore';

const productsStore = useProductsStore()
</script>

<template>
  <!-- root should always be app -->
  <v-app>
    <TopNav />
    <!-- This is much cleaner than having a common layout for each view -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-snackbar
      v-model="productsStore.snackbar.show"
      multi-line
      :timeout="6000"
      :color="productsStore.snackbar.variant"
    >
      {{ productsStore.snackbar.message }}
      <v-btn
        dark
        variant="text"
        @click="productsStore.updateSnackBar({ show: false })"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<style scoped></style>
