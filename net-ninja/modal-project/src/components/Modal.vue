<template>
  <!-- `@click.self`: event modifier, only inovke `closeModal()` if 
   clicking the backdrop does nothing when clicking child element `modal` -->
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!-- This is for the props example -->
      <!-- <h1>{{ header }}</h1>
      <p>{{ content }}</p> -->

      <!-- Catch the passed slot from parent -->
      <slot>
        Default Content will show when nothing is passed
      </slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["header", "content", "theme"], // defined accepted props from parent/other components
    methods: {
      closeModal() {
        // Custom events: parent has to listen and react to this
        this.$emit("close")
      }
    }
  }
</script>

<style>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
  }

  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }

  .modal h1 {
    color: #03cfb4;
    border: none;
  }

  .modal p {
    font-style: normal;
  }

  .modal.sale {
    background: crimson;
    color: white;
  }

  .modal.sale h1 {
    color: white;
  }

  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
    color: #333;
  }

  .modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid  #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }

  .modal.sale .actions {
    color: white;
  }

  .modal.sale .actions a {
    color: white;
  }
</style>