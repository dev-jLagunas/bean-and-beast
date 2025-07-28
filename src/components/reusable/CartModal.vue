<script setup>
import { ref, computed } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { useCartStore } from '@/stores/cartStore'

const productStore = useProductStore()
const cartStore = useCartStore()

const selectedProduct = computed(() => cartStore.selectedProduct)
const productType = computed(() => selectedProduct.value?.category || 'single')

// Quantity selected
const quantity = ref(1)

// For sets
const setSize = computed(() => {
  // Example: assume product name includes "2 Pack", "3 Pack" etc.
  const match = selectedProduct.value.name.match(/(\d+)/)
  return match ? parseInt(match[0]) : 3 // default fallback
})
const selectedBars = ref([])

const allSingles = computed(() => productStore.products.filter((p) => p.category === 'single'))

function toggleSelectedBar(product) {
  const index = selectedBars.value.findIndex((p) => p.id === product.id)
  if (index !== -1) {
    selectedBars.value.splice(index, 1)
  } else if (selectedBars.value.length < setSize.value * quantity.value) {
    selectedBars.value.push(product)
  }
}

function isBarSelected(product) {
  return selectedBars.value.some((p) => p.id === product.id)
}

function closeModal() {
  cartStore.closeModal()
}

function addAndClose() {
  cartStore.addToCart(
    selectedProduct.value,
    productType.value === 'set' ? { selectedBars: selectedBars.value } : {},
    quantity.value,
  )
  closeModal()
}

function confirmAddToCart() {
  cartStore.addToCart({
    product: selectedProduct.value,
    quantity: quantity.value,
    ...(productType.value === 'set' && { selectedBars: selectedBars.value }),
  })
  closeModal()
}
</script>

<template>
  <!-- Overlay -->
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
    <!-- Modal Content -->
    <section
      v-if="selectedProduct"
      class="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative text-main-dark overflow-y-auto max-h-[90vh]"
    >
      <h3 class="fredo-title mb-4">{{ selectedProduct.name }}</h3>
      <img :src="selectedProduct.images[0]" :alt="selectedProduct.name" class="w-full rounded" />

      <!-- If it's a set -->
      <div v-if="productType === 'set'" class="mt-6">
        <label class="block mb-2">Choose quantity of sets:</label>
        <input type="number" v-model="quantity" min="1" class="input w-full" />

        <div class="mt-4">
          <label class="block mb-2">Choose your bars (pick {{ setSize * quantity }} total):</label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="product in allSingles"
              :key="product.id"
              @click="toggleSelectedBar(product)"
              :class="['white-btn', isBarSelected(product) && 'ring-2 ring-black']"
            >
              {{ product.name }}
            </button>
          </div>
          <p class="mt-2 text-sm text-gray-500">
            You’ve selected {{ selectedBars.length }} of {{ setSize * quantity }}
          </p>
        </div>
      </div>

      <!-- If it's a single or merch -->
      <div v-else class="mt-6">
        <label class="block mb-2">Choose quantity:</label>
        <input type="number" v-model="quantity" min="1" class="input w-full" />
      </div>

      <!-- Action Buttons -->
      <div class="mt-8 flex justify-between">
        <button class="white-btn" @click="closeModal">Keep Shopping</button>
        <button class="black-btn" @click="addAndClose">Add To Cart</button>
        <button class="black-btn" @click="confirmAddToCart">Go to Cart</button>
      </div>

      <!-- Close Button -->
      <button
        class="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
        @click="closeModal"
      >
        &times;
      </button>
    </section>
  </div>
</template>
