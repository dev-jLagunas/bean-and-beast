<script setup>
import { useProductStore } from '@/stores/productStore'
import { ref, onMounted } from 'vue'

// Pinia Store
const store = useProductStore()
const products = ref([])

function shuffle(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

onMounted(() => {
  products.value = shuffle(store.products).slice(0, 4)
})

// Placeholder functions
function seeDetails(id) {
  // Navigate or show modal — replace with your logic
  console.log('See details for:', id)
}

function addToCart(product) {
  // Add to cart logic — connect to cart store later
  console.log('Added to cart:', product.name)
}
</script>

<template>
  <section class="gap-8 grid-two-four">
    <article v-for="product in products" :key="product.id" class="mx-4">
      <figure class="h-24 mt-4 w-fit">
        <img
          :src="product.characterLogo"
          :alt="`${product.name} character logo`"
          class="img-full"
        />
      </figure>

      <div class="w-full">
        <div class="flex-between-center">
          <h3 class="fredo-title border-b-4" :class="product.borderColorClass">
            {{ product.name }}
          </h3>
          <p class="font-price">${{ product.price.toFixed(2) }}</p>
        </div>
        <p class="font-main-copy">{{ product.flavor }}</p>
        <div class="two-btn-wrapper">
          <button
            @click="seeDetails(product.id)"
            class="white-btn"
          >
            See Details
          </button>
          <button
            @click="addToCart(product)"
            class="black-btn"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <figure class="shadow-[5px_5px_15px_-3px_rgba(0,_0,_0,_0.15)]">
        <img :src="product.images[0]" :alt="product.name + ' bar image'" />
      </figure>
    </article>
  </section>
</template>

<style scoped></style>
