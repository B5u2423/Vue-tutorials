<template>
  <div>
    <h1>Reaction Timer</h1>
    <button @click="startGame" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
    <Result v-if="showResult" :score="score"/>
  </div>
</template>

<script>
// challenge
//  - when game ends, show result component
//  - output the score inside the results component
import Block from "./components/Block.vue"
import Result from "./components/Result.vue"

export default {
  name: 'App',
  components: { Block, Result },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false
    }
  },
  methods: {
    startGame() {
      this.isPlaying = true
      this.delay = 2000 + Math.random() * 5000
      this.showResult = false
      console.log(this.delay)
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResult = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
  background: #0faf87;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
