<script setup>
import { useProductStore } from '@/stores/productStore'
import { ref, onMounted } from 'vue'
import SeeDetailsBtn from '../reusable/SeeDetailsBtn.vue'
import { useCartStore } from '@/stores/cartStore'
const cartStore = useCartStore()

// Store
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
</script>

<template>
  <section class="gap-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
    <article v-for="product in products" :key="product.id" class="mx-4">
      <figure class="h-24 mt-4 w-fit text-left">
        <img
          :src="product.characterLogo"
          :alt="`${product.name} character logo`"
          class="img-full block"
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
          <SeeDetailsBtn :productId="product.id" />
          <button class="black-btn" @click="cartStore.openModal(product)">Add to Cart</button>
        </div>
      </div>
      <figure class="shadow-[5px_5px_15px_-3px_rgba(0,_0,_0,_0.15)]">
        <img :src="product.images[0]" :alt="product.name + ' bar image'" />
      </figure>
    </article>
  </section>
</template>

<style scoped></style>
