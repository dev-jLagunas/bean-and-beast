<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/productStore'

// Access route param
const router = useRouter()
const route = useRoute()
const productId = route.params.id

// Access store data
const { products, merchandise } = storeToRefs(useProductStore())

// Match product or merch by ID
const product = computed(
  () =>
    products.value.find((p) => p.id === productId) ||
    merchandise.value.find((m) => m.id === productId),
)

// Methods
function goBack() {
  router.back()
}
</script>

<template>
  <div v-if="product" class="text-main-dark md:max-w-[600px] md:mx-auto md:mt-10">
    <div class="grid grid-cols-6 relative">
      <figure class="col-span-4">
        <img :src="product.images[1]" :alt="`${product.name} bar image`" class="img-cover" />
      </figure>
      <figure class="col-span-2 ml-4">
        <img :src="product.images[0]" :alt="`${product.name} alternate angle`" class="img-cover" />
      </figure>
      <img
        :src="product.characterLogo"
        :alt="`${product.name} logo`"
        class="h-30 absolute -bottom-20 right-15 md:right-34"
      />
    </div>
    <section class="mx-4 text-main-dark">
      <article class="mt-12">
        <header class="border-b-4 border-double border-b-light-muted mb-4">
          <h3 class="fredo-title">{{ product.name }}</h3>
          <div class="flex-between-center mb-2">
            <p class="font-main-copy">{{ product.flavor }}</p>
            <p class="font-price">${{ product.price.toFixed(2) }} / each</p>
          </div>
        </header>

        <p class="fredo-p-light">Flavor Profile</p>

        <ul class="flex items-center justify-center text-center font-main-copy mb-4 gap-4">
          <li v-for="(note, index) in product.flavorProfile" :key="index">{{ note }}</li>
        </ul>

        <h5 class="fredo-p-light">Description</h5>
        <p class="font-main-copy">{{ product.description }}</p>
        <p class="font-main-copy">{{ product.recommendText }}</p>
        <p class="font-main-copy border-b-4 border-double border-b-light-muted pb-4">
          This is just copy that is going to be changed later. I just need to see how this looks
          with a longer explanation.
        </p>
        <div class="flex-center-center gap-4 mt-8">
          <button @click="goBack" aria-label="Go back">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button class="white-btn">See Lore</button>
          <button class="black-btn">Add To Cart</button>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped></style>
