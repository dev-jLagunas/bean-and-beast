<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/productStore'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const route = useRoute()
const storyId = route.params.id

// Store refs
const { animalLore, products } = storeToRefs(useProductStore())

// Get the current lore story
const story = computed(() => animalLore.value.find((item) => item.id === storyId))

// Get the linked product based on productId from story
const product = computed(() => products.value.find((p) => p.id === story.value?.productId))

// Components
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import SeeProductsBtn from '@/components/reusable/SeeProductsBtn.vue'

// Images
import penguinPeeking from '@/assets/images/section-peek-penguin.png'
</script>

<template>
  <article v-if="story" class="max-w-[800px] mx-auto">
    <SectionTitle
      title="How did our chocolate come to be?"
      description="It was through art that our chocolate came to life. A series of six black and white animals contrasted against a vibrant backdrop inspired us to create this brand."
      :img="penguinPeeking"
      custom-class="my-10"
    />
    <header class="px-4">
      <h2 class="fredo-title">{{ story.animalName }}</h2>
      <p class="font-main-copy">
        {{ story.deepStory }}
      </p>
    </header>
    <ul class="flex-center-center space-x-5 fredo-p-light my-4">
      <li>{{ story.traits[0] }}</li>
      <li>{{ story.traits[1] }}</li>
      <li>{{ story.traits[2] }}</li>
      <li>{{ story.traits[3] }}</li>
    </ul>
    <figure>
      <img :src="story.images[2]" alt="" />
    </figure>
    <figure class="relative">
      <button
        class="black-btn absolute top-5 left-5"
        @click="product && cartStore.openModal(product)"
      >
        Add To Cart
      </button>
      <img :src="story.images[3]" alt="" />
    </figure>
    <SeeProductsBtn />
  </article>
</template>

<style scoped></style>
