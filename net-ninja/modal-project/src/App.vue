<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" ref="name">
    <button @click="handleClick">Click Me!</button>
    <!-- props can be bound -->
    <teleport to=".modals" v-if="showModal">
      <!-- Listen to custom `close` event -->
      <!-- This is for props example -->
      <!-- <Modal :header="header" :content="content" theme="sale" @close="toggleModal"> -->

      <!-- Pass the template -->
      <Modal theme="sale" @close="toggleModal">
        <!-- Name slots -->
        <!-- Using the v-slot directives to give slot a name: `links` -->
        <template v-slot:links>
          <a href="">Sign Up Now!</a>
          <a href="">More Info</a>
        </template>
        <h1>Giveaway Event!</h1>
        <p>Something here to lure the suckers</p>
      </Modal>
    </teleport>
    <button @click="toggleModal">Show Modal</button>

    <!-- challenge -->
    <teleport to=".modals" v-if="showModalTwo">
      <Modal @close="toggleModalTwo">
        <p>Hello</p>
        <p>This is my Modal</p>
      </Modal>
    </teleport>
    <button @click="toggleModalTwo">Show ModalTwo</button>
  </div>
</template>

<script>
// challenge
//  - create an extra button to open different modal
//  - use same modal component but pass in differnt template (slot)
//  - use different method (e.g. toggleModalTwo) and data (e.g. ModalTwo)
import Modal from "./components/Modal.vue"

export default {
  name: "App",
  components: {
    Modal
  },
  data() {
    return {
      title: "Whatever I wrote",
      header: "Prop header given by parent",
      content: "Prop Content",
      showModal: false,
      showModalTwo: false
    }
  }, 
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      // Template refs: get reference to DOM elements
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 10px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
