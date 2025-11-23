<script setup>
import { useDisplay } from 'vuetify/lib/composables/display'
import { ref } from 'vue'

const { mdAndUp } = useDisplay()
const prices = ref(['Any', 'Under $25', '$25 to $100', '$100 to $500', 'Over $500'])
const priceFilter = ref(0)
const checkbox = ref(true)
</script>

<template>
  <!-- Different sidebar impl on displays -->
  <v-sheet class="pl-4 pt-4" v-if="mdAndUp" elevation="4">
    <h2>Price</h2>
    <v-radio-group v-model="priceFilter" :mandatory="true">
      <v-radio v-for="(price, i) in prices" :key="i" :label="price" :value="i"></v-radio>
    </v-radio-group>
  </v-sheet>

  <v-expansion-panels v-else>
    <v-expansion-panel title="Filters">
      <v-expansion-panel-text>
        <v-radio-group v-model="priceFilter" :mandatory="true">
          <v-radio v-for="(price, i) in prices" :key="i" :label="price" :value="i"></v-radio>
        </v-radio-group>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
