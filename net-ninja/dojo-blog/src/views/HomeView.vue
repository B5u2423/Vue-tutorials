<template>
  <div>
    <h1>Home</h1>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="handleClick">Click me</button>
    <input type="text" v-model="name">
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <!-- <div v-for="tmp in names" :key="tmp"> {{ tmp }} </div> -->
    <div v-for="matchingName in matchingNames" :key="matchingName"> {{ matchingName }} </div>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  components: { },
  // lifecycle hook composition api
  setup() {
    console.log("setup")

    // const make the reference constant, not the value
    // variables with ref() will be reactive
    const name = ref("mario")
    const age = ref(30)

    // variables are not reactive
    // do it with `refs`
    const handleClick = () => {
      name.value = "luigi"
      age.value = 45
    }

    // computed: search and filter
    const search = ref('')
    const names = ref(['peach', 'mario', 'yoshi', 'bowser', 'luigi', 'jake', 'finn', 'wario', 'waluigi'])

    // watch and watchEffect: inspect the component
    watch(search, () => {
      console.log('watch function ran')
    })

    watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return {name, age, handleClick, names, search, matchingNames}
  }
}
</script>
