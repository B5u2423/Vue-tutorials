<script setup>
import { ref } from 'vue'

const drawer = ref(null)
const items = [
  { title: 'Home', link: '/', icon: 'mdi-home' },
  { title: 'Store', link: 'store', icon: 'mdi-basket' },
  { title: 'Cart', link: 'cart', icon: 'mdi-cart' },
]
</script>

<template>
  <!-- order matters for layout in vuetify -->
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.link"
        :title="item.title"
        :prepend-icon="item.icon"
        subtile="sub"
      >
        <!-- <v-icon small :icon="item.icon" class="mr-3"></v-icon> -->
        <!-- {{ item.title }} -->
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar>
    <v-toolbar-title>Awesome Shop</v-toolbar-title>
    <!-- different menu on different display -->
    <!-- only show on xsmall screen -->
    <v-toolbar-items class="d-flex d-sm-none">
      <v-btn text @click="drawer = !drawer">Menu</v-btn>
    </v-toolbar-items>
    <!-- display on small and above but hide for xsmall -->
    <v-toolbar-items class="d-sm-flex d-none">
      <v-btn to="/" variant="text">
        <v-icon size="small" icon="mdi-home" start></v-icon>
        Home
      </v-btn>
      <v-btn to="/store" variant="text">
        <v-icon size="small" icon="mdi-basket" start></v-icon>
        Store
      </v-btn>
      <v-btn to="/cart" variant="text">
        <v-icon size="small" icon="mdi-cart" start></v-icon>
        Cart
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
