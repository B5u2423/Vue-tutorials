<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    Click me
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0
    }
  },
  // Using lifecycle hooks
  mounted() {
    console.log("Block component mounted")
    console.log("Start the timer")
    setTimeout(() => {
      this.showBlock = true
      this.startTimer()
    }, this.delay)
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)
    },
    stopTimer() {
      clearInterval(this.timer)
      console.log(this.reactionTime)
      this.$emit("end", this.reactionTime)
    }
  }
  // other lifeycle hooks
  // updated() {
  //   console.log("Block component updated")
  // },
  // unmounted() {
  //   console.log("Block component unmounted")
  // }
}
</script>

<style>
  .block {
    width: 400px;
    border-radius: 10px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
    cursor: pointer;
  }
</style>