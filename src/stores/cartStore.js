import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // Modal logic
  const showCartModal = ref(false)
  const selectedProduct = ref(null)

  // Cart state
  const cartItems = ref([])

  // Computed: total items
  const totalItems = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0))

  // Actions
  function openModal(product) {
    selectedProduct.value = product
    showCartModal.value = true
  }

  function closeModal() {
    selectedProduct.value = null
    showCartModal.value = false
  }

  function addToCart(product, options = {}, quantity = 1) {
    const existing = cartItems.value.find(
      (item) => item.id === product.id && JSON.stringify(item.options) === JSON.stringify(options),
    )

    if (existing) {
      existing.quantity += quantity
    } else {
      cartItems.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        options,
        quantity,
      })
    }

    closeModal()
  }

  function removeFromCart(index) {
    cartItems.value.splice(index, 1)
  }

  return {
    showCartModal,
    selectedProduct,
    cartItems,
    totalItems,
    openModal,
    closeModal,
    addToCart,
    removeFromCart,
  }
})
