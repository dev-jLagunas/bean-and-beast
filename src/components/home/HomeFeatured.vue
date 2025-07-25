<script setup>
import { useProductStore } from '@/stores/productStore'
import { ref, onMounted } from 'vue'

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
  <section class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
    <article
      v-for="product in products"
      :key="product.id"
      class="flex flex-col justify-start items-start mx-4"
    >
      <figure class="h-24 mt-4">
        <img
          :src="product.characterLogo"
          :alt="`${product.name} character logo`"
          class="w-full h-full object-contain"
        />
      </figure>

      <div class="w-full">
        <div class="flex justify-between items-center">
          <h3 class="fredo-title border-b-4" :class="product.borderColorClass">
            {{ product.name }}
          </h3>
          <p class="font-paragraph text-lg font-light text-dark-main">
            ${{ product.price.toFixed(2) }}
          </p>
        </div>
        <p class="font-paragraph text-dark-main tracking-wide">{{ product.flavor }}</p>
        <div class="grid grid-cols-2 gap-2 my-2">
          <button
            @click="seeDetails(product.id)"
            class="border border-dark-main px-2 py-1 rounded-xs font-title"
          >
            See Details
          </button>
          <button
            @click="addToCart(product)"
            class="bg-dark-main px-2 py-1 text-light-main font-semibold rounded-xs"
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
