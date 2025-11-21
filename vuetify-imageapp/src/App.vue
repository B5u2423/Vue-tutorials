<template>
  <v-app>
    <!-- Sidebar -->
      <SideBar @select-option="onSelectOption"/>
      <v-main>
        <!-- Cards -->
         <ImageGallery :isWithColor="isWithColor"/>
      </v-main>
  </v-app>
</template>

<script setup>
  import SideBar from './components/SideBar.vue';
  import ImageGallery from './components/ImageGallery.vue';
  import {ref} from 'vue'

  const isWithColor = ref(true)

  const onSelectOption = (isColor) => {
    isWithColor.value = isColor
  }
</script>
