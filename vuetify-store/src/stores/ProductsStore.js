import { defineStore } from 'pinia'
import productData from '../../products'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  /**
   * | Concept              | What it looks like                                |
   * | -------------------- | ------------------------------------------------- |
   * | **state**            | `const count = ref(0)`                            |
   * | **getter**           | `const doubled = computed(() => count.value * 2)` |
   * | **action**           | `function increment() { count.value++ }`          |
   * | **use in component** | `const store = useStore()`                        |
   */
  // state
  const products = ref(productData)
  const snackbar = ref({
    show: false,
    variant: 'success',
    message: 'Success! Item added to the cart.',
  })
  const cart = ref([])

  // getters (computed)
  // example: const totalItems = computed()..

  // actions
  // example: function doSomething() {}
  function addItemToCart({ itemId, quantity = 1 }) {
    const idx = cart.value.findIndex((product) => {
      product.itemId === itemId
    })
    if (idx === -1) {
      cart.value.push({ itemId, quantity })
    } else {
      cart.value[idx].quantity += quantity
    }
  }
  function updateSnackBar({ show }) {
    snackbar.value.show = show
  }

  return {
    products,
    snackbar,
    cart,
    addItemToCart,
    updateSnackBar,
  }
})
