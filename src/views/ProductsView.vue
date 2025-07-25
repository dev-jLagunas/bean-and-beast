<script setup>
import { computed } from 'vue'
import { useProductStore } from '@/stores/productStore'

// Store
const productsStore = useProductStore()

// Components
import SectionTitle from '@/components/reusable/SectionTitle.vue'

// Images
import peekPenguin from '@/assets/images/section-peek-penguin.png'

// All products that are category === 'set'
const setProducts = computed(() => productsStore.products.filter((p) => p.category === 'set'))

// (optional) handlers you’ll likely add later
function seeDetails(id) {
  // e.g., this.$router.push({ name: 'ProductDetails', params: { id } })
  console.log('See details for', id)
}
function addToCart(product) {
  // productsStore.addToCart(product)
  console.log('Add to cart', product.name)
}
</script>

<template>
  <SectionTitle
    title="product line-up"
    description="You may also filter by category for quick access!"
    :img="peekPenguin"
    customClass="mt-8 mb-8"
  />
  <section>
    <header class="product-section-wrapper">
      <h3 class="fredo-title">Chocolate Sets</h3>
      <p class="font-main-copy pb-2">Perfect for gifts or if you're just really hungry!</p>
    </header>

    <article v-for="product in setProducts" :key="product.id" class="mx-4 mt-4">
      <div class="flex-between-center">
        <h3 class="fredo-title">{{ product.name }}</h3>
        <p class="font-price">${{ product.price.toFixed(2) }}</p>
      </div>

      <p class="font-main-copy">{{ product.description }}</p>

      <!-- Placeholder gallery (we'll swap to Swiper later) -->
      <figure class="product-images-wrapper">
        <img
          v-for="(img, i) in product.images.slice(1, 5)"
          :key="i"
          :src="img"
          :alt="`${product.name} image ${i + 2}`"
        />
      </figure>

      <div class="two-btn-wrapper">
        <button class="white-btn" @click="seeDetails(product.id)">See Details</button>
        <button class="black-btn" @click="addToCart(product)">Add to Cart</button>
      </div>
    </article>
  </section>
</template>

<style scoped></style>
