<script setup>
import ProductDisplay from '@/components/store/ProductDisplay.vue'
import SideBar from '@/components/store/SideBar.vue'
</script>

<template>
  <v-container>
    <v-row>
      <!-- 2 columns: side bar and product card -->
      <!-- Breakpoints like md and vice versa supersede the cols value -->
      <v-col cols="12" md="3" offset-lg="1">
        <SideBar />
      </v-col>

      <v-col cols="12" md="9" lg="7">
        <ProductDisplay />
      </v-col>
    </v-row>
  </v-container>
</template>
