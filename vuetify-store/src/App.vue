<script setup>
import TopNav from '@/components/TopNav.vue'
</script>

<template>
  <!-- root should always be app -->
  <v-app>
    <TopNav />
    <!-- This is much cleaner than having a common layout for each view -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped></style>
