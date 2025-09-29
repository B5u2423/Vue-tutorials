<template>
  <div>
    <h1>Home</h1>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="handleClick">Click me</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

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

    return {name, age, handleClick}
  }
}
</script>
