<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/productStore'
import { useCartStore } from '@/stores/cartStore'

const productStore = useProductStore()
const cartStore = useCartStore()

const selectedProduct = computed(() => cartStore.selectedProduct)
const productType = computed(() => selectedProduct.value?.category || 'single')

// Router
const router = useRouter()

// Quantity selected
const quantity = ref(1)

// For sets
const setSize = computed(() => {
  const match = selectedProduct.value.name.match(/(\d+)/)
  return match ? parseInt(match[0]) : 3
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
  cartStore.addToCart(
    selectedProduct.value,
    productType.value === 'set' ? { selectedBars: selectedBars.value } : {},
    quantity.value,
  )
  cartStore.closeModal()
  router.push('/cart')
}
</script>

<template>
  <!-- Overlay -->
  <div class="cart-modal-wrapper text-dark-main">
    <!-- Modal Content -->
    <section v-if="selectedProduct" class="cart-modal-content-wrapper text-dark-main">
      <h3 class="fredo-title">{{ selectedProduct.name || selectedProduct.animalName }}</h3>
      <p class="font-main-copy">{{ selectedProduct.flavor }}</p>
      <p class="font-price mb-4">${{ selectedProduct.price.toFixed(2) }}</p>
      <img :src="selectedProduct.images[0]" :alt="selectedProduct.name" class="w-full rounded-sm" />

      <!-- If it's a set -->
      <div v-if="productType === 'set'" class="mt-6">
        <label class="block mb-2 font-main-copy">Choose quantity of sets:</label>
        <input type="number" v-model="quantity" min="1" class="input w-20 rounded-md px-2" />

        <div class="mt-4">
          <label class="block mb-2 font-main-copy"
            >Choose your bars (pick {{ setSize * quantity }} total):</label
          >
          <div class="flex flex-wrap gap-2">
            <button
              v-for="product in allSingles"
              :key="product.id"
              @click="toggleSelectedBar(product)"
              :class="['white-btn', isBarSelected(product) && 'ring ring-zebra-red']"
            >
              {{ product.name }}
            </button>
          </div>
          <p class="mt-2 font-small-copy">
            You’ve selected {{ selectedBars.length }} of {{ setSize * quantity }}
          </p>
        </div>
      </div>

      <!-- If it's a single or merch -->
      <div v-else class="mt-6">
        <label class="block mb-2 font-main-copy">Choose or enter quantity:</label>
        <input type="number" v-model="quantity" min="1" class="input w-20 rounded-md px-2" />
      </div>

      <!-- Action Buttons -->
      <div class="mt-8 flex-center-center gap-4">
        <button
          class="font-small-copy underline underline-offset-2 hover:cursor-pointer"
          @click="closeModal"
        >
          Keep Shopping
        </button>
        <button class="black-btn" @click="addAndClose">Add To Cart</button>
        <button class="white-btn" @click="confirmAddToCart">Go to Cart</button>
      </div>

      <!-- Close Button -->
      <button class="modal-close-btn" @click="closeModal">&times;</button>
    </section>
  </div>
</template>
